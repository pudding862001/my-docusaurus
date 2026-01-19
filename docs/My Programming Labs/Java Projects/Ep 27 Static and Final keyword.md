---
title: Ep27 Static and Final keyword
hide_title: true
sidebar_label: Ep27 Static and Final keyword
sidebar_position: 27
---

## Ep27 Static and Final keyword

In this episode, we learn about the **`static`** and **`final`** keywords in Java. These keywords are essential for managing how data is stored and whether it can be modified. `static` members belong to the class itself rather than any specific instance, while `final` ensures that a value or a reference cannot be changed once it is assigned.

### Key Takeaways:

* **Static Variables**: A static variable is shared among all instances of a class. There is only one copy of a static variable, regardless of how many objects are created.
* **Static Methods**: These methods can be called without creating an instance of the class (e.g., `ClassName.method()`). They can only access other static members directly.
* **Static Blocks**: A static block is used for static initialization of a class. It executes only once when the class is first loaded into memory.
* **Final Variables**: When a variable is declared as `final`, its value cannot be modified after initialization. This is commonly used to create constants (e.g., `NUMBER_OF_WHEELS`).
* **Final Parameters**: Marking a method parameter as `final` prevents it from being reassigned within that method's scope.

---

### Episode 27 Code:

```java
class Example {

    // Final variable: acts as a constant
    final String NUMBER_OF_WHEELS = "4";

    void printSomething(final int something) {
        // something = 50; // This would cause a compile error because it's final
        System.out.println("The final parameter is: " + something);
    }
}

class Potato {

    static int number = 50;

    // Static block: runs once when the class is loaded
    static {
        System.out.println("Static block in Potato: Yum!");
    }

    static void multiplyNumber(int val) {
        System.out.println("Static Result: " + (val * 2));
    }
}

class StaticExample {

    static int a = 3;
    static int b;

    // Static block for complex initialization
    static {
        System.out.println("Static block in StaticExample initialized.");
        b = a * 4;
    }

    static void coolMethod(int x) {
        System.out.println("Values: " + x + " " + a + " " + b);
    }
}

public class Main {
    public static void main(String[] args) {

        // --- Testing Static Keyword ---
        // Accessing static variable directly via Class Name
        Potato.number = 10;
        System.out.println("Potato number: " + Potato.number);
        
        // Calling static method without creating an object
        Potato.multiplyNumber(50);

        // Accessing members from StaticExample
        System.out.println("Static A: " + StaticExample.a);
        System.out.println("Static B: " + StaticExample.b);
        StaticExample.coolMethod(100);

        // --- Testing Final Keyword ---
        Example ex = new Example();
        ex.printSomething(99);
    }
}