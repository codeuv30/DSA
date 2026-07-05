/* QUESTION 3 */
/* IF ALL THE A's APPEAR BEFORE B's return true else false */

function checkString(s) {
  let arr = s.split("");
  let n = arr.length;

  for(let i = 0; i < n - 1; i++) {
    for(let j = 0; j < n - 1 - i; j++) {
        if(arr[j] > arr[j+1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
  }

  let sortedStr = arr.join("");

  if(sortedStr === s) return true;
  else return false;
}

let bool = checkString("ba");
console.log(bool);