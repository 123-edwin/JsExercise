function miniMaxSum(arr) {
    // Write your code here
    let sorted = arr.sort((a,b) => a-b);
    let min = 0;
    let max = 0;
    for (let i = 1; i < arr.length; i++){
        max += sorted[i];
    }
    for (let i = 0; i < arr.length-1; i++){
        min += sorted[i];
    }
    console.log(`${min} ${max}`) 
}

let arr = [1,2,3,4,5];
miniMaxSum(arr);