---
title: Ep26 Encapsulation
hide_title: true
sidebar_label: Ep26 Encapsulation
sidebar_position: 26
---

## Ep26 Encapsulation

In this episode, we learn about **Encapsulation**, which is one of the four fundamental OOP concepts. Encapsulation is the technique of bundling the data (variables) and the methods that act on the data into a single unit (class), and restricting direct access to some of the object's components.

### Key Takeaways:

* **Data Hiding**: By making class fields private, you prevent external classes from directly accessing or modifying them, which protects the integrity of the data.
* **Getters and Setters**: These are public methods used to retrieve and update the value of a private variable. They provide a controlled way to interact with the data.
* **Increased Security**: You can add logic inside a setter method (like validation) to ensure that only valid data is stored in your objects.
* **Maintenance**: Since the internal implementation is hidden, you can change how data is stored or calculated without affecting other parts of the program that use the class.

---

### Episode 26 Code:

```java
class Account {
    // Usually, fields are set to private to achieve true encapsulation
    public int balance = 1000;

    // Method to modify the data through a defined behavior
    void deposit(int money) {
        balance = balance + money;
    }

    // Getter method to retrieve data
    public int getBalance() {
        return balance;
    }

    // Setter method to update data
    public void setBalance(int balance) {
        this.balance = balance;
    }
}

public class Main {
    public static void main(String[] args) {

        Account account1 = new Account();
        
        // Using the setter to update the balance
        account1.setBalance(200);
        
        // Accessing the balance
        System.out.println("Current Balance: " + account1.balance);
    }
}