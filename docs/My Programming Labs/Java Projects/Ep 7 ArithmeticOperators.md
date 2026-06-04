---
title: Ep7 ArithmeticOperators
hide_title: true
sidebar_label: Ep7 ArithmeticOperators
sidebar_position: 7
---

## Ep7 ArithmeticOperators

In this episode, we cover the tools that allow us to perform calculations and modify variables efficiently: **Arithmetic Operators** and **Compound Assignment Operators**.

### Key Takeaways:

* **Basic Math**: Java uses standard symbols: `+`, `-`, `*`, `/`.
* **Modulus (%)**: This gives you the **remainder** of a division. For example, `25 % 6` is `1` because 6 goes into 25 four times, with 1 left over.
* **Compound Assignment**: Shorthand operators like `+=`, `-=`, `*=`, and `/=` help you update a variable's value based on its current state without re-typing its name.
* **The "Plus Plus" Trick**: 
    * `y++` (Postfix): Use the current value first, **then** increment it.
    * `++y` (Prefix): Increment the value **first**, then use it.

---

### Episode 7 Code:

```java
public class Main {
    public static void main(String[] args) {

        // 1. Basic Arithmetic
        int addition = 12 + 12;
        double addition2 = 12.0 + 12.0;
        System.out.println("Sum: " + (addition + addition2)); // Adding values
        System.out.println("Concatenation: " + addition + " " + addition2); // Joining strings

        // 2. Modulus (The Remainder)
        int mod2 = 25 % 6; // 25 / 6 = 4 remainder 1
        System.out.println("Remainder of 25/6: " + mod2);

        // 3. Compound Assignment Operators (Shorthand)
        int plane = 0;
        plane--;   // plane = plane - 1
        plane += 5; // plane = plane + 5
        plane /= 2; // plane = plane / 2
        System.out.println("Final plane value: " + plane);

        // 4. Prefix vs Postfix (Important!)
        int y = 245;
        
        // Postfix: x gets the value 245, then y becomes 246
        int x = y++; 
        System.out.println("Value of x (y++): " + x); // 245
        System.out.println("Value of y after: " + y); // 246

        y = 245; // Resetting y
        
        // Prefix: y becomes 246 first, then x gets the value 246
        x = ++y; 
        System.out.println("Value of x (++y): " + x); // 246
    }
}
