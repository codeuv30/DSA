/* QUESTION 7 */
/* SORT THE WORDS IN SENTENCE */

function sortSentence(s) {
  let arr = s.split(" ");
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  let sentence = arr.join(" ");
  return sentence;
}

let sentence = sortSentence("taj mahal is situated at agra");
console.log(sentence);
