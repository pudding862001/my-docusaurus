---
title: Ch 5 Control Flow
sidebar_label: Ch 5 Control Flow
sidebar_position: 5
---

In this chapter, we master **Control Flow**, which allows our programs to make decisions and repeat actions. We will cover **Conditional Statements** (`if`), **Loops** (`for`, `while`), and **Loop Control** keywords (`break`, `continue`).

---

## 1. Conditional Statements (if / elif / else)

Conditional statements allow the program to execute specific blocks of code based on whether a condition is `True` or `False`.

* **Indentation**: Python relies on indentation (whitespace) to define the scope of the code block.
* **`input()`**: Used to get data from the user. Note that `input()` always returns a **string**, so you often need to convert it using `int()` or `float()`.

```python
# Basic logic
if 1 < 0:
    print('This will not print')
    print('because 1 is not less than 0')

print('hello all')

# User Input and Decision Making
# Remember to cast the input to an integer for numerical comparison
b = int(input("Please input a number: "))
print(b, type(b))

if b > 0:
    print('This number is greater than 0')
elif b == 0:
    print('This is 0')
else:
    print('This is less than 0')
```

---

## 2. For Loops

A `for` loop is used to iterate over a sequence (like a string, list, tuple, or dictionary).

### Iterating over Sequences
You can loop through Strings, Lists, and Tuples directly.

```python
# String Iteration
a = '12345'
for item in a:
    print(item)  # Prints '1', '2', '3', '4', '5'

# List Iteration
b = [1, 2, 3, 4]
for item in b:
    print(item)

# Tuple Iteration
c = ('a', 'b', 'c', 'd')
for item in c:
    print(item)
```

### Iterating over Dictionaries
Dictionaries function slightly differently in loops.
* **Default**: Iterating over a dictionary directly yields its **Keys**.
* **`.items()`**: Use this method to iterate over both **Keys and Values**.

```python
d = {
    1: 'a',
    2: 'b',
    3: 'c'
}

# Print only keys (Default behavior)
for item in d:
    print(item)
# Output: 1, 2, 3

# Print key-value pairs (as tuples)
for item in d.items():
    print(item)
# Output: (1, 'a'), (2, 'b'), (3, 'c')
```

---

## 3. While Loops

A `while` loop repeatedly executes a block of code as long as a specified condition remains `True`.

* **Use Case**: When you don't know beforehand how many times you need to loop.
* **Caution**: Ensure you have logic to change the condition to `False` (e.g., decrementing a counter), otherwise you will create an **Infinite Loop**.

```python
a = 10

while a > 0:
    print(a)
    a = a - 1  # Decrement a to eventually break the loop

print('end')
```

---

## 4. Loop Control (Break & Continue)

Python provides two powerful keywords to alter the flow of a loop.

### Break
The `break` statement **terminates** the loop entirely. The program jumps to the code immediately following the loop.

```python
# Example: Stop the loop when i is not divisible by 3
# (Logic from your file, assuming we want to demonstrate stopping)
for i in range(10):
    print(i)
    if i % 3 != 0:
        break 
```

### Continue
The `continue` statement **skips the rest of the current iteration** and jumps back to the top of the loop to start the next iteration.

```python
# Example: Print only even numbers
for i in range(10):
    # If i is odd (remainder is not 0), skip this iteration
    if i % 2 != 0:
        continue
    print(i)
# Output: 0, 2, 4, 6, 8
```

---