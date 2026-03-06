
let numbers =[10,20,30,40];

console.log(numbers[0]);

let data =[25,"jagadeesh",true,null]


data.splice(3, 0, 30); //array.splice(index,deleteCount,item)
/**
 * | Parameter     | Meaning                         |
| ------------- | ------------------------------- |
| `index`       | Position where insertion starts |
| `deleteCount` | Number of elements to remove    |
| `item`        | New element to insert           |

 */
console.log(data);

//push
//pop
//shift
//unshift
