let arr1 = [2, 4, 8, 10];
let arr2 = [1, 3, 5, 6, 9];

let mainArr = new Array(arr1.length + arr2.length);

let i = 0;
let j = 0;
let k = 0;

while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
        mainArr[k++] = arr1[i++];
    } else {
        mainArr[k++] = arr2[j++];
    }
}

while(i<arr1.length) {
    mainArr[k++] = arr1[i++];
}

while(j<arr2.length) {
    mainArr[k++] = arr2[j++];
}
    
console.log(mainArr);