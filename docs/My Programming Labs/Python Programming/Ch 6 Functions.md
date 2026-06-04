---
title: Ch 6 Functions
sidebar_label: Ch 6 Functions
sidebar_position: 6
---

In this chapter, we dive into **Functions**, which allow us to encapsulate code into reusable blocks. We will cover function definition, parameter passing, variable scope (Local vs. Global), and the concept of Recursion.

---

## 1. Defining and Calling Functions

Functions are defined using the `def` keyword. They help organize code and avoid repetition.

### Basic Syntax
* **`def`**: Starts the function definition.
* **`return`**: Sends a result back to the caller. If omitted, the function returns `None` by default.
* **Polymorphism**: Python functions can often handle different data types (like integers or lists) as long as the operations inside are valid for those types.

```python
# Defining a simple function
def demo(a, b):
    print(a + b)

demo('hello', 'world')  # Output: helloworld

# Function with a return value
def sum(a, b):
    return a + b

print(sum(1, 2))        # Output: 3

# Working with Lists (Polymorphism)
# The '+' operator works for lists too (concatenation)
print(sum([1, 2], [3, 4])) 
# Output: [1, 2, 3, 4]
```

### Keyword Arguments
You can call functions using specific parameter names, allowing you to switch the order of arguments.

```python
# Using keyword arguments
print(sum(a=[3, 4], b=[1, 2]))
# Output: [3, 4, 1, 2]
```

### Practical Example: Custom Max Function
Here is an example of implementing a function to find the maximum value in a list manually.

```python
def my_max(a):
    if not a:  # Check if list is empty
        return None
    max_value = a[0]

    for item in a:
        if item > max_value:
            max_value = item
    return max_value

a = [1, 3, 5, 6, 9]
print(my_max(a))  # Output: 9
```

---

## 2. Variable Scope (Local vs. Global)

Understanding where variables are accessible is crucial.

* **Local Scope**: Variables defined inside a function are local to that function. They are destroyed when the function exits.
* **Global Scope**: Variables defined outside any function are global.
* **`global` Keyword**: To modify a global variable *inside* a function, you must declare it as `global`.

```python
# --- Local Variable Example ---
a = 5
print('Original a:', a)  # 5

def demo(a):
    a = a + 1   # This 'a' is local only
    return a

print('Function returns:', demo(a))  # 6
print('New a:', a)      # 5 (Original variable is unchanged)


# --- Global Keyword Example ---
z = 1
print('Original z:', z)  # 1

def demo2(val):
    global z    # Tell Python we want to use the global 'z'
    z = z + val
    print('Inside function z:', z)

x = 2
demo2(x)
print('New z:', z)      # 3 (Global variable IS changed)
```

---

## 3. Recursion

Recursion occurs when a function calls itself. It is a powerful technique for solving problems that can be broken down into smaller, similar sub-problems (like factorials).

### Factorial Example (n!)
* **Iterative Approach**: Uses a loop (Traditional).
* **Recursive Approach**: The function calls itself with `n-1` until it reaches a **Base Case**.

```python
# Factorial Logic: n! = n * (n-1) * ... * 1

# Recursive Function
def test(n):
    # Base Case: Stop when n is 1
    if n == 1:
        return n
    # Recursive Step: n * factorial of (n-1)
    return n * test(n-1)

print(test(5)) 
# Calculation: 5 * 4 * 3 * 2 * 1 = 120
```

---

## 4. Truth Value Testing

In Python, non-boolean values can be evaluated in a boolean context (like an `if` statement).

* **True**: Non-zero numbers, non-empty strings/lists.
* **False**: `0`, `None`, empty strings `""`, empty lists `[]`.

```python
a = -3

# -3 is non-zero, so it evaluates to True
if a:
    print('True')
else:
    print('False')

# Output: True
```

---