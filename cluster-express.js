const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length
const express = require('express')
const stats = {}

if (cluster.isMaster) {
  console.log (' Fork %s worker(s) from master', numCPUs)
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork()
  }
  cluster.on('online', (worker) => console.log ('worker is running on %s pid', worker.process.pid))

  cluster.on('exit', (worker, code, signal) => console.log('worker with %s is closed', worker.process.pid))

} else if (cluster.isWorker) {
  const port = 3000
  stats[cluster.worker.process.pid] = 0

  console.log('worker (%s) is now listening to http://localhost:%s',
  cluster.worker.process.pid, port)

  let app = express()
  app.get('*', (req, res) => {
    stats[cluster.worker.process.pid] += 1
    let workerApp = `cluser ${cluster.worker.process.pid} responded \n`
    console.log(workerApp)
    res.status(200).send(workerApp)
  })

  app.listen(port)
}

process.on('SIGINT', () => {
  console.log(stats)
  console.log('Execute "$ killall node" to terminate')
  process.exit(0)
})
