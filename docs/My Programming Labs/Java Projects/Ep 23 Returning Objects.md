---
title: Ep23 Returning Objects
hide_title: true
sidebar_label: Ep23 Returning Objects
sidebar_position: 23
---

## Ep23 Returning Objects

In this episode, we learn about **Returning Objects from Methods**. Just as a method can return a primitive value like an `int` or a `double`, it can also return a reference to an object. This is a fundamental concept used for creating copies, factory methods, and more complex data structures.

### Key Takeaways:

* **Object as a Return Type**: To return an object, you specify the class name as the return type in the method signature.
* **Returning a Reference**: When a method returns an object, it is actually returning the memory address (reference) where that object is stored.
* **Object Cloning**: A common use case is creating a "makeCopy" or "clone" method that returns a new instance with the same data as the current object.
* **Identity vs. Equality**: Returning a new object creates a separate instance in memory. Even if the data inside is the same, the two objects will have different memory addresses.

---

### Episode 23 Code:

```java
class Car {
    String model;
    int year;

    Car(String model, int year) {
        this.model = model;
        this.year = year;
    }

    // Method that returns a new Car object (Cloning)
    Car makeCopy() {
        Car temp = new Car(this.model, this.year);
        return temp;
    }
}

public class Main {
    public static void main(String[] args) {
        
        Car originalCar = new Car("Ford Mustang", 1969);

        // Call the method that returns an object
        Car clonedCar = originalCar.makeCopy();

        System.out.println("Original: " + originalCar.model + " " + originalCar.year);
        System.out.println("Clone: " + clonedCar.model + " " + clonedCar.year);
        
        // Checking if they are different instances in memory
        if (originalCar != clonedCar) {
            System.out.println("Status: These are separate objects in memory.");
        }
    }
}