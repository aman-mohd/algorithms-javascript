const sort = (arr1, arr2) => {
    if (!arr2) {
        return arr1;
    }
    let ans1 = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans1.push(arr1[i]);
            i++;
        } else {
            ans1.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        ans1.push(arr1[i]);
        i++
    }
    while (j < arr2.length) {
        ans1.push(arr2[j]);
        j++
    }
    return ans1;
}

const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor((arr.length) / 2);
    const leftSide = arr.slice(0,middle);
    const rightSide = arr.slice(middle);
    return sort(mergeSort(leftSide), mergeSort(rightSide))
}
const unsortedArr = [99,11,23,35,17,12,14,46,58,39];

console.log(mergeSort(unsortedArr, 0, unsortedArr.length - 1));