//Falsy (fasle)
//undefined
//null
//0
//NaN
//""


//Anything is not Falsy is Truthy

false || true;


//short circuiting
false || true || false || true || false;


let userColor="red";
let defaultColor="blue";

let currentColor=userColor || defaultColor;

console.log(currentColor);