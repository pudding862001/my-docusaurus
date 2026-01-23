---
title: Ep59 Bounded Type Parameters
hide_title: true
sidebar_label: Ep59 Bounded Type Parameters
sidebar_position: 59
---

## Ep59 Bounded Type Parameters

In this episode, we learn about **Bounded Type Parameters**. While generics allow classes to work with any type, sometimes you need to restrict (or "bound") those types to a specific category. For example, if you want to perform mathematical calculations, you must ensure the generic type is a numeric type.

---

### Restricting Generic Types

By using the `extends` keyword in the generic declaration (e.g., `<A extends Number>`), you tell Java that the type parameter must be either the specified class or one of its subclasses. This allows you to call methods defined in the parent class (like `doubleValue()`) on your generic variables.


```java
import java.sql.SQLOutput;

// The bound <A extends Number> restricts A to Integer, Double, Float, etc.
class Life<A extends Number> {
    A[] numberArray;

    public Life(A[] numberArray) {
        this.numberArray = numberArray;
    }

    // Since A is guaranteed to be a Number, we can use doubleValue()
    double average() {
        double sum = 0.0;
        for (int i = 0; i < numberArray.length; i++) {
            sum = sum + numberArray[i].doubleValue();
        }
        return sum / numberArray.length;
    }
}

public class Main {
    public static void main(String[] args) {

        Integer[] nums = {1, 3, 5, 6};
        Double[] doubles = {1.4, 2.4, 1.2, 2.2};
        String[] strings = {"test1", "qwer", "qqqqq"};

        // Works: Integer extends Number
        Life<Integer> life1 = new Life<>(nums);
        System.out.println("Integer average: " + life1.average());

        // Works: Double extends Number
        Life<Double> life2 = new Life<>(doubles);
        System.out.println("Double average: " + life2.average());

        // ERROR: This will not compile because String does not extend Number
        // Life<String> life3 = new Life<String>(strings); 
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **The Bound Constraint**: The declaration `class Life<A extends Number>` defines `Number` as the upper bound. Any attempt to instantiate the class with a non-numeric type, such as `String` or `Boolean`, will result in a compile-time error.
* **Accessing Superclass Methods**: Because the compiler knows `A` must be a `Number`, it allows the code to call methods from the `Number` class, such as `doubleValue()`, `intValue()`, or `floatValue()`, directly on the generic elements.
* **Array Handling**: The class takes an array of the generic type `A[]` and iterates through it to perform calculations, demonstrating that bounds work perfectly with array structures.
* **Type Safety at Compile-Time**: The main advantage of this approach is that errors are caught during development (compile-time) rather than causing a crash during execution (runtime).

---

### Common Upper Bounds in Java

| Upper Bound | Allowed Types | Purpose |
| :--- | :--- | :--- |
| **`T extends Number`** | `Integer`, `Double`, `Float`, `Long`, etc. | Mathematical operations and numeric processing. |
| **`T extends Comparable`** | `String`, `Integer`, `Date`, etc. | Sorting and comparing objects. |
| **`T extends Serializable`** | Various classes | Ensuring objects can be converted to byte streams. |

---

> [!IMPORTANT]
> When you use a bounded type, the compiler treats the generic type as the bounding class (e.g., `Number`) internally. This process is known as **Type Erasure**. It ensures backward compatibility with older versions of Java while still providing type safety for modern code.

---