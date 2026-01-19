---
title: Ep29 Abstract Classes and Methods
hide_title: true
sidebar_label: Ep29 Abstract Classes and Methods
sidebar_position: 29
---

## Ep29 Abstract Classes and Methods

In this episode, we explore **Abstract Classes and Methods**. An abstract class is a restricted class that cannot be used to create objects. To access it, it must be inherited by another class. An abstract method is a method that is declared without an implementation. This acts as a blueprint, forcing subclasses to provide their own specific logic for those methods.

### Key Takeaways:

* **The `abstract` Keyword**: Used for both classes and methods to indicate they are incomplete templates.
* **No Instantiation**: You cannot create an object of an abstract class (e.g., `new Life()` is invalid).
* **Blueprints for Subclasses**: Abstract methods define "what" a class should do, but not "how". Subclasses are responsible for providing the "how" through overriding.
* **Concrete Methods in Abstract Classes**: Abstract classes can contain regular methods with a body (concrete methods), which can be shared and used directly by all subclasses.
* **Mandatory Implementation**: Any non-abstract class that extends an abstract class must implement all of its abstract methods.

---

### Episode 29 Code:

**Life.java**

```java
public abstract class Life {

    abstract void talk();

    // Concrete method can be used in an abstract class
    void talkeMore() {
        System.out.println("More talk content");
    }
}
```

**Human.java**

```java
public class Human extends Life {

    @Override
    void talk() {
        System.out.println("Blablabla");
    }
}
```

**Main.java**

```java
public class Main {
    public static void main(String[] args) {

        Human human1 = new Human();
        
        // Calling the implemented abstract method
        human1.talk();

        // Calling the inherited concrete method
        human1.talkeMore();
    }
}
```
