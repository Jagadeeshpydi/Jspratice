function caluclateGrade(marks) {
    const avg=calucatedAvg(marks);
    if(avg>=90){
        console.log("Grade A");
    }if(avg>=80){
        console.log("Grade B");
}if(avg>=70){
    console.log("Grade C");
}
if(avg>=60){
    console.log("Grade D");
}

function calucatedAvg(arrray){
    let sum=0;
    for(let value of array)
        sum+=value;
       
    console.log(sum/array.length);
}
}

