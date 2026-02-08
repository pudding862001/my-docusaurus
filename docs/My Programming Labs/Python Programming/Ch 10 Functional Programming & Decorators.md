---
title: Ch 10 Functional Programming & Decorators
sidebar_label: Ch 10 Functional & Decorators
sidebar_position: 10
---

In this chapter, we explore **Functional Programming** concepts in Python, including anonymous functions (`lambda`), higher-order functions (`map`, `filter`, `reduce`), and **Decorators**, which allow us to modify the behavior of functions dynamically.

---

## 1. Advanced Function Concepts

In Python, functions are "First-Class Citizens". This means functions can be passed as arguments to other functions, just like integers or strings.

```python
# Passing a function as an argument
def test(x, f):
    return f(x)

# Passing standard built-in functions
print(test([1, 2, 3, 4], sum))  # Output: 10
print(test([1, 5, 9], max))     # Output: 9
```

---

## 2. Lambda Functions (Anonymous Functions)

A `lambda` function is a small, anonymous function defined with the `lambda` keyword. It can take any number of arguments, but can only have one expression.

* **Syntax**: `lambda arguments : expression`
* **Use Case**: Short, throwaway functions used for a short period of time.

```python
# Standard Function
def add(x, y):
    return x + 2 * y

# Equivalent Lambda Function
f = lambda x, y: x + 2 * y

print(add(1, 2))  # Output: 5
print(f(1, 2))    # Output: 5

# Using Lambda inside another function
def add_n(n):
    return lambda x: n + x  # Returns a function

f_40 = add_n(40)
print(f_40(1))    # Output: 41
```

---

## 3. Map, Filter, and Reduce

These are classic functional programming tools used to process collections of data without writing explicit loops.

### `map()`
Applies a function to every item in an iterable (like a list).

```python
a = [1, 2, 3, 4]

# Square every number
b = map(lambda x: x * x, a)

# Map returns an iterator, so we loop to print
for item in b:
    print(item)
# Output: 1, 4, 9, 16
```

### `filter()`
Filters items out of an iterable based on a function that returns `True` or `False`.

```python
a = [5, 6, 7, 8, 9, 10]

# Keep only odd numbers
# Logic: x % 2 == 1 returns True for odd numbers
c = filter(lambda x: x % 2 == 1, a)

for item in c:
    print(item)
# Output: 5, 7, 9
```

### `reduce()`
Applies a rolling computation to sequential pairs of values in a list. It returns a single result.
* **Note**: Must be imported from `functools`.

```python
from functools import reduce

a = [1, 2, 3, 4]

# Cumulative Sum: (((1+2)+3)+4)
c = reduce(lambda x, y: x + y, a)
print(c)  # Output: 10
```

---

## 4. List Comprehension

List Comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list. It is more "Pythonic" than using `map` or `filter`.

* **Syntax**: `[expression for item in iterable if condition]`

```python
a = [1, 2, 3, 4]

# Copy a list
b = [item for item in a]

# Modify items (Like Map)
c = [item * item for item in a]
print(c)  # Output: [1, 4, 9, 16]

# Filter items (Like Filter)
# Keep only even squares
d = [item * item for item in a if item % 2 == 0]
print(d)  # Output: [4, 16]
```

---

## 5. Decorators

Decorators allow you to wrap another function in order to extend the behavior of the wrapped function, without permanently modifying it.

### Basic Decorator
Conceptually, `f = demo(test1)` is what happens under the hood.

```python
def demo(f):
    def wrapper(x):
        print(f"Calling function: {f.__name__}")
        return f(x)
    return wrapper

@demo  # Syntactic Sugar
def test1(x):
    return x * 2

print(test1(2))
# Output:
# Calling function: test1
# 4
```

### Decorators with Arguments (`*args`, `**kwargs`)
To make a decorator work with *any* function (regardless of how many arguments it has), use `*args` and `**kwargs`.

```python
def demo_new(s):
    def flexible_demo(f):
        def wrapper(*args, **kwargs):
            print(f"Log: {s}")       # Custom message from decorator arg
            print(f"Function: {f.__name__}")
            return f(*args, **kwargs)
        return wrapper
    return flexible_demo

@demo_new('Start Processing')
def test5(x, y, z):
    print(f'x={x}, y={y}, z={z}')

test5(1, 2, 3)
```

### Preserving Metadata (`@functools.wraps`)
When you decorate a function, it loses its original metadata (like `__name__` and `__doc__`). Use `@functools.wraps` to fix this.

```python
import functools

def demo(f):
    @functools.wraps(f)  # Preserves metadata of 'f'
    def wrapper(*args, **kwargs):
        """Wrapper Docstring"""
        return f(*args, **kwargs)
    return wrapper

@demo
def test1(x, y):
    """This is the original docstring."""
    print(x, y)

print(test1.__name__)  # Output: test1 (Without wraps, it would be 'wrapper')
print(test1.__doc__)   # Output: This is the original docstring.
```

---