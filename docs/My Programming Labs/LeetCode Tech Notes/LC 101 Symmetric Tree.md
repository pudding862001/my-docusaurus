---
title: LC 101 Symmetric Tree
sidebar_label: LC 101 Symmetric Tree
sidebar_position: 28
hide_title: true
---

## LC 101 Symmetric Tree

### Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

* Example:
* Input: root = [1,2,2,3,4,4,3]
* Output: true
* Explanation: From left to right, it's 1,2,2,3,4,4,3. From right to left, it's 1,2,2,3,4,4,3.


Solution 1: Iterative method

```python

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return True
        
        d = deque([root.left, root.right])

        # Pop 2 nodes at a time and compare
        while d:
            L = d.popleft()
            R = d.popleft()

            # If both nodes are None, continue
            if not L and not R:
                continue

            # If only one node is None, return False
            if not L or not R:
                return False

            # If values don't match, return False
            if L.val != R.val:
                return False
            
            # Append all the nodes with below orders: L.left -> R.right -> L.right -> R.left
            d.append(L.left)
            d.append(R.right)
            d.append(L.right)
            d.append(R.left)
        return True

```

Solution 2: Recursive method

```python

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        # If the tree is empty => Means it's symmetric
        if root is None:
            return True
        
        def dfs(L, R):
            
            # If both nodes are None, return True
            if not L and not R:
                return True

            # If only one node is None, return False
            if not L or not R:
                return False

            # If values don't match, return False
            if L.val != R.val:
                return False

            # Recursively check the left and right subtrees
            return dfs(L.left, R.right) and dfs(L.right, R.left) 

        
        
        return dfs(root.left, root.right)

```
