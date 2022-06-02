//Globals - No window object

// __dirname - current directory
// __filename - filename
// require - function use modules (CommonJS)
// module - info about env where the program is being executed

///Getting filename only
fname = __filename
dname = __dirname

console.log(fname.replace(dname,''))