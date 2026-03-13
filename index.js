function createUser(name, age){
    return {
        name: name,
        age: age,
        greet: function(){
            console.log("Hello " + name);
        }
    };
}

const user1 = createUser("Jagadeesh",20);
user1.greet();