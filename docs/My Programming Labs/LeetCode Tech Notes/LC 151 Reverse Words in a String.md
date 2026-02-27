---
title: LC 151 Reverse Words in a String
sidebar_label: LC 151 Reverse Words in a String
sidebar_position: 23
hide_title: true
---

## LC 151 Reverse Words in a String

###  Given an input string s, reverse the order of the words.

* A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

* Return a string of the words in reverse order concatenated by a single space.

* Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

* Example 1:
* Input: s = "the sky is blue"
* Output: "blue is sky the"

```python

class Solution:

    def reverseWords(self, s: str) -> str:

        # define a trim function to trim all the spaces

        def trim(lst: list) -> list:
            L = 0
            R = len(lst) - 1

            # Trim all the space on the left
            while L <= R and lst[L] == ' ':
                L += 1

            # Trim all the space on the right
            while L <= R and lst[R] == ' ':
                R -= 1

            # Trim all the additional space in the middle

            output = []
            for i in range(L, R+1):
                char = lst[i]
                if char != ' ':
                    output.append(char)
                else:
                    if output[-1] == ' ':
                        continue
                    else:
                        output.append(' ')
            return output 
        
        # Manually write a reverse function (Although it's Python built-in function.)
        def reverse(lst: list, L: int, R: int) -> None:

            while L < R:
                lst[L], lst[R] = lst[R], lst[L]
                L += 1
                R -= 1

        # Manually reverse each word
        def reverse_each(lst: list) -> None:

            n = len(lst)
            start = 0
            ans = []

            for end in range(n + 1):
                if end == n or lst[end] == ' ':
                    
                    reverse(lst, start, end - 1)

                    start = end + 1



            

        # Step 1, Convert the string into a list, and trim all the space

        lst = trim(list(s))

        # Step 2, reverse the list
        reverse(lst, 0, len(lst) - 1)

        # Step 3, reverse each word
        reverse_each(lst)            

        # Step 4, convert the answer back to string
        return "".join(lst)
```