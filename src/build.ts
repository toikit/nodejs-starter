import { build } from './app';
import { config } from './toikit.config';

(async function() {
  await build(config);
  process.exit(0);
})();
