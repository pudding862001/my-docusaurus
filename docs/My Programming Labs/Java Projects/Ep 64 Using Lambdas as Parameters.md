---
title: Ep64 Using Lambdas as Parameters
hide_title: true
sidebar_label: Ep64 Using Lambdas as Parameters
sidebar_position: 64
---

## Ep64 Using Lambdas as Parameters

In this episode, we explore one of the most powerful applications of lambda expressions: passing them as arguments to methods. This allows you to write highly generic methods that can perform different operations depending on the logic passed into them at runtime.

---

### Passing Logic as an Argument

To pass a lambda as a parameter, the method must be defined to accept a functional interface as one of its arguments. You can then pass a block lambda directly into the method call or pass a variable that holds a lambda reference.


```java
interface NumbersAreCool {
    int numberMethod(int num);
}

public class Main {

    // This method accepts a functional interface 'NumbersAreCool' as a parameter
    static int randomMethod(NumbersAreCool a, int b) {
        return a.numberMethod(b);
    }

    public static void main(String[] args) {

        int num1;
        // 1. Passing a block lambda directly as a parameter
        num1 = randomMethod((int a) -> {
            int temp = 5;
            return a * 5;
        }, 7);
        System.out.println(num1); // Prints: 35

        int num2;
        // 2. Passing a more complex logic (Factorial) as a parameter
        num2 = randomMethod((int a) -> {
            int result = 1;
            for (int i = 1; i <= a; i++) {
                result = i * result;
            }
            return result;
        }, 8);
        System.out.println(num2); // Prints: 40320

        // 3. Storing a lambda in a variable first, then passing it
        NumbersAreCool squareRoot = (int a) -> (int) Math.sqrt(a);

        int num3;
        num3 = randomMethod(squareRoot, 36);
        System.out.println(num3); // Prints: 6
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **The Host Method**: The `randomMethod` acts as a "host." It doesn't know what specific calculation it will perform until a lambda is passed into its `NumbersAreCool` parameter.
* **Direct Passage**: In the cases of `num1` and `num2`, the lambda body is written directly inside the parentheses of the `randomMethod` call. This is useful for one-off logic that doesn't need to be reused elsewhere.
* **Lambda Variables**: For `num3`, a lambda is assigned to the variable `squareRoot`. This makes the code cleaner if the same logic needs to be passed to multiple different methods.
* **Separation of Concerns**: This pattern separates the **execution timing** (handled by `randomMethod`) from the **actual logic** (defined by the lambda), which is a key principle of functional programming.

---

### Comparison: Traditional vs. Lambda Parameters

| Feature | Traditional Object Parameter | Lambda Parameter |
| :--- | :--- | :--- |
| **What is passed?** | An instance of a class containing data and methods. | A specific block of executable logic. |
| **Boilerplate** | High (Requires class/interface implementation). | Low (Write logic directly in the argument). |
| **Flexibility** | Fixed behavior based on the object's class. | Dynamic behavior based on the expression provided. |

---

> [!TIP]
> Using lambdas as parameters is the foundation for the **Java Streams API**. Methods like `map()`, `filter()`, and `forEach()` all work by accepting lambdas as parameters to process collections of data efficiently.

---