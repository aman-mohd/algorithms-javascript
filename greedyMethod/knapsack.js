const articles = [
    {
        profit: 10,
        weight: 2
    },
    {
        profit: 6,
        weight: 3
    },
    {
        profit: 15,
        weight: 5
    },
    {
        profit: 7,
        weight: 7
    },
    {
        profit: 6,
        weight: 1
    },
    {
        profit: 18,
        weight: 4
    },
    {
        profit: 3,
        weight: 1
    }
];

const sort = (arr1, arr2) => {
    if (!arr2) {
        return arr1;
    }
    let ans1 = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if ((arr1[i].profit / arr1[i].weight) > (arr2[j].profit / arr2[j].weight)) {
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
    arr = sort(mergeSort(leftSide), mergeSort(rightSide));
    return arr;
}

const greedyKnapSack = (arr) => {
    const sortedArr = mergeSort(arr, 0, articles.length - 1);
    let constraint = 15;
    let i = 0;
    let profit = 0;
    while (constraint > 0) {
        if (sortedArr[i].weight < constraint) {
            profit += sortedArr[i].profit;
            constraint = constraint - sortedArr[i].weight;
            i++;
        } else {
            profit += (sortedArr[i].profit / sortedArr[i].weight) * constraint;
            i++;
            constraint = 0;
        }
    }
    return profit;
}

console.log(greedyKnapSack(articles));
