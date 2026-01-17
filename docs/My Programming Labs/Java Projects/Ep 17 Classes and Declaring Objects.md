---
title: Ep17 Classes and Objects
hide_title: true
sidebar_label: Ep17 Classes and Objects
sidebar_position: 17
---

## Ep17 Classes and Objects

In this episode, we step into the world of **Object-Oriented Programming (OOP)**. We learn how to create our own data types using **Classes** and how to bring them to life as **Objects**.

### Key Takeaways:

* **Class (The Blueprint)**: A class defines the structure and behavior of something (like a `Human` or a `Dog`). It's like a template or a cookie cutter.
* **Object (The Instance)**: An object is a specific "thing" created from a class. If `Human` is the blueprint, `human1` (Larry) is the actual house built from it.
* **Fields (Attributes)**: Variables defined inside a class (like `name`, `age`) that represent the properties of the object.
* **The `new` Keyword**: Used to instantiate (create) a new object in memory.
* **Dot Notation (`.`)**: Use the dot operator to access or modify an object's fields (e.g., `human1.name = "Larry"`).


---

### Episode 17 Code:

```java
public class Main {
    public static void main(String[] args) {

        // 1. Defining a Local Class (The Blueprint)
        class Human {
            String name;
            int age;
            boolean isMale;
        }

        // 2. Creating an Object (Instantiating)
        Human human1 = new Human();

        // Assigning values to fields using dot notation
        human1.name = "Larry";
        human1.age = 60000; // Larry is quite old!
        human1.isMale = true;

        System.out.println("Human 1 Name: " + human1.name);
        System.out.println("Human 1 Age: " + human1.age);

        // 3. Creating another Instance of the same Class
        Human human2 = new Human();
        human2.name = "Jane";
        human2.age = 2;
        human2.isMale = false;

        System.out.println("Human 2 Name: " + human2.name);

        // 4. Defining another Class: Dog
        class Dog {
            String name;
            int age;
            String breed;
        }

        Dog dog1 = new Dog();
        dog1.name = "Hot";
        dog1.age = 500;
        dog1.breed = "Dragon";

        System.out.println("Dog's Breed: " + dog1.breed);
    }
}