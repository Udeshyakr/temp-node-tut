const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// methid return the system time in second
console.log(`the system uptime is ${os.uptime}`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem()
}

console.log(currentOS)