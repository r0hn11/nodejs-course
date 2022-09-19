//Globals - No window object

// __dirname - current directory
// __filename - filename
// require - function use modules (CommonJS)
// module - info about env where the program is being executed
// process - info about environment where program is being executed

///Getting filename only
fname = __filename
dname = __dirname

console.log(fname.replace(dname,''))
console.log(module);
console.log("file path : ",module.path);
console.log("filename : ",module.filename);
// console.log(process);
