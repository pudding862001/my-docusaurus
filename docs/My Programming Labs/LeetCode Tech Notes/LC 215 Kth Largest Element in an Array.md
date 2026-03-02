---
title: LC 215 Kth Largest Element in an Array
sidebar_label: LC 215 Kth Largest Element in an Array
sidebar_position: 26
hide_title: true
---

## LC 215 Kth Largest Element in an ArrayLC 

### Given an integer array nums and an integer k, return the kth largest element in the array.
### Note that it is the kth largest element in the sorted order, not the kth distinct element.
### solve it without sorting?

* Example:
* Input: nums = [3,2,1,5,6,4], k = 2
* Output: 5
* Explanation: 1st => 6, 2nd => 5


Solution : Use heap to maintain the top k element. And retreive the top value

```python

import heapq
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:

        # Create a heap
        top_k_heap = []
        ans = 0
        n = len(nums)

        # For all the value in nums list
        for i in range(n):

            # Fill in the top-k heap first
            if i < k:
                heapq.heappush(top_k_heap, nums[i])
            
            # If the value is exactly greater than the smallest element (Which means the kth large element) in the heap
            elif nums[i] > top_k_heap[0]:

                # Replace it
                heapq.heapreplace(top_k_heap, nums[i])

        return top_k_heap[0]

```