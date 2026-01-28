---
title: Shells, Variables, and Configuration Files
sidebar_label: Shells & Variables
sidebar_position: 10
---

## 1. Checking Service Configurations

System administrators often need to verify the configuration of active services like SSH or Apache to ensure security and proper functionality.

* **SSH Configuration**: Specific configuration snippets for the SSH daemon are often found in `/etc/ssh/sshd_config.d/`. You can view them using the `cat` command (e.g., `cat 50-cloud-init.conf`).
* **Apache Configuration**: Web server port settings and other core configurations are typically located in `/etc/apache2/`. Use `cat ports.conf` to verify which ports the server is listening on.

---

## 2. Bash Redirection

Redirection allows users to control where a command's input comes from and where its output is sent.


| Symbol | Action | Description |
| :--- | :--- | :--- |
| **`>`** | **Output Redirection** | Redirects standard output to a file, overwriting existing content. |
| **`<`** | **Input Redirection** | Redirects a file's content to be used as input for a command. |
| **`>>`** | **Append** | Redirects output to the end of a file without overwriting existing data. |

---

## 3. Working with Variables in Bash

Variables are used to store data that can be reused throughout a shell session or a script.

### Assigning Values to Variables
You can assign static text or the output of a command to a variable. Note that there should be no spaces around the `=` sign.

* **Incorrect Assignment**: Attempting to use a dollar sign during assignment or having improper spacing will result in errors like `command not found`.
* **Assigning Command Output**: To save the result of a command into a variable, use backticks (`` ` ``) or the `$()` syntax:
    ```bash
    IP=`ip a | grep inet | grep brd`
    ```
* **Displaying Variables**: Use the `echo` command followed by the variable name prefixed with a dollar sign (e.g., `echo $IP`).


---

## 4. Exporting Variables for Scripts

By default, variables created in a shell are only available to that specific shell instance.

* **The `export` Command**: To make a variable available to child processes and shell scripts executed from the current session, you must use the `export` command.
* **Example**: `export CostCenter="Engineering"` ensures that any script run thereafter can access the `$CostCenter` value.

---