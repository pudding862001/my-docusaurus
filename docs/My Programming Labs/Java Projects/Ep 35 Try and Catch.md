---
title: Ep35 Try and Catch
hide_title: true
sidebar_label: Ep35 Try and Catch
sidebar_position: 35
---

## Ep35 Try and Catch

In this episode, we explore how to handle runtime errors gracefully using **Try and Catch** blocks. Instead of letting a program crash when an error occurs, we can "catch" the exception and provide a fallback solution.

---

### How Try and Catch Works

A `try` block is used to wrap code that might throw an exception. If an error occurs within that block, Java looks for a corresponding `catch` block to handle it.

#### 📁 Main.java
The following implementation demonstrates catching an `ArrayIndexOutOfBoundsException` when attempting to access an invalid array index.

```java
public class Main {
    public static void main(String[] args) {

        int c;
        try {
            int john = 500;
            // This operation is valid and will execute
            c = john / 1; 
            
            // This array has only one element (index 0)
            int coolArray[] = {1};
            
            // This line triggers an ArrayIndexOutOfBoundsException
            coolArray[3] = 10; 
            
        } catch(ArrayIndexOutOfBoundsException e) {
            // Execution jumps here immediately when the exception occurs
            System.out.println("Array Error");
            c = 0;
            
            // Printing the exception object provides error details
            System.out.println(e);
        }
    }
}
```

---

### Execution Logic

1.  **Normal Flow**: The program starts executing the `try` block. Mathematical operations like `john / 1` proceed normally if they are valid.
2.  **The Exception**: When the program reaches `coolArray[3]`, the JVM detects that index 3 does not exist for an array of size 1 and throws an `ArrayIndexOutOfBoundsException`.
3.  **The Jump**: The rest of the code inside the `try` block is skipped. The program immediately moves to the `catch` block that matches the exception type.
4.  **Resolution**: Inside the `catch` block, we handle the error by setting a default value for `c` and printing a custom error message to the console.

---

### Key Takeaways

| Component | Description |
| :--- | :--- |
| **try** | Contains the "risky" code that might generate an error. |
| **catch** | Executes only if a specific exception is thrown within the `try` block. |
| **Exception e** | Represents the exception object, allowing you to access error messages and types. |

> [!CAUTION]
> It is crucial to catch the **correct type** of exception. As seen in your code comments, catching an `ArrayIndexOutOfBoundsException` will not help if the actual error is an `ArithmeticException` (like division by zero). Each exception type must be handled by a compatible catch block.

---