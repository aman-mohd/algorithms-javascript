const unsortedArr = [99,11,23,35,17,12,14,46,58,39];

const insertionSort = (arr) => {
    for (let index = 0; index < arr.length; index++) {
        let pivot = arr[index];
        let i = index - 1;
        while (i > -1 && arr[i] > pivot) {
            arr[i+1] = arr[i];
            i--;
        }
        arr[i+1] = pivot;
    }
}
console.log('unsorted', unsortedArr);
insertionSort(unsortedArr) 
console.log('sorted', unsortedArr);
