const EventEmitter = require('events')

class CustomEmitter extends EventEmitter{

}

const customem = new CustomEmitter();

customem.on('overflow',()=>{
  console.log("Turn of valve");
  setTimeout(()=>{
    console.log("Please turn of valve immediately");
  },3000)
})

console.log("will remind you in 3 seconds");
customem.emit('overflow')
console.log("end of file");