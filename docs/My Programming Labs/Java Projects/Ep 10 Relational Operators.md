---
title: Ep10 Relational Operators
hide_title: true
sidebar_label: Ep10 Relational Operators
sidebar_position: 10
---

## Ep10 Relational Operators

In this episode, we dive deeper into the specific symbols used to compare variables. These **Relational Operators** always result in a `boolean` value (`true` or `false`).

### Comparison Cheat Sheet:

| Operator | Meaning | Example |
| :--- | :--- | :--- |
| `==` | Equal to | `x == y` |
| `!=` | Not equal to | `x != y` |
| `>` | Greater than | `x > y` |
| `<` | Less than | `x < y` |
| `>=` | Greater than or equal to | `x >= y` |
| `<=` | Less than or equal to | `x <= y` |



---

### Key Takeaways:

* **Booleans as Conditions**: You don't always need a comparison. If a variable is already a `boolean`, you can just put it inside the `if()` directly.
* **String Comparison**: In basic exercises, `==` works for Strings, but as you get advanced, you'll learn a special way to compare them (using `.equals()`).
* **Inclusive vs. Exclusive**: Understanding the difference between `>` (greater than) and `>=` (greater than or equal to) is key to avoiding "Off-by-one" errors.

---

### Episode 10 Code:

```java
public class Main {
    public static void main(String[] args) {
        String name = "bob";

        // 1. Equality Check (==)
        if(name == "bob") {
            System.out.println("Result: It is bob");
        } else {
            System.out.println("Result: Not bob");
        }

        // 2. Using Boolean Variables Directly
        // You don't need to write: if(trueDood == true)
        boolean trueDood = true;
        if(trueDood) {
            System.out.println("The condition is true!");
        }

        // 3. Not Equal Check (!=)
        if (name != "bob") {
            System.out.println("Condition met: Name is NOT bob");
        } else {
            System.out.println("Condition not met: Name IS bob");
        }

        // 4. Comparison Operators (>, <, >=, <=)
        int num1 = 10;
        int num2 = 20;

        if(num1 > num2) {
            System.out.println(num1 + " is bigger");
        } else {
            System.out.println(num1 + " is smaller or equal");
        }

        int num3 = 10;
        int num4 = 10;

        // Greater than OR equal to
        if(num3 >= num4) {
            System.out.println("Check: " + num3 + " is bigger than or equal to " + num4);
        }
    }
}

```
