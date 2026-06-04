---
title: Ep36 Throw Keyword
hide_title: true
sidebar_label: Ep36 Throw Keyword
sidebar_position: 36
---

## Ep36 Throw Keyword

In this episode, we explore the `throw` keyword in Java. While Java automatically throws exceptions for errors like division by zero, the `throw` keyword allows developers to manually trigger an exception based on specific logic or to re-throw an existing exception for further handling.

---

### Understanding the Throw Keyword

The `throw` keyword is used to explicitly throw an exception from a method or any block of code. This is particularly useful for validation or when you want to pass an exception up the call stack after performing some local logging.

```java
class RandomClassName {
    static void exceptionStuff() {
        try {
            // Manually creating and throwing a NullPointerException
            throw new NullPointerException();
        } catch(NullPointerException e) {
            System.out.println("This exception was caught inside of the method");
            // Re-throwing the exception so the caller can handle it too
            throw e;
        }
    }
}

public class Main {
    public static void main(String[] args) {

        // 1. Nested Throw and Catch Example
        try {
            try {
                throw new NullPointerException();
            } catch (NullPointerException e) {
                System.out.println("There was an exception!");
                System.out.println(e);
            }
        } catch(NullPointerException e) {
            // This block would only execute if the inner catch re-threw the exception
            System.out.println("There was an exception 2!");
        }

        // 2. Catching from a function (Re-thrown exception)
        try {
            RandomClassName.exceptionStuff();
        } catch(NullPointerException e) {
            System.out.println("It was finally caught within the outer try statement.");
        }

        // 3. Another throw and catch example
        try {
            throw new ClassNotFoundException();
        } catch(ClassNotFoundException e) {
            System.out.println("Dodged that bullet!!");
        }
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

1.  **Manual Triggering**: The code uses `throw new NullPointerException()` to simulate a null reference error.
2.  **Re-throwing Exceptions**: In the `exceptionStuff()` method, the exception is caught locally to print a log message, but then `throw e;` is used to send the same exception object to the `main` method.
3.  **Nested Catching**: The first example in the `main` method shows that an exception caught by an inner `catch` block will not reach the outer `catch` block unless it is explicitly re-thrown.
4.  **Catching Multiple Types**: The final example shows that `throw` can be used with various exception classes, such as `ClassNotFoundException`, provided they are handled correctly.

---

### Key Takeaways

| Action | Keyword / Syntax | Description |
| :--- | :--- | :--- |
| **Throw New** | `throw new Exception();` | Creates a new exception object and throws it immediately. |
| **Re-throw** | `throw e;` | Takes an exception caught in a `catch` block and throws it again. |
| **Call Stack** | N/A | When an exception is re-thrown, it moves up to the next available `try-catch` block in the call hierarchy. |

> [!TIP]
> **Re-throwing** is a common pattern in professional development. It allows you to perform "cleanup" actions (like closing a database connection or logging the error) at a low level while still informing the higher-level logic that an error occurred.

---