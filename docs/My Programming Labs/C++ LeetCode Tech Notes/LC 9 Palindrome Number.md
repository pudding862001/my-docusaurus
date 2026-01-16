---
title: LC 9 Palindrome Number
sidebar_label: LC 9 Palindrome Number
sidebar_position: 3
hide_title: true
---

## LC 9 Palindrome Number

* Given an integer x, return true if x is a **palindrome**, and false otherwise.

### Example 1:

* Input: x = 121
* Output: true
* Explanation: 121 reads as 121 from left to right and from right to left.


### Solution:

* **Reverse only the second half** of the integer to compare it with the first half. This approach is highly efficient as it avoids string conversion and prevents potential integer overflow during a full reversal.
* **Optimal Complexity**: The algorithm achieves **O(1) space complexity** by using only a few variables and **O(log N) time complexity**, as we process only half of the digits.



```cpp title="palindrome number.cpp"
class Solution {
public:
    bool isPalindrome(int x) {
        // Step 1: Handle edge cases
        // Negative numbers are not palindromes.
        // Numbers ending in 0 are not palindromes unless the number is 0 itself.
        if (x < 0 || (x % 10 == 0 && x != 0)) {
            return false;
        }

        int reversedHalf = 0;
        
        // Step 2: Reverse the second half of the number
        // The loop terminates when x <= reversedHalf, meaning we've reached the middle
        while (x > reversedHalf) {
            reversedHalf = reversedHalf * 10 + x % 10;
            x /= 10;
        }

        // Step 3: Compare both halves
        // For even-length numbers (e.g., 1221): x is 12, reversedHalf is 12
        // For odd-length numbers (e.g., 12321): x is 12, reversedHalf is 123
        // We use reversedHalf / 10 to remove the middle digit in odd-length cases.
        return x == reversedHalf || x == reversedHalf / 10;
    }
};
};
```