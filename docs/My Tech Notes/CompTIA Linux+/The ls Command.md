---
title: The ls Command
sidebar_label: The ls Command
sidebar_position: 2
---

## 1. Accessing the Terminal

To start working with the Linux command line on an Ubuntu system, you can quickly open the terminal interface by using the keyboard shortcut **Ctrl + Alt + T**.

---

## 2. Navigating with the ls Command

The `ls` command is the fundamental tool used to list the contents of a directory, allowing you to see which files and folders are present in your current location.

### Understanding Path Navigation

* **The Parent Directory (`..`)**: This symbol represents one folder step back in the directory hierarchy.
* **Listing a Specific Subdirectory**: You can view the contents of a folder without entering it by providing the path, such as `ls Documents/`.
* **Viewing the System Root**: Running the command `ls ../..` from a home directory reveals the base of the Linux file system.



Based on the system output in the notes, the root contains essential folders and files such as `bin`, `boot`, `dev`, `etc`, `lib64`, `opt`, and the compressed kernel image `vmlinuz`.

---

## 3. Command Options (Flags)

Flags are added to the `ls` command to modify how the information is displayed, providing more detail or specific organization.

| Option | Function |
| :--- | :--- |
| **`-l`** | **Long Format**: Displays detailed file metadata, including permissions, owner, and size. |
| **`-a`** | **All**: Lists all items, including hidden files that start with a period. |
| **`-S`** | **Sort**: Organizes files by size, arranging them from largest to smallest. |

---

## 4. Searching with Wildcards

Wildcards allow you to filter results based on specific file patterns or extensions.

* **Specific Extension**: To list only files ending in `.html` within the Documents folder, use the command `ls Documents/*.html`.
* **Universal Search**: Using `ls Documents/*.*` will list every file that contains a period, effectively showing all files with an extension.

---

## 5. Advanced Redirection and Filtering

### Output Redirection (`>`)

You can use the `>` operator to save the results of a command into a text file instead of printing them to the screen. For example, `ls -l > out.txt` captures a detailed long-format list and stores it in a file named `out.txt`.

### Listing Directories Only

To ignore individual files and only display subdirectories, use the `-d` flag combined with a trailing slash pattern:

```bash
ls -d */
```

This filters the view to show only folders like `Desktop/`, `Documents/`, and `Public/`.

---

## 6. Interpreting Long Format Metadata

When executing `ls -l`, each line contains specific columns of data describing the file:

* **Permissions**: The first column (e.g., `-rw-rw-r--` or `drwxr-xr-x`) shows access rights.
* **Ownership**: Identifies the user and group responsible for the file.
* **File Size**: The size of the file expressed in bytes, such as `25913` bytes.
* **Modification Date**: Displays the last time the file was updated, such as `Mar 5` or `Jun 5`.

---