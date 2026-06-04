---
title: Ep62 Block Lambda Expressions
hide_title: true
sidebar_label: Ep62 Block Lambda Expressions
sidebar_position: 62
---

## Ep62 Block Lambda Expressions

In this episode, we move from simple single-expression lambdas to **Block Lambdas**. While expression lambdas are great for one-line calculations, block lambdas allow you to include multiple statements, loops, and complex logic inside curly braces `{}`.

---

### Using Block Syntax for Complex Logic

A block lambda looks similar to a method body. Because it contains multiple statements, you must explicitly use the `return` keyword if the functional interface expects a return value.


```java
// Functional Interface for String manipulation
interface StringFI {
    String giveString(String n);
}

// Functional Interface for Numeric array processing
interface NumberFI {
    int newArray(int[] array);
}

public class Main {
    public static void main(String[] args) {
        
        // 1. Block Lambda for reversing a String
        StringFI reverse = (String a) -> {
            String reversedString = "";
            // Block lambdas can contain full loops
            for (int i = a.length() - 1; i >= 0; i--) {
                reversedString = reversedString + a.charAt(i);
            }
            return reversedString; // Explicit return is required here
        };

        System.out.println(reverse.giveString("baby")); // Prints: ybab

        // 2. Block Lambda for finding the sum of an array
        NumberFI sumfinder = (int[] array) -> {
            int sum = 0;
            for (int i = 0; i < array.length; i++) {
                sum = sum + array[i];
            }
            return sum; // Returns the calculated integer
        };

        int[] numbers = {1, 2, 3, 4};
        System.out.println(sumfinder.newArray(numbers)); // Prints: 10
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **Explicit Return Statement**: Unlike expression lambdas (which have an implicit return), any block lambda that returns a value must use the `return` keyword.
* **Variable Scope**: Variables declared inside the block lambda (like `reversedString` or `sum`) are local to that lambda block and cannot be accessed outside of it.
* **Loop Integration**: Block lambdas are essential when the task requires iteration, such as traversing a `String` from back to front or summing elements in an array.
* **Semicolon Usage**: In a block lambda, every statement inside the curly braces must end with a semicolon, just like in a standard Java method.

---

### Expression vs. Block Lambdas

| Feature | Expression Lambda | Block Lambda |
| :--- | :--- | :--- |
| **Body Braces** | Not used. | Required `{ }`. |
| **Return Keyword** | Implicit (forbidden). | **Mandatory** for return types. |
| **Complexity** | Limited to one expression. | Allows multiple statements and loops. |
| **Semicolons** | Only at the end of the full statement. | Used after every statement inside the block. |

---

> [!TIP]
> While block lambdas are powerful, if your lambda body becomes too long or complex, it might be better to move that logic into a private method and use a **Method Reference** (which we will cover in a future episode) to keep your code clean and readable.

---