---
title: Ep46 Interthread Communication
hide_title: true
sidebar_label: Ep46 Interthread Communication
sidebar_position: 46
---

## Ep46 Interthread Communication

In this episode, we explore **Inter-thread Communication**. While synchronization prevents threads from accessing the same resource simultaneously, inter-thread communication allows threads to talk to each other to coordinate their activities. This is primarily achieved using the `wait()` and `notify()` methods.

---

### The Producer-Consumer Problem

A classic example of inter-thread communication is the **Producer-Consumer** pattern. The Producer creates data and waits for the Consumer to process it, while the Consumer waits for the Producer to provide new data. This prevents the Consumer from reading the same data twice and prevents the Producer from overwriting data before it is read.

```java
class Q {
    int n;
    boolean hasValue = false; // Using as a flag to coordinate

    synchronized int get() {
        // While no new value is available, the consumer waits
        while(!hasValue) {
            try {
                wait();
            } catch(InterruptedException e) {
                System.out.println(e);
            }
        }
        System.out.println("Value of N: " + n);
        
        // Signal the producer that the value has been consumed
        notify();
        hasValue = false;
        return n;
    }

    synchronized void put(int n) {
        // While a value is already present, the producer waits
        while(hasValue) {
            try {
                wait();
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
        this.n = n;
        System.out.println("Setting the value of n: " + n);
        
        // Signal the consumer that a new value is ready
        notify();
        hasValue = true;
    }
}

class Producer implements Runnable {
    Q q;
    Thread t;
    Producer(Q q) {
       this.q = q;
       t = new Thread(this, "Producer Thread");
    }

    public void run() {
        int i = 0;
        while(true) {
            q.put(i++);
        }
    }
}

class Consumer implements Runnable {
    Q q;
    Thread t;
    Consumer(Q q) {
        this.q = q;
        t = new Thread(this, "Consumer Thread");
    }

    public void run() {
        while(true) {
            q.get();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Q q = new Q();
        Producer p = new Producer(q);
        Consumer c = new Consumer(q);

        p.t.start();
        c.t.start();
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **Wait and Notify**: The `wait()` method tells the calling thread to give up the monitor (the lock) and go to sleep until another thread enters the same monitor and calls `notify()`.
* **The Guarded Block**: The `while` loops (e.g., `while(!wait)`) ensure that the thread checks the condition again after waking up, which is a best practice to avoid "spurious wakeups".
* **Polling vs. Signaling**: Without `wait()` and `notify()`, the threads would have to constantly check the status in a loop (polling), which wastes a lot of CPU cycles. Signaling is much more efficient.
* **The Monitor**: Note that `wait()` and `notify()` MUST be called inside a `synchronized` context. If you call them outside, Java will throw an `IllegalMonitorStateException`.

---

### Key Communication Methods

| Method | Description |
| :--- | :--- |
| **`wait()`** | Tells the current thread to release the lock and wait until another thread calls `notify()` or `notifyAll()`. |
| **`notify()`** | Wakes up a single thread that is waiting on this object's monitor. |
| **`notifyAll()`** | Wakes up all threads that are waiting on this object's monitor. The highest priority thread will run first. |

---

> [!IMPORTANT]
> Always use a **loop** rather than an `if` statement when calling `wait()`. This ensures the thread re-verifies the condition it was waiting for before proceeding with its logic.

---