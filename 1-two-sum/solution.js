/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Hash map approach - O(n) time, O(n) space
    const numMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // Check if complement exists in our map
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        
        // Store current number and its index
        numMap.set(nums[i], i);
    }
    
    return []; // This shouldn't happen based on problem constraints
};

// Alternative brute force solution (less efficient)
var twoSumBruteForce = function(nums, target) {
    // O(n²) time, O(1) space
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};

// Test cases
console.log("Test Case 1:", twoSum([2,7,11,15], 9)); // Expected: [0,1]
console.log("Test Case 2:", twoSum([3,2,4], 6));     // Expected: [1,2]  
console.log("Test Case 3:", twoSum([3,3], 6));       // Expected: [0,1]