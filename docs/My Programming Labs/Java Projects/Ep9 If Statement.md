---
title: Ep9 If Statement
hide_title: true
sidebar_label: Ep9 If Statement
sidebar_position: 9
---

## Ep9 If Statement

In this episode, we learn how to make our programs "think" and take different paths based on conditions using **If-Else statements**.

### Key Takeaways:

* **The `if` Statement**: The most basic way to check a condition. If it's true, the code inside `{}` runs.
* **`else` (The Alternative)**: Use this to define what happens when the `if` condition is **false**. This is more efficient than writing two separate `if` statements.
* **`else if` (Multiple Branches)**: Used when you have more than two possible outcomes.
* **Nested If**: You can place an `if` statement inside another `if` to handle complex logic.
* **Curly Braces `{}`**: While optional for single-line statements, using them is a "Best Practice" to prevent bugs as your code grows.



---

### Episode 9 Code:

```java
public class Main {
    public static void main(String[] args) {

        int myAge = 21;
        int requiredAge = 21;

        // 1. Basic If Statement
        if (myAge == requiredAge) {
            System.out.println("Wow you are really cool");
        }

        // 2. Efficiency: Using If-Else
        // Instead of two separate 'if' checks, 'else' handles the "otherwise" case.
        if (myAge >= requiredAge) {
            System.out.println("You can enter the bar");
        } else {
            System.out.println("You cannot enter the bar");
        }

        // 3. Multi-branch & Nested If Statements
        if (myAge < 18) {
            System.out.println("You are a minor");
        } else if (myAge >= 18 && myAge < 70) {
            
            // Nested Logic: An if inside an else-if
            if (myAge == 20) {
                System.out.println("You are an adult that is twenty");
            } else {
                System.out.println("You are an adult");
            }

            if (myAge == 21) {
                System.out.println("Yeah, 21!");
            }

        } else if (myAge >= 70 && myAge < 100) {
            System.out.println("You are getting really old");
        } else {
            System.out.println("Wow, you are still alive?");
        }

        // 4. One-liner Syntax (No curly braces)
        // Use with caution! It only applies to the very next line.
        if (myAge < 18) System.out.println("Quick check: Minor");
        else System.out.println("Quick check: Adult");
    }
}

```
