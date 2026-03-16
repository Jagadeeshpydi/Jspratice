const circle={
    radius:1,
    draw(){
        console.log("draw");
    }
};

for(let key in circle){
    console.log(key,circle[key]);
}

for(let key of Object.entries(circle))
    console.log(key);

function object(){

}



