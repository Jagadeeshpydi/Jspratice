//if hour is between 6am and 12pm: Good morning
//if it is not 12pm and 6pm: Good afternoon
let hour=21;


if(hour>=6 && hour<12){

console.log("good morning");

}else if(hour>=12 && hour<18){ 

console.log("good afternoon");
}
else if(hour>=18 && hour<24){
    console.log("good night");
}