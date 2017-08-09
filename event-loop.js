'use strict'

const express = require('express')
const request = require('request')
const app = express()

app.get('/', sendWeatherOfRandomCity)

function sendWeatherOfRandomCity (req, res) {
  getIpAddress(req, res)
  sayHi()
}

function getIpAddress (req, res) {
  const link = 'https://api.ipify.org?format=json'

  request.get(link, (error, response, body) => {
    if (error) {
      console.log('upps')
      return res.status(500).send(error)
    }
    let data = JSON.parse(body)

    res.status(200).send(data)
    console.log('Got the IP : ', data.ip)
  })

  console.log('Fetching the IP, please be patient')
}

function sayHi () {
  console.log('Hi')
}

app.listen(3000)
