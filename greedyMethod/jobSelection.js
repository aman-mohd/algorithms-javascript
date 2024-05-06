const articles = [
    {
        profit: 20,
        deadLine: 2
    },
    {
        profit: 15,
        deadLine: 2
    },
    {
        profit: 10,
        deadLine: 1
    },
    {
        profit: 5,
        deadLine: 3
    },
    {
        profit: 1,
        deadLine: 3
    }
];
const jobSelection = (arr) => {
    let profit = 0;
    let spent = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].deadLine > spent) {
            profit += arr[i].profit;
            spent++;
        }
    }
    return profit;
}

console.log(jobSelection(articles));