/* QUESTION */
/* YOU ARE GIVEN AN ARRAY YOU HAVE TO REVERSE IT */

let arr = [1, 2, 3, 4, 5];

let i = 0;

for (let j = arr.length - 1; j > i; j--) {
    if(i < j) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        i++;
    }
}

console.log(arr);