---
title: Ep66 Variable Capture (Effectively Final)
hide_title: true
sidebar_label: Ep66 Variable Capture
sidebar_position: 66
---

## Ep66 Variable Capture (Effectively Final)

In this episode, we explore the concept of **Variable Capture**. While lambda expressions can access variables from their enclosing scope (local variables), those variables must be "effectively final". This means that once a variable is used inside a lambda, its value cannot be changed anywhere else in the code.

---

### The Effectively Final Restriction

A variable is "effectively final" if its value is never changed after it is initialized. If a lambda expression captures a local variable, the Java compiler enforces this restriction to prevent concurrency issues and ensure consistency.

[Image showing the scope of a local variable being captured by a lambda]

```java
interface FunctionalInterface {
    int func(int a);
}

public class Main {
    public static void main(String[] args) {

        int thing = 25; // Local variable initialization

        FunctionalInterface ex = (int a) -> {
            int result;
            // Capturing the variable 'thing' from the outer scope
            result = thing; 
            return result;
        };

        // ERROR: The line below will cause a compilation error.
        // Once 'thing' is captured by the lambda, it is treated as a constant.
        // thing = 2414;

        System.out.println("Captured value: " + ex.func(0));
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **Variable Access**: The lambda expression `ex` accesses the local variable `thing`. This process is called "capturing" because the lambda is taking a snapshot or a reference to that variable's value.
* **Effectively Final Rule**: Java requires that any local variable accessed from within a lambda expression must be declared `final` or be "effectively final" (meaning its value never changes after initialization).
* **Modification Error**: Attempting to reassign `thing = 2414` after it has been used in a lambda violates this rule. The compiler will throw an error stating that "local variables referenced from a lambda expression must be final or effectively final".
* **Scope Limitation**: This restriction applies specifically to **local variables** (variables defined inside a method). Instance variables (fields of a class) do not have this strict "effectively final" requirement when used in lambdas.

---

### Key Takeaways for Variable Capture

| Feature | Description |
| :--- | :--- |
| **Variable Capture** | The ability of a lambda to use variables from its surrounding method scope. |
| **Effectively Final** | A variable whose value is never changed after it is assigned. |
| **Compile Error** | Occurs if you try to modify a captured local variable anywhere in the method. |
| **Reasoning** | Ensures that the lambda has a consistent value to work with, especially in multi-threaded environments. |

---

> [!CAUTION]
> Remember that the "effectively final" rule applies to the **variable reference** itself. If you capture an object (like a List), you cannot reassign the variable to a new List, but you *can* still modify the contents of that list (e.g., adding or removing items). However, for primitive types like `int`, any change is a reassignment and is therefore prohibited.

---