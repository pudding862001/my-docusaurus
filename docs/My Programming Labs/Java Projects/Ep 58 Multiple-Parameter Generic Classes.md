---
title: Ep58 Multiple-Parameter Generic Classes
hide_title: true
sidebar_label: Ep58 Multiple-Parameter Generic Classes
sidebar_position: 58
---

## Ep58 Multiple-Parameter Generic Classes

In this episode, we expand on our knowledge of Generics by creating classes that can handle more than one type parameter. This is incredibly useful for data structures like "Pairs" or "Maps" where you need to associate two different types of objects together, such as a username (String) and an ID (Integer).

---

### Defining Multiple Type Parameters

You can specify multiple generic types by separating them with commas inside the angle brackets `< >`. While you can use any name for these parameters, common conventions include `T` for Type, `K` for Key, and `V` for Value.


```java
// A generic class with two independent type parameters: A and B
class Flower<A, B> {
    A objectVariableOne;
    B objectVariableTwo;

    public Flower(A objectVariableOne, B objectVariableTwo) {
        this.objectVariableOne = objectVariableOne;
        this.objectVariableTwo = objectVariableTwo;
    }

    public A getObjectVariableOne() {
        return objectVariableOne;
    }

    public void setObjectVariableOne(A objectVariableOne) {
        this.objectVariableOne = objectVariableOne;
    }

    public B getObjectVariableTwo() {
        return objectVariableTwo;
    }

    public void setObjectVariableTwo(B objectVariableTwo) {
        this.objectVariableTwo = objectVariableTwo;
    }
}

public class Main {
    public static void main(String[] args) {

        // Instantiating with two different types: String and Integer
        Flower<String, Integer> flower1 = new Flower<>("Kody is cool", 45);
        
        System.out.println(flower1.getObjectVariableOne()); // Prints: Kody is cool
        System.out.println(flower1.getObjectVariableTwo()); // Prints: 45

        // Updating values with type safety
        flower1.setObjectVariableOne("Wow");
        flower1.setObjectVariableTwo(60);
        
        System.out.println(flower1.getObjectVariableOne());
        System.out.println(flower1.getObjectVariableTwo());
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **Type Independence**: The types `A` and `B` are completely independent. You can use two different types (like `String` and `Integer`) or even the same type twice (like `String` and `String`).
* **Constructor Mapping**: The constructor is designed to receive one of each type, ensuring that the object is fully initialized with the correct data types immediately.
* **Strict Type Checking**: Once `flower1` is declared as `<String, Integer>`, the compiler will block any attempt to set `objectVariableTwo` to anything other than an `Integer`.
* **Scannable Getters/Setters**: The generic methods allow for retrieving the data without any manual casting, keeping the `main` method clean and readable.

---

### Generic Parameter Comparison

| Configuration | Syntax | Use Case |
| :--- | :--- | :--- |
| **Single Parameter** | `class Box<T>` | Simple containers, like a list of items. |
| **Multiple Parameters** | `class Pair<K, V>` | Mappings, coordinate systems (X, Y), or complex data relations. |
| **Recursive Parameters** | `class Node<T>` | Linked structures where the type is used within the same class. |

---

> [!TIP]
> While you can name your type parameters anything (like `A` and `B` used here), the Java community typically follows a naming convention: `E` for Element, `K` for Key, `V` for Value, and `T` for Type. Sticking to these will make your code easier for other developers to understand!

---