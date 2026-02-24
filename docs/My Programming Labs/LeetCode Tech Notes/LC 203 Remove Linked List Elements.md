---
title: LC 203 Remove Linked List Elements
sidebar_label: LC 203 Remove Linked List Elements
sidebar_position: 14
hide_title: true
---

## LC 203 Remove Linked List Elements

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Example 1:

* **Input**: Input: head = [1,2,6,3,4,5,6], val = 6
* **Output**: Output: [1,2,3,4,5]
* **Explanation**: Delete all nodes with value = 6

---

```python

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:

        #ListNode = A person that have a value in his belly, and arm point to next person

        # Create a dummy person, its value is 0
        dummy = ListNode(0)

        #  And its arm points to the head
        dummy.next = head
        
        #  Create another person to traverse the whole list, also with value 0 and points to the head
        curr = dummy

        # If the next person is not null, which mean the list hasn't come to the end
        while curr.next is not None:
            
            # If the value is target value, we skip it, make it point to the next one
            if curr.next.val == val:
                curr.next = curr.next.next
            
            # Otherwise, we hold it, traverse the list
            else:
                curr = curr.next

        # Return the first element
        return dummy.next

```