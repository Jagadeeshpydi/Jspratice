let array=[43,34,554]


let rev=array.reverse();
console.log(rev);



let reverse=[];

for(let i=array.length-1;i>=0;i--){
    reverse.push(array[i]);
}
console.log(reverse);