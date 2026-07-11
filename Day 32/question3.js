/**
 * Sort people by height in descending order.
 * @param {string[]} names - Array of names
 * @param {number[]} heights - Array of heights
 * @return {string[]} - Sorted names by descending height
 */
function sortPeople(names, heights) {
    let map = new Map();
    let ans = [];

    /* CREATE MAPPING FOR HEIGHT VS NAMES */
    for(let i = 0; i < names.length; i++) {
        let value = names[i];
        let key = heights[i];
        map.set(key, value);
    }

    /* SORT THE HIEGHTS ARRAY USING INSERTION SORT */
    let n = heights.length;

    for(let i = 1; i < n; i++) {
        let key = heights[i];
        let j = i-1;

        while(j >= 0 && heights[j] < key) {
            heights[j+1] = heights[j];
            j--;
        }

        heights[j+1] = key;
    }

    /* COMPUTE FINAL ANSWER */
    for(let i = 0; i < heights.length; i++) {
        let value = map.get(heights[i]);
        ans.push(value);
    }

    return ans;
}

console.log(sortPeople(["Tom","Jerry","Spike"], [160,150,170]))