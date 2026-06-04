---
title: Ep44 Synchronized Methods
hide_title: true
sidebar_label: Ep44 Synchronized Methods
sidebar_position: 44
---

## Ep44 Synchronized Methods

In this episode, we explore **Synchronization**, a mechanism that controls the access of multiple threads to shared resources. In a multithreaded environment, the `synchronized` keyword ensures that only one thread can execute a specific method at a time for a given object, preventing data corruption or garbled output.

---

### Understanding the Monitor Lock

When a method is marked as `synchronized`, Java uses a **Monitor** (also known as a lock). When a thread enters the method, it acquires the lock. Any other thread attempting to call a synchronized method on the same object must wait until the first thread releases the lock.


```java
class Message {
    // Synchronized ensures that messages don't overlap in the console
    synchronized void send(String message) {
        System.out.println("[[ Sending message " + message);
        try {
            // Simulate processing time
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            System.out.println(e);
        }
        System.out.println("Confirm, Message Sent: " + message + "]]");
    }
}

class MessageThreader implements Runnable {
    String message;
    Thread t;
    Message target;

    MessageThreader(Message target, String message) {
        this.message = message;
        this.target = target;
        t = new Thread(this);
    }

    public void run() {
        // Calls the synchronized method on the shared target object
        target.send(message);
    }
}

public class Main {
    public static void main(String[] args) {

        // Creating a single shared resource
        Message message = new Message();

        // Two threads attempting to use the same 'message' object simultaneously
        MessageThreader message1 = new MessageThreader(message, "Climate change is real.");
        MessageThreader message2 = new MessageThreader(message, "Hi I am frog");

        message1.t.start();
        message2.t.start();
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **The Race Condition**: Without the `synchronized` keyword, `message1` and `message2` might both print their "[[ Sending message" line before either finished, resulting in messy output.
* **Mutual Exclusion**: Because `send()` is `synchronized`, if `message1` starts sending, `message2` is blocked. It must wait for `message1` to finish the 1-second `sleep()` and print the confirmation before it can enter the method.
* **Atomic Operation**: The entire block of code inside `send()` becomes an atomic-like operation relative to the shared `Message` object.
* **Thread Safety**: This approach makes the `Message` class "Thread-Safe," meaning it behaves correctly when called from multiple threads.

---

### Key Takeaways

| Feature | Description |
| :--- | :--- |
| **`synchronized`** | A keyword applied to methods or blocks to provide exclusive access. |
| **Lock/Monitor** | An internal flag on every Java object used to track thread access. |
| **Blocking** | Threads that arrive second are put in a "blocked" state until the lock is released. |
| **Integrity** | Ensures that the output or data state remains consistent even with concurrent access. |

---

> [!CAUTION]
> While synchronization is necessary for safety, overusing it can slow down your program because threads spend more time waiting in line. Use it only when multiple threads need to modify or access the same shared object state.

---