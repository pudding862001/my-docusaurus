---
title: Ep57 Generics Introduction
hide_title: true
sidebar_label: Ep57 Generics Introduction
sidebar_position: 57
---

## Ep57 Generics Introduction

In this episode, we introduce **Generics**. Generics allow you to create classes, interfaces, and methods in which the type of data they operate on is specified as a parameter. This provides a way to reuse code with different data types while maintaining strict type safety.

---

### Generics vs. The Object Class

Before Generics, programmers often used the `Object` class to create "generic" structures. However, using `Object` requires manual type casting and is prone to runtime errors. Generics move these checks to compile-time.


```java
// The Generic Way: Type-safe and clean
class Booty<ParamType> {
    ParamType variable;

    public Booty(ParamType variable) {
        this.variable = variable;
    }

    public ParamType getVariable() {
        return variable;
    }

    public void setVariable(ParamType variable) {
        this.variable = variable;
    }
}

// The Old Way: Using Object (Requires Casting)
class Cat {
    Object object;
    public Cat(Object object) {
        this.object = object;
    }

    public Object getObject() {
        return object;
    }
}

public class Main {
    public static void main(String[] args) {
        // Using Generics: No casting needed!
        Booty<Integer> booty1 = new Booty<>(45);
        int one = booty1.getVariable(); // Automatic type handling

        Booty<String> booty2 = new Booty<>("This is cool");
        String two = booty2.getVariable();

        // Using Object: Manual casting is mandatory
        Cat kitty = new Cat(45);
        int three = (Integer) kitty.getObject(); // Must cast to Integer
        
        Cat kitty2 = new Cat("meow");
        String four = (String) kitty2.getObject(); // Must cast to String
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **Type Parameters**: In `class Booty<ParamType>`, `ParamType` is a placeholder for the actual type that will be passed when an object is created.
* **Compile-Time Checking**: When you define `Booty<Integer>`, the compiler ensures that only integers can be passed to `setVariable()`. If you tried to pass a String, the code would not compile.
* **Eliminating Casts**: With the `Cat` class, the `getObject()` method returns an `Object`. The programmer must remember what type of data was stored and manually cast it (e.g., `(String)`), which can lead to `ClassCastException` if done incorrectly.
* **Type Inference**: In modern Java, you can use the diamond operator `<>` when calling the constructor (e.g., `new Booty<>(45)`), as the compiler can infer the type from the variable declaration.

---

### Key Takeaways

| Feature | Generic Class (`Booty<T>`) | Object-Based Class (`Cat`) |
| :--- | :--- | :--- |
| **Type Safety** | High (Compile-time checks) | Low (Runtime risks) |
| **Casting** | Not required | Required for every retrieval |
| **Readability** | High (Type is explicit) | Low (Type is hidden as Object) |
| **Performance** | Slightly better (No runtime casting) | Slightly slower (Casting overhead) |

---

> [!TIP]
> Use Generics whenever you are creating a "container" class (like a List, Stack, or Wrapper) that needs to work with different types of data but should only hold one specific type at a time.

---