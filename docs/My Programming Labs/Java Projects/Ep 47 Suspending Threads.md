---
title: Ep47 Suspending Threads
hide_title: true
sidebar_label: Ep47 Suspending Threads
sidebar_position: 47
---

## Ep47 Suspending Threads

In this episode, we explore how to safely suspend and resume a thread's execution. While Java's `Thread` class originally had built-in `suspend()` and `resume()` methods, they are now deprecated because they were prone to causing deadlocks. Instead, we implement a safer "Flag and Wait" pattern.

---

### The Safe Suspension Pattern

To pause a thread safely, we use a boolean flag (`suspendThread`) combined with the `wait()` and `notify()` methods. This ensures that the thread only pauses at a safe point in its execution logic.


```java
class CoolThread implements Runnable {
    Thread t;
    boolean suspendThread;
    String name;

    CoolThread(String name) {
        t = new Thread(this, name);
        System.out.println("New Thread has been created " + t);
        suspendThread = false;
    }

    public void run() {
        for (int i = 20; i > 0; i--) {
            try {
                Thread.sleep(1000);
                System.out.println(i);
                
                // Synchronized block to check the suspension flag
                synchronized (this) {
                    while(suspendThread == true) {
                        System.out.println("Pausing Thread");
                        wait(); // Thread waits here until notified
                    }
                }
            } catch (InterruptedException e) {
                System.out.println(e);
            }
        }
    }

    // Method to trigger suspension
    synchronized void suspendThread() {
        suspendThread = true;
    }

    // Method to trigger resumption
    synchronized void resumeThread() {
        suspendThread = false;
        notify(); // Wakes up the thread from wait()
        System.out.println("Resuming Thread");
    }
}

public class Main {
    public static void main(String[] args) {
       CoolThread thread1 = new CoolThread("Thread one");
       thread1.t.start();

       // Let the thread run for 10 seconds
       try {
           Thread.sleep(10000);
       } catch (InterruptedException e) {
           System.out.println(e);
       }

       // Pause the thread
       thread1.suspendThread();

       // Wait for 5 seconds while paused
       try {
           Thread.sleep(5000);
       } catch (InterruptedException e) {
           System.out.println(e);
       }

       // Resume the thread
       thread1.resumeThread();
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **The Control Flag**: The `suspendThread` boolean acts as the master switch for the thread's state.
* **Guarded Execution**: Inside the `run()` method's loop, the thread checks the flag within a `synchronized` block. If the flag is `true`, it calls `wait()`, releasing its lock and entering a dormant state.
* **Manual Resumption**: The `resumeThread()` method is also `synchronized`. It flips the flag back to `false` and calls `notify()`, which signals the waiting thread to wake up and continue its loop.
* **Timing**: The `Main` class demonstrates this by allowing the thread to count down for 10 seconds, pausing it for 5 seconds, and then allowing it to finish the remainder of its countdown.

---

### Key Methods for Thread Control

| Method | Role in Suspension | Requirement |
| :--- | :--- | :--- |
| **`wait()`** | Causes the thread to stop and wait for a signal. | Must be inside a `synchronized` block. |
| **`notify()`** | Sends a signal to the waiting thread to wake up. | Must be called from a `synchronized` method/block. |
| **`sleep()`** | Used in `Main` to simulate time passing before toggling states. | Requires a `try-catch` for `InterruptedException`. |

---

> [!TIP]
> **Why avoid `Thread.suspend()`?** The native `suspend()` method does not release the locks the thread is holding. If another thread needs those same locks to resume the suspended thread, a **Deadlock** occurs where both threads are stuck forever. The manual flag approach shown here is the industry standard for safe thread control.

---