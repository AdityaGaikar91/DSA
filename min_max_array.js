const a = [3, 6, 7, 1, 2];

let max = a[0];
let min = a[0];

for (let i =0; i<a.length; i++){
    if (a[i] > max){
        max = a[i];
    }

    if (a[i] < min){
        min = a[i];
    }
}

console.log("Maximum no. is", max);
console.log("Minimum no. is", min);


// Two Sum Problem

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     let ans =[];
//     for(let i = 0; i<nums.length-1; i++){
//         for(let j=i+1; j<nums.length;j++){
//             if(nums[i]+nums[j]== target){
//                 ans.push(i, j);// ans.push(j, i);
//                 return ans;
//             }
//         }
//     }
// };