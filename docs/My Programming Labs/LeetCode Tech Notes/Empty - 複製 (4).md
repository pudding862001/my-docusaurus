---
title: LC 
sidebar_label: LC 
sidebar_position: 22
hide_title: true
---

## Given the head of a singly linked list, reverse the list, and return the reversed list.

* Input: head = [1,2,3,4,5]
* Output: [5,4,3,2,1]

```python

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        
        if head is None:
            return

        curr = head
        prev = None

        while curr is not None:
            temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
            
        
        return prev

```