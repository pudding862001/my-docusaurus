---
title: Ch 15 Advanced OOP & Magic Methods
sidebar_label: Ch 15 Advanced OOP
sidebar_position: 15
---

In this chapter, we dive deeper into Object-Oriented Programming (OOP) in Python. We will explore the philosophy that "Everything is an Object," learn how to use Magic Methods (Dunder methods) to customize class behavior, and master advanced type checking.

---

## 1. Everything is an Object

In Python, everything is fundamentally an object, including data types, classes, and even functions. This means they all share common behaviors and can be manipulated dynamically.

* **Type Hierarchy**: Python's object hierarchy goes from metaclasses (like `<type 'type'>`) down to classes (like `<type 'object'>`, `<type 'list'>`, or custom classes), and finally to individual instances.
* **`type()` and `__bases__`**: You can use the `type()` function to check the exact type of an object or class. The `__bases__` attribute allows you to see the parent classes that a specific class inherits from.

```python
class Student:
    pass

class B(Student):
    pass

l1 = [1, 2, 3]

# Checking types
print(type(l1))       # Output: <class 'list'>
print(type(list))     # Output: <class 'type'>
print(type(Student))  # Output: <class 'type'>

# Checking inheritance base
print(Student.__bases__) # Output: (<class 'object'>,)
```

---

## 2. Magic Methods (Dunder Methods)

Magic methods, also known as "Dunder" (Double Underscore) methods, allow you to define how your custom objects behave with built-in Python operations (like `+`, `<`, `len()`, or `print()`).

### Common Magic Methods
* `__init__(self)`: The constructor, called when an object is created.
* `__repr__(self)`: Defines the "official" string representation of an object, mainly used for debugging. If `__str__` is not defined, `print()` will fall back to using `__repr__`.
* `__str__(self)`: Defines the "informal" or user-friendly string representation of an object used by `print()`.
* `__len__(self)`: Defines the behavior for the built-in `len()` function.
* `__eq__(self, other)`: Defines behavior for the equality operator `==`.
* `__lt__(self, other)`: Defines behavior for the less-than operator `<`.

### Example: Custom Account Class

```python
class Account:
    def __init__(self, name, amount=0):
        self.name = name
        self.amount = amount
        self._transaction = []  # Hidden transaction list

    # Defines what len(account) returns
    def __len__(self):
        return len(self._transaction)
    
    # Developer-friendly representation
    def __repr__(self):
        return f'Account({self.name}, {self.amount})'

    # User-friendly representation (used by print)
    def __str__(self):
        return f'name={self.name}, amount={self.amount}'
    
    @property
    def total(self):
        return self.amount + sum(self._transaction)

    # Defines '==' behavior
    def __eq__(self, other):
        return self.total == other.total
    
    # Defines '<' behavior
    def __lt__(self, other):
        return self.total < other.total

    def add_transaction(self, amount):
        self._transaction.append(amount)


# Usage
a1 = Account('Jack', 10)
a1.add_transaction(100)
a1.add_transaction(-20)

print(len(a1))  # Uses __len__, Output: 2
print(a1)       # Uses __str__, Output: name=Jack, amount=10

a2 = Account('Bill', 50)
a2.add_transaction(200)

# Uses __eq__ and __lt__
print(a1 == a2) # Output: False
print(a1 < a2)  # Output: True
```

---

## 3. The `@property` Decorator

The `@property` decorator allows you to define a method that can be accessed like a normal attribute, omitting the parentheses `()`. This is excellent for calculating values on the fly while keeping a clean interface.

```python
# From the Account class above:
# Accessing via a normal method requires ()
# print(a.balance())

# Accessing via @property omits ()
print(a1.total) # Output: 90
```

---

## 4. Advanced Type Checking (`isinstance`)

The `isinstance()` function is used to check if an object is an instance of a specific class or any of its subclasses.

* **Inheritance Rule**: An instance of a child class is also considered an instance of its parent class.
* **Tuple of Classes**: You can pass a tuple of classes to `isinstance()`. It acts as an `OR` condition, returning `True` if the object matches any class in the tuple.

```python
class A:
    pass

class B(A): # B inherits from A
    pass

class C:
    pass

a = A()
b = B()

# Basic checking
print(isinstance(a, A)) # Output: True
print(isinstance(a, B)) # Output: False (Parent is not an instance of Child)

# Inheritance checking
print(isinstance(b, B)) # Output: True
print(isinstance(b, A)) # Output: True (Child is an instance of Parent!)

# Checking multiple classes at once using a tuple
print(isinstance(b, (A, B, C))) # Output: True (Equivalent to b is A OR b is B OR b is C)
```

---