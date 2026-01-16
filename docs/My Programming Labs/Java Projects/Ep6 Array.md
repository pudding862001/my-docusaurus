---
title: Ep6 Array
hide_title: true
sidebar_label: Ep6 Array
sidebar_position: 6
---

## Ep6 Array

In this episode, we explore how to use **Arrays** to store multiple values of the same type in a single variable. Instead of creating seven different variables for a week, we can just use one!

### Key Takeaways:

* **Fixed Size**: When you create an array using `new int[7]`, you define a fixed size that cannot be changed later.
* **Zero-Based Indexing**: Remember, the counting starts at **0**. So, the first item is at `index 0`, and the second item is at `index 1`.
* **Initialization Styles**:
    * **Step-by-step**: Declare, allocate space, and then assign values one by one.
    * **The Shortcut**: Use `{}` (curly braces) to declare and assign all values at once.



---

### Episode 6 Code:

```java
public class Main {
    public static void main(String[] args) {

        // Method 1: Declare, allocate size, and assign values
        int days_in_week[];
        days_in_week = new int[7]; 
        days_in_week[0] = 111;
        days_in_week[1] = 222;
        days_in_week[2] = 333;
        days_in_week[3] = 444;
        days_in_week[4] = 555;
        days_in_week[5] = 666;
        days_in_week[6] = 777;

        // Note: Even though index is 0, it represents the 1st position
        System.out.println("First element (Index 0): " + days_in_week[0]);

        // Method 2: Identical expression (The Shortcut)
        int days_week[] = {111, 222, 333, 444, 555, 666, 777};
        System.out.println("Shortcut version: " + days_week[0]);

        // Practical Example: Calculating Average
        double floating_num[] = {12.3, 14.3, 16.3, 18.3};
        double sum = floating_num[0] + floating_num[1] + floating_num[2] + floating_num[3];
        int total = 4;
        double avg = sum / total;
        
        System.out.println("The average is: " + avg);
    }
}
