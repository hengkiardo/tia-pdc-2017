const fs = require('fs')
const request = require('request')
const stream = request('https://goo.gl/wcytxX')
const writeStream = fs.createWriteStream('./output.jpg')

stream.on('data', (data) => {
  console.log(data)
  writeStream.write(data)
})

stream.on('end', () => {
  console.log('done')
  writeStream.end()
})

stream.on('error', (err) => {
  console.log('something is wrong :( ')
  writeStream.close()
})
