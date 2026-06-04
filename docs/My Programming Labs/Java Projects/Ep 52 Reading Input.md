---
title: Ep52 Reading Input
hide_title: true
sidebar_label: Ep52 Reading Input
sidebar_position: 52
---

## Ep52 Reading Input

In this episode, we explore how to read character data from the console using the `BufferedReader` class. While `System.in` provides a basic way to get input, wrapping it in a `BufferedReader` allows for more efficient reading of characters, arrays, and lines.

---

### Setting Up the Input Stream

To read from the console, we chain two classes together. `InputStreamReader` converts the byte stream from `System.in` into a character stream, and `BufferedReader` buffers those characters for efficient processing.


```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) {

        // 1. Linking System.in to a BufferedReader
        InputStreamReader ir = new InputStreamReader(System.in);
        BufferedReader br = new BufferedReader(ir);

        // 2. Reading a single character
        char input;
        try {
            // br.read() returns an int, which must be cast to a char
            input = (char) br.read();
            System.out.println("This is the character we stole! " + input);
        } catch(IOException e) {
            System.out.println(e);
        }

        // 3. Reading multiple characters until a specific stop condition
        char input2;
        try {
            System.out.println("Enter characters (press 'x' to stop):");
            do {
                input2 = (char) br.read();
                System.out.println(input2);
            } while(input2 != 'x');
        } catch (IOException e) {
            System.out.println(e);
        }
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **Stream Chaining**: The program initializes `InputStreamReader` with `System.in` and then passes that to the `BufferedReader` constructor.
* **Integer to Character Conversion**: The `read()` method returns the integer value of the character. Therefore, it must be explicitly cast using `(char)` to display the actual character.
* **Looping for Sequential Input**: The `do-while` loop continues to read and print characters from the input buffer until the user types 'x'.
* **Exception Handling**: Since reading from an input source can fail (e.g., if the stream is closed), the code must be wrapped in a `try-catch` block to handle `IOException`.

---

### Core IO Components

| Component | Role |
| :--- | :--- |
| **`System.in`** | The standard input stream (typically the keyboard). |
| **`InputStreamReader`** | A bridge from byte streams to character streams. |
| **`BufferedReader`** | Reads text from a character-input stream, buffering characters to provide efficient reading. |
| **`read()`** | Reads a single character and returns it as an `int`. |

---

> [!TIP]
> **Why use BufferedReader?** Using `BufferedReader` is much faster than reading directly from `InputStreamReader` because it reduces the number of I/O operations by reading large chunks of data into memory at once.

---