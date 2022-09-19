// const utility = require('./2_7_utility2.mjs')

/* to use es6 import , add "type":"module" in package.json*/
import {person,greet} from "./2_7_utility2.mjs"
import * as utility from "./2_7_utility2.mjs"
import die2 from "./2_7_utility2.mjs"   // default import allows to import a default property. we can access it by using any variable mentioned in import irrespective of export name

console.log(utility.person);
console.log(person);
greet(person);

die2(person)