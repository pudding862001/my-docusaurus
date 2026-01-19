---
title: Ep22 Using Objects as Parameters
hide_title: true
sidebar_label: Ep22 Using Objects as Parameters
sidebar_position: 22
---

## Ep22 Using Objects as Parameters

In this episode, we explore how to **Pass Objects as Parameters** to methods. Just as you can pass primitive types like `int` or `String` to a method, you can also pass an entire object. This allows methods to interact with or compare data from different instances of a class.

### Key Takeaways:

* **Passing References**: When you pass an object to a method, you are passing a reference to that object. The method can then access all the public fields and methods of that object.
* **Complex Inter-Object Logic**: This is essential for tasks like comparing two objects (e.g., "Is this car the same as that car?") or cloning data from one object to another.
* **Encapsulation**: It keeps your code clean by allowing objects to handle logic that involves other objects of the same type.
* **Efficiency**: Passing an object is highly efficient because Java only passes the memory address (reference) of the object, not a full copy of all its data.

---

### Episode 22 Code:

```java
class Car {
    String model;
    int year;

    // Constructor to initialize Car object
    Car(String model, int year) {
        this.model = model;
        this.year = year;
    }

    // Method that accepts another Car object as a parameter
    void compareCar(Car anotherCar) {
        if (this.model.equals(anotherCar.model) && this.year == anotherCar.year) {
            System.out.println("Status: These are the same car models.");
        } else {
            System.out.println("Status: These are different cars.");
        }
    }
}

public class Main {
    public static void main(String[] args) {

        // --- Creating Car Objects ---
        Car car1 = new Car("Tesla Model 3", 2023);
        Car car2 = new Car("Tesla Model 3", 2023);
        Car car3 = new Car("Toyota Corolla", 2022);

        // --- Testing Objects as Parameters ---
        System.out.println("Comparing Car 1 and Car 2:");
        car1.compareCar(car2); // Passing car2 as an object parameter

        System.out.println("\nComparing Car 1 and Car 3:");
        car1.compareCar(car3); // Passing car3 as an object parameter
    }
}