---
title: LC 209 Minimum Size Subarray Sum
sidebar_label: LC 209 Minimum Size Subarray Sum
sidebar_position: 11
hide_title: true
---


## LC 209 Minimum Size Subarray Sum

Given an array of positive integers nums and a positive integer target, return the **minimal length** of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:

* **Input**: target = 7, nums = [2,3,1,2,4,3]
* **Output**: 2
* **Explanation**: The subarray [4,3] has the minimal length under the problem constraint.

```cpp

class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        
        //Use 2 pointers approaches, left & right pointer
        int left = 0;
        int sum = 0;
        int minval = INT_MAX;

        //Start the sliding windows
        for (int right=0;right<nums.size();right++){
            sum = sum + nums[right];

        //Control the invariance
            while(sum >= target){
                
                //Calculate the minimum
                minval = min(minval, right-left+1);

                //Try to scale down the window
                sum = sum - nums[left];
                left++;
                
            }

        }

        if (minval == INT_MAX){
            minval = 0;
        }

        return minval;
    }
};

```