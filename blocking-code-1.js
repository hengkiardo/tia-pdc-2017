// blocking-code-1.js

const timing = require('./timing')
timing.start(__filename)

console.log('Step: 1')
for (var i = 1; i<1000000000; i++) {
  console.log(i)
  // This will take 100-1000ms
}
console.log('Step: 2')
console.log('Done', timing.finish(__filename).asSeconds() + ' seconds')
