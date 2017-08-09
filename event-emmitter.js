const events = require('events')

// Create an eventEmitter instance
const eventEmitter = new events.EventEmitter()

// Create an event handler as follows
const connectToTheHandler = function connected() {
   console.log('Test connection was successful.')
   // Fire the data_received_success event
   eventEmitter.emit('data_received_success', { connect: 'success' })
}

// Bind the connection_success event with the handler
eventEmitter.on('connection_success', connectToTheHandler)

// Bind the data_received_success event with the anonymous function
eventEmitter.on('data_received_success', (msg) => console.log('Confirmed message has been received successfully.', msg))

// Fire the connection_success event
eventEmitter.emit('connection_success')
