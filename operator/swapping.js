let a = "red";
let b = "blue";

let c=a;
a=b;
b=c;

console.log(a);
console.log(b);
console.log(c);



//using destructuring assignment
let d = "red";
let e = "blue";

[d,e] = [e,d];

console.log(d);
console.log(e);