//Read and print elements
let arr = ["Ayesha","Sidra","Javaria","Saba"];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

//Print all negative elements
const numbers = [10, -4, -2, 20, 0, -1];
  for (let i = 0; i < numbers.length; i++)
     if (numbers[i] < 0 ) {
        console.log(numbers[i]);
     }

    
// Sum of all array elements
const numbersForSum = [10, 20, 30, 40, 50];
let sum = 0;
 for (let i = 0; i < numbersForSum.length; i++){
    sum = sum + numbersForSum[i];
 }
  console.log("Total Sum is:", sum);

//Copy all elements
let originalArr = [10, 20, 30, 40, 50];
let copiedArr = [];
for (let i = 0; i < originalArr.length; i++) {
    copiedArr.push(originalArr[i]);
}
console.log("Original Array:", originalArr);
console.log("Copied Array:", copiedArr);
  