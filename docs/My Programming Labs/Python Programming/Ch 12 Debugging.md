---
title: Ch 12 Debugging & Testing
sidebar_label: Ch 12 Debugging
sidebar_position: 12
---

In this chapter, we transition from writing code to **Maintaining** code. We will explore different strategies for **Debugging** (finding errors) and **Testing** (verifying correctness), ranging from simple print statements to professional frameworks.

---

## 1. Debugging Strategies

When your code doesn't work as expected, you need a strategy to inspect it.

### Level 1: Print Debugging
The most common and simple method. You insert `print()` statements to check variable values at specific lines.
* **Pros**: Easy to set up.
* **Cons**: Messy code; you have to remove them later.

```python
numbers = [1, 2, 3, 4, -5, 12, 0]

def all_even(num_list):
    even_numbers = []
    for num in num_list:
        # Debugging by printing
        print('Checking number =', num)
        
        if num % 2 == 0:
            print('Find even number! Number =', num)
            even_numbers.append(num)
    return even_numbers

all_even(numbers)
```

### Level 2: PDB (Python Debugger)
Python's built-in interactive debugger. It pauses execution and lets you inspect the state.
* **Usage**: `import pdb; pdb.set_trace()`
* **Commands**:
    * `n` (next): Execute next line.
    * `s` (step): Step into a function.
    * `c` (continue): Continue until the next breakpoint.
    * `p variable`: Print the value of a variable.

```python
import pdb

# The program will PAUSE here
pdb.set_trace()

numbers = [1, 2, 3, 4]

def all_even(num_list):
    even_numbers = []
    for num in num_list:
        if num % 2 == 0:
            even_numbers.extend(num) # This might cause an error (int is not iterable)
    return even_numbers

# You can inspect 'numbers' in the console when paused
newlist = all_even(numbers)
```

### Level 3: VS Code Debugger
The most efficient way for modern development.
* **Breakpoints**: Click the left margin to set a red dot.
* **Watch**: Monitor specific variables in the side panel.
* **Call Stack**: See the chain of function calls.

---

## 2. Advanced Tracing (PySnooper)

Sometimes you want to see *everything* that happens in a complex algorithm without writing 100 print statements. **PySnooper** is a powerful decorator that logs every line execution and variable change.

* **Usage**: Add `@pysnooper.snoop()` before the function.

```python
import pysnooper

# Automatically prints a log of every line executed and variable change
@pysnooper.snoop()
def number_to_bits(number):
    if number:
        bits = []
        while number:
            number, remainder = divmod(number, 2)
            bits.insert(0, remainder)
        return bits
    else:
        return [0]

number_to_bits(6)
```

---

## 3. Testing Frameworks

Testing ensures your code behaves as expected and prevents "regressions" (breaking old features when adding new ones).

### Doctest (Documentation Testing)
You write tests directly inside the function's **Docstring**. It serves as both documentation and a test.
* **Syntax**: Use `>>>` to simulate a Python shell.
* **Run**: `import doctest; doctest.testmod()`

```python
def add(a, b):
    """
    Function description...

    >>> add(1, 2)
    3
    >>> add(4, 5)
    9
    >>> add('a', 1)
    Traceback (most recent call last):
    TypeError: can only concatenate str (not "int") to str
    """
    return a + b

if __name__ == '__main__':
    import doctest
    doctest.testmod()
```

### Unittest (Standard Framework)
Python's standard testing library (similar to JUnit in Java). It uses a class-based structure.
* **Setup**: Create a class inheriting from `unittest.TestCase`.
* **Naming**: Test methods must start with `test_`.
* **Assertions**: Use `self.assertEqual`, `self.assertRaises`, etc.

```python
import unittest

# Assume we have a function 'add' in 'mymath.py'
from mymath import add 

class TestAdd(unittest.TestCase):

    # Test Case 1: Normal addition
    def test_add(self):
        self.assertEqual(add(7, 8), 15)
        self.assertEqual(add(1, 2), 3)

    # Test Case 2: Check for inequality
    def test_add_2(self):
        self.assertNotEqual(add(10, 20), 500)

    # Test Case 3: Error handling (Expecting an error)
    def test_add_error(self):
        # We expect a ValueError if inputs are not integers
        self.assertRaises(ValueError, add, 1, 1.2)

if __name__ == '__main__':
    unittest.main()
```

---