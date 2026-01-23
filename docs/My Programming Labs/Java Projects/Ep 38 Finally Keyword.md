---
title: Ep38 Finally Keyword
hide_title: true
sidebar_label: Ep38 Finally Keyword
sidebar_position: 38
---

## Ep38 Finally Keyword

In this episode, we introduce the `finally` block. This is a powerful feature in Java's exception handling mechanism that ensures a specific block of code is executed regardless of whether an exception was thrown or caught.

---

### The "Always Run" Guarantee

The `finally` block follows the `try` and `catch` blocks. Its primary purpose is to perform cleanup operations—such as closing file streams or database connections—that must happen whether the program succeeds or fails.


```java
public class Main {
    public static void main(String[] args) {

        // Example 1: Exception is caught and handled
        try {
            throw new NullPointerException();
        } catch(NullPointerException e) {
            System.out.println(e);
            System.out.println("Error Handled");
        } finally {
            // This runs after the catch block
            System.out.println("Finally Always RUNS!!!!!");
        }

        // Example 2: Exception is thrown but NOT caught
        try {
            throw new NullPointerException();
        } finally {
            // Even if the program crashes, this block executes first
            System.out.println("Finally STILL RUNS!!!!!");
        }
    }
}
```

---

### Execution Logic Analysis

Based on the examples provided in the source code:

* **Handled Exceptions (Example 1)**: When a `NullPointerException` is thrown, the `catch` block executes first to handle the error. The `finally` block then runs immediately afterward.
* **Unhandled Exceptions (Example 2)**: Even if there is no `catch` block to intercept the error, Java guarantees that the `finally` block executes before the program terminates or passes the exception up the call stack.
* **Cleanup Reliability**: The output demonstrates that while the logic inside `try` might fail, the `finally` block remains a reliable "safety zone" for critical code.

---

### Exception Handling Components

| Block | Execution Condition | Purpose |
| :--- | :--- | :--- |
| **`try`** | Always runs first. | Contains risky code that might fail. |
| **`catch`** | Runs only if a specific exception occurs. | Handles the error and prevents a crash. |
| **`finally`** | **Always runs** regardless of success or failure. | Mandatory cleanup (closing resources). |

---

> [!IMPORTANT]
> A `finally` block is so persistent that it will execute even if the `try` or `catch` block contains a `return` statement. The only way to stop a `finally` block from running is if the JVM itself is terminated (e.g., `System.exit(0)`) or if the thread is killed.

---