//Synchronous or Blocking code

const {readFileSync, writeFileSync, existsSync} = require('fs')
const path = require('path')

/*
ARGUMENTS :
flag -
a string notation that specifies the mode. Default value of flag is 'w'
r+ open the file for reading and writing
w+ open the file for reading and writing, positioning the stream at the beginning of the file. The file is created if not existing
a open the file for writing, positioning the stream at the end of the file. The file is created if not existing
a+ open the file for reading and writing, positioning the stream at the end of the file. The file is created if not existing

encoding - type of encoding used

error - error function to run on failure of method

*/

// reading
{
  let firstfile = readFileSync(path.join(path.resolve(),'content', 'subfolder','read.txt'), 'utf-8')
  firstfile = firstfile.replace('Hey', 'Hello')
}

// overwriting
{
  let firstfile = readFileSync(path.join(path.resolve(),'content', 'subfolder','read.txt'), 'utf-8')
  writeFileSync(
    path.join(path.resolve(),'content', 'subfolder','write.txt'),
    `${firstfile}`
  )
}

// appending
{
  const resultfile = path.join(__dirname,"content\\subfolder\\result.txt")
  const data = readFileSync(path.join(__dirname,"content\\subfolder\\read.txt"))

  writeFileSync(resultfile, data,{flag:'a'}, err=>{})
}



// experiment
{
  console.log("Start");
  const result = path.join(__dirname,"content\\subfolder\\experiment.txt")
  if(existsSync(result)){
    const initdata = readFileSync(result,'utf-8')
    let i=0
    while(i<9){
      let data = readFileSync(result,'utf-8')
      let lastdigit = data.split("\n");
      writeFileSync(result,`\n${parseInt(lastdigit[lastdigit.length-1])+parseInt(initdata)}`,{flag:'a'},err=>{console.log("unable to write")})
      i++
    }
    console.log("Success");
  }
  else{
    writeFileSync(result,'21',{flag:'a'},err=>{console.log("unable to write")})
  }
  console.log("End");

  //OUTPUT OF SYNC METHOD :
  // start
  // Success
  // End
}
