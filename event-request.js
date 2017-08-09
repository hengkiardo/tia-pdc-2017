const request = require('request')
let options = {
  method: 'GET',
  uri: 'https://api.ipify.org'
}

request(options, (error, response, body) => {
  // body is the decompressed response body
  let encoding = response.headers['content-encoding'] || 'identity'
  console.log('server encoded the data as: ' + encoding)
  console.log('the decoded data is: ' + body)
}).on('data', (data) => {
  // decompressed data as it is received
  console.log('decoded chunk: ' + data)
}).on('response', (response) => {
  // unmodified http.IncomingMessage object
  response.on('data', (data) => {
    // compressed data as it is received
    console.log('received ' + data.length + ' bytes of compressed data')
  })
})
