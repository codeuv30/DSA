/* let map = new Map();

map.set("ajay", 5);
map.set("amit", 7);
map.set("aman", 3);
map.set("sakshi", 8);
map.set("ajay", 2); */

/* console.log(map); // { 'ajay' => 2, 'amit' => 7, 'aman' => 3, 'sakshi' => 8 }
console.log(map.get("ajay")); // 2

console.log(map.has("aman")) // true
console.log(map.has("utkarsh")) // false
console.log(map.size); // 4 */

/* for ( let key of map.keys() ) {
    console.log(`${key} => ${map.get(key)}`);
}; */

/* QUESITON 1 */
/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 2, 3, 1, 5, 1, 6, 1, 4, 5, 1, 2, 1];
let map = new Map();

for(let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
}

console.log(map) */

/* QUESTION 2 */

/* 1. Two Sum */
/* let nums = [3, 2, 4],
  target = 6; */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* var twoSum = function (nums, target) {
  let map = new Map();
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {

      ans.push(i);

      ans.push(map.get(target - nums[i]));

      return ans;

    } else {

      map.set(nums[i], i);

    }
  }
};

const ans = twoSum(nums, target);
console.log(ans); */

/* QUESTION 3 */

/* 1748. Sum of Unique Elements */

var sumOfUnique = function (nums) {
  let sum = 0;
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  for (let key of map.keys()) {
    if (map.get(key) < 2) {
      sum += key;
    }
  }

  return sum;
};

let nums = [1, 2, 3, 2];

console.log(sumOfUnique(nums));