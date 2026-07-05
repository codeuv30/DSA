/* QUESTION 4 */
/* CHECK HOW MANY TIME EVERY CHARACTER APPEARED IN A STRING */
/* FOR EXAMPLE:  */
/* STRING GIVEN = "sheryians" */
/* EXPECTED OUTPUT:  */
/* s: 2 */
/* h: 1 */
/* e: 1 */
/* r: 1 */
/* y: 1 */
/* i: 1 */
/* a: 1 */
/* n: 1 */

let str = "kabhi khushi kabhi gam";
let arr = new Array(26).fill(0);

str = str.split(" ").join("");

for(let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);

    arr[ascii - 97] = arr[ascii - 97] + 1;
}

for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
        let ascii = i + 97;
        let ch = String.fromCharCode(ascii);

        console.log(`${ch}: ${arr[i]}`);
    }
}