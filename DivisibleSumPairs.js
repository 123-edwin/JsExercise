function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let result = 0;
    for (let i = 0; i < n; i++){
        for (let j = i+1; j < n; j++){
            if((ar[i]+ar[j])%k===0){
                result++
            }
        }
    } return result;
}

const k = 3;
const n = 6;
const ar = [1, 3, 2, 6, 1, 2];

console.log(divisibleSumPairs(n,k,ar));