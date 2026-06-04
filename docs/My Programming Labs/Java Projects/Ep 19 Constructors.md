---
title: Ep19 Constructors
hide_title: true
sidebar_label: Ep19 Constructors
sidebar_position: 19
---

## Ep19 Constructors

In this episode, we learn about **Constructors**, which are special methods used to initialize objects. Instead of creating an empty object and setting fields one by one, we can pass data directly at the moment of creation.

### Key Takeaways:

* **What is a Constructor?**: A special block of code that is called when an instance of an object is created using the `new` keyword.
* **No Return Type**: Unlike regular methods, constructors **do not** have a return type (not even `void`).
* **Name Match**: The name of the constructor must be **exactly the same** as the class name.
* **Parameterized Constructors**: These allow you to pass specific values (parameters) into the object during instantiation, making your code more efficient and cleaner.
* **Automatic Execution**: You can even call other methods inside a constructor (like calling `talk()` right after the fields are set).


---

### Episode 19 Code:

```java
public class Main {
    public static void main(String[] args) {

        class Zebra {
            String name;
            int age;

            // 1. Parameterized Constructor
            // This runs automatically when 'new Zebra(...)' is called
            Zebra(String ParamName, int ParamAge) {
                System.out.println("--- Making a new Zebra ---");
                name = ParamName;
                age = ParamAge;
                
                // You can call methods inside a constructor!
                talk();
            }

            void talk() {
                System.out.println("Zebra noise: Hi, my name is " + name + " and I am " + age + " years old.");
            }

            void ageup() {
                age++;
                System.out.println(name + " grew up! Now age: " + age);
            }
        }

        // 2. Creating an object with the constructor
        // This is much cleaner than setting fields manually
        Zebra qqq = new Zebra("Gary", 65);
        System.out.println("Verified Name: " + qqq.name);

        /* Comparison: The "Manual" way (without constructor) would look like this:
           Zebra zebra1 = new Zebra();
           zebra1.name = "Bob";
           zebra1.age = 21;
           zebra1.talk();
        */
    }
}