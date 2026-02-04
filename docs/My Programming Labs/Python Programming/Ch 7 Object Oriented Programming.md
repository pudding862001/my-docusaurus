---
title: Ch 7 Object Oriented Programming
sidebar_label: Ch 7 OOP
sidebar_position: 7
---

In this chapter, we explore **Object-Oriented Programming (OOP)**, a paradigm that structures programs around "objects" rather than just functions and logic. This is essential for building scalable and manageable applications.

We will cover **Classes**, **Instances**, **Attributes**, **Methods**, **Encapsulation**, and **Inheritance**.

---

## 1. Classes and Instances

Think of a **Class** as a blueprint (template), and an **Instance** (Object) as the actual building created from that blueprint.

* **Class**: Defines the structure and behaviors (Virtual type).
* **Instance**: A specific object created from the class (Physical member).
* **`__init__`**: The constructor method. It initializes the object's attributes when created.
* **`self`**: Refers to the specific instance being created or used.

```python
# Defining a Class
class People:
    # The Constructor
    def __init__(self, name, age):
        self.name = name  # Instance Attribute
        self.age = age    # Instance Attribute

    # Instance Method
    def sayhi(self):
        print(f"Hi, my name is {self.name}, and I am {self.age} years old")

# Creating Instances (Instantiation)
p1 = People(name='Jack', age=20)
p1.sayhi()  # Output: Hi, my name is Jack...

# Checking Types
print(type(p1))                 # <class '__main__.People'>
print(isinstance(p1, People))   # True
```

---

## 2. Class Attributes vs. Instance Attributes

It is crucial to distinguish between data that belongs to a specific object and data that belongs to the class itself.

* **Instance Attribute**: Defined inside `__init__` using `self.variable`. Unique to each object.
* **Class Attribute**: Defined directly inside the class (outside methods). **Shared** by all instances.

```python
class Student:
    count = 0  # Class Attribute (Shared)

    def __init__(self, name):
        Student.count += 1  # Increment the shared counter
        self.name = name    # Instance Attribute (Unique)

s1 = Student('Amy')
s2 = Student('Jack')

# Accessing Instance Attribute
print(s1.name)      # Amy

# Accessing Class Attribute
print(Student.count) # 2 (Because two students were created)

# Be careful! s1.count = 1 creates a NEW instance attribute masking the class attribute
s1.count = 100
print(s1.count)      # 100 (Instance value)
print(Student.count) # 2 (Class value remains unchanged)
```

---

## 3. Types of Methods

Python classes can have three types of methods. Understanding when to use which is key to good design.

1.  **Instance Methods**: The most common type. Requires `self`. Can access/modify instance state (`self.name`).
2.  **Class Methods (`@classmethod`)**: Requires `cls`. Can access/modify class state (`cls.count`). Used for factory methods.
3.  **Static Methods (`@staticmethod`)**: No `self` or `cls`. Works like a regular function but belongs in the class namespace for logical grouping.

```python
class People:
    def __init__(self, name):
        self.name = name

    # 1. Instance Method (Can access self.name)
    def sayhi(self):
        print(f"Hi, I am {self.name}")

    # 2. Class Method (Can access class variables)
    @classmethod
    def test1(cls):
        print('This is a class method.')
        # cls.test2() # Can call other static/class methods

    # 3. Static Method (Independent utility)
    @staticmethod
    def test2():
        print('This is a static method.')

p1 = People('Jack')
p1.sayhi()      # Call Instance Method
People.test1()  # Call Class Method
People.test2()  # Call Static Method
```

---

## 4. Encapsulation & Visibility

Encapsulation restricts direct access to some of an object's components. Python uses naming conventions to denote visibility.

* **Public**: `name` (Accessible from anywhere).
* **Protected**: `_name` (Internal use convention, still accessible but "polite" warning).
* **Private**: `__name` (Name mangling, hard to access from outside).

```python
class People:
    def __init__(self, name):
        self.name = name           # Public
        self._protect_sex = 'M'    # Protected (Convention)
        self.__private_var = 10    # Private (Hidden)

    def get_secret(self):
        return self.__private_var  # Accessible inside the class

p = People('Jack')
print(p.name)           # OK
print(p._protect_sex)   # OK (but you shouldn't)
# print(p.__private_var) # Error! AttributeEror
```

### The `@property` Decorator
The "Pythonic" way to manage encapsulation is using properties. This allows you to use getter and setter logic (e.g., validation) while accessing attributes like variables.

```python
class People:
    def __init__(self, name):
        self._name = name

    # Getter
    @property
    def name(self):
        return self._name.upper() # Transform data when reading

    # Setter
    @name.setter
    def name(self, value):
        if len(value) < 3:
            print("Name too short!")
        else:
            self._name = value

p = People('Jack')
print(p.name)   # Output: JACK (Calls getter)
p.name = 'Al'   # Output: Name too short! (Calls setter)
```

---

## 5. Inheritance and Polymorphism

**Inheritance** allows a child class to derive attributes and methods from a parent class, promoting code reuse. **Polymorphism** allows different classes to be treated as instances of the same general class through a common interface.

### Inheritance & Overriding
Child classes can override methods of the parent class to provide specific implementations.

```python
class Animal:
    def eat(self):
        print('Animal is eating')

# Inheritance
class Bird(Animal):
    def sing(self):
        print('Bird is singing')
    
    # Method Overriding
    def eat(self):
        print('Bird is eating seeds')

class Dog(Animal):
    def eat(self):
        print('Dog is eating bones')

b = Bird()
b.eat()   # Output: Bird is eating seeds (Overridden)
b.sing()  # Output: Bird is singing (New method)
```

### Polymorphism in Action
We can write a function that accepts any object, and as long as the object has the expected method (e.g., `eat()`), the function will work.

```python
def demo_eat(animal):
    print('--- Demo Start ---')
    animal.eat()

a = Animal()
b = Bird()
d = Dog()

# The function works for all types of animals
for item in [a, b, d]:
    demo_eat(item)
    # Output changes dynamically based on the object type
```

---