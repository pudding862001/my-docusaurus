---
title: ELC 102 Binary Tree Level Order Traversaly
sidebar_label: LC 102 Binary Tree Level Order Traversal
sidebar_position: 13
hide_title: true
---

## LC 102 Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:

* **Input**: root = [3,9,20,null,null,15,7]
* **Output**: [[3],[9,20],[15,7]]
* **Explanation**: The subarray [4,3] has the minimal length under the problem constraint.

---

```python

# Definition for a binary tree node.
 class TreeNode:
     def __init__(self, val=0, left=None, right=None):
         self.val = val
         self.left = left
         self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:

        # Protect for the edge case (if the tree is empty)
        if root is None:
            return []

        # Declare a deque, put the desired tree in the deque
        d = deque([root])

        # Declare an empty two-dimensions list to store the answer 
        res = []

        # If the deque is not empty
        while d:

            # We need to "snapshot" a current level of the tree
            # Snapshot the width of the tree
            level_size = len(d)

            # And Create a list to store all the elements in the current level
            curr_level = []

            # Traverse all the nodes in the current level
            for _ in range(level_size):
                node = d.popleft()

                # If there is still descendents, put it into the deque
                if node.left is not None:
                    d.append(node.left)
                if node.right is not None:
                    d.append(node.right)
                
                # Put all the node value in current level, into the list
                curr_level.append(node.val)

            # In each while iteration (Each level of the tree), insert all the element in the level, into the tree.
            res.append(curr_level)

        
        return res

```