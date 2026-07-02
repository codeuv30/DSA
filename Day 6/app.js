const prompt = require("prompt-sync")();
console.log("enter 1 for area of rectangle")
console.log("enter 2 for area of square")
console.log("enter 3 for area of triangle")

const n = Number(prompt());

let result;

switch(n) {
    case 1: {
        let len = Number(prompt("Enter length of the rectangle"))
        let bred = Number(prompt("Enter breadth of the rectangle"))

        result = len * bred;
        break;
    }
    case 2: {
        let side = Number(prompt("Enter side of the rectangle"))

        result = side * side;
        break
    }
    case 3: {
        let height = Number(prompt("Enter height of the triangle"))
        let base = Number(prompt("Enter base of the triangle"))

        result = (height * base) * 1/2;
        break;
    }
    default: result = "Invalid Number"
}

console.log(result)