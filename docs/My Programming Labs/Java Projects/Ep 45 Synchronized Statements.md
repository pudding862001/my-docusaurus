---
title: Ep45 Synchronized Statements
hide_title: true
sidebar_label: Ep45 Synchronized Statements
sidebar_position: 45
---

## Ep45 Synchronized Statements

In this episode, we explore **Synchronized Statements** (also known as synchronized blocks). While synchronized methods are useful, sometimes you cannot modify the source code of a class to add the `synchronized` keyword, or you only want to synchronize a specific part of a method. Synchronized statements allow you to achieve thread safety by locking an object externally.

---

### Understanding Synchronized Blocks

A synchronized statement must specify the object that provides the monitor lock. This is particularly helpful when dealing with third-party classes or when you need more granular control over which parts of your code are synchronized.

```java
class Message {
    // This method is NOT synchronized in its definition
    void send(String message) {
        System.out.println("[[ Sending message " + message);
        try {
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
        // Synchronizing on the 'target' object externally
        synchronized (target) {
            target.send(message);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        Message message = new Message();

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

* **External Synchronization**: Even though the `send()` method in the `Message` class is not synchronized, the `MessageThreader` ensures thread safety by wrapping the call inside a `synchronized (target)` block.
* **Object-Level Locking**: When `message1` enters the synchronized block, it acquires the lock for the `target` object. `message2` must wait at the start of its own synchronized block until the lock is released.
* **Flexibility**: This approach allows the `Message` class to remain simple while giving the caller the responsibility of handling concurrency when needed.
* **Thread Safety**: Similar to synchronized methods, this prevents the output of the two threads from overlapping, ensuring each message is fully "Sent" and "Confirmed" before the next one starts.

---

### Synchronized Methods vs. Synchronized Statements

| Feature | Synchronized Method | Synchronized Statement (Block) |
| :--- | :--- | :--- |
| **Scope** | Entire method is locked. | Only the specified block of code is locked. |
| **Object Lock** | Implicitly locks `this` object. | Explicitly specify which object to lock (e.g., `synchronized(target)`). |
| **Use Case** | When you own the class and the whole method needs safety. | When you can't modify the class or want better performance by locking less code. |

---

> [!TIP]
> Using synchronized statements is often considered a better practice for performance because it allows you to minimize the "scope" of the lock. The less time a thread holds a lock, the more responsive your application becomes.

---