
let person = {
    name: 'jagadeesh',
    age: 30
};

// Dot notation
person.name = 'pydi';
delete person.name;

// Bracket notation
// person['name'] = 'Mary';

console.log(person.name);
console.log(person.age);