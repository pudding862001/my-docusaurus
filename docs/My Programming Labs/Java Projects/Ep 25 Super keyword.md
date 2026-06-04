---
title: Ep25 Super keyword
hide_title: true
sidebar_label: Ep25 Super keyword
sidebar_position: 25
---

## Ep25 Super keyword

In this episode, we learn about the **`super` keyword** in Java. The `super` keyword is a reference variable that is used to refer to parent class (superclass) objects. It acts as a bridge between the child class and the parent class, allowing us to access overridden methods, hidden variables, and parent constructors.

### Key Takeaways:

* **Accessing Parent Methods**: Use `super.methodName()` to call a method that was defined in the parent class, especially if the child class has overridden that method.
* **Accessing Parent Variables**: If a child class has a variable with the same name as one in the parent class, `super.variableName` allows you to access the parent's version.
* **Calling Parent Constructors**: Use `super()` to call the constructor of the parent class. This must be the **first statement** in the subclass constructor.
* **Constructor Chaining**: `super` ensures that the parent class is initialized before the child class adds its own specific initialization.

---

### Episode 25 Code:

```java
// Superclass: Animal
class Animal {
    String name = "bob";

    void display() {
        System.out.println("Animal name: " + name);
    }
}

// Superclass: Human
class Human {
    String name1;

    Human() {
        System.out.println("Hi, I am a Human");
    }

    Human(String name1) {
        System.out.println("Hi, I am " + name1);
    }
}

// Subclass: Hog inherits from Animal
class Hog extends Animal {
    String name = "Hog";

    @Override
    void display() {
        System.out.println("Subclass (Hog) name: " + name);
    }

    void fullDisplay() {
        // Use super to call the display method from the Animal class
        super.display();
    }
}

// Subclass: Hug inherits from Human
class Hug extends Human {

    Hug(String name1) {
        // Use super to call the parameterized constructor of Human
        super(name1);
        System.out.println("Hi, I am a hug");
    }
}

public class Main {
    public static void main(String[] args) {

        // Testing super for methods and variables
        Hog hog1 = new Hog();
        hog1.display();      // Calls Hog's display
        hog1.fullDisplay();  // Uses super to call Animal's display

        System.out.println("--------------------");

        // Testing super for constructors
        Hug hug1 = new Hug("Guy");
    }
}