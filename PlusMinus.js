function plusMinus(numbers) {
    // Write your code here
   let zero = 0;
   let negative = 0;
   let positive = 0;

   for(let num of numbers){
    if (num > 0){
        positive ++;
    } else if (num < 0){
        negative ++;
    } else if (num == 0){
        zero ++;
    };
   }

   
   let p = (positive/numbers.length).toFixed(6);
   let n = (negative/numbers.length).toFixed(6);
   let z = (zero/numbers.length).toFixed(6);
   console.log(`${p}\n${n}\n${z}`)
}

const array = [-0, 0, -1, 1, 1];
plusMinus(array);