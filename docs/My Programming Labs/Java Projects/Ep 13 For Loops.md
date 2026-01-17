---
title: Ep13 For Loops
hide_title: true
sidebar_label: Ep13 For Loops
sidebar_position: 13
---

## Ep11 For Loops

In this episode, we master the **For Loop**. While a `while` loop is great for uncertain conditions, a `for` loop is the go-to choice when you know exactly how many times you want to repeat a task.

### Key Takeaways:

* **Standard Syntax**: `for (initialization; condition; increment)`. It keeps all your loop control logic in one neat line.
* **Nested Loops**: A loop inside another loop. This is useful for complex tasks, such as checking every number against a set of divisors to find **Prime Numbers**.
* **The `break` Statement**: Used to exit a loop immediately when a certain condition is met (e.g., finding a divisor, meaning the number isn't prime).
* **Multiple Variables**: You can initialize and manage more than one variable within the for-loop header, separated by commas.


---

### Episode 13 Code:

```java
public class Main {
    public static void main(String[] args) {

        // 1. Basic Counting Loop
        // Starts at 0, runs as long as i < 100, increments by 1
        for (int i = 0; i < 100; i++) {
            System.out.println("Current count: " + i);
        }

        // 2. Advanced: Nested Loop for Prime Number Testing
        int num;
        boolean isPrime;

        for (num = 1; num < 100; num++) {
            if (num < 2) isPrime = false;
            else isPrime = true;

            // Inner loop: checks if 'num' has any divisors
            // Optimization: j <= num / j is similar to checking up to the square root
            for (int j = 2; j <= num / j; j++) {
                if ((num % j) == 0) {
                    isPrime = false; // Divisor found, not prime
                    break;           // Exit the inner loop early
                }
            }

            if (isPrime) {
                System.out.println("The number " + num + " is prime");
            }
        }

        // 3. Multi-Variable For Loop
        // You can manage two variables (a and b) in a single loop
        int a, b;
        for (a = 1, b = 4; a < 6; a++) {
            System.out.println("a: " + a + " | b: " + b);
            b--; // Decrease b as a increases
        }
    }
}