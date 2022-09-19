export const person ={
  name: "theName",
  life:"mortal",
  avg_age: "90"
}

export function greet(person){
  console.log("Hello,",person.name);
}

export default function die(person){
  console.log(person.name,"just died.");
}