function divide(arr, st, en) {

    if(st >= en) return;

    let mid = Math.floor((st + en) / 2);
    divide(arr, st, mid);
    divide(arr, mid + 1, en);

    merge(arr, st, mid, en);

}

function merge(arr, st, mid, en) {

    let mergedArray = new Array(en - st + 1);

    let i = st;
    let j = mid + 1;
    let k = 0;

    while(i <= mid && j <= en) {
        if(arr[i] <= arr[j]) mergedArray[k++] = mergedArray[i++];
        else arr[k++] = mergedArray[j++];
    }

    while(i <= mid) mergedArray[k++] = mergedArray[i++];
    while(j <= en) mergedArray[k++] = mergedArray[j++];

    for(let i = 0; i < mergedArray.length; i++) arr[i] = mergedArray[i];
}

let arr = [6, 3, 7, 4, 7, 2];
divide(arr, 0, arr.length - 1);
console.log(arr);