const fs = require('fs')

fs.readFile('ruby.txt','utf8', (error, contents) => console.log(contents))
console.log('Hello Ruby\n')

fs.readFile('ips.txt','utf8', (error, contents) => console.log(contents))
console.log('Hello Node!')

// Hello Ruby->Hello Node->... ruby.txt->ips.txt or ips.txt->ruby.txt
