const os = require('os')

const user = os.userInfo()  //cuurent user info
const uptime = os.uptime()  //uptime of system

const currentOS = {
    name: os.type(),
    releas: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)