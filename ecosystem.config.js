module.exports = {
  apps: [{
    name: "Toikit App",
    script: "node dist/index.js",
    args: "start",
    watch: ["bin", "src"],
    env: {
      "NODE_ENV": "development",
    },
    env_production: {
      "NODE_ENV": "production",
    }
  }],

  deploy: {
    production: {
    }
  }
};