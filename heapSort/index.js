const unsortedRandomArray = [4,2,1,7,3,9,30,22];

const maxHeap = [50,30,20,25,10,9,8]

const lChild = (index) => (index + 1) * 2 - 1;
const rChild = (index) => lChild(index) + 1;

// getLeftChildIndex(0);

// HEAPIFY
// start from the last element in array and move left
// at each step compare children and adjust if needed
// if children adjusted check child's children and adjust if needed

function heapify(array, length, current) {
    let largest = current;
    const left = 2 * current + 1;
    const right = 2 * current + 2;
    if (left < length && array[left] > array[largest]) {
        largest = left;
    }

    if (right < length && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== current) {
        [array[current], array[largest]] = [array[largest], array[current]];
        heapify(array, length, largest);
    }
}

function heapSort(array) {
    const n = array.length;
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {

        heapify(array, n, i);
    }
    // Heap sort
    console.log('Heap array', array);
    for (let i = n - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]]; // Swap the root with the last element
        heapify(array, i, 0); // Heapify the reduced heap
    }
    return array;
}

console.log("Original array:", unsortedRandomArray);
let anbs = [30, 22, 9, 7, 3,  4, 1, 2];
console.log("Sorted array:", heapSort(anbs));