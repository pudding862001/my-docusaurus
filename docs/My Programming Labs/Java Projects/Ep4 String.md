---
title: Ep4 String
hide_title: true
sidebar_label: Ep4 String
sidebar_position: 4
---

## Ep4 String

* Use the + operator to join strings and variables for dynamic text output.

```java
public class Main {
    public static void main(String[] args) {

        String dog = "Jerry";
        System.out.println(dog);
        String declarationOfIndependence = "I am free bruyh";
        System.out.println(declarationOfIndependence);

        String multiple = dog + declarationOfIndependence;
        System.out.println(multiple);

        System.out.println( dog + " " + declarationOfIndependence + " ,because I am cool.");

    }
}

```
