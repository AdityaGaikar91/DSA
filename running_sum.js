const nums = [1, 2, 3, 4];

const ans = new Array(nums.length);

ans[0] = nums[0]

for(let i = 1; i<nums.length; i++){
    ans[i] = ans[i-1] + nums[i];
}

console.log(ans);