const os = require('os')

const user = os.userInfo()  //cuurent user info
const uptime = os.uptime()  //uptime of system

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    homedir: os.homedir(),
    network: os.networkInterfaces()
}

console.log(currentOS)
