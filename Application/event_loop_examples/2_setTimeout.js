console.log('First')

setTimeout(() => {
    console.log('Second')
}, 0);

console.log('Third')

// Output : (Since setTimeout is asynchronous)
/*
First
Third 
Second
*/