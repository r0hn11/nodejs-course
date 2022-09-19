console.log('Start')

setInterval(()=>{
    console.log('Step')
},1000)

console.log('End')

//output : (Since setInterval is asynchronous)
/*
Start
End
Step
Step
Step
Step
Step
*/