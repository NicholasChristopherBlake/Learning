const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  for (let i =0; i< os.cpus().length - 2; i++) {
    cluster.fork()
  }
} else {
  console.log(`Worker with pid= ${process.pid} started`);
}