---
title: Ep49 Enumerations as Classes
hide_title: true
sidebar_label: Ep49 Enumerations as Classes
sidebar_position: 49
---

## Ep49 Enumerations as Classes

In this episode, we discover that Java Enums are much more powerful than simple lists of constants. In Java, an enum is effectively a specialized class. This means enums can have fields, multiple constructors, and methods, allowing each constant to carry its own unique data.

---

### Enums with Fields and Constructors

By adding fields and constructors to an enum, you can associate values—like prices or IDs—directly with each constant. Each time an enum constant is defined, its corresponding constructor is executed.


```java
enum Colors {
    // Each constant calls a specific constructor
    Red(2), Pink(3), Yellow(4,5), Orange(), Blue(2), Green(7);

    private int price;
    private int price2;

    // Constructor for one integer
    Colors(int p) {
        price = p;
    }

    // Default constructor (no arguments)
    Colors() {
        price = -1;
    }

    // Constructor for two integers
    Colors(int p, int q) {
        price = p;
        price2 = q;
    }

    // Method to retrieve the stored data
    int getPrice() {
        return price;
    }
}

public class Main {
    public static void main(String[] args) {

        Colors color1 = Colors.Green;
        System.out.println(color1.getPrice()); // Prints: 7

        Colors color2 = Colors.Orange;
        System.out.println(color2.getPrice()); // Prints: -1 (from default constructor)

        // Using ordinal() to find the position (0-indexed)
        System.out.println(color2.ordinal()); // Prints: 3

        // Using compareTo() to compare positions
        // Returns negative if color2 comes before Blue, positive if after
        System.out.println(color2.compareTo(Colors.Blue)); 
        System.out.println(color2.compareTo(Colors.Yellow));

        // Using equals() to check for identity
        if(color2.equals(color1)) {
            System.out.println("Equal");
        } else {
            System.out.println("Not Equal");
        }
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **Overloaded Constructors**: The `Colors` enum uses overloading to handle different constant definitions. For example, `Yellow(4,5)` triggers the two-parameter constructor, while `Orange()` triggers the no-arg constructor that sets a default value of `-1`.
* **Ordinal Position**: The `ordinal()` method returns the numerical index of the constant based on its declaration order. Since `Orange` is the 4th item, its ordinal is 3.
* **Comparison Logic**: `compareTo()` calculates the difference between the ordinals of two constants. This is useful for sorting enums alphabetically or by priority.
* **Identity Check**: The `equals()` method returns true only if both variables point to the exact same enum constant.

---

### Built-in Enum Methods

| Method | Description |
| :--- | :--- |
| **`ordinal()`** | Returns the position of the constant in its enum declaration. |
| **`compareTo(E other)`** | Compares the ordinal of the current constant with another of the same type. |
| **`equals(Object)`** | Returns true if the specified object is equal to this constant. |
| **Custom Methods** | You can define any method (like `getPrice()`) to access internal enum data. |

---

> [!TIP]
> **Enum constructors are always private.** You cannot use the `new` keyword to create an enum instance. The constants are created automatically when the class is loaded, ensuring that only a fixed set of instances ever exists.

---