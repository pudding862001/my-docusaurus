---
title: Ep2 Variables
sidebar_label: Ep2 Variables
hide_title: true
sidebar_position: 2
---

## Ep2 Variables

* Use  **int, double, boolean, string** to define different types of variabless.

```java
public class Main {
    public static void main(String[] args){

        //Declaring Variables
        //[type] [identifier] = [data];

        int brainSize = 1000;

        System.out.println(brainSize);

        double testScore = 5.5;
        boolean isCool = true;
        String name = "Kody";

        System.out.println(name + ", is he cool? " + isCool);
        System.out.println(testScore);

        double newScore = 56.0;
        System.out.println(newScore);
        newScore = 100.0;
        System.out.println(newScore);

        //can not use java reserve word as variable like "static","public", etc

        //ex: int public = 5;

        //CANNOT start with a digit(number)

    }
}

```
