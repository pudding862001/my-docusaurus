---
title: Ep5 Type Conversion
hide_title: true
sidebar_label: Ep5 Type Conversion
sidebar_position: 5
---

## Ep5 Type Conversion

* Learn how to convert between different data types and handle numeric promotion in Java arithmetic.

:::info Key Concepts
- **Widening Casting**: Smaller to larger types (e.g., `int` -> `long`) are handled automatically by Java.
- **Narrowing Casting**: Larger to smaller types (e.g., `double` -> `int`) require explicit casting using `(type)`.
- **Numeric Promotion**: Java treats math results as `int` by default. If you want to save the result back into a `byte` variable, you need to "force" it back using `(byte)`.
:::

```java
import java.sql.SQLOutput;

public class Main {
    public static void main(String[] args) {

       int jerry = 5000;
       long anotherJerry;
       anotherJerry = jerry;
        System.out.println(anotherJerry);

        //false example
        //byte anotherJerry
        //anotherJerry = jerry


        // <127, we can convert it
        int bill = 127;
        byte anotherbill;
        anotherbill = (byte)bill;
        System.out.println(anotherbill);

        /* false example
        Can not
        int cool = 10000;
        short anothercool;
        anothercool = cool;
        System.out.println(anothercool);

        */

        int cool = 10000;
        short anothercool;
        anothercool = (short)cool;
        System.out.println(anothercool);


        //convert double to int

        double cooldude = 120.5;
        int i;
        i = (int)cooldude;
        System.out.println(i);

        int j = (int)125.6;
        System.out.println(j);


        byte a = 100;
        byte b = 20;
        int result = a*b;
        System.out.println(result);

        byte e = 50;
        int f;
        f = e*2;
        System.out.println(f);

        //false example
        //b = b * 50
        //To fix it
        byte g = 10;
        g = (byte)(g * 3);
        System.out.println(g);

    }
}

```
