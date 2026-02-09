---
title: LC 20 Valid Parentheses
sidebar_label: LC 20 Valid Parentheses
sidebar_position: 5
hide_title: true
---

## LC 20 Valid Parentheses

* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

* An input string is valid if:

* 1. Open brackets must be closed by the same type of brackets.
* 2. Open brackets must be closed in the correct order.
* 3. Every close bracket has a corresponding open bracket of the same type.

### Example 1:

* Input: s = "()"
* Output: true



### Solution:

### Solution:

* **Stack-Based Strategy**: Use a **stack** to keep track of opening brackets. Since the last opened bracket must be the first one closed (LIFO), a stack is the most efficient data structure for this problem.
* **Branching Logic Optimization**: Instead of a hash map, use a switch statement or if-else logic to identify matching pairs. This reduces the overhead of hash table lookups and improves performance for this specific, small-scale constraint.
* **Early Return Strategy**: Immediately return false if a closing bracket is encountered while the stack is empty, or if it doesn't match the most recent opening bracket.

```cpp title="Valid Parentheses.cpp"
#include <stack>
#include <string>

class Solution {
public:
    bool isValid(std::string s) {
        std::stack<char> st;

        for (char c : s) {
            // Case 1: If it's an opening bracket, push to stack
            if (c == '(' || c == '[' || c == '{') {
                st.push(c);
            } 
            // Case 2: If it's a closing bracket
            else {
                // If stack is empty, there's no matching opening bracket
                if (st.empty()) return false;

                char top = st.top();
                // Check for mismatch
                if ((c == ')' && top != '(') ||
                    (c == ']' && top != '[') ||
                    (c == '}' && top != '{')) {
                    return false;
                }
                st.pop(); // Match found, remove from stack
            }
        }

        // All brackets must be matched for the stack to be empty
        return st.empty();
    }
};
```