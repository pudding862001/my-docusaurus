---
title: Ep53 Reading Lines of Input
hide_title: true
sidebar_label: Ep53 Reading Lines of Input
sidebar_position: 53
---

## Ep53 Reading Lines of Input

In this episode, we explore how to read entire strings and multiple lines of text from the console using the `readLine()` method of the `BufferedReader` class. This is a more flexible way to handle user interaction than reading single characters.

---

### Handling String Input and Storage

The `readLine()` method allows you to capture all characters entered until the user presses Enter, returning the result as a single `String`. This is ideal for processing sentences or complex commands.



```java
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) {

        InputStreamReader ir = new InputStreamReader(System.in);
        BufferedReader br = new BufferedReader(ir);
        String sarray[] = new String[100];
        String stringy;

        System.out.println("Type as many lines of text as you want. Press Enter for a new line");
        System.out.println("Type Stop to stop.");

        // Part 1: Continuous input using a do-while loop
        try {
            do {
                stringy = br.readLine();
                System.out.println(stringy);
            } while(!stringy.equalsIgnoreCase("stop"));
        } catch (IOException e) {
            System.out.println(e);
        }

        System.out.println("-----------------------");
        System.out.println("Please start to input string");

        // Part 2: Storing multiple lines into a String array
        try {
            for (int i = 0; i < 100; i++) {
                sarray[i] = br.readLine();
                // Break the loop if the sentinel value "frog" is entered
                if(sarray[i].equalsIgnoreCase("frog")) {
                    break;
                }
            }

            System.out.println("-----------------------");
            System.out.println("Here is all of your stored output");
            for (int i = 0; i < 100; i++) {
                if(sarray[i].equalsIgnoreCase("frog")) {
                    break;
                }
                System.out.println(sarray[i]);
            }
        } catch (IOException e) {
            System.out.println(e);
        }
    }
}
```

---

### Execution Logic Analysis

Based on the provided source code:

* **Full-Line Reading**: The `readLine()` method returns the entire contents of a line, excluding the line-termination characters.
* **Sentinel Termination**: The program uses "stop" and "frog" as sentinel values to control the termination of input loops.
* **Case-Insensitive Check**: By using `equalsIgnoreCase()`, the program remains user-friendly, accepting various capitalizations of the exit keywords.
* **Array Management**: The code demonstrates storing dynamic user input into a fixed-size `String` array for later display.

---

### Key Takeaways

| Feature | Description |
| :--- | :--- |
| **`readLine()`** | Returns the line as a `String`, or `null` if the end of the stream is reached. |
| **`equalsIgnoreCase()`** | Performs a case-insensitive string comparison. |
| **`sarray[]`** | A `String` array used to cache input data for sequential access. |
| **Input Loops** | Both `do-while` and `for` loops are effectively used to manage multi-line input streams. |

---

> [!TIP]
> **Resource Management**: When reading input, always remember that `readLine()` might return `null`. Checking for this condition is a good habit to prevent `NullPointerException` in more complex applications.

---