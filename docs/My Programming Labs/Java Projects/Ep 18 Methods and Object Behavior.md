---
title: Ep18 Methods and Behavior
hide_title: true
sidebar_label: Ep18 Methods
sidebar_position: 18
---

## Ep18 Methods and Behavior

In this episode, we learn how to add **Methods** to our classes. If fields (variables) are what an object **is**, then methods are what an object **does**.

### Key Takeaways:

* **Defining a Method**: A method consists of a return type, a name, and a body `{}`.
* **`void` Keyword**: Use `void` when a method performs an action (like printing to the console) but doesn't send any data back.
* **Return Type**: When you want a method to "give back" a value (like a calculation result), you specify a type (e.g., `int`, `double`) and use the `return` keyword.
* **Parameters**: These are inputs you pass into a method. They allow the method to perform tasks using external data.
* **Scope**: Methods can use the fields defined in the class (like `this.name`) or use the parameters passed directly into the parentheses.


---

### Episode 18 Code:

```java
public class Main {
    public static void main(String[] args) {

        class Human {
            int age;
            String name;
            int one, two, three; // Fields used for calculations

            // 1. Basic Method (void) - Performs an action
            void talk() {
                System.out.println("I am " + name + " and I am " + age + " years old");
            }

            // 2. Method with Parameters - Uses external input
            void tell(String name, int age) {
                System.out.println("I am " + name + " and I am " + age + " years old");
            }

            // 3. Calculation Method (void)
            void calculate() {
                System.out.println("Product of fields: " + (one * two * three));
            }

            // 4. Return Method - Returns a result to the caller
            int cal() {
                return one * two * three * 10;
            }

            // 5. Return Method with Parameters
            int multiple(int first, int second, int third) {
                return first * second * third;
            }
        }

        // --- Implementation ---
        
        Human human5 = new Human();
        human5.name = "Terry";
        human5.age = 56;
        human5.one = 5; human5.two = 6; human5.three = 3;

        human5.talk(); // Output: I am Terry...
        human5.calculate(); // Uses internal fields

        // Capturing a returned value
        int product = human5.cal();
        System.out.println("Result from cal(): " + product);

        // Using a method with direct arguments
        Human human6 = new Human();
        int product3 = human6.multiple(5, 5, 4);
        System.out.println("Product 3 (Direct Args): " + product3);

        human6.tell("Joe", 16);
    }
}