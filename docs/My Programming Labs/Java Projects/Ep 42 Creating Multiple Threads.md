---
title: Ep42 Creating Multiple Threads
hide_title: true
sidebar_label: Ep42 Creating Multiple Threads
sidebar_position: 42
---

## Ep42 Creating Multiple Threads

In this episode, we take multithreading a step further by launching several threads simultaneously. This demonstrates the true power of concurrency, as multiple tasks run in parallel, each managed independently by the Java Virtual Machine.

---

### Managing Multiple Thread Instances

By using a constructor that accepts a `String name`, we can create unique instances of our thread class and track them individually as they execute their logic.


```java
class MyThread implements Runnable {
    String name;
    Thread t;

    MyThread(String name) {
        this.name = name;
        // Assigning a unique name to each thread instance
        t = new Thread(this, name);
        System.out.println("Created New Thread: " + t);
    }

    public void run() {
        try {
            for (int i = 5; i > 0; i--) {
                // Printing the specific thread object to see which one is active
                System.out.println("Thread: " + t + " " + i);
                Thread.sleep(1000);
            }
        } catch(InterruptedException e) {
            System.out.println(e);
        }
        System.out.println(t + " is exiting.");
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating three separate thread tasks
        MyThread thread1 = new MyThread("Thread1");
        MyThread thread2 = new MyThread("THREAD2");
        MyThread thread3 = new MyThread("Th3");

        // Starting all three threads concurrently
        thread1.t.start();
        thread2.t.start();
        thread3.t.start();
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **Concurrent Initialization**: Three different `MyThread` objects are created, each spawning its own internal `Thread` object with a unique identifier.
* **Independent Execution**: Once `start()` is called for all three, they enter the "Running" state. Because they all use `Thread.sleep(1000)`, they will appear to count down at roughly the same time.
* **Non-Deterministic Order**: You may notice in the console that the threads do not always print in the same order (e.g., Thread1 might print, then Th3, then THREAD2). This is because the CPU scheduler decides which thread gets a time slice.
* **Thread Termination**: Each thread exits the `run()` method independently once its loop finishes, printing an "exiting" message specific to that thread.

---

### Key Takeaways

| Concept | Description |
| :--- | :--- |
| **Scalability** | Java can handle a large number of threads, limited primarily by the system's hardware resources. |
| **Thread Naming** | Passing a name to the `Thread` constructor makes debugging significantly easier by identifying which task is failing or finished. |
| **Shared Logic** | All threads in this example execute the same `run()` logic, but they maintain their own instruction pointers and local variables. |

---

> [!TIP]
> When running multiple threads, the **Main Thread** might actually finish its execution before the child threads are done. In the next episode, we will look at how to make the Main Thread wait for others to finish using the `isAlive()` and `join()` methods.

---