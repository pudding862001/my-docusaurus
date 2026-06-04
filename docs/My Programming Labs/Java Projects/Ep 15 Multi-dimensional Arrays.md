---
title: Ep15 Multi-dimensional Arrays
hide_title: true
sidebar_label: Ep15 Multi-dimensional Arrays
sidebar_position: 15
---

## Ep15 Multi-dimensional Arrays

In this episode, we take arrays to the next level. Sometimes a single list isn't enough—we need tables, grids, or even 3D structures to store our data effectively.

### Key Takeaways:

* **2D Arrays (Tables)**: Think of these as a spreadsheet with rows and columns. The syntax `new int[4][5]` creates a grid with 4 rows and 5 columns.
* **Jagged Arrays (Ragged Arrays)**: In Java, you can create a 2D array where each row has a **different length**. This is done by defining the number of rows first and then initializing each row individually.
* **3D Arrays**: These add a third dimension (depth). You can imagine this as a stack of several 2D grids.
* **Nested Loops for Traversal**: To access every element in a multi-dimensional array, you need a loop inside a loop (or even three loops for 3D).


---

### Episode 15 Code:

```java
public class Main {
    public static void main(String[] args) {

        // 1. Standard 2D Array (Rectangular)
        // 4 rows, 5 columns
        int fall[][] = new int[4][5];
        fall[3][3] = 77; // Setting a specific value

        System.out.println("--- 2D Array (4x5) ---");
        for (int i = 0; i < 4; i++) {
            for (int j = 0; j < 5; j++) {
                System.out.print(fall[i][j] + " ");
            }
            System.out.println(); // Move to next row
        }

        // 2. Jagged Array (Irregular shape)
        int summer[][] = new int[4][];
        summer[0] = new int[1];
        summer[1] = new int[2];
        summer[2] = new int[3];
        summer[3] = new int[4];

        System.out.println("\n--- Jagged Array ---");
        for (int k = 0; k < 4; k++) {
            // Using summer[k].length is the safest way to loop
            for (int l = 0; l < summer[k].length; l++) {
                System.out.print(summer[k][l] + ",");
            }
            System.out.println();
        }

        // 3. Three-Dimensional Array (3x4x5)
        int spring[][][] = new int[3][4][5];
        System.out.println("\n--- 3D Array Layers ---");
        for (int a = 0; a < 3; a++) {
            for (int b = 0; b < 4; b++) {
                for (int c = 0; c < 5; c++) {
                    spring[a][b][c] = 1;
                    System.out.print(spring[a][b][c]);
                }
                System.out.println();
            }
            System.out.println(); // Space between layers
        }
    }
}