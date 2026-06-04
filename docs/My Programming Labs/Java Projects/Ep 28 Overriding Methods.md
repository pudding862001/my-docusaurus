---
title: Ep28 Overriding Methods
hide_title: true
sidebar_label: Ep28 Overriding Methods
sidebar_position: 28
---

## Ep28 Overriding Methods

In this episode, we learn about **Method Overriding**. This is a feature that allows a subclass to provide a specific implementation of a method that is already provided by its superclass. It is a key part of achieving **Runtime Polymorphism** in Java.

### Key Takeaways:

* **Same Signature**: An overridden method must have the exact same name, return type, and parameter list as the method in the parent class.
* **The `@Override` Annotation**: While not strictly required, using `@Override` tells the compiler your intent and helps catch errors if the method signatures don't match.
* **Specialization**: Overriding allows a child class (like `Narwhal`) to define its own unique behavior while still being recognized as its parent type (`Animal`).
* **Dynamic Method Dispatch**: Java decides which version of the method to call at runtime based on the actual object type, even if the reference variable is of the parent class type.
* **Access Level**: An overriding method cannot have a more restrictive access modifier than the method in the superclass (e.g., if the parent method is `public`, the child method cannot be `private`).

---

### Episode 28 Code:

```java
class Animal {
    void showWords() {
        System.out.println("Animals says hello");
    }
}

class Narwhal extends Animal {
    // Overriding the parent method to provide specific behavior
    @Override
    void showWords() {
        System.out.println("Narwhal says hello");
    }
}

public class Main {
    public static void main(String[] args) {

        // Normal instance of Animal
        Animal animal1 = new Animal();
        animal1.showWords();

        // Polymorphism: Animal reference to a Narwhal object
        Animal animal2 = new Narwhal();
        animal2.showWords(); // Calls the overridden version in Narwhal

        /*
        Note: When a subclass needs a specific implementation, 
        it overrides the parent. If it doesn't, it will 
        simply inherit and use the superclass version.
        */
    }
}