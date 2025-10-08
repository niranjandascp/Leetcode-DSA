/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {}; // to store number -> index mapping
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i]; // found the pair
        }
        
        map[nums[i]] = i; // store the current number with index
    }
    
    return []; // just in case (problem guarantees one solution)
 
};