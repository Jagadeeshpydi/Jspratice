const studentMarks=[70,80,90];


function checkGrade(marks){
    let sum=0;
    for(let i=0;i<marks.length;i++){
        sum+=marks[i];
    }
    const grade=sum/marks.length;
    if(grade>=90){
        console.log("Grade A");
    }else if(grade>=80){
        console.log("Grade B");
    }
}
checkGrade(studentMarks);
