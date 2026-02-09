---
title: LC 977 Squares of a Sorted Array
sidebar_label: LC 977 Squares of a Sorted Array
sidebar_position: 10
hide_title: true
---


## LC 977 Squares of a Sorted Array

Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example:

* **Input**: nums = [-4,-1,0,3,10]
* **Output**: [0,1,9,16,100]
* **Explanation**: After squaring, the array becomes [16,1,0,9,100].  After sorting, it becomes [0,1,9,16,100].

```cpp
class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {

        //Create a new vector to solve this issue
        
        int n = nums.size();
        vector<int> result(n);

        //Use two pointers approach

        int left=0;
        int right=nums.size()-1;
        int pos = n-1;

        //Make the left pointer moves to right, and right pointer move to left, until they meet each other

        while(left<=right){
            
            int leftsqr = nums[left]*nums[left];
            int rightsqr = nums[right]*nums[right];

            if(leftsqr > rightsqr){
                result[pos] = leftsqr;
                left++;
            }else{
                result[pos] = rightsqr;
                right--;
            }
            pos--;
        }

        
        return result;
        
    }
};
```