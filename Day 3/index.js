const prompt = require("prompt-sync")();

// Generate 4 DIGIT OTP
// const OTP = Math.trunc((Math.random() * 9000) + 1000);

// console.log(OTP);

// Area of Triangle by Heron's formula (root of s * (s-a) * (s-b) * (s-c))

const side1 = prompt("Enter Triangle Side 1: ");
const side2 = prompt("Enter Triangle Side 2: ");
const side3 = prompt("Enter Triangle Side 3: ");

const semiPerimeter = (side1)