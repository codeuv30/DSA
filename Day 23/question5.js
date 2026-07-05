/* QUESTION 5 */
/* CHECK IF TWO STRINGS ARE ANAGRAMS */

let s1 = "chai";
let s2 = "iahc";

function isAnagram(s1, s2) {
  let result = false;

  if (s1.length !== s2.length) {
    result = false;
    return result;
  }

  let arr = new Array(26).fill(0);

  for(let i = 0; i < s1.length; i++) {
    let ascii = s1.charCodeAt(i);

    arr[ascii - 97] = arr[ascii - 97] + 1;
  }

  for(let i = 0; i < s2.length; i++) {
    let ascii = s2.charCodeAt(i);

    arr[ascii - 97] = arr[ascii - 97] - 1;
  }

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
        result = true;
    } else {
        result = false;
        return result;
        break;
    }
  }

  return result;
}

let bool = isAnagram(s1, s2);

console.log(bool)