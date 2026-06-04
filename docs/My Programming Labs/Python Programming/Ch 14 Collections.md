---
title: Ch 14 Collections & Advanced Data Structures
sidebar_label: Ch 14 Collections
sidebar_position: 14
---

In this chapter, we explore advanced data structures in Python, primarily focusing on the built-in `collections` module. These data structures provide high-performance alternatives to standard lists, dicts, and tuples for specific use cases.

---

## 1. Tuple Review & Sequence Unpacking

While tuples are immutable sequences, Python provides powerful ways to extract their data, known as **Sequence Unpacking**.

* **Basic Unpacking**: Assigning tuple elements to variables directly. Use `_` to ignore a value.
* **Advanced Unpacking (`*`)**: Using the asterisk `*` collects remaining elements into a list.

```python
my_tuple = ('hello', 1, 3, 5)

# Basic Unpacking (ignoring the second element)
name, _, y, z = my_tuple
print(name, y, z)  # Output: hello 3 5

# Advanced Unpacking
myname, *version = my_tuple
print(myname)      # Output: hello
print(version)     # Output: [1, 3, 5] (Notice this becomes a mutable list!)
```

---

## 2. Named Tuple (`namedtuple`)

A `namedtuple` is the perfect middle ground between a standard `tuple` (simple but not intuitive) and a `class` (intuitive but verbose). It allows you to access tuple elements by **name** instead of just an index.

```python
from collections import namedtuple

# 1. Standard Tuple: Hard to read, what does index 1 mean?
s1 = ('Richard', 33)
print(s1[1])

# 2. Named Tuple: Intuitive and lightweight
# Define the template 'Student' with fields 'name' and 'age'
Student = namedtuple('Student', ['name', 'age'])

s3 = Student('Paul', 40)
s4 = Student('Nico', 50)

print(s3.age)   # Output: 40
print(s4.name)  # Output: Nico
```

---

## 3. Double-Ended Queue (`deque`)

A `deque` (pronounced "deck") is optimized for fast appends and pops from **both ends**. Standard lists are fast at the end, but very slow when inserting at the beginning `[0]`.

* `appendleft()` / `popleft()`: Fast operations at the front.
* `extendleft()`: Adds an iterable to the front (note: it reverses the order of the iterable).
* **Performance Warning**: While `deque` is great for manipulating ends, **Lists are faster** for random index access (e.g., searching `d[59999]`) and standard appends.

```python
from collections import deque

d = deque([1, 2, 3])

d.append(4)          # Right append: deque([1, 2, 3, 4])
d.appendleft(0)      # Left append:  deque([0, 1, 2, 3, 4])

d.pop()              # Removes 4
d.popleft()          # Removes 0

d.extendleft([0, -1])
print(d)             # Output: deque([-1, 0, 1, 2, 3])
```

---

## 4. Default Dictionary (`defaultdict`)

When working with standard dictionaries, accessing or adding to a key that doesn't exist raises a `KeyError`. `defaultdict` solves this by automatically assigning a default value to non-existent keys.

* `defaultdict(int)`: Defaults to `0`. Excellent for counting.
* `defaultdict(list)`: Defaults to `[]`. Excellent for grouping items.

```python
from collections import defaultdict

word_list = ['is', 'who', 'when', 'it', 'is', 'who', 'is']

# Using defaultdict(int) to count words
result = defaultdict(int)

for word in word_list:
    result[word] += 1  # No KeyError! Automatically starts at 0.

print(result)
# Output: defaultdict(<class 'int'>, {'is': 3, 'who': 2, 'when': 1, 'it': 1})

# Custom default using a function
def set_default():
    return {'name': '', 'age': 0}

custom_dict = defaultdict(set_default)
print(custom_dict['missing_key']) # Output: {'name': '', 'age': 0}
```

---

## 5. Counter

`Counter` is a specialized dictionary subclass designed specifically for counting hashable objects. It is the cleanest way to tally items.

* `.most_common(n)`: Returns the top `n` most frequent elements.
* `.update()`: Adds new elements to the existing count.

```python
from collections import Counter

word_list = ['is', 'who', 'when', 'it', 'is', 'who', 'is']

c = Counter(word_list)
print(c)
# Output: Counter({'is': 3, 'who': 2, 'when': 1, 'it': 1})

s = Counter('sfasfasfsfsdiirtwjjklasrjjjjsfjjwi0')

# Get the top 3 most common characters
print(s.most_common(3))

# Update counts with new data
s.update('ssssssssss')
```

---

## 6. Ordered Dictionary (`OrderedDict`)

Historically (before Python 3.7), standard dictionaries did not remember the order in which items were inserted. `OrderedDict` was created to solve this.

* **Modern Python**: Standard `dict` now preserves order by default.
* **When to use `OrderedDict`**: When you need specific ordering methods like `move_to_end()`.

```python
from collections import OrderedDict

d = OrderedDict()

d['a'] = 1
d['b'] = 2
d['c'] = 3
d['d'] = 4

print(d)

# OrderedDict specific method
d.move_to_end('a')
print(d) # 'a' is moved to the end of the dictionary
```

---