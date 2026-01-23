---
title: Ep34 Exceptions
hide_title: true
sidebar_label: Ep34 Exceptions
sidebar_position: 34
---

## Ep34 Exceptions

In this episode, we introduce the concept of **Exceptions** in Java. An exception is an event that occurs during the execution of a program, disrupting the normal flow of instructions and typically causing the application to crash if not handled properly.

---

### Understanding the Runtime Crash

Java uses exceptions to signal that something has gone wrong at runtime. One of the most common and simple examples is a mathematical error, such as dividing by zero.

#### 📁 Main.java
The following example demonstrates how a simple calculation can trigger an `ArithmeticException`.

```java
public class Main {
    public static void main(String[] args) {

        // Exception Example
        int bob = 500;
        
        // This line will trigger a runtime error
        int c = bob / 0;

        // Output: Exception in thread "main" java.lang.ArithmeticException: / by zero
    }
}
```

---

### What Happens Behind the Scenes?

1.  **The Trigger**: The JVM encounters an operation that is mathematically undefined (division by zero).
2.  **The Throw**: Java "throws" an object of type `ArithmeticException` containing details about the error.
3.  **The Halt**: Since there is no code to "catch" or handle this error, the program stops executing immediately at that line.
4.  **The Stack Trace**: The error message provided in the comments shows the thread where it happened and the specific type of exception.

---

### Key Takeaways

| Term | Description |
| :--- | :--- |
| **Exception** | A signal that an error occurred during program execution. |
| **ArithmeticException** | A runtime exception thrown when an exceptional arithmetic condition (like division by zero) has occurred. |
| **Runtime Error** | An error that happens while the program is running, as opposed to a compile-time error. |

> [!IMPORTANT]
> When an exception occurs, any code located *after* the error line will not be executed. Building robust software requires learning how to anticipate these errors and handle them gracefully using `try-catch` blocks.

---