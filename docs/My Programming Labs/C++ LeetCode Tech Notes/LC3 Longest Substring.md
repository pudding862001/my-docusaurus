---
title: LC3 Longest Substring Without Repeating Characters
sidebar_label: LC3 Longest Substring Without Repeating Characters
sidebar_position: 2
hide_title: true
---

## LC3. Longest Substring Without Repeating Characters

* Given a string s, find the length of the **longest substring** without duplicate characters.

### Example 1:

* Input: s = "abcabcbb"
* Output: 3
* Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

### Constraints:
```text
* 0 <= s.length <= 5 * 10^4
```
* s consists of English letters, digits, symbols and spaces.


### Solution:

* Solve the problem by **Sliding Window Approach** with **two pointers**.
* Declare freq array **freq[128]** can reduce the **space complexity** from **O(N)** to **O(1)**.

```cpp title="longest substring.cpp"
class Solution {
public:
    int lengthOfLongestSubstring(string s) {

        int left=0;
        int maxlen=0;
        int freq[128]={0};

        for(int right=0;right<s.size();right++){

            while(freq[s[right]]>0){
                freq[s[left]]--;
                left++;
            }
            freq[s[right]]++;
            maxlen = max(maxlen, right-left+1);
        }
        
        return maxlen;
    }
};
```