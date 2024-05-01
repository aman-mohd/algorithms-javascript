const array1 = [3,1,5,7,10,2,4];

const swap = (array2, i, j) => {
    let temp = array2[i];
    array2[i] = array2[j];
    array2[j] = temp;
}

const partitioning = (arr, start, end) => {
    let i = start;
    let j = end;
    const pivot = arr[start];
    while (i < j) {
        do {
            i++
        } while (arr[i] <= pivot);
    
        do {
            j--
        } while (arr[j] > pivot);
        if (i < j){
            swap(arr, i, j);
        }
    }
    swap(arr, start, j);
    return j;
}

const quickSort = (arrr, l, h) => {
    if (l < h) {
        let j = partitioning(arrr, l, h);
        quickSort(arrr, l,j);
        quickSort(arrr, j + 1, h);
    }
}
quickSort(array1, 0, array1.length)
console.log(array1);

// chatGpt iterative solution
// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     const pivot = arr[0];
//     const left = [];
//     const right = [];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// // Example usage:
// const array = [5, 3, 7, 2, 8, 4, 1];
// const sortedArray = quickSort(array);
// console.log(sortedArray);