---
title: Ep24 Inheritance
hide_title: true
sidebar_label: Ep24 Inheritance
sidebar_position: 24
---

## Ep24 Inheritance

In this episode, we learn about **Inheritance**, one of the core pillars of Object-Oriented Programming (OOP). Inheritance is the process where one class (subclass) acquires the properties and methods of another class (superclass). This allows for code reusability and a logical hierarchy in your program.

### Key Takeaways:

* **Superclass vs. Subclass**: The **Superclass** (Parent) is the existing class being inherited from, and the **Subclass** (Child) is the new class that inherits from the parent.
* **The `extends` Keyword**: We use the `extends` keyword to establish an inheritance relationship between two classes.
* **Code Reusability**: Common attributes and behaviors (like `go()` or `stop()`) are defined once in the superclass, so they don't need to be rewritten in every subclass.
* **"is-a" Relationship**: Inheritance represents an "is-a" relationship. For example, a `Car` **is-a** `Vehicle`, and a `Bicycle` **is-a** `Vehicle`.
* **Accessing Parent Members**: Subclasses can directly access non-private fields and methods of their parent class.

---

### Episode 24 Code:

```java
class Vehicle {
    double speed;

    void go() {
        System.out.println("This vehicle