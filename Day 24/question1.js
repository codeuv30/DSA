/* QUESTION 1 */
/* COUNT ASTERIKS IN A WORD BUT IF ASTERIK IS BETWEEN | THEN DON'T COUNT IT */

function countAsterisks(s) {
  let count = 0;
  let inside = false;

  for(let i = 0; i < s.length; i++) {
    let ch = s.charAt(i);

    if(ch === "|") {
        if(inside) {
            inside = false;
            continue;
        }

        inside = true;
        continue;
    };

    if(!inside && ch === "*") {
        count++;
        inside = false;
    }
  }

  return count;
}

let count = countAsterisks("*|*|*|*|*|*|*|*");
console.log(count);