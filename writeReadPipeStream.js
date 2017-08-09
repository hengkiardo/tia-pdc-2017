// writeReadPipeStream.js

const fs = require('fs')
const zlib = require('zlib')

const readableStream = fs.createReadStream('./img/output.jpg')
const writableStream = fs.createWriteStream('./img/output2.jpg.gz')
const gz = zlib.createGzip()

readableStream.pipe(gz).pipe(writableStream)
