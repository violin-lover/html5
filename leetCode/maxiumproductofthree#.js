/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a, b) => a-b);
    
    let x = nums[0] * nums[1] * nums[nums.length - 1];
    let y = nums[nums.length - 3] * nums[nums.length - 2] * nums[nums.length - 1];
    
    return Math.max(x, y);
};