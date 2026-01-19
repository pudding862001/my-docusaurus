---
title: Ep30 Packages and Access Modifiers
hide_title: true
sidebar_label: Ep30 Packages and Access Modifiers
sidebar_position: 30
---

## Ep30 Packages and Access Modifiers

In this episode, we explore **Packages** and **Access Modifiers**. Packages are used in Java to group related classes, prevent naming conflicts, and manage access levels. We specifically look at how `public` and `protected` modifiers behave across different package structures.

### Key Takeaways:

* **Package Structure**: Classes are organized into folders that match their package names (e.g., `world.atmosphere`).
* **The Import Keyword**: To use a class from another package, you must `import` it. You can use `*` to import all classes in a package.
* **Public Access**: A class or variable marked `public` can be accessed from any other class in the project.
* **Protected Access**: A variable marked `protected` is accessible within the same package, and also by subclasses in different packages through inheritance.
* **Encapsulation & Security**: Using packages and modifiers allows you to hide internal logic and only expose necessary interfaces to the rest of the application.

---

### Episode 30 Code:

**File: world/atmosphere/ocean.java**
```java
package world.atmosphere;

public class ocean {
    // Protected variable: accessible in same package and subclasses
    protected int numberOfWhales = 5;
}
```

**File: world/atmosphere/sky.java**
```java
package world.atmosphere;

public class sky {
    ocean ocean3 = new ocean();

    void doThing() {
        // Accessible because sky and ocean are in the same package
        System.out.println(ocean3.numberOfWhales);
    }
}
```

**File: underworld/hell.java**
```java
package underworld;

import world.atmosphere.ocean;

// hell inherits from ocean in a different package
public class hell extends ocean {
    
    void something() {
        // Can access protected variable through inheritance (extends)
        System.out.println(this.numberOfWhales);
    }
}
```

**File: underworld/sky.java**
```java
package underworld;

public class sky {
    // This class is in a different package (underworld)
}
```

**File: Main.java**
```java
import world.atmosphere.ocean;

public class Main {
    public static void main(String[] args) {

        ocean ocean1 = new ocean();
        
        // Note: You cannot access protected variables directly here 
        // because Main is not in the same package and not a subclass.
        // System.out.println(ocean1.numberOfWhales); 

        System.out.println("Package and Access Modifier demonstration complete.");
    }
}
```

---