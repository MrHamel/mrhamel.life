module.exports = {
  apps : [{
    name      : "mr_hamel_www",
    script    : "build_node/index.js",
    instances : "max",
    exec_mode : "cluster",
    env_production: {
        NODE_ENV: 'production',
        HOST: '127.0.0.1',
        PORT: 3000
    }
  }]
}
