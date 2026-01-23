---
title: Ep55 Writing Output to Files
hide_title: true
sidebar_label: Ep55 Writing Output to Files
sidebar_position: 55
---

## Ep55 Writing Output to Files

In this episode, we learn how to send data from our program to an external file using the `FileOutputStream` class. This allows your application to save user data, log events, or even copy files from one location to another.

---

### Writing and Copying Data

`FileOutputStream` creates an output stream used for writing data to a file. If the file does not exist, Java will create it for you. If it does exist, by default, it will overwrite the old content.


```java
import java.io.*;

public class Main {
    public static void main(String[] args) {

        InputStreamReader ir = new InputStreamReader(System.in);
        BufferedReader br = new BufferedReader(ir);
        int input;

        // Example 1: Writing Console Input to a New File
        try {
            FileOutputStream fout = new FileOutputStream("booty.txt");
            System.out.println("Type characters to save to file (Type 'X' to stop):");
            do {
                input = br.read();
                fout.write(input);
            } while(input != 'X');
            fout.close();
        } catch (IOException e) {
            System.out.println(e);
        }

        // Example 2: Copying a File and Appending New Content
        try {
            FileOutputStream fou1 = new FileOutputStream("NoLyrics.txt");
            FileInputStream fin1 = new FileInputStream("Lyrics.txt");
            int input2;

            // Reading from one file and writing to another
            do {
                input2 = fin1.read();
                if(input2 == -1) {
                    System.out.println("End of file. Done Copying old file.");
                } else {
                    fou1.write(input2);
                }
            } while (input2 != -1);

            // Optional: Appending more console input to the end of the new file
            System.out.println("Would you like to add some more stuff to the new file?");
            String yesOrNo = br.readLine();
            if(yesOrNo.equalsIgnoreCase("yes")) {
                do {
                    input2 = br.read();
                    fou1.write(input2);
                } while(input2 != 'x');
            }

            System.out.println("Program done running.");
            fin1.close();
            fou1.close();

        } catch (IOException e) {
            System.out.println(e);
        }
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **File Creation**: Instantiating `new FileOutputStream("booty.txt")` opens a file for writing. If "booty.txt" exists, its current contents are erased (overwritten).
* **The write() Method**: The `write(int b)` method sends a single byte to the file. Just like reading, we use an integer to represent the byte data.
* **File Copying Technique**: By combining a `FileInputStream` (reader) and a `FileOutputStream` (writer) in a single loop, we can duplicate file data byte by byte until the reader hits `-1`.
* **Sequential Appending**: The program demonstrates that as long as the output stream (`fou1`) remains open, you can continue writing data from different sources (first from the original file, then from the console) in a linear sequence.
* **Finalizing Streams**: Calling `close()` is essential to ensure that all data in the memory buffer is physically written to the disk and that the file lock is released.

---

### Key File Output Components

| Component | Role |
| :--- | :--- |
| **`FileOutputStream`** | Creates an output stream to write bytes to a file. |
| **`write(int)`** | Writes the specified byte to the output stream. |
| **`fout.close()`** | Closes the stream and ensures all data is saved. |
| **File Copying** | Reading from `FileInputStream` and writing to `FileOutputStream` simultaneously. |

---

> [!IMPORTANT]
> To append data to an existing file *without* overwriting it, you must use a different constructor: `new FileOutputStream("filename.txt", true)`. The `true` parameter tells Java to seek to the end of the file before writing.

---