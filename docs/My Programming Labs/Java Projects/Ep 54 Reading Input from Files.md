---
title: Ep54 Reading Input from Files
hide_title: true
sidebar_label: Ep54 Reading Input from Files
sidebar_position: 54
---

## Ep54 Reading Input from Files

In this episode, we transition from reading keyboard input to reading data from external files. We use the `FileInputStream` class to open a file and read its contents byte by byte, which is a fundamental skill for data processing and file management in Java.

---

### Understanding File Input Streams

Reading from a file involves specifying a file path, opening a connection to that file, and then consuming its data until the end of the file is reached. In Java, the value `-1` is used as a sentinel to indicate that there is no more data left to read.


```java
import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) {

        String fileName;
        InputStreamReader ir = new InputStreamReader(System.in);
        BufferedReader br = new BufferedReader(ir);
        
        try {
            // 1. Prompting the user for a specific file name
            System.out.println("Type the name of the file you want to input!");
            fileName = br.readLine();
            
            // 2. Opening the file using FileInputStream
            FileInputStream fin = new FileInputStream(fileName);
            int fileInput;
            
            // 3. Reading the file byte by byte until the end (-1)
            do {
                fileInput = fin.read();
                if ((fileInput == -1)) {
                    System.out.println("End of file");
                } else {
                    // Casting the integer byte to a char for display
                    System.out.println((char) fileInput);
                }
            } while(fileInput != -1);
            
            // 4. Closing the stream to release system resources
            fin.close();
            System.out.println("The file has been closed. Thanks for using this program");
            
        } catch(IOException e) {
            // Handling potential errors like "File Not Found"
            System.out.println(e);
        }
    }
}
```

---

### Execution Logic Analysis

Based on the provided source code:

* **Dynamic File Selection**: The program first captures a string from the user to determine which file to open, allowing for a more interactive experience.
* **Byte-Level Reading**: The `read()` method of `FileInputStream` reads a single byte of data. This byte is returned as an `int`. To see the actual text, the code casts this integer to a `char`.
* **End-of-File Detection**: The loop continues as long as `fileInput` is not `-1`. This is the standard way in Java to detect that the end of a stream has been reached.
* **Resource Responsibility**: It is vital to call `close()` on the file stream. Leaving streams open can lead to memory leaks and lock the file from being accessed by other programs.

---

### Key File I/O Components

| Component | Description |
| :--- | :--- |
| **`FileInputStream`** | Used for reading raw byte streams such as image data or text files. |
| **`read()`** | Reads the next byte of data from the input stream. Returns `-1` if the end of the file is reached. |
| **`close()`** | Closes the file input stream and releases any system resources associated with it. |
| **`IOException`** | The parent class for exceptions produced by failed or interrupted I/O operations. |

---

> [!CAUTION]
> If the file name you type does not exist in the project directory, the program will throw a `FileNotFoundException` (a subclass of `IOException`). Always ensure your file path is correct or handle this specific error to improve user experience.

---