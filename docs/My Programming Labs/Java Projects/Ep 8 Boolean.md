---
title: Ep8 Boolean
hide_title: true
sidebar_label: Ep8 Boolean
sidebar_position: 8
---

## Ep8 Boolean

In this episode, we dive into **Boolean Logic**. These operators allow our program to make decisions by combining multiple true/false conditions.

### Key Takeaways:

| Operator | Name | Description |
| :--- | :--- | :--- |
| `&&` | **Short-circuit AND** | Returns `true` only if **both** sides are true. |
| `\|\|` | **Short-circuit OR** | Returns `true` if **at least one** side is true. |
| `!` | **NOT** | Reverses the result (True becomes False). |
| `^` | **XOR** | Returns `true` only if the two sides are **different**. |

---

### The "Short-circuit" Advantage ⚡

In Java, we usually prefer `&&` and `||` over `&` and `|`:
* **`&&` (Short-circuit AND)**: If the left side is `false`, Java won't even look at the right side (because the whole thing is already guaranteed to be false).
* **`||` (Short-circuit OR)**: If the left side is `true`, Java skips the right side (because the result is already guaranteed to be true).

This saves processing power and prevents potential errors on the right side of the expression!



---

### Episode 8 Code:

```java
public class Main {
    public static void main(String[] args) {

        boolean x = true;
        boolean y = false;
        boolean z = true;

        // 1. AND Operator (&&) - Both must be true
        System.out.println("AND (x && z): " + (x && z)); // true
        System.out.println("AND (x && y): " + (x && y)); // false

        // 2. OR Operator (||) - At least one must be true
        System.out.println("OR (y || z): " + (y || z));  // true
        System.out.println("OR (y || y): " + (y || y));  // false

        // 3. XOR Operator (^) - True if they are DIFFERENT
        // Only one true will be true. If both are true or both are false, it's false.
        System.out.println("XOR (x ^ y): " + (x ^ y));   // true
        System.out.println("XOR (x ^ z): " + (x ^ z));   // false

        // 4. NOT Operator (!) - The Opposer
        System.out.println("NOT x: " + (!x)); // false

        // 5. Complex Expressions
        // Using comparison operators with logic
        System.out.println("Complex: " + ((x != y) && (y != x))); // true
    }
}
```
