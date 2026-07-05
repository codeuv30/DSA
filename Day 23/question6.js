/* QUESTION 6 */
/* YOU HAVE AN ARRAY OF SENTENCES YOU HAVE TO FIND NUMBER OF WORDS IN THAT WHOLE ARRAY */

function mostWordsFound(sentences) {
    let max = 0;

    for(let i = 0; i < sentences.length; i++) {
        let words = sentences[i].split(' ').length;
        let maxLength = sentences[max].split(' ').length

        if(words > maxLength) max = i;
    }

    let wordsInMax = sentences[max].split(" ").length;

    return wordsInMax;
}

let number = mostWordsFound(["a b c d", "e f g h i j", "k l m n o"]);

console.log(number);