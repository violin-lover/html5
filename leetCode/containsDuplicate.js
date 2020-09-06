/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
let arrayMap = new Map();
    for(let i = 0; i < nums.length; i++){
    if(arrayMap.has(nums[i])){
    return true;
    } else {
    arrayMap.set(nums[i],1)
    }
    }
    return false;
};