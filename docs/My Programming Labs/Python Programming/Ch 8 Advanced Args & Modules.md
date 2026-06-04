---
title: Ch 8 Advanced Args & Modules
sidebar_label: Ch 8 Args & Modules
sidebar_position: 8
---

In this chapter, we level up our function skills with **Variable Arguments** (`*args`, `**kwargs`) and learn how to organize code into reusable **Modules**. We also explore how to create custom libraries and control their execution behavior.

---

## 1. Advanced Function Arguments

Python allows functions to accept an arbitrary number of arguments, making them incredibly flexible.

### `*args` (Variable Positional Arguments)
* **Syntax**: The asterisk `*` collects extra positional arguments into a **Tuple**.
* **Usage**: Useful when you don't know how many arguments the user will pass (e.g., a sum function).

```python
# A function that can sum ANY number of arguments
def newadd(*args):
    print(type(args))   # Output: <class 'tuple'>
    result = 0
    for item in args:
        result += item
    return result

print(newadd(1, 2, 3, 4, 5))  # Output: 15
```

### `**kwargs` (Variable Keyword Arguments)
* **Syntax**: The double asterisk `**` collects extra keyword arguments into a **Dictionary**.
* **Usage**: Useful for passing configuration settings or named parameters dynamically.

```python
def add(**kwargs):
    print(kwargs)       # Output: {'a': 1, 'b': 2, 'c': 3}
    # Use .get() to safely access values
    return (kwargs.get('a') + kwargs.get('b')) * kwargs.get('c')

# Must pass arguments as key=value pairs
print(add(a=1, b=2, c=3))  # Output: 9
```

### Default Arguments & Ordering Rules
You can set default values for parameters. If the caller doesn't provide a value, the default is used.

* **Rule**: When calling a function, **Positional arguments** must always come **before** **Keyword arguments**.

```python
def test(a, b=False):
    if b:
        return a
    else:
        return a * a

# 1. Positional call (uses default b=False)
print(test(2))          # Output: 4

# 2. Keyword call
print(test(a=2, b=True)) # Output: 2

# 3. Mixing (Valid: Positional first)
print(test(2, b=False))

# 4. Mixing (Invalid: Keyword first)
# print(test(b=False, 3)) # SyntaxError: positional argument follows keyword argument
```

---

## 2. Modules and Imports

As programs grow, we split code into separate files called **Modules**. A module is simply a `.py` file containing Python code.

### Import Order Best Practice
To keep code clean, imports should be grouped in this order:
1.  **Standard Library Imports** (e.g., `sys`, `os`)
2.  **Third-Party Imports** (e.g., `flask`, `requests`)
3.  **Local Application/Library Imports** (User-defined files)

```python
import sys
# from flask import * from my_math_tool import * # Importing our custom library

print(sys.version_info)
```

### Creating a Custom Library (`my_math_tool.py`)
You can create your own library (e.g., `my_math_tool.py`) and import it into another file (e.g., `Ch8 module.py`).

**The Problem with Imports:**
When you import a file, Python **executes** all the code inside it immediately. This means if your library has `print()` statements for testing, they will run when you import it!

**The Solution: `if __name__ == '__main__':`**
This block ensures that specific code runs **only** when the file is run directly, and **not** when it is imported as a module.

**File: `my_math_tool.py`**
```python
def my_sum(*args):
    result = 0
    for item in args:
        result += item
    return result

# This line runs EVERY time this file is imported
print("This line will always print upon import")

# This block runs ONLY if you run 'python my_math_tool.py' directly
if __name__ == '__main__':
    print("This line prints ONLY when running this file directly")
    print(my_sum(1, 2, 3))
```

**File: `Ch8 module.py`**
```python
from my_math_tool import *

# When this runs:
# 1. "This line will always print upon import" -> Prints
# 2. "This line prints ONLY when running..." -> DOES NOT Print
# 3. We can use the function:
print(my_sum(1, 2, 3, 4))
```

---