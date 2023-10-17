const fs = require('fs')

//Main Line
console.log('Hello, ------------mainline')
console.log('Hello, ------------mainline')

//end line / pre timer phrase 1
process.nextTick(() =>{
    console.log('nexttick -----------before event loop')
})

//Timer phrase 1
setTimeout(() =>{
    console.log('Timeout - 0s -  Timer 1')
}, 0)

setImmediate(() =>{
    console.log('Immediate - 0s -  Timer 1')
}, 0)

//Timer phrase 1
setTimeout(() =>{
    console.log('Timeout - 0s -  Timer 1')
}, 0)