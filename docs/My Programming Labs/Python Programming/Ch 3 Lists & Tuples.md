---
title: Ch 3 Lists & Tuples
sidebar_label: Ch 3 Lists & Tuples
sidebar_position: 3
---

In this chapter, we explore two of Python's most common data structures: **Lists** and **Tuples**. While they look similar, they serve very different purposes regarding mutability and performance.

---

## 1. Lists

Lists are **mutable** sequences, meaning you can modify them (add, remove, or change items) after they are created. They are defined using square brackets `[]`.

### Basic Operations
* **Indexing**: Access specific elements by their position (0-based).
* **Slicing**: Extract a portion of the list using `[start:end]`.
* **Print formatting**: You can customize how a list is printed using `sep` (separator) and `end` arguments in the `print()` function.

```python
a = [1, 2, 3, 4]

# Custom print formatting
# sep='-': joins items with a dash
# end='----': ends the output with dashes instead of a newline
print(a[0], a[1], a[2], sep='-', end='----') 
# Output: 1-2-3----

# Slicing (Start is inclusive, End is exclusive)
print(a[0:3]) 
# Output: [1, 2, 3]
```

### Key List Methods
Lists provide built-in methods to manipulate data dynamically.

* `remove(x)`: Removes the **first occurrence** of the value `x`.
* `insert(index, x)`: Inserts value `x` at the specified `index`.
* `reverse()`: Reverses the elements of the list **in place**.
* `sort()`: Sorts the list in ascending order. Use `reverse=True` for descending order.

```python
b = [1, 2, 3, 4, 5, 6, 7, 8]

b.remove(2)       # Remove the number 2
b.insert(1, 10)   # Insert 10 at index 1
print(b)          # Output: [1, 10, 3, 4, 5, 6, 7, 8]

b.reverse()       # Reverse the order
print(b)          # Output: [8, 7, 6, 5, 4, 3, 10, 1]

b.sort()          # Sort ascending
print(b)          # Output: [1, 3, 4, 5, 6, 7, 8, 10]

b.sort(reverse=True) # Sort descending
print(b)          # Output: [10, 8, 7, 6, 5, 4, 3, 1]
```

---

## 2. Tuples

Tuples are **immutable** sequences, defined using parentheses `()`. Once a tuple is created, you **cannot** change, add, or remove its elements.

### The Critical Difference: Mutability
This is a frequent interview topic.
* **List**: You can reassign values at specific indexes.
* **Tuple**: Attempting to reassign a value will raise a `TypeError`.

```python
my_list = [1, 2, 3, 4]
my_tuple = (1, 2, 3, 5)

# Modifying a List is allowed
my_list[3] = 5 
print(my_list)  # Output: [1, 2, 3, 5]

# Modifying a Tuple is FORBIDDEN
# my_tuple[3] = 6  
# Error: TypeError: 'tuple' object does not support item assignment
```

### Tuple Methods
Since tuples are immutable, they do not have methods like `sort()` or `reverse()`. However, they support retrieval methods.

* `index(x)`: Returns the index of the first occurrence of value `x`.

```python
# Finding the position of an element
a = my_tuple.index(5)
print(f"5 is the {a}th element in the tuple") 
# Output: 5 is the 3th element in the tuple
```

---

## 3. Performance & Use Cases

Why use Tuples if Lists are more flexible?

| Feature | List `[]` | Tuple `()` |
| :--- | :--- | :--- |
| **Mutability** | **Mutable** (Changeable) | **Immutable** (Unchangeable) |
| **Memory** | **Heavier**: Requires extra memory overhead to allow for growth (scaling). | **Lighter**: Fixed memory allocation since size is constant. |
| **Speed** | Slower iteration. | Faster iteration. |
| **Use Case** | Data that needs to be updated (Agile). | Data that should remain constant (Protected/Safe). |

> **Summary**: Use Lists when you have a collection of data that changes often. Use Tuples for "write-once, read-many" data where performance and data integrity are important.

---