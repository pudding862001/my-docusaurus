---
title: Ch 9 File I/O & System Modules
sidebar_label: Ch 9 File I/O
sidebar_position: 9
---

In this chapter, we learn how to interact with the outside world. We will cover **File Reading/Writing**, managing file paths with **OS** and **Pathlib**, handling **Binary Data**, and **Object Serialization** using Pickle.

---

## 1. Basic File Operations

Python uses the built-in `open()` function to interact with files. It requires a file path and a **Mode**.

### File Modes
Understanding file modes is essential to avoid accidental data loss.

| Mode | Description | Note |
| :--- | :--- | :--- |
| **r** | **Read** (Default) | Error if file doesn't exist. |
| **w** | **Write** | Creates new file or **overwrites** existing content. |
| **a** | **Append** | Adds content to the end. Does not overwrite. |
| **x** | **Exclusive Creation** | Fails if file already exists. |
| **b** | **Binary** | Non-text files (images, PDF). |
| **t** | **Text** (Default) | Normal text files. |

### Writing Files & Encoding
When writing non-English characters (like Chinese), always specify `encoding='utf8'`.

```python
# 'w' mode overwrites file; 'a' mode appends to it
f = open('hello.txt', 'w', encoding='utf8')

f.write("Hello World\n")
f.write("中文字 testing\n")  # Writing Chinese requires encoding

# Writing multiple lines at once
f.writelines(["Line 2\n", "Line 3\n"])

f.close() # Always close the file!
```

### Reading Files
There are three main ways to read file content:
1.  `read()`: Reads the entire file as a single string.
2.  `readline()`: Reads one line at a time.
3.  `readlines()`: Reads all lines into a **List**.

```python
f = open('hello.txt', 'r', encoding='utf8')

# Method 1: Read all lines into a list
lines = f.readlines()
print(lines)  # Output: ['Hello World\n', '中文字 testing\n', ...]

# Reset cursor to the beginning (0)
f.seek(0)

# Method 2: Read line by line using loop (Memory efficient)
for line in f:
    print(line.strip()) # strip() removes the newline character

f.close()
```

---

## 2. Binary Files & Bytes

Sometimes we need to handle raw data (like images) or distinguish between text and bytes.

* **String (`str`)**: `'hello'` (Text).
* **Bytes (`bytes`)**: `b'hello'` (Raw data).

```python
# 'wb' = Write Binary
f = open('data.bin', 'wb')
f.write(b'hello world') # Must add 'b' prefix
f.close()

# 'rb' = Read Binary
f = open('data.bin', 'rb')
data = f.read()
print(data)         # Output: b'hello world'
print(type(data))   # Output: <class 'bytes'>
f.close()
```

---

## 3. System Input & Output

Beyond `input()` and `print()`, the `sys` module gives us control over standard streams.

```python
import sys

# Advanced Print: Custom separator and end character
print('Python', 'Hello', sep='------', end='....\n')
# Output: Python------Hello....

# Reading multi-line input from user (Stop with Ctrl+Z on Windows or Ctrl+D on Mac/Linux)
print("Enter multiple lines (Ctrl+Z to stop):")
user_input = sys.stdin.readlines()
print(user_input)
```

---

## 4. File System Management (`os` vs `pathlib`)

Python offers two ways to manage file paths and directories.

### The Old Way: `os` Module
Traditional method, treats paths as strings.

```python
import os

print(os.getcwd())          # Get Current Working Directory
print(os.listdir())         # List all files/folders

# Checking existence
print(os.path.exists('hello.txt')) # True/False
print(os.path.isdir('demo'))       # Check if it is a folder

# Cross-platform path joining (Handles Windows '\' vs Mac '/')
full_path = os.path.join('C:', 'Users', 'Demo', 'file.txt')
print(full_path)
```

### The Modern Way: `pathlib` Module
Object-Oriented approach (Recommended for Python 3+). It overloads the `/` operator for path joining.

```python
from pathlib import Path

# Get current directory object
p = Path.cwd()

# Joining paths using '/' operator (Very clean!)
file_path = p / 'demo' / 'text.txt'
print(file_path)

# Easy Read/Write without open/close
# file_path.write_text('Hello Pathlib', encoding='utf-8')

# Searching files (Globbing)
# glob('*') = List all files
# rglob('*') = Recursive list (include subfolders)
print("--- Finding all .txt files ---")
for file in p.rglob("*.txt"):
    print(file)
```

---

## 5. Object Serialization (`pickle`)

You cannot write a Python object (like a Class Instance or Dictionary) directly to a text file. You must **serialize** it first. **Pickle** converts objects into a byte stream.

* `pickle.dump(obj, file)`: Save object to file.
* `pickle.load(file)`: Load object from file.

```python
import pickle

class People:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def sayhi(self):
        print(f"Hi, I am {self.name}")

# 1. Serialization (Saving)
p1 = People('Jack', 20)

f = open('person.data', 'wb') # Write Binary
pickle.dump(p1, f)
f.close()

# 2. Deserialization (Loading)
f = open('person.data', 'rb') # Read Binary
p2 = pickle.load(f)
f.close()

# The loaded object retains its data AND methods
print(p2.name)   # Output: Jack
p2.sayhi()       # Output: Hi, I am Jack
```

---