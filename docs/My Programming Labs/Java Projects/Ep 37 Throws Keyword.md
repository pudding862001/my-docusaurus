---
title: Ep37 Throws Keyword
hide_title: true
sidebar_label: Ep37 Throws Keyword
sidebar_position: 37
---

## Ep37 Throws Keyword

In this episode, we explore the `throws` keyword in Java. While the `throw` keyword is used to trigger an exception, the `throws` keyword is used in a method signature to declare that the method might throw one or more exceptions during its execution.

---

### Understanding the Throws Declaration

The `throws` keyword acts as a warning to the caller of a method. It indicates that the caller must either handle the specified exception using a `try-catch` block or declare the exception themselves to be handled further up the call stack.

```java
class Whale {
    // Declaring that this method might throw a ClassNotFoundException
    static void beep() throws ClassNotFoundException {
        System.out.println("BEEEEEEEP");
        // Manually throwing the exception as declared
        throw new ClassNotFoundException();
    }
}

public class Main {
    public static void main(String[] args) {
        try {
            // Since beep() declares 'throws', we must wrap it in a try-catch
            Whale.beep();
        } catch(ClassNotFoundException e) {
            System.out.println(e);
            System.out.println("BY PASSED Error");
        }
    }
}
```

---

### Execution Logic Analysis

Based on the implementation in the provided source:

* **Method Signature**: The `beep()` method explicitly uses `throws ClassNotFoundException`, which categorized it as a method that may result in a checked exception.
* **Mandatory Handling**: Because `ClassNotFoundException` is a checked exception, the `main` method cannot call `Whale.beep()` without handling it; doing so would result in a compile-time error.
* **Flow of Control**: When `Whale.beep()` is executed, it prints "BEEEEEEEP" before the `throw` statement terminates the method and passes the exception back to the `main` method's `catch` block.
* **Error Recovery**: The `catch` block in `Main` successfully intercepts the exception, prints the error details, and executes a recovery message: "BY PASSED Error".

---

### Comparison: throw vs. throws

| Keyword | Purpose | Location |
| :--- | :--- | :--- |
| **throw** | Used to actually trigger/fire an exception. | Inside the method body. |
| **throws** | Used to declare that a method might throw an exception. | In the method signature. |

---

> [!NOTE]
> Using `throws` is essential for **Checked Exceptions**. It forces other developers who use your methods to acknowledge and handle potential errors, making the code more robust and predictable.

---