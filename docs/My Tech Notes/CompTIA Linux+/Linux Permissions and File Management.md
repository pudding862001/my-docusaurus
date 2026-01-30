---
title: Linux Permissions Management
sidebar_label: Permissions Management
sidebar_position: 15
---

In this episode, we dive into the Linux permissions model, covering how to read, modify, and manage file and directory access for users and groups.

---

## 1. Understanding Standard Permissions

Every file and directory in Linux has an associated set of permissions for three types of owners.

* **Owner Categories**:
    * **User (u)**: The individual who owns the file.
    * **Group (g)**: A set of users who share access to the file.
    * **Others (o)**: Everyone else on the system.
* **Permission Types**:
    * **Read (r)**: Allows viewing file contents or listing directory files.
    * **Write (w)**: Allows modifying file contents or adding/deleting files in a directory.
    * **Execute (x)**: Allows running a file as a program or entering a directory.



---

## 2. Modifying Permissions with chmod

The `chmod` (change mode) command is used to update permissions using either symbolic or octal notation.

### Octal (Numeric) Mode
Permissions are represented by numbers: **4 (Read)**, **2 (Write)**, and **1 (Execute)**.
* **7 (4+2+1)**: Full permissions (rwx).
* **6 (4+2)**: Read and write (rw-).
* **5 (4+1)**: Read and execute (r-x).
* **Example**: `chmod 755 filename` sets rwxr-xr-x.

### Symbolic Mode
Uses characters to add (`+`), remove (`-`), or set (`=`) permissions.
* **Example**: `chmod g+w filename` adds write permission to the group.
* **Example**: `chmod o-x filename` removes execute permission from others.

---

## 3. Managing Ownership (chown and chgrp)

Ownership determines which user and group the permissions apply to.

* **`chown`**: Changes the user and/or group ownership of a file.
    * `chown user1 filename`: Changes owner to user1.
    * `chown user1:group1 filename`: Changes both owner and group.
* **`chgrp`**: Changes only the group ownership.
* **Recursive Changes**: Using the `-R` flag applies changes to a directory and all its contents.

---

## 4. Default Permissions and umask

When a new file or directory is created, it is assigned default permissions based on the system's `umask` value.

* **Base Permissions**:
    * Files: **666** (rw-rw-rw-).
    * Directories: **777** (rwxrwxrwx).
* **`umask` Calculation**: The `umask` value is subtracted from the base permissions to determine the actual initial permissions.
    * **Example**: If `umask` is `022`, new files will have `644` (666-022) and directories will have `755` (777-022).

---

## 5. Special Permissions

Special permissions provide advanced access control for specific use cases.

* **SUID (Set User ID)**: When applied to an executable, it runs with the permissions of the file owner rather than the user running it. Represented by an 's' in the user's execute field (e.g., `-rwsr-xr-x`).
* **SGID (Set Group ID)**:
    * For files: Runs with the permissions of the group owner.
    * For directories: New files created inside inherit the directory's group ownership.
* **Sticky Bit**: When applied to a directory (like `/tmp`), it prevents users from deleting files they do not own, even if they have write access to the directory. Represented by a 't' in the others' execute field.

---