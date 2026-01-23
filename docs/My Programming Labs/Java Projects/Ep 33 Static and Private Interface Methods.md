---
title: Ep33 Static and Private Interface Methods
hide_title: true
sidebar_label: Ep33 Static and Private Interface Methods
sidebar_position: 33
---

## Ep33 Static and Private Interface Methods

In this episode, we dive into the advanced method types available in Java interfaces: **Static Methods** (introduced in Java 8) and **Private Methods** (introduced in Java 9). these features allow for better organization and utility within interface-based designs.

---

### Understanding Static and Private Methods

While default methods provide common behavior for instances, static and private methods serve specialized roles:
* **Static Methods**: These belong to the interface itself and cannot be overridden. They are perfect for utility methods related to the interface's purpose.
* **Private Methods**: These are used to hide internal logic from the outside world. They are typically used to share code between multiple default methods to avoid duplication.

---

### Code Implementation

#### 📁 Animal.java
The following interface demonstrates a static utility method and private helper methods used to support complex default logic.

```java
public interface Animal {

    // Static method: Called using the interface name
    static void talk(){
        System.out.println("BlaBlaBla");
    }

    // Default method: Uses a private helper method internally
    default void talkMore(){
        System.out.println("We don't talk anymore");
        scream();
    }

    // Private method: Encapsulates logic for use within the interface only
    private void scream(){
        System.out.println("AAAAAAAAH");
    }

    // Private method: Can call other private methods for code reuse
    private void screamMore(){
        System.out.println("AAAAAAAAAAAAAAAAAAAAAAAAAh");
        scream();
    }
}
```

#### 📁 Main.java
Static methods are accessed directly through the interface, emphasizing that they are not tied to a specific object instance.

```java
public class Main {
    public static void main(String[] args) {

        // Accessing the static method directly
        Animal.talk();

    }
}
```

---

### Key Takeaways

| Feature | Static Method | Private Method |
| :--- | :--- | :--- |
| **Availability** | Since Java 8 | Since Java 9 |
| **How to Call** | `InterfaceName.method()` | Only inside other methods of the interface |
| **Inheritance** | Not inherited by subclasses | Not accessible by subclasses |
| **Primary Use** | General utility/Helper functions | Code refactoring and logic encapsulation |

---

### Execution Logic

1.  **Direct Access**: When `Animal.talk()` is called, the JVM executes the code bound to the interface definition without needing an object instantiation.
2.  **Encapsulation**: The methods `scream()` and `screamMore()` are strictly internal. Any class implementing `Animal` will not have access to these methods, ensuring the internal implementation remains hidden.

> [!TIP]
> Use **Static methods** for logic that is "stateless" and belongs to the concept of the interface. Use **Private methods** to keep your interface clean by removing repetitive code from your `default` methods.

---