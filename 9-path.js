const path = require('path')

console.log(path.sep)


const filePath = path.join('/content', 'subfolder', 'Text.txt')
// join - join all args together  and normalise the resulting path9
console.log(filePath)

const base = path.basename(filePath)
// basename - returns the last portion of the path. often used to extract filename from 
// fully qualified path.
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'Text.txt');
console.log(absolute)