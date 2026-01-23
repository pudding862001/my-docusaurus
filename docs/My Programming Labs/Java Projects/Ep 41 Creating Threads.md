---
title: Ep41 Creating Threads
hide_title: true
sidebar_label: Ep41 Creating Threads
sidebar_position: 41
---

## Ep41 Creating Threads

In this episode, we move beyond the Main Thread to create our own "Child Threads." Java provides two ways to achieve this: implementing the **Runnable** interface or extending the **Thread** class.

---

### Two Ways to Create a Thread

There are two common patterns for thread creation. The first is generally preferred in professional development because it allows your class to inherit from other classes while still being a thread.


```java
// Method 1: Implementing the Runnable Interface
class MyThread implements Runnable {
    Thread t;
    MyThread() {
        // Constructing the thread: (Runnable target, String name)
        t = new Thread(this, "My cool Thread");
        System.out.println("Child Thread Created: " + t);
    }

    public void run() {
        try {
            for (int i = 5; i > 0; i--) {
                System.out.println(i);
                Thread.sleep(1000);
            }
        } catch(InterruptedException e) {
            System.out.println(e);
        }
    }
}

// Method 2: Extending the Thread Class
class MyThread2 extends Thread {
    MyThread2() {
        // Using super() to set the thread name
        super("MyCoolCoolThread");
        System.out.println("Child Thread Created: " + this);
    }

    public void run() {
        try {
            for (int i = 5; i > 0; i--) {
                System.out.println(i);
                Thread.sleep(1000);
            }
        } catch(InterruptedException e) {
            System.out.println(e);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        // Starting the Runnable implementation
        MyThread bear = new MyThread();
        bear.t.start();

        // Starting the Thread extension
        MyThread2 beer = new MyThread2();
        beer.start();
    }
}
```

---

### Execution Logic Analysis

Based on the provided source code:

* **Thread Initialization**: In the `Runnable` approach, you must create a `new Thread` object and pass `this` as the target. In the `extension` approach, the object itself *is* a thread.
* **The run() Method**: This is the "brain" of your thread. Any code inside `run()` executes concurrently with the main thread.
* **The start() Method**: This is the most critical step. Calling `start()` tells the JVM to allocate resources and execute the `run()` method in a new call stack. If you call `run()` directly, it will just act like a normal method call on the main thread.
* **Naming**: Both examples demonstrate how to assign custom names to threads for easier tracking in the console.

---

### Runnable vs. Thread Extension

| Feature | Implementing `Runnable` | Extending `Thread` |
| :--- | :--- | :--- |
| **Inheritance** | Class can still extend another class. | Class cannot extend anything else. |
| **Object Type** | The class is a "Task" to be run. | The class is the "Thread" itself. |
| **Common Use** | **Preferred** for flexible architecture. | Used for simple, specialized threads. |
| **Complexity** | Slightly more code to setup. | Very simple and direct syntax. |

---

> [!NOTE]
> When multiple threads run simultaneously, their output in the console might appear mixed together. This is normal! It proves that the threads are running at the same time rather than waiting for one another to finish.

---