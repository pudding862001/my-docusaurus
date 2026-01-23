---
title: Ep50 Type Wrappers
hide_title: true
sidebar_label: Ep50 Type Wrappers
sidebar_position: 50
---

## Ep50 Type Wrappers

In this episode, we explore **Type Wrappers**. While Java is an object-oriented language, it uses primitive types (like `int`, `char`, and `boolean`) for performance. Type wrappers allow these primitives to be "wrapped" into objects, which is necessary when working with collections or methods that require object references.

---

### Wrapping Primitives into Objects

Java provides a wrapper class for every primitive type. These classes provide useful methods for converting values and parsing strings.


```java
public class Main {
    public static void main(String[] args) {

        // 1. Character Wrapper
        Character char1 = Character.valueOf('c');
        System.out.println(char1);

        // 2. Boolean Wrapper and String Parsing
        // Note: Any string other than "true" (case-insensitive) results in false
        Boolean boolean1 = new Boolean("true123"); 
        System.out.println(boolean1); // Prints: false

        Boolean boolean2 = Boolean.valueOf("true");
        System.out.println(boolean2); // Prints: true

        // 3. Integer Wrapper: Boxing and Unboxing
        Integer iObj = Integer.valueOf(100); // Boxing: primitive to object
        int i = iObj.intValue();             // Unboxing: object to primitive
        
        System.out.println(i + " " + iObj);
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **Boxing with `valueOf()`**: Instead of using constructors (which are largely deprecated in modern Java), we use the static `valueOf()` method to create wrapper objects.
* **Boolean Parsing Logic**: When creating a `Boolean` from a String, Java only returns `true` if the string is equal to "true" (ignoring case). In the example, `"true123"` does not match, so it defaults to `false`.
* **Manual Unboxing**: The `intValue()` method is used to extract the primitive `int` value from the `Integer` object. 
* **Object Printing**: When you print a wrapper object like `char1` or `iObj`, Java automatically calls its `toString()` method to display the value.

---

### Primitive vs. Wrapper Class Mapping

| Primitive | Wrapper Class | Common Methods |
| :--- | :--- | :--- |
| `int` | `Integer` | `intValue()`, `parseInt()`, `valueOf()` |
| `char` | `Character` | `charValue()`, `isDigit()`, `valueOf()` |
| `boolean` | `Boolean` | `booleanValue()`, `valueOf()` |
| `double` | `Double` | `doubleValue()`, `parseDouble()` |

---

### Key Takeaways

* **Necessity**: Wrappers are essential when you need to store primitives in Java Collections (like `ArrayList`) which only accept objects.
* **Immutability**: Wrapper objects are immutable; once created, their internal value cannot be changed.
* **Static Helpers**: Wrapper classes contain many static utility methods (e.g., `Integer.parseInt("123")`) for data conversion.

> [!NOTE]
> Modern Java often performs **Autoboxing** and **Auto-unboxing**, meaning the compiler automatically converts between `int` and `Integer` for you. However, understanding the manual `valueOf()` and `intValue()` methods is crucial for understanding how the JVM handles memory.

---