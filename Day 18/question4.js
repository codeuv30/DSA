/* QUESTION */
/* MOVE ALL 1's to left and 0's to right */

let arr = [0, 1, 0, 1];

let i = 0,
  j = 0;

while(i < arr.length) {
  if(arr[i] === 1) {
    let temp = arr[j]; 
    arr[j] = arr[i];
    arr[i] = temp;

    j++;
  }

  i++;
}

console.log(arr);
