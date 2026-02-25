---
title: LC 18 4Sum
sidebar_label: LC 18 4Sum
sidebar_position: 16
hide_title: true
---

## LC 18 4Sum
### Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
* `0 <= a, b, c, d < n`
* a, b, c, and d are distinct.
* nums[a] + nums[b] + nums[c] + nums[d] == target
* You may return the answer in any order.

### Example 1:

* Input: nums = [1,0,-1,0,-2,2], target = 0
* Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]


```python
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        # Sort the List first
        nums.sort()
        n = len(nums)
        ans = []

        # Set k on the leftmost, start to traverse

        for k in range(n):
            if nums[k] > target and target >= 0:
                break
            if k > 0 and nums[k] == nums[k-1]:
                continue

        # Set i = k + 1 (next to k), and start the nested loop to find the answer
            for i in range(k + 1, n):
                if target > 0 and nums[i] > target:
                    break
                if i > k + 1 and nums[i] == nums[i-1]:
                    continue
                
                # Use 2 pointers method and squeeze the interval 

                L = i + 1
                R = n - 1

                while L < R:
                    total = nums[k] + nums[i] + nums[L] + nums[R]

                    if total > target:
                        R -= 1
                    elif total < target:
                        L += 1
                    else:
                        ans.append([nums[k], nums[i], nums[L], nums[R]])

                        while L < R and nums[L] == nums[L+1]:
                            L += 1
                        while L < R and nums[R] == nums[R-1]:
                            R -= 1

                        R -= 1
                        L += 1

        return ans


```