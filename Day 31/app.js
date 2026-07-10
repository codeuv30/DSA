/* UNDERSTANDING MAP AND SET */

/* let set = new Set();

set.add(10);
set.add(20);
set.add(30);
set.add(40);


set.delete(10);

console.log(set.has(20));
console.log(set.size) */

/* QUESTION 1 */

/* let arr = [ 1, 2, 3, 4, 5, 6, 2, 5, 1 ];
let set = new Set();

for(let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
}

console.log(set) */

/* QUESTION 2 */
/* let arr = [1, 2, 3, 3, 2, 1, 5];
let set = new Set();

for(let i = 0; i < arr.length; i++) {
    if(set.has(arr[i])) set.delete(arr[i]);
    else set.add(arr[i]);
}

console.log(set); */

/* QUESTION 3 */

/* 771. Jewels and Stones */

/* let jewels = "z", stones = "ZZ", count = 0;
let set = new Set();

for(let i = 0; i < jewels.length; i++) {
    set.add(jewels.charAt(i));
}

for(let i = 0; i < stones.length; i++) {
    if(set.has(stones.charAt(i))) count++;
}

console.log(count); */

/* QUESTION 4 */

/* 1832. Check if the Sentence Is Pangram */

/* let sentence = "leetcode";
let set = new Set(sentence);

if(set.size == 26) return true;
else return false; */

/* QUESTION 5 */
/* 2351. First Letter to Appear Twice */

/**
 * @param {string} s
 * @return {character}
 */

/* var repeatedCharacter = function(s) {
    let set = new Set();

    for(let i = 0; i < s.length; i++) {
        if(set.has(s.charAt(i))) return s.charAt(i);
        else set.add(s.charAt(i));
    }
};

let ans = repeatedCharacter("abccbaacz");
console.log(ans); */

/* QUESTION 6 */

/* 202. Happy Number */

var isHappy = function (n) {
  let set = new Set();

  while (n !== 1) {
    let sum = 0;
    let nCopy = n;

    while(nCopy > 0) {
        let digit = nCopy % 10;
        sum += digit * digit;
        nCopy = Math.floor(nCopy / 10);
    }

    if(set.has(sum)) {
        return false;
        break;
    }

    set.add(sum);
    n = sum;
  }

  return true;
};

let n = 19;
console.log(isHappy(n));