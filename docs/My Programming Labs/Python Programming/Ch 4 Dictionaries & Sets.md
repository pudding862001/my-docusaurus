---
title: Ch 4 Dictionaries & Sets
sidebar_label: Ch 4 Dicts & Sets
sidebar_position: 4
---

In this chapter, we explore two advanced data structures: **Dictionaries** (Key-Value pairs) and **Sets** (Unique collections). These structures are optimized for fast lookups and efficient data management.

---

## 1. Dictionaries

A **Dictionary** is a mutable, unordered collection of items. Each item is a pair consisting of a **Key** and a **Value**. Dictionaries are defined using curly braces `{}` or the `dict()` constructor.

### Defining Dictionaries & Key Constraints
* **Syntax**: `{key: value}`.
* **Key Constraints**: Keys must be **Immutable** data types (e.g., Integers, Strings, Tuples). **Lists cannot be keys** because they are mutable.
* **Values**: Values can be of any data type.

```python
# Basic Definition
a = {
    1: 'a',
    2: 'b',
    3: 9
}

# Creating using dict() constructor
e = dict(a=1, b=2, c='a')

# --- Key Immutability Rule ---
l1 = [1, 2, 3]  # List (Mutable)
t1 = (1, 2, 3)  # Tuple (Immutable)

# b = {l1: 1}   # Error! List cannot be a key.
c = {t1: l1}    # OK! Tuple can be a key.
```

### Accessing and Modifying Data
* **Access**: You can access values using square brackets `['key']`. However, if the key doesn't exist, Python raises an error.
* **Best Practice (`.get()`)**: Using the `.get()` method is safer. If the key is missing, it returns `None` instead of crashing the program.
* **Case Sensitivity**: Keys are case-sensitive (`Name` is different from `name`).

```python
d = {
    'Name': 'Jack',
    'Age': 9,
    'Grade': 'A'
}

# 1. Accessing values
print(d['Name'])        # Output: Jack
# print(d['name'])      # Error! Key 'name' does not exist.

# 2. Safe Access (Best Practice)
print(d.get("Name"))    # Output: Jack
print(d.get("name"))    # Output: None (No error)

# 3. Modifying / Adding
e = dict(a=1)
e['d'] = 123            # Add new key-value pair
e['a'] = 999            # Overwrite existing key
print(e)                # Output: {'a': 999, 'd': 123}
```

### Common Methods
* `.keys()`: Returns a list of all keys.
* `.values()`: Returns a list of all values.
* `.items()`: Returns a list of tuples containing (key, value) pairs.

```python
print(d.keys())
print(d.values())
print(d.items())
```

---

## 2. Sets

A **Set** is an unordered collection of **unique** elements. It is defined using curly braces `{}` (without key-value pairs) or the `set()` function.

### Core Features
* **Unordered**: Items do not have a fixed position (no indexing).
* **Unique**: Duplicate elements are automatically removed.
* **Fast Lookups**: Checking if an item exists (`in`) is very fast compared to Lists.

```python
# Defining a set
b = {'Mon', 'Tue', 'Wed'}
print(type(b))      # <class 'set'>

# Membership Testing (Fast)
print('Mon' in b)   # True
print('Fri' in b)   # False
```

### Deduplication (Removing Duplicates)
One of the most common uses of sets is to remove duplicate items from a list.

```python
list1 = [2, 3, 5, 3, 2, 1, 7, 2]

# Convert list to set (Removes duplicates)
s1 = set(list1)
print(s1)           # Output: {1, 2, 3, 5, 7} (Order may vary)

# Convert back to list
list2 = list(s1)
print(list2)        # Output: [1, 2, 3, 5, 7]
```

### Adding and Removing
* `add()`: Adds an element. Adding a duplicate has no effect.
* `remove()`: Removes an element. Raises an error if the element doesn't exist.

```python
s1 = {1, 2, 3}

s1.add(10)          # Add 10
s1.add(10)          # Try adding 10 again (No change)
print(s1)           # Output: {1, 2, 3, 10}

s1.remove(10)       # Removes 10
# s1.remove(10)     # Error! 10 is no longer in the set.
```

---

## 3. Set Operations

Sets support mathematical operations like Union, Intersection, and Difference. This is powerful for comparing two groups of data.

* **Intersection (`&`)**: AND (Elements in **both** sets).
* **Union (`|`)**: OR (Elements in **either** set).
* **Symmetric Difference (`^`)**: XOR (Elements in either set, but **not both**).
* **Difference (`-`)**: Elements in the first set but **not** in the second.

```python
s1 = {1, 2, 3, 4}
s2 = {3, 4, 5, 6}

# 1. Intersection (AND)
print(s1 & s2)      # Output: {3, 4}

# 2. Union (OR)
print(s1 | s2)      # Output: {1, 2, 3, 4, 5, 6}

# 3. Symmetric Difference (XOR)
print(s1 ^ s2)      # Output: {1, 2, 5, 6}

# 4. Difference
print(s1 - s2)      # Output: {1, 2} (In s1, remove items found in s2)
print(s2 - s1)      # Output: {5, 6} (In s2, remove items found in s1)
```

---