let person = {
  name: "Jagadeesh",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

person.greet();