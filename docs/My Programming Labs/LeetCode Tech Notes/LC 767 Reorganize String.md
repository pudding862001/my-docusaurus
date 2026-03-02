---
title: LC 767 Reorganize String
sidebar_label: LC 767 Reorganize String
sidebar_position: 24
hide_title: true
---

## LC 767 Reorganize String

### Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

* Return any possible rearrangement of s or return "" if not possible.

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
        top_list = d.most_common(1)
        most, max_val = top_list[0][0], top_list[0][1]
        
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

* Or, we can use **heap** to solve this problem

```Python

import heapq
from collections import Counter
class Solution:
    def reorganizeString(self, s: str) -> str:
        n = len(s)
        d = Counter(s)
        max_heap = []
        for char, count in d.items():
            max_heap.append((-count, char))
        heapq.heapify(max_heap)

        top_list = max_heap[0]
        maxval, maxchar = -top_list[0], top_list[1]

        if maxval > n - maxval + 1:
            return ""

        idx = 0
        ans = [""]
        jail = None
        while max_heap:
            count, char = heapq.heappop(max_heap)
            ans.append(char)
            count += 1

            if jail is not None:
                heapq.heappush(max_heap, jail)
                jail = None

            if count < 0:
                jail = (count, char)
        
        return "".join(ans)




```