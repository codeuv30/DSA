/* SEARCH something in an array using binary search */

const prompt = require("prompt-sync")();
let arr = [2, 5, 8, 19, 45, 67, 78, 88, 94];
let t = Number(prompt("Enter number you want to search: "));

let st = 0;
let en = arr.length - 1;

let index = -1;

let count = 0;

while (st <= en) {
    count++;

    let mid = Math.floor((st + en) / 2);

    if(arr[mid] === t) {
        index = mid;
        break;
    }

    else if(arr[mid] < t) st = mid + 1;
    else en = mid - 1;
}

if(index === -1) console.log("Not Found");
else console.log(`found ${t} at ${index} after looping x${count} times`);