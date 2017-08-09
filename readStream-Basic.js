const fs = require('fs')
const readableStream = fs.createReadStream('big-file.txt')

let data = ''

readableStream.on('data', (chunk) => {
  console.log(chunk)
  data+=chunk
})

readableStream.on('end', () => console.log('done', data))
