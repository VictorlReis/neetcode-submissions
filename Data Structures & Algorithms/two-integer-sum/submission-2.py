class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        myMap = {}
        # {4 => 3, }
        for i in range(len(nums)):
            if nums[i] in myMap:
                return [myMap[nums[i]], i]

            myMap[target - nums[i]] = i

        return []
