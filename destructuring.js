
let arr = [10, 20, 30];

let [a, b, c] = arr;

console.log('a='+a,'b='+b,'c='+c);

//array destructuring //skipping elements
let numbers = [1, 2, 3, 4, 5];
let [x,,y] = numbers;

console.log(x,y);


//object  destructuring
let person={
    names:"jagadeesh",
    age:25
};

let {names, age} = person;

console.log(names, age);


//renameing variables
let{names:userName,age:userAge}=person;

console.log(userName, userAge);

//Destructuring in Function Parameters

function display({names,age}){
    console.log(names,age);
};
let user={names:"jagadeesh", age:25};

display(user);