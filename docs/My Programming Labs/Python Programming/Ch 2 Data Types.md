---
title: Ch 2 Data Types
sidebar_label: Ch 2 Data Types
sidebar_position: 2
---

In this chapter, we explore the fundamental primitive data types in Python: **Numbers (Integers & Floats)**, **Strings**, and **Booleans**. These are the most basic building blocks used to store and manipulate data.

---

## 1. Numbers (Integers & Floats)

Python handles numbers effortlessly. Unlike some languages, you do not need to declare the specific type (like `int` or `double`) beforehand; Python infers it automatically.

### Integers (`int`)
Integers are whole numbers, positive or negative, without decimals.
* **Examples**: `10`, `-5`, `0`.

### Floats (`float`)
Floating-point numbers are numbers containing a decimal point.
* **Examples**: `3.14`, `-0.01`, `2.0`.

### Basic Arithmetic
Python acts as a powerful calculator. Note the difference between standard division and floor division.

```python
x = 10      # int
y = 3.14    # float

# Addition & Subtraction
print(x + 5)    # 15
print(x - 2)    # 8

# Multiplication
print(x * 3)    # 30

# Division (Always returns a float)
print(10 / 2)   # 5.0

# Power (Exponentiation)
print(2 ** 3)   # 8 (2 to the power of 3)
```

---

## 2. Strings

Strings are sequences of characters used to store text. Python provides multiple ways to define and manipulate them.

### Defining Strings & Escaping
* **Quotes**: You can use single `'` or double `"` quotes.
* **Escaping**: If your string contains quotes inside it, use a backslash `\` to "escape" them.

```python
# Escaping double quotes inside a string
a = "This is \"my home\" "
print(a)          # Output: This is "my home" 
print(type(a))    # Output: <class 'str'>
```

### Indexing and Operations
* **Indexing**: Access specific characters. `[-1]` gets the last character.
* **Concatenation (`+`)**: Joins strings.
* **Repetition (`*`)**: Repeats a string.

```python
a = "best"
print(a[-1])      # Output: t (The last character)

b = "hello"
print(a + b)      # Output: besthello (Concatenation)
print(b * 5)      # Output: hellohellohellohellohello (Repetition)
```

### String Formatting (Crucial)
Python offers three main ways to format strings. **f-strings** are the modern standard, but you should recognize all three.

1.  **Old Style (`%`)**: Requires specifying type (`%s` for string, `%d` for integer).
2.  **`.format()`**: Replaces `{}` placeholders.
3.  **f-strings**: Embeds variables directly using `{var}`.

```python
name = 'Python'
age = 27

# 1. Old Style (%) - Type sensitive
new_str1 = "I am %s, I am %d years old" % (name, age)
print(new_str1)

# 2. .format() Method - More flexible
new_str2 = "I am {}, I am {} years old".format(name, age)
# You can also use named arguments for clarity
new_str3 = "I am {name}, I am {age} years old".format(name='William', age='36')
print(new_str3)

# 3. f-strings (Recommended for Python 3.6+)
new_str4 = f"I am {name}, I am {age} years old"
print(new_str4)
```

---

## 3. Booleans and None

### Booleans (`bool`)
Booleans represent one of two values: `True` or `False`. They are often the result of comparisons (e.g., `10 > 5`).

### NoneType (`None`)
`None` is a special constant in Python that represents the **absence of a value** or a null value. It is distinct from `0` or an empty string `""`.

* **Checking for None**: The Pythonic way to check if a variable is `None` is to use the `is` operator, not `==`.

```python
a = None

# Correct way to check if a variable is None
if a is None:
    print(a)    # Output: None
```

---