let a=true;
let b=false;

console.log(a && b);  //logical and
console.log(a || b);  //logical or
console.log(!a);     //logical not
console.log(!b);     //logical not

let highIncome=true;

let goodCreditScore=false;

let eligibleForLoan=highIncome || goodCreditScore;

console.log(highIncome && goodCreditScore);

console.log(highIncome || goodCreditScore);

console.log(eligibleForLoan);