---
title: Ep63 Generic Functional Interfaces & Lambdas
hide_title: true
sidebar_label: Ep63 Generic Functional Interfaces & Lambdas
sidebar_position: 63
---

## Ep63 Generic Functional Interfaces & Lambdas

In this episode, we combine two powerful Java features: **Generics** and **Lambda Expressions**. A Generic Functional Interface allows you to define a single interface template that can handle different data types, making your functional code highly reusable.

---

### Reusing Interfaces with Generics

By adding a type parameter (e.g., `<A>`) to a functional interface, you can create different lambda implementations for various types (like `String` or `Integer`) without needing to write multiple interfaces.


```java
// A single generic functional interface template
interface Thing<A> {
    A thingMethod(A a);
}

public class Main {
    public static void main(String[] args) {

        // 1. Implementation for String: Reversing a word
        Thing<String> reverse = (String s) -> {
            String reversedString = "";
            for(int i = s.length() - 1; i >= 0; i--) {
                reversedString = reversedString + s.charAt(i);
            }
            return reversedString;
        };
        System.out.println(reverse.thingMethod("pickle")); // Prints: elkcip

        // 2. Implementation for Integer: Finding factorial
        Thing<Integer> findFactorial = (number) -> {
            int result = 1;
            for (int i = 1; i <= number; i++) {
                result = i * result;
            }
            return result;
        };
        System.out.println(findFactorial.thingMethod(8)); // Prints: 40320
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **Type Specialization**: When you declare `Thing<String>`, the compiler treats the method signature as `String thingMethod(String a)`. When you declare `Thing<Integer>`, it treats it as `Integer thingMethod(Integer a)`.
* **Code Reusability**: Notice that the logic for string reversal and factorial calculation is completely different, yet they both fulfill the contract of the `Thing<A>` interface: taking one input and returning one output of the same type.
* **Block Lambda Flexibility**: Both implementations use block lambdas (with `{}` and `return`), allowing for complex algorithmic logic like loops and temporary variables within the functional framework.
* **Type Inference**: For the `findFactorial` lambda, the type of the parameter `(number)` is automatically inferred as `Integer` because it is assigned to a `Thing<Integer>` reference.

---

### Generic vs. Non-Generic Interfaces

| Feature | Non-Generic Interface | Generic Functional Interface |
| :--- | :--- | :--- |
| **Type Support** | Limited to the specific type defined in the source. | Can work with any reference type via parameters. |
| **Maintenance** | Requires creating new interfaces for each type (e.g., `StringFunc`, `IntFunc`). | One interface serves all types. |
| **Complexity** | Simple but repetitive. | Slightly more complex syntax but much higher flexibility. |

---

> [!TIP]
> Java provides a set of built-in generic functional interfaces in the `java.util.function` package, such as `Function<T, R>`, `Predicate<T>`, and `Consumer<T>`. Before creating your own, check if one of these standard interfaces already fits your needs!

---