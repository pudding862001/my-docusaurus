---
title: Ep32 Default Method
hide_title: true
sidebar_label: Ep32 Default Method
sidebar_position: 32
---

## Ep32 Default Method

In this episode, we explore **Default Methods** in Java, a feature introduced in Java 8 that allows interfaces to have method implementations. This shift allows interfaces to evolve without breaking existing code.

---

### Understanding Default Methods

An interface traditionally only contained abstract methods. However, with the `default` keyword, you can provide a standard implementation directly within the interface. Implementing classes can choose to use this default behavior or override it with their own logic.

#### 📁 Animal.java
The `Animal` interface demonstrates both an abstract method and a default method.

```java
public interface Animal {

    // Default method providing a concrete implementation
    default void talk(){
        System.out.println("Talking");
    }

    // Abstract method that subclasses must implement
    void move();

}
```

#### 📁 PolarBear.java
The `PolarBear` class implements `Animal` and provides specific behavior for both required and optional methods.

```java
public class PolarBear implements Animal {

    // Implementation of the mandatory move method
    public void move(){
        System.out.println("thump, thump.....");
    }

    // Overriding the default talk method to provide specific logic
    @Override
    public void talk(){
        System.out.println("Polar Bear talk!");
    }
}
```

---

### Execution Logic

In the execution phase, we see how the JVM prioritizes the overridden method in the subclass over the default version in the interface.

#### 📁 Main.java
```java
public class Main {
    public static void main(String[] args) {

        PolarBear animal1 = new PolarBear();

        // Executes the overridden version in PolarBear
        animal1.talk(); 
        
        // Executes the mandatory implementation in PolarBear
        animal1.move();
    }
}
```



---

### Key Takeaways

| Feature | Abstract Method | Default Method |
| :--- | :--- | :--- |
| **Keyword** | None (Implicitly abstract) | `default` |
| **Implementation** | No body; defined by subclasses | Has a body `{}` within the interface |
| **Overriding** | Mandatory for concrete classes | Optional; subclasses inherit it by default |
| **Primary Use** | Defining required behavior | Adding new features to interfaces safely |

> **Note:** If a class implements two interfaces that contain the same default method signature, the developer must override the method in the class to resolve the ambiguity.

---

