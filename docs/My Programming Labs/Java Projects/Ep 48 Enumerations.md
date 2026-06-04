---
title: Ep48 Enumerations
hide_title: true
sidebar_label: Ep48 Enumerations
sidebar_position: 48
---

## Ep48 Enumerations

In this episode, we introduce **Enumerations** (or **Enums**). An enum is a special Java type used to define a collection of constants. Enums make your code more readable and type-safe by restricting a variable to have one of only a few predefined values.

---

### Defining and Using Enums

Enums are defined using the `enum` keyword. They are essentially a fixed list of items that do not change, such as days of the week or colors.


```java
enum Days {
    Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
}

enum Colors {
    Blue, Orange, Pink, Yellow
}

public class Main {
    public static void main(String[] args) {

        // Assigning an enum constant to a variable
        Days day1 = Days.Monday;

        // 1. Comparison using IF statements
        if (day1 == Days.Thursday) {
            System.out.println("The day is Thursday!");
        } else if (day1 == Days.Monday) {
            System.out.println("The day is Monday!");
        }

        // 2. Comparison using SWITCH statements
        // Note: You don't need to use 'Days.Monday' inside the case
        switch(day1) {
            case Thursday:
                System.out.println("Thursday!!!!");
                break;
            case Monday:
                System.out.println("MONDAYYYYYYYYYYYY");
                break;
        }

        // 3. Printing Enums
        System.out.println(Days.Monday); // Prints: Monday
        System.out.println(day1);        // Prints: Monday

        // 4. Using values() to get an array of all constants
        Days daysarray[] = Days.values();
        for (int i = 0; i < daysarray.length; i++) {
            System.out.println(daysarray[i]);
        }

        // 5. Using valueOf() to convert a String to an Enum
        Days day2 = Days.valueOf("Friday");
        System.out.println(day2); // Prints: Friday
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **Type Safety**: The variable `day1` is of type `Days`, meaning it can only hold values defined in the `Days` enum. Trying to assign a different type would result in a compile-time error.
* **Constant Comparison**: Enums can be compared using the `==` operator.
* **Built-in Methods**: Every Java enum automatically includes static methods like `values()`, which returns an array of all constants in the order they are declared, and `valueOf(String)`, which returns the enum constant matching the provided string.
* **Switch Integration**: Enums are uniquely suited for `switch` statements, making the logic much cleaner than using multiple string or integer comparisons.

---

### Key Enum Methods

| Method | Return Type | Description |
| :--- | :--- | :--- |
| **`values()`** | `Enum[]` | Returns an array containing all of the constants in the enum. |
| **`valueOf(String)`** | `Enum` | Returns the enum constant of the specified string value. |
| **`ordinal()`** | `int` | Returns the position of the constant in the enum declaration (starting at 0). |

---

> [!TIP]
> Use Enums whenever you have a fixed set of values that are known at compile time. This prevents bugs caused by "magic strings" or "magic numbers" (like using `1` for Monday and accidentally using `1` for something else elsewhere).

---