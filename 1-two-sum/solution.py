class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        # Create a dictionary to store numbers and their indices
        num_map = {} 

        # Iterate through the array with both index and value
        for i, num in enumerate(nums):
            # Calculate the complement needed to reach the target
            complement = target - num

            # Check if the complement exists in the map
            if complement in num_map:
                # If found, return the index of the complement and the current index
                return [num_map[complement], i]
            
            # If not found, add the current number and its index to the map
            num_map[num] = i

        # This part should ideally not be reached if a solution is guaranteed
        return [] 