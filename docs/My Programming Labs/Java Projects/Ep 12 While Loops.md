---
title: Ep12 While Loops
hide_title: true
sidebar_label: Ep12 While Loops
sidebar_position: 12
---

## Ep12 While Loops

In this episode, we learn how to use **While Loops** to repeat a block of code multiple times. This is essential when you don't want to write the same code over and over again.

### Key Takeaways:

* **The `while` Loop**: Repeats code as long as the specified condition remains `true`.
* **Condition Check**: The condition is checked **before** the code block runs. If the condition is false from the start, the loop will never execute.
* **Loop Variable**: Usually, you need a counter or index (like `number++`) to eventually make the condition `false`, otherwise the loop will run forever.
* **Iterating Arrays**: A `while` loop is perfect for going through an array by using an `index` variable and checking against `array.length`.


---

### Episode 11 Code:

```java
public class Main {
    public static void main(String[] args) {

        // 1. Basic While Loop
        int number = 1;
        while (number < 100) {
            System.out.println(number);
            number++; // Increment to eventually exit the loop
        }

        // 2. The Infinite Loop (Commented out)
        /*
        while(true) {
            // This will run forever until the program is forced to stop!
            System.out.println("Cheese is Yummy.");
        }
        */

        // 3. Iterating through an Array
        double[] test_scores = {12.4, 100, 90.5, 32.5, 5.0};
        int index = 0; // Starting point for the array

        // Loop through the entire array using .length
        while(index < test_scores.length) {
            System.out.println("Score: " + test_scores[index]);
            
            // Logic inside the loop: Grading scores
            if (test_scores[index] <= 50) {
                System.out.println("Result: Bad score");
            } else {
                System.out.println("Result: Good score");
            }
            
            index++; // Move to the next element in the array
        }
    }
}