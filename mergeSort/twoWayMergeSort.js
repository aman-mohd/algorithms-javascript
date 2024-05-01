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

const twoWaySort = (a) => {
    let answerArray = [];
    do {
        for (let i = 0; i < a.length; i += 2) {
            answerArray = [...answerArray, sort(a[i], a[i + 1])];
        }
        a = [...answerArray];
        answerArray = [];
    } while (a.length !== 1)
    a = a[0];
    return a;
}

const sortedArr1 = [1,3,5,7];
const sortedArr2 = [2,4,6,8,9];

console.log(twoWaySort([...sortedArr1, ...sortedArr2].map((ele) => [ele])));
