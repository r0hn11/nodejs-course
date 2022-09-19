const {readFile, writeFile} = require('fs');
const path = require('path');
const util = require('util');

const readFilePromsie = util.promisify(readFile)
const writeFilePromsie = util.promisify(writeFile)

const readpath1 = path.resolve(__dirname+'/content/subfolder/async1.txt');
const readpath2 = path.resolve(__dirname+'/content/subfolder/async2.txt');
const writepath = path.resolve(__dirname+'/content/subfolder/async3.txt');

const start = async()=>{
  try{
    const one = await readFilePromsie(readpath1);
    const two = await readFilePromsie(readpath2);
    await writeFilePromsie(writepath, `one: ${one},\ntwo: ${two}`,(err)=>{console.log(err);})
  }
  catch(err){
    console.log(err);
  }
}

start();