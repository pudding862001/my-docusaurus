---
title: LC
sidebar_label: LC 
sidebar_position: 25
hide_title: true
---

## LC 

### You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. 
### Each CPU interval can be idle or allow the completion of one task. 

* Example:
* Input: tasks = ["A","A","A","B","B","B"], n = 2
* Output: 8
* Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.


Solution 1: Use heap to solve the issue by calculating time

```python

import heapq
from collections import Counter, deque
class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        d = Counter(tasks)
        max_list = d.most_common(1)
        mostT, mostC = max_list[0]
        worklist = []
        for t, c in d.items():
            worklist.append((-c, t))
        heapq.heapify(worklist)

        time = 0
        Tlen = len(tasks)
        jail = deque()
        ans = []
        while worklist or jail:
            time += 1

            if jail and jail[0][1] == time:
                newcount, newtime, newtask = jail.popleft()
                heapq.heappush(worklist, (newcount, newtask))

            if worklist:
                count, task = heapq.heappop(worklist)
                count += 1

                if count < 0:
                    jail.append((count, time + n + 1, task))

        return time

```