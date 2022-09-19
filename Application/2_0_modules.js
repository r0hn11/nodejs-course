// Moduels

const data = require('./2_1_data')
const methods = require('./2_2_utility')
const personx = require('./2_3_alternateExport')
//Destructuring in import method
const {sayBye} = require('./2_2_utility')

console.log(data._names)
console.log(typeof(methods.sayHi))
console.log(personx.items)
console.log(personx.singlePerson)

life = {
    0:'dead', 1:'alive'
}

for(i=0;i<(data._names).length-5;i++){
    methods.sayHi((data._names[i].name).replace(data._names[i].name[0], (data._names[i].name[0]).toUpperCase()))
    // methods.sayHi((data._names[i].name).charAt(0).toUpperCase()+(data._names[i].name).slice(1))
    sayBye(data._names[i].name) //calling directly without dot operator
}

/*
Following import runs methods in module when it is imported
When a module is imported, it is invoked on its own
Even when nothing is exported
*/
require('./2_4_importExecution')
