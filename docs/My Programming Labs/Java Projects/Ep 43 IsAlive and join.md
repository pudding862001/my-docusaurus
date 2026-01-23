---
title: Ep43 IsAlive and Join
hide_title: true
sidebar_label: Ep43 IsAlive and Join
sidebar_position: 43
---

## Ep43 IsAlive and Join

In this episode, we learn how to coordinate the timing of multiple threads using two essential methods: `isAlive()` and `join()`. These methods allow the main thread to track the status of child threads and wait for them to finish their tasks before proceeding.

---

### Managing Thread Completion

When running multiple threads, you often need to know if a thread is still running or ensure that one thread finishes before another begins. The `isAlive()` method returns a boolean status, while `join()` effectively pauses the calling thread until the target thread terminates.


```java
class Bear implements Runnable {

    String name;
    Thread t;

    Bear (String name) {
        this.name = name;
        t = new Thread(this, name);
    }

    public void run() {
        System.out.println("POTATO");
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            System.out.println(e);
        }
        System.out.println("Frog");
    }
}

public class Main {
    public static void main(String[] args) {

        Bear thread1 = new Bear("Thread One");
        Bear thread2 = new Bear("Thread Two");
        Bear thread3 = new Bear("Thread Three");

        // Checking status before starting
        System.out.println(" At the beginning " + thread1.t.isAlive());
        System.out.println(" At the beginning " + thread2.t.isAlive());

        thread1.t.start();
        
        try {
            // This forces the main thread to wait until thread1 is finished
            thread1.t.join();
        } catch(InterruptedException e) {
            System.out.println(e);
        }

        // thread2 and thread3 only start after thread1 has completed its join()
        thread2.t.start();
        thread3.t.start();

        System.out.println(thread1.t.isAlive());
        System.out.println(thread2.t.isAlive());
    }
}
```

---

### Execution Logic Analysis

Based on the provided source code:

* **Initial Status**: At the very beginning, `isAlive()` returns `false` for all threads because they have been instantiated but not yet started.
* **The join() Mechanism**: When `thread1.t.join()` is called, the main thread stops and waits. Consequently, `thread2` and `thread3` do not even begin until `thread1` has fully finished its "POTATO" and "Frog" print sequence.
* **Synchronization**: Without `join()`, all three threads would likely print "POTATO" at the same time. With `join()`, you create a predictable sequence of events.
* **Post-Execution Status**: After `join()` finishes, a call to `thread1.t.isAlive()` will return `false` because that specific thread has terminated.

---

### Comparison of Control Methods

| Method | Return Type | Description |
| :--- | :--- | :--- |
| **`isAlive()`** | `boolean` | Checks if the thread has been started and has not yet terminated. |
| **`join()`** | `void` | Waits for a specific thread to die/finish before allowing the current thread to continue. |

---

> [!IMPORTANT]
> Both `join()` and `sleep()` throw an `InterruptedException`. This means they must always be enclosed in a `try-catch` block to handle cases where another thread might interrupt the waiting process.

---