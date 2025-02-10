function breakingRecords(scores) {
    let minimum = scores[0];
    let maximum = scores[0];
    let min = 0;
    let max = 0;
    let result = [];
    // Write your code here
    for (let num of scores) {
        if (num > maximum) {
            max++;
            maximum = num;
        } else if (num < minimum) {
            min++;
            minimum = num;
        }
    } result.push(max, min);
    console.log(result.join(' '));
}

let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
breakingRecords(scores);