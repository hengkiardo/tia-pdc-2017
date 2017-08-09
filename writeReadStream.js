// writeReadPipeStream.js

const fs = require('fs')

const readableStream = fs.createReadStream('./img/output.jpg')
const writableStream = fs.createWriteStream('./img/output2.jpg.gz')

readableStream.pipe(writableStream)
