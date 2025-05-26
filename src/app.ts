import { setConfig, app as setApp, setRoot } from '@toikit/toikit';
import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { exec as execCallback } from 'child_process';
import { promisify } from 'util';
import systemConfig from './config';

// Dùng promisify để có thể dùng với await
const exec = promisify(execCallback);

setRoot(__dirname);
setConfig(systemConfig);
dotenv.config();

export const start = (config) => {
  const ex = express();
  const server = http.createServer(ex);
  const port = config.port || 80;

  ex.use(bodyParser.json());
  ex.use(cors({
    origin: '*'
  }));
  ex.use('/public', express.static(path.join(__dirname, '../public')));
  ex.engine('html', require('ejs').renderFile); // Gán EJS để xử lý .html
  ex.set('view engine', 'html');                // Đặt view engine là .html
  ex.set('views', path.join(__dirname, 'app'));

  // Create modules instance
  let modules: any = {};

  config.modules.forEach((handler) => {
    let instance = new handler();
    if (instance.name) modules[instance.name] = instance;
  });

  let app: any = {
    config,
    server,
    express: ex,
    modules
  };
  setApp(app);

  for (const key in app.modules) {
    if (!app.modules.hasOwnProperty(key)) continue;
    app.modules[key].app = app;
    app.modules[key].prepare();
  }

  for (const key in app.modules) {
    if (!app.modules.hasOwnProperty(key)) continue;
    app.modules[key].register();
  }

  for (const key in app.modules) {
    if (!app.modules.hasOwnProperty(key)) continue;
    app.modules[key].setup();
  }

  for (const key in app.modules) {
    if (!app.modules.hasOwnProperty(key)) continue;
    app.modules[key].mounted();
  }

  // Start app
  server.listen(Number(port), '0.0.0.0', () => {
    console.log(`MS-NodexApp listening on port ${port}`)
  });

  return app;
};

export const build = async (config) => {
  for (const md of config.modules) {
    let instance = new md();
    if (!instance.name) continue;
    console.log('Build module:' + instance.name);
    let commands = instance.build(config);

    for (const cmd of commands) {
      try {
        const { stdout, stderr } = await exec(cmd);

        if (stderr) {
          console.error('stderr:', stderr);
        }

        console.log('stdout:', stdout);
      } catch (error) {
        console.error('Lỗi khi chạy lệnh:', error);
      }
    }
  }
  console.log('Build successfully');
};
