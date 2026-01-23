---
title: Ep39 Multithreaded Programming
hide_title: true
sidebar_label: Ep39 Multithreaded Programming
sidebar_position: 39
---

## Ep39 Multithreaded Programming

In this episode, we move beyond single-threaded execution to explore **Multithreaded Programming**. Multithreading allows a program to perform multiple tasks concurrently, maximizing CPU utilization and improving application responsiveness.

---

### The Life of a Thread

A thread in Java moves through several distinct states during its existence. Understanding this lifecycle is critical for managing resources and preventing deadlocks.


1.  **Running / Ready to run**: The thread is either currently executing or is prepared to execute as soon as the CPU is available.
2.  **Suspended**: The thread temporarily stops its execution.
3.  **Resumed**: An instruction tells a suspended thread to return to its ready-to-run state.
4.  **Blocked**: The thread is "stuck" waiting for a specific resource to become available.
5.  **Terminated**: The thread has finished its task and is permanently stopped.

---

### Thread Priorities and Synchronization

#### Thread Priorities
To manage multiple threads, Java uses **Priorities**. Each thread is assigned a number that influences the "context switch"—the moment the CPU switches from one thread to another.
* The **default priority value is 5**.
* Priorities help the system decide which thread deserves more CPU time.

#### Synchronization & Monitors
Sometimes, allowing two threads to access the same resource simultaneously (asynchronous execution) causes data corruption. Java handles this through **Synchronization**.
* **The Monitor**: Think of a monitor as a "little box" that only one thread can enter at a time.
* While a thread is inside the monitor, all other threads are blocked from entering until the first thread leaves.
* This effectively forces a single-threaded execution flow for a limited time to protect critical data.

---

### Creating and Managing Threads

Threads can be created in Java using two primary methods:
1.  **Extending the `Thread` class**.
2.  **Implementing the `Runnable` interface**.

#### Essential Thread Methods
The Java API provides several methods to control thread behavior:

| Method | Description |
| :--- | :--- |
| `start()` | The most important method; it begins a thread's execution by calling its `run()` method. |
| `run()` | The entry point for the thread's logic. |
| `getName()` | Obtains the string name of the thread. |
| `getPriority()` | Retrieves the thread's current priority value. |
| `isAlive()` | Checks if the thread is still running. |
| `join()` | Forces the current thread to wait until the target thread terminates. |
| `sleep()` | Suspends the thread for a specified period of time. |

> [!TIP]
> While high-priority threads get more CPU attention, never rely solely on priorities for program logic, as priority behavior can vary between different Operating Systems. Always use **Synchronization** when multiple threads share data.

---