---
title: Ep60 Generic Method & Constructor
hide_title: true
sidebar_label: Ep60 Generic Method & Constructor
sidebar_position: 60
---

## Ep60 Generic Method & Constructor

In this episode, we learn that generics are not limited to entire classes. You can define **Generic Methods** and **Generic Constructors** within classes that are otherwise non-generic. This provides the flexibility to use type parameters only for specific operations rather than the whole object.

---

### Implementing Localized Generics

A generic method defines its own type parameters before its return type. Similarly, a constructor can define its own type parameters before the class name. This allows the method or constructor to accept different types of arguments while maintaining strict type safety.


```java
// A non-generic class containing a static generic method
class nonGenericClass {
    // The type parameter <ArrayParam> is declared before the return type
    static <ArrayParam extends Number> double findHighestNumber(ArrayParam[] ourArray) {
        double highestNumber = 0.0;
        for (int i = 0; i < ourArray.length; i++) {
            if(ourArray[i].doubleValue() > highestNumber) {
                highestNumber = ourArray[i].doubleValue();
            }
        }
        return highestNumber;
    }
}

// A non-generic class containing a generic constructor
class nonGenericClass2 {
    double value;
    
    // The type parameter <A> is declared before the constructor name
    <A extends Number> nonGenericClass2(A number) {
        value = number.doubleValue();
    }

    public double getValue() {
        return value;
    }
}

public class Main {
    public static void main(String[] args) {
        Integer[] numbers = {10, 20, 30, 40};
        Double[] numbers2 = {3.0, 4.0, 5.0, 6.0};

        // Calling the generic method with different numeric arrays
        System.out.println(nonGenericClass.findHighestNumber(numbers));
        System.out.println(nonGenericClass.findHighestNumber(numbers2));

        // Using the generic constructor
        int nu = 10;
        nonGenericClass2 test = new nonGenericClass2(nu);
        System.out.println(test.getValue());
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **Method-Level Scope**: In `findHighestNumber`, the type parameter `ArrayParam` is local to that method. This allows the class `nonGenericClass` to remain a standard class while offering a powerful, type-safe utility for various numeric arrays.
* **Constructor Flexibility**: The constructor in `nonGenericClass2` can accept any type that extends `Number` (like `Integer`, `Float`, or `Byte`) and convert it to a `double` for internal storage.
* **Type Constraint Enforcement**: Both the method and constructor use the `extends Number` bound. If you attempt to pass a `String` array to the method or a `String` to the constructor, the compiler will block the action because `String` does not inherit from `Number`.
* **Implicit Type Inference**: When calling `findHighestNumber(numbers)`, you don't need to explicitly state the type; Java's compiler looks at the `numbers` array and automatically determines that `ArrayParam` should be `Integer`.

---

### Summary of Localized Generics

| Feature | Declaration Placement | Benefit |
| :--- | :--- | :--- |
| **Generic Method** | Before the return type (e.g., `<T> void move(T item)`) | Allows a single method to handle multiple types without making the whole class generic. |
| **Generic Constructor** | Before the constructor name (e.g., `<T> MyClass(T item)`) | Allows an object to be initialized with various types regardless of the class's own type parameters. |
| **Type Bounds** | Following the type parameter (e.g., `<T extends Number>`) | Restricts usage to compatible types and allows access to specific superclass methods (like `doubleValue()`). |

---

> [!TIP]
> Generic methods are often made `static` because they do not depend on the state of a specific object instance. This makes them perfect for utility libraries where you want to perform operations on arrays or collections of varying types.

---