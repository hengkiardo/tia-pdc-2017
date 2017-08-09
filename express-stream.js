'use strict'

const express = require('express')
const fs = require('fs')
const path = require('path')
const port = 3000
const app = express()
const responseTime = require('response-time')

app.use(responseTime())

const largeImagePath = path.join(__dirname,'img/output.jpg')

app.get('/non-stream', (req, res) => {
  fs.readFile(largeImagePath, (error, data) => res.end(data))
})

app.get('/non-stream2', (req, res) => {
  let file = fs.readFileSync(largeImagePath)
  res.end(file)
})

app.get('/stream', (req, res) => {
  let stream = fs.createReadStream(largeImagePath)
  stream.pipe(res)
})


app.get('/stream2', (req, res) => {
  var stream = fs.createReadStream(largeImagePath)
  stream.on('data', (data) => {
    res.write(data)
  })

  stream.on('end', () => res.end())
})

app.listen(port)
