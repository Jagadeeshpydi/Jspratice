let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log("draw");
    }
};

circle.draw();

/**
 * A method is simply a function inside an object.
When the method runs, it prints:draw

object structure
circle
│
├── radius → 1
├── location
│    ├── x → 1
│    └── y → 1
├── isVisible → true
└── draw() → function
 */