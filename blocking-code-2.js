const fs = require('fs')

var contents = fs.readFileSync('ruby.txt','utf8')
console.log(contents)
console.log('Hello Ruby\n')

var contents = fs.readFileSync('ips.txt','utf8')
console.log(contents)
console.log('Hello Node!')

// ruby.txt -> Hello Ruby -> ips.txt -> Hello Node!
