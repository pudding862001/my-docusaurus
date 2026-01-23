---
title: Ep56 Automatically Closing File Streams
hide_title: true
sidebar_label: Ep56 Automatically Closing File Streams
sidebar_position: 56
---

## Ep56 Automatically Closing File Streams

In this episode, we introduce the **try-with-resources** statement. This feature, added in Java 7, simplifies resource management by ensuring that streams (like `FileInputStream`) are closed automatically at the end of the statement, even if an exception occurs. This eliminates the need for manual `close()` calls in a `finally` block.

---

### The Try-with-Resources Syntax

By declaring the resource within parentheses directly after the `try` keyword, Java guarantees the resource will be closed as soon as the block is finished.


```java
import java.io.FileInputStream;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {

        int input;
        
        // The resource is declared and initialized inside the try(...) parentheses
        try(FileInputStream fin = new FileInputStream("test.txt")) {
            do {
                input = fin.read();
                // Casting the byte to a character for display
                System.out.println((char) input);
                
                // Note: Standard EOF check is usually -1
            } while(input != -1); 
            
            // No fin.close() is needed here! It happens automatically.

        } catch (IOException e) {
            System.out.println("An error occurred: " + e);
        }
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **Auto-Close Mechanism**: The `FileInputStream` is defined as part of the `try` statement. Because `FileInputStream` implements the `AutoCloseable` interface, Java handles the cleanup for you.
* **Safety**: Even if the code inside the `do-while` loop throws an exception, the stream is guaranteed to be closed before the `catch` block executes.
* **Conciseness**: The code is much cleaner because you no longer need to check if the stream is `null` before closing it, nor do you need a separate `try-catch` inside a `finally` block.
* **Loop Control**: The loop reads data until the end-of-file signal is reached, processing each byte as a character.

---

### Comparison of Resource Management

| Feature | Traditional Try-Catch | Try-with-Resources |
| :--- | :--- | :--- |
| **Manual Close** | Required (usually in `finally`) | **Not Required** (Automatic) |
| **Code Length** | Longer and more complex | Shorter and more readable |
| **Risk of Leaks** | High (if `close()` is forgotten) | Low (Handled by JVM) |
| **Java Version** | Available in all versions | Java 7 and newer |

---

> [!IMPORTANT]
> To use this syntax, the class must implement the `java.lang.AutoCloseable` or `java.io.Closeable` interface. Most I/O classes (like `BufferedReader`, `FileOutputStream`, etc.) already implement these, making them perfect candidates for try-with-resources.

---