---
title: Ep40 The Main Thread
hide_title: true
sidebar_label: Ep40 The Main Thread
sidebar_position: 40
---

## Ep40 The Main Thread

Every Java application has at least one thread of execution, known as the **Main Thread**. This thread is automatically created by the Java Virtual Machine (JVM) when your program starts. In this episode, we learn how to control and inspect this primary thread.

---

### Controlling the Execution Flow

By using the `Thread` class, we can capture the current execution context and modify its properties, such as its name or priority level. We can also force the thread to pause, which is useful for timing-based logic.

```java
public class Main {
    public static void main(String[] args) {

        // Capturing the main thread object
        Thread myThread = Thread.currentThread();

        // Customizing the thread name
        myThread.setName("Main method is cool bro");
        System.out.println(myThread);

        // Adjusting priority (1 is lowest, 10 is highest, 5 is default)
        myThread.setPriority(4);
        System.out.println(myThread);

        try {
            // A countdown loop that pauses for 1 second (1000ms) between iterations
            for(int i = 5; i > 0; i--) {
                System.out.println(i);
                Thread.sleep(1000);
            }
        } catch(InterruptedException e) {
            // sleep() requires handling InterruptedException
            System.out.println(e);
        }
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **Thread Identification**: The method `Thread.currentThread()` is used to obtain a reference to the thread currently executing the code.
* **Metadata Modification**: The code demonstrates that the "Main" thread is not fixed; its name can be changed using `setName()` and its priority can be tuned using `setPriority()`.
* **The Sleep Mechanism**: `Thread.sleep(1000)` suspends the program's execution for exactly one second per loop iteration.
* **Exception Requirement**: Because `sleep()` can be interrupted by other threads, Java mandates that it be wrapped in a `try-catch` block for `InterruptedException`.

---

### Essential Main Thread Methods

| Method | Description |
| :--- | :--- |
| **`currentThread()`** | Returns a reference to the thread object in which it is called. |
| **`setName(String)`** | Changes the display name of the thread for easier debugging. |
| **`setPriority(int)`** | Sets the thread's priority (values range from 1 to 10). |
| **`sleep(long)`** | Causes the current thread to pause execution for a specified number of milliseconds. |

---

> [!TIP]
> When you print a thread object directly (e.g., `System.out.println(myThread)`), Java displays the **name**, the **priority**, and the **thread group** (usually `main`) in brackets. This is incredibly helpful when debugging complex, multi-threaded applications.

---