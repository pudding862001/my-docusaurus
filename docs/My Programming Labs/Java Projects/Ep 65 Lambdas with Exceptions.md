---
title: Ep65 Lambdas with Exceptions
hide_title: true
sidebar_label: Ep65 Lambdas with Exceptions
sidebar_position: 65
---

## Ep65 Lambdas with Exceptions

In this episode, we explore how Lambda expressions interact with Java's exception handling system. A lambda expression can throw an exception, but if it throws a **checked exception**, that exception must be declared in the `throws` clause of the abstract method in the functional interface.

---

### Handling Checked Exceptions in Lambdas

When a functional interface method is defined with a `throws` clause, the lambda implementation is permitted to throw that specific exception or its subclasses. This is crucial for maintaining type safety and ensuring that the caller handles potential errors properly.


```java
// 1. Define a functional interface that declares a checked exception
interface NumbersFunction {
    int func(int[] array) throws EmptyArrayException;
}

// 2. Create a custom checked exception class
class EmptyArrayException extends Exception {
    EmptyArrayException() {
        super("Array is empty");
    }
}

public class Main {
    // The main method must also declare the exception if it doesn't catch it
    public static void main(String[] args) throws EmptyArrayException {

        int[] numbers = {1, 5, 2, 2000, 1200, 11, 200};
        int[] number2 = {};

        // 3. Implement the lambda that throws the exception if the array is empty
        NumbersFunction highestNum = (int[] a) -> {
            if (a.length == 0) {
                throw new EmptyArrayException(); // Throwing the checked exception
            } else {
                int highestNumber = a[0];
                for (int i = 0; i < a.length; i++) {
                    if (a[i] > highestNumber) {
                        highestNumber = a[i];
                    }
                }
                return highestNumber;
            }
        };

        // 4. Executing the lambda
        System.out.println("Highest in full array: " + highestNum.func(numbers));
        
        // This call will trigger the exception
        System.out.println("Highest in empty array: " + highestNum.func(number2));
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **Interface Contract**: The `NumbersFunction` interface explicitly states that its method `func` might throw an `EmptyArrayException`. This allows any lambda assigned to this interface to use the `throw` keyword for that exception type.
* **Custom Exception**: The `EmptyArrayException` extends the standard `Exception` class, making it a "checked" exception. This means the compiler forces the programmer to either catch it or declare it.
* **Validation Logic**: Inside the lambda block, the code checks the length of the input array. If it is zero, the exception is instantiated and thrown, halting normal execution and passing control back to the caller.
* **Sequential Processing**: If the array is not empty, the lambda proceeds with a standard loop to find the maximum value, demonstrating that logic and exception guarding can coexist within a single block lambda.

---

### Key Takeaways for Exceptions in Lambdas

| Rule | Description |
| :--- | :--- |
| **Compatibility** | The lambda cannot throw a checked exception that is not declared by the functional interface. |
| **Unchecked Exceptions** | Lambdas can always throw `RuntimeException` or its subclasses (like `NullPointerException`) without any declaration. |
| **Handling** | The caller of the lambda's method must handle the exception using `try-catch` or declare it in its own `throws` clause. |
| **Block Braces** | When throwing an exception, you must use a **block lambda** (curly braces) because a `throw` statement cannot be part of a single-expression lambda. |

---

> [!CAUTION]
> If you are using standard Java functional interfaces (like `java.util.function.Function`), they do **not** declare checked exceptions. To use checked exceptions with them, you would need to wrap the logic in a `try-catch` block inside the lambda and possibly re-throw it as an unchecked `RuntimeException`.

---