---
title: Ep21 Method Overloading
hide_title: true
sidebar_label: Ep21 Method Overloading
sidebar_position: 22
---

## Ep21 Method Overloading

In this episode, we learn about **Method Overloading**. This feature allows a class to have more than one method with the same name, as long as their parameter lists are different. It’s like having a Swiss Army knife where the same "tool" can perform different tasks depending on what you give it.

### Key Takeaways:

* **Same Name, Different Signature**: Overloaded methods must have the same name but different parameters (different number, type, or order of parameters).
* **Return Type**: Changing the return type alone is **not** enough to overload a method. The parameters must be different.
* **Improved Readability**: Instead of naming methods `addTwoNumbers` and `addThreeNumbers`, you can simply use `add` for both, making the API cleaner.
* **Compile-time Polymorphism**: Java determines which method to call at compile time based on the arguments you provide.


---

### Episode 21 Code:

```java
public class Main {
    public static void main(String[] args) {

       class Booger {

           // 1. Method with no parameters
           void findSum() {
               System.out.println("Status: You did not give any values to sum.");
           }

           // 2. Overloaded method with two int parameters
           int findSum(int a, int b) {
               int sum = a + b;
               return sum;
           }

           // 3. Overloaded method with three int parameters
           int findSum(int a, int b, int c) {
               int sum = a + b + c;
               return sum;
           }
       }

       // --- Testing Method Overloading ---
       Booger calculator = new Booger();

       // Calls the version with 2 parameters
       System.out.println("Sum of 2 numbers: " + calculator.findSum(1, 2));

       // Calls the version with 3 parameters
       System.out.println("Sum of 3 numbers: " + calculator.findSum(1, 2, 3));

       // Calls the version with no parameters
       calculator.findSum();
    }
}