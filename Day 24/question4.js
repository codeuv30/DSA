/* QUESTION 4 */
/*

A password is said to be strong if it satisfies all the following criteria: It has at least 8 characters. It contains at least one lowercase letter. • It contains at least one uppercase letter. It contains at least one digit. It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+". It does not contain 2 of the same character in
adjacent positions (i.e., "aab" violates this condition, but "aba" does not). Given a string password, return true if it is a strong password. Otherwise, return false.
*/

/* ANSWER */

class Solution {
  /**
   * @param {string} password
   * @return {boolean}
   */
  strongPasswordCheckerII(password) {
    let result = true;
    let arr = new Array(128);

    /* CHECK: It has 8 characters */
    if (password.length < 8) {
      result = false;
      return result;
    }

    /* CHECK: It contains one lowercase letter */
    let lowerCaseCount = 0;

    for (let i = 0; i < password.length; i++) {
      let ascii = password.charCodeAt(i);
      if (ascii >= 97 && ascii <= 122) lowerCaseCount++;
    }

    if (!lowerCaseCount) {
      result = false;
      return result;
    }

    /* CHECK: It contains one uppercase letter */
    let uppercaseCaseCount = 0;

    for (let i = 0; i < password.length; i++) {
      let ascii = password.charCodeAt(i);
      if (ascii >= 65 && ascii <= 90) uppercaseCaseCount++;
    }

    if (!uppercaseCaseCount) {
      result = false;
      return result;
    }

    /* CHECK: It contains at least one digit */
    let digitCount = 0;
    for (let i = 0; i < password.length; i++) {
      let ascii = password.charCodeAt(i);
      if (ascii >= 48 && ascii <= 57) digitCount++;
    }

    if (!digitCount) {
      result = false;
      return result;
    }

    /* CHECK: It atleast contains one special character */

    let specialCharacters = "!@#$%^&*()-+";
    let specialCharacterCount = 0;

    for(let i = 0; i < specialCharacters.length; i++) {
        let specialCharacter = specialCharacters[i];
        
        for(let j = 0; j < password.length; j++) {
            if(specialCharacter === password.charAt(j)) specialCharacterCount++;
        }
    }

    if(!specialCharacterCount) {
        result = false;
        return result;
    }

    /* CHECK: If one character is consecutively repeated */
    let i = 0;
    let j = 1;

    while (i < password.length) {
        if(password.charAt(i) === password.charAt(j)) {
            result = false;
            return result;
            break;
        }

        i++;
        j++;
    }

    return result;
  }
}

let solution = new Solution();
let bool = solution.strongPasswordCheckerII("Abcdefg1");
console.log(bool);
