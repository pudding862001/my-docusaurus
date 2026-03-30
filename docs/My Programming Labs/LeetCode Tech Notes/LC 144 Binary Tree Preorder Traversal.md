---
title: LC 144 Binary Tree Preorder Traversal
sidebar_label: LC 144 Binary Tree Preorder Traversal 
sidebar_position: 26
hide_title: true
---

## LC 144 Binary Tree Preorder Traversal 

### Given the root of a binary tree, return the preorder traversal of its nodes' values.


* Example:
* Input: root = [1,null,2,3]
* Output: [1,2,3]


Solution 1: Recursive method

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        
        def dfs(root) -> List[int]:
            if root is None:
                return
           
            ans.append(root.val)

            if root.left:
                dfs(root.left)
            if root.right:
                dfs(root.right)
        ans = []
        
        dfs(root)
        
        return ans
        

```

Solution 2: Iterative method

```python
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:

        ans = []
        if root is None:
            return []

        mystack = [root]
        while mystack:
            
            node = mystack.pop()
            ans.append(node.val)
            
            if node.right is not None:
                mystack.append(node.right)
            if node.left is not None:
                mystack.append(node.left)

        
        return ans


```