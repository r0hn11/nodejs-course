const {readFile, writeFile} = require('fs');
const path = require('path');

const readpath = path.resolve(__dirname+'/content/subfolder/async1.txt');
const readpath2 = path.resolve(__dirname+'/content/subfolder/async2.txt');

const getText = (readpath)=>{
  return new Promise((resolve, reject)=>{
    readFile(readpath, 'utf-8', (err, result)=>{
      if(err){
        writeFile(readpath, "Default text", (errr, result)=>{
          if(errr) reject("File does not exist | unable to create.")
        })
      }
      else resolve("result: "+result)
    })
  })
}

// using promise
/*{
  getText(readpath).
  then((result)=>console.log(result)).
  catch((err)=>console.log(err))
}*/

// using async-await
const start = async(callback)=>{
  try{
    const output = await(callback(readpath));
    const output2 = await(callback(readpath2));
    console.log(output);
    console.log(output2);
  }
  catch(err){console.log(err);}
  finally{console.log("End of process");}
}

start(getText)

/* This code is little complex than using promises over async await,
but we can simplify it using node.js' native option names 'util.primsify()'
*/