---
title: Ep11 Switch Statements
hide_title: true
sidebar_label: Ep11 Switch Statements
sidebar_position: 11
---

## Ep11 Switch Statements

In this episode, we explore the **Switch Statement**. When you have many possible paths based on a single variable, `switch` provides a much cleaner and more readable syntax than a long chain of `if-else if` statements.

### Key Takeaways:

* **`switch` expression**: The variable you are testing (e.g., an `int` or a `String`).
* **`case`**: A specific value to check against the variable.
* **`break`**: Extremely important! It tells Java to stop executing the switch block once a match is found. Without it, the code will "fall through" to the next case.
* **`default`**: Acts like the final `else`. It runs if none of the cases match.
* **Multiple Cases**: You can stack multiple `case` labels together to execute the same block of code for different values (great for grouping months into seasons).


---

### Episode 11 Code:

```java
public class Main {
    public static void main(String[] args) {

        // 1. Using Switch with Integers
        int katy = 15;
        switch (katy) {
            case 11:
                System.out.println("Katy is 11");
                break;
            case 12:
                System.out.println("Katy is 12");
                break;
            case 13:
                System.out.println("Katy is 13");
                break;
            default:
                // Runs if katy is not 11, 12, or 13
                System.out.println("Nothing was found to match Katy");
        }

        // 2. Using Switch with Strings
        String name = "Bob";
        switch(name) {
            case "Bob":
                System.out.println("His name is Bob");
                break;
            case "Jerry":
                System.out.println("His name is Jerry");
                break;
            default:
                System.out.println("The name is something else");
        }

        // 3. Combining Multiple Cases (The Season Example)
        int month = 4;
        String season = null;
        switch(month) {
            // Grouping cases that share the same result
            case 12:
            case 1:
            case 2:
                season = "Winter";
                break;
            case 3:
            case 4:
            case 5:
                season = "Spring";
                break;
            default:
                System.out.println("That month doesn't exist");
        }

        if (season != null) {
            System.out.println("Season: " + season);
        }
    }
}