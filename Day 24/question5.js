/*
# Is example string mein pattern dekho:
# "AbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"
#
# Yahan HAR letter A se Z tak, dono case mein maujood hai:
#   'a' aur 'A' -> dono hain
#   'b' aur 'B' -> dono hain
#   ... aise hi ...
#   'z' aur 'Z' -> dono hain
#
# To "candidates" (jinke dono case maujood hain) = A, B, C, ..., Z (sab)
#
# In sab mein se ALPHABETICALLY SABSE BADA letter kaun hai?
# A, B, C ... Y, Z -> inme sabse bada "Z" hota hai (alphabet ke last mein)
#
# Isliye answer = "Z" (uppercase mein return karna hai)
*/

/* ANSWER */

/**
 * @param {string} s
 * @returns {string}
 */
function greatestLetter(s) {
  let validChars = [];

  /* GET ALL CHARACTERS VALID FOR THE LEXICOGRAPHICAL COMPARISION */
  for (let i = 0; i < s.length; i++) {
    let char = s.charAt(i);
    let ascii = s.charCodeAt(i);

    if (ascii >= 97 && ascii <= 122) {
      for (let j = 0; j < s.length; j++) {
        let currentChar = s.charAt(j).toLowerCase();
        let currentAscii = s.charCodeAt(j);

        if (currentAscii >= 65 && currentAscii <= 90) {
          let characterLowerCase = currentChar.toLowerCase();
          if (characterLowerCase === char && !validChars.includes(characterLowerCase) && !validChars.includes(char)) {
            validChars.push(currentChar);
          }
        }
      }
    }
  }

  let n = validChars.length;

  for(let i = 0; i < n - 1; i++) {
    for(let j = 0; j < n - 1 - i; j++) {
        if(validChars[j] > validChars[j + 1]) {
            let temp = validChars[j];
            validChars[j] = validChars[j+1];
            validChars[j+1] = temp;
        }
    }
  }

  if(!validChars.length) return "";

  let greatest = validChars[validChars.length - 1];
  let uppercase = greatest.toUpperCase();

  return uppercase;
}

let greatestLetterInString = greatestLetter("ABCDEF");

console.log(greatestLetterInString);