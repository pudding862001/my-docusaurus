---
title: LC 94 Binary Tree Inorder Traversal
sidebar_label: LC 94 Binary Tree Inorder Traversal
sidebar_position: 27
hide_title: true
---

## LC 94 Binary Tree Inorder Traversal

### Given the root of a binary tree, return the inorder traversal of its nodes' values.


* Example:
* Input: root = [1,null,2,3]
* Output: [1,3,2]


Solution 1: Recursive method

```python

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:

        def dfs(root):
            if not root:
                return
            node = root

            # Traverse left first
            dfs(node.left)

            # And then append value
            ans.append(node.val)

            # Lastly, traverse right
            dfs(node.right)

        ans = []

        dfs(root)

        return ans
        

```

Solution 2: Iterative method

```python

class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        ans = []
        curr = root
        mystack = []

        while curr or mystack:

            # Put all the left nodes in the stack first    
            while curr:
                mystack.append(curr)              
                curr = curr.left

            
            node = mystack.pop()
            ans.append(node.val)

            # After all the left nodes and parent node has been handled, go to traverse the right node
            curr = node.right
            
        return ans


```