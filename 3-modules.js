// Modules
const names = require('./4-names');
const sayHi = require('./5-utils');

require('./7-mind-grenade');
// if we have function in a module then we can call that function in a difficult module without having const.

console.log(names);

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
