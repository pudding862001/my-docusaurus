---
title: Ep20 Getters and Setters
hide_title: true
sidebar_label: Ep20 Getters & Setters
sidebar_position: 20
---

## Ep20 Getters and Setters

In this episode, we dive into **Encapsulation**, one of the four pillars of Object-Oriented Programming. We learn how to protect our data by making fields private and providing public **Getters** and **Setters** to access them.

### Key Takeaways:

* **Why use Getters & Setters?**: They allow you to control how data is accessed or modified. For example, you can prevent a bank balance from being set to a negative number.
* **The `this` Keyword**: Used within a setter or constructor to distinguish between the class field and the parameter being passed in (e.g., `this.name = name`).
* **Getter**: A method used to **retrieve** the value of a field (usually starts with `get`).
* **Setter**: A method used to **update** or **change** the value of a field (usually starts with `set`).

---

### Part 1: The Basics (Zebra Example)
This simple example shows the standard syntax for creating Getters and Setters to rename or update an object's attributes.

```java
public class Main {
    public static void main(String[] args) {
        class Zebra {
            String name;
            int age;

            Zebra(String name, int age) {
                this.name = name;
                this.age = age;
            }

            // Getter for Name
            public String getName() { return name; }

            // Setter for Name
            public void setName(String name) { this.name = name; }

            // Getter and Setter for Age
            public int getAge() { return age; }
            public void setAge(int age) { this.age = age; }
        }

        Zebra qqq = new Zebra("Gary", 65);
        System.out.println("Original Name: " + qqq.getName());
        
        qqq.setName("James"); // Updating name via Setter
        System.out.println("Updated Name: " + qqq.getName());
    }
}
```

### Practical Application - The BankAccount Code:

* In a real-world scenario like a bank, you don't want anyone to directly change the balance. You use methods to ensure every change follows specific rules (like adding or deducting money).

```java
public class Main {
    public static void main(String[] args) {

        class BankAccount {
            private String accountNumber;
            private long balance;
            private String userName;
            private String userLastName;
            private String address;
            private int age;

            // Constructor to initialize the account
            public BankAccount(String accountNumber, long balance, String userName, String userLastName, String address, int age) {
                this.accountNumber = accountNumber;
                this.balance = balance;
                this.userName = userName;
                this.userLastName = userLastName;
                this.address = address;
                this.age = age;
            }

            // Standard Getters and Setters
            public String getAccountNumber() { return accountNumber; }
            public void setAccountNumber(String accountNumber) { this.accountNumber = accountNumber; }

            public long getBalance() { return balance; }
            public void setBalance(long balance) { this.balance = balance; }

            // Custom Logic Methods
            public void addMoney(long amount) {
                balance = balance + amount;
                System.out.println("Successfully deposited: $" + amount);
            }

            public void deductMoney(long amount) {
                if (balance >= amount) {
                    balance = balance - amount;
                    System.out.println("Successfully withdrew: $" + amount);
                } else {
                    System.out.println("Error: Insufficient funds for withdrawal!");
                }
            }
        }

        // --- Testing the System ---
        BankAccount larrysAccount = new BankAccount("123456789", 100, "Larry", "Pickson", "Houston City", 140);
        
        System.out.println("Account Number: " + larrysAccount.getAccountNumber());
        System.out.println("Starting Balance: $" + larrysAccount.getBalance());

        // Updating balance via setter
        larrysAccount.setBalance(1000);
        System.out.println("Manual Update Balance: $" + larrysAccount.getBalance());

        // Using business logic methods
        larrysAccount.addMoney(600);   // Balance becomes 1600
        larrysAccount.deductMoney(400); // Balance becomes 1200

        System.out.println("Final Balance: $" + larrysAccount.getBalance());
    }
}

```