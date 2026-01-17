---
title: Ep16 Searching an Array
hide_title: true
sidebar_label: Ep16 Searching an Array
sidebar_position: 16
---

## Ep16 Searching an Array

In this episode, we learn how to find specific values within an array. This process is known as **Linear Search**. We also explore how to print arrays easily and how to properly compare text data.

### Key Takeaways:

* **`Arrays.toString()`**: A handy tool from `java.util.Arrays` that allows you to print the entire contents of an array in a readable format without writing a loop.
* **Linear Search**: The process of checking each element in a list one by one until a match is found.
* **The `break` Keyword**: Crucial for efficiency! Once the target is found, `break` stops the loop immediately so the program doesn't waste time checking the rest of the list.
* **String Comparison (`.equals`)**: When searching for text, always use `.equals()` instead of `==` to ensure you are comparing the actual content of the strings.


---

### Episode 16 Code:

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {

        // 1. Searching an Integer Array
        int numberList[] = {45, 5325, 32215, 12314, 1366, 234, 7788, 98676};
        
        // Use Arrays.toString to see the full list quickly
        System.out.println("Our Array: " + Arrays.toString(numberList));

        int toFind = 234;
        for (int i = 0; i < numberList.length; i++) {
            System.out.println("Checking index " + i + ": " + numberList[i]);
            
            if (numberList[i] == toFind) {
                System.out.println("Result: It Matched!");
                break;  // Stop searching once found
            }
        }

        System.out.println("--------------------");

        // 2. Searching a String Array
        String nameList[] = {"Bobby", "Jerry", "Randy"};
        System.out.println("Our Array: " + Arrays.toString(nameList));

        String nameToSearch = "Randy";
        for (int i = 0; i < nameList.length; i++) {
            System.out.println("Checking name: " + nameList[i]);
            
            // CRITICAL: Use .equals() for String comparison
            if (nameList[i].equals(nameToSearch)) {
                System.out.println("Result: Name Matched!");
                break;  // Stop searching
            }
        }
    }
}