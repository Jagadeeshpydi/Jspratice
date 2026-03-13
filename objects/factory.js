
function createCircle(radius){
    return {
        radius: radius,
        draw() {
            console.log("draw");
        }
    };
}
const circle1 = new createCircle(1);
console.log(circle1.radius);

const circle2 = createCircle(2);
console.log(circle2.radius);

circle1.draw();
circle2.draw();