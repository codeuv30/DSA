function divide(arr, first, last) {
    if( first >= last) return;

    let mid = Math.floor((first + last) / 2);

    divide(arr, first, mid);
    divide(arr, mid +1 , last);

    merge(arr, first, mid, last);
}

function merge(arr, first, mid, last) {
    let temp = new Array(last - first + 1);

    let i = first;
    let j = mid + 1;
    let k = 0;

    while(i <= mid && j <= last) {
        if(arr[i] < arr[j]) temp[k++] = arr[i++];
        
        else temp[k++] = arr[j++];
    };

    while(i <= mid) temp[k++] = arr[i++];
    while(j <= last) temp[k++] = arr[j++];

    i = first;
    k = 0;

    while(k < temp.length) arr[i++] = temp[k++]
}

let arr = [10, 5, 1, 9, 14, 6, 19, 12];
divide(arr, 0, arr.length - 1);
console.log(arr);