---
title: LC 767 Reorganize String
sidebar_label: LC 767 Reorganize String
sidebar_position: 24
hide_title: true
---

### Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

### Return any possible rearrangement of s or return "" if not possible.

* Input: s = "aab"
* Output: "aba"

```python

class Solution:
    def reorganizeString(self, s: str) -> str:

        # Create a dictionary to container the character that appears the most.

        d = dict()
        lst = list(s)

        # Calculate the most one. or use d = Counter(lst)

        for char in lst:
            if char in d:
                d[char] += 1
            else:
                d[char] = 1

        max_val = 0
        most = ""
        for k, v in d.items():
            if v > max_val:
                max_val = v
                most = k
        
        n = len(lst)

        # Early return if the string can not be reorganized 
        # if max_val > left_all + 1, it can't be reorganized

        if max_val > n - max_val + 1:
            return "" 

        # Create a res list to contain the result

        res = [""] * n
        
        # Fill in the most frequent char in all "even" indice

        idx = 0
        while d[most] > 0:
            res[idx] = most
            idx += 2
            d[most] -= 1

        
        # Fill in the other chars in left even indice and odd indice


        for char in d:
            while d[char] > 0:
                if idx >= n:
                    idx = 1
                res[idx] = char
                idx += 2
                d[char] -= 1







        return "".join(res) 



```

* Or, we can use Counter to simplify the code

```python

from collections import Counter

class Solution:
    def reorganizeString(self, s: str) -> str:
        n = len(s)
        # 1. Count all the frequency in each char
        d = Counter(s)
        
        # 2. Get the most appear char
        most, max_val = d.most_common(1)[0]
        
        # 3. Inspect if we have a valid solution
        if max_val > (n + 1) // 2:
            return ""

        res = [""] * n
        idx = 0

        # 4. Fill in the most appear char in even indice
        while d[most] > 0:
            res[idx] = most
            idx += 2
            d[most] -= 1

        # 5. Fill in the other characters 
        for char in d:
            
            while d[char] > 0:
                if idx >= n:
                    idx = 1
                res[idx] = char
                idx += 2
                d[char] -= 1

        return "".join(res)

```