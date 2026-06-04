---
title: Ep31 Interface
hide_title: true
sidebar_label: Ep31 Interface
sidebar_position: 31
---

## Ep31 Interface

In this episode, we explore **Interfaces** in Java. An interface is a blueprint of a class that defines a set of methods that a class must implement. It is a powerful tool for achieving abstraction and multiple inheritance in Java, allowing different classes to share a common set of behaviors regardless of their place in the class hierarchy.

### Key Takeaways:

* **Defining a Contract**: An interface defines *what* a class should do (method signatures) but not *how* it does it. Any class that implements the interface must provide the concrete implementation for its abstract methods.
* **Implicit Modifiers**: All methods in an interface are implicitly `public` and `abstract`. All variables (fields) are implicitly `public static final`, meaning they act as constants.
* **The `implements` Keyword**: A class uses the `implements` keyword to follow the contract of an interface.
* **Nested Interfaces**: Interfaces can be nested within classes or other interfaces to group related functionalities together (e.g., `Pig.nestedThing`).
* **Polymorphism**: Interfaces allow for polymorphism. You can use an interface type as a reference to any object that implements that interface (e.g., `Animal animal3 = new PolarBear();`).



---

### Episode 31 Code:

**File: Animal.java**
```java
public interface Animal {

    double gravity = 9.8; // Implicitly public static final
    
    void move(); // Implicitly public abstract

    void die();
}
```

**File: Human.java**
```java
public interface Human {

    void speak();
}
```

**File: Wolf.java**
```java
public class Wolf implements Animal {

    void bark() {
        System.out.println("ROOF");
    }

    @Override
    public void move() {
        System.out.println("The Wolf Start to move...");
    }

    @Override
    public void die() {
        System.out.println("The wolf has perished");
    }
}
```

**File: PolarBear.java**
```java
public class PolarBear implements Animal {

    @Override
    public void move() {
        System.out.println("The polar bear starts to move....slowly...");
    }

    @Override
    public void die() {
        System.out.println("It died.");
    }

    public void changeNumber() {
        // gravity = 25; // Error: Cannot assign a value to final variable 'gravity'
        System.out.println("Gravity is " + gravity);
    }

    public void speak() {
        System.out.println("spoken");
    }
}
```

**File: Pig.java**
```java
public class Pig {

    // Nested Interface
    public interface nestedThing {
        void doThing();
    }
}
```

**File: Cat.java**
```java
public abstract class Cat implements Pig.nestedThing {

    @Override
    public void doThing() {
        System.out.println("thing done");
    }
}
```

**File: Main.java**
```java
public class Main {
    public static void main(String[] args) {

        Wolf animal1 = new Wolf();
        PolarBear animal2 = new PolarBear();

        animal1.move();
        animal2.move();
        animal1.die();
        animal2.die();
        
        animal2.changeNumber();
        animal2.speak();

        System.out.println("--------------------");

        // Interface Polymorphism
        Animal animal3 = new PolarBear();
        animal3.die(); // Accessible because it's defined in Animal
        // animal3.speak(); // Error: speak() is not defined in Animal interface
    }
}
```

---