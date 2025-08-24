// const arr = [1, 2, 3, 4, 5, 6]; // 2n

// let j = arr.length;

// for(let i = 0; i< j; i++){
//    arr[j + i] = arr[i];
// }

// for(let i = 0; i< arr.length; i++){
//    console.log(arr[i]);
// }

// Time Complexity = O(n) + O(n) = O(n)
// Space Complexity = O(n)

// sum of array elements
// const arr = [1, 2, 3, 4, 5];
// let product = 1;
// for(let i = 0; i < arr.length; i++){
//    product*=arr[i];
// }
// console.log(product);


// Finding max element in array
const arr = [2,5, 8, 3, 9]

let min = arr[0];

for(let i = 0; i<arr.length; i++){
   if(arr[i]< min){
      min = arr[i];
   }
}

console.log(min);