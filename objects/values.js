//values Types
/*Number
String
Boolean
Null
Undefined
Symbol*/


//Reference Types
/*Object
Array
Function */

//Primities are copied by theri value 
//Objects are copied by their reference
let x={value: 10};
let y=x


console.log(x) //20
console.log(y) //10

let obj={value:10};

function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj); 
