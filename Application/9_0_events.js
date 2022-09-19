const EventEmitter = require('events')
const emitterobj = new EventEmitter()

emitterobj.on('response', ()=>{
  console.log("Data received");
})
emitterobj.on('response', ()=>{
  console.log("Data received update 1");
})

emitterobj.emit('response')

// underlying function will not run as emit() is not called after declaration of this method
emitterobj.on('response', (num)=>{
  console.log(`Data received update ${num}`);
})
emitterobj.emit('response',5)

emitterobj.on('response', (num, name)=>{
  console.log(`Data : name: ${name}. num: ${num}`);
})
emitterobj.emit('response',1285,"Rohan")
