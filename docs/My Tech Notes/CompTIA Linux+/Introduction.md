---
title: Introduction
sidebar_label: Introduction
sidebar_position: 1
---

## 1. What is a File System?

In the Linux operating system, a file system is the hierarchical method and data structure used to manage how data is stored and retrieved. 

* **Hierarchical Arrangement**: All Linux systems are organized in a strict hierarchical directory structure.
* **Tree Structure**: This organization follows a tree-like pattern consisting of various directories.
* **The Root**: The origin of this tree structure is called the **root** directory, represented by a single forward slash `/`.



---

## 2. Linux Directory Structure Analysis

Based on the system root directory displayed in the study notes, the following essential directories and files are present:

### Core System Directories
* **`/bin`**: Contains essential command binaries for all users.
* **`/boot`**: Stores static files required to boot the system, including the kernel.
* **`/dev`**: Contains device files that represent hardware components.
* **`/etc`**: The primary location for system-wide configuration files.
* **`/lib` & `/lib64`**: Stores shared library images necessary for system binaries.
* **`/sbin`**: Contains essential system binaries used for administrative tasks.

### Variable and System Data
* **`/proc`**: A virtual filesystem containing process and kernel information.
* **`/run`**: Stores runtime data generated since the last system boot.
* **`/tmp`**: A temporary storage directory for applications to store files.
* **`/var`**: Holds variable data files such as system logs and spools.

### User and External Folders
* **`/home`**: The default location for individual user home directories.
* **`/media`**: The mount point for removable media like USB drives or CD-ROMs.
* **`/mnt`**: A temporary mount point for manually mounted filesystems.
* **`/opt`**: Reserved for the installation of optional add-on software packages.

### Critical Boot Files
The root directory also displays several files critical to the boot process:
* **`vmlinuz`**: The compressed Linux kernel executable file.
* **`initrd.img`**: The initial RAM disk image used during the startup sequence.

---

## 3. Basic Navigation: The `pwd` Command

Maintaining awareness of your current location within the complex Linux tree structure is fundamental for system administration.

### Command: `pwd`
* **Definition**: stands for **Print Working Directory**.
* **Function**: This command outputs the full absolute path of the directory you are currently in.

### Terminal Example
In the provided terminal session, executing the `pwd` command returns the following path:

```bash
programmingknowledge@programmingknowledge-virtual-machine:~$ pwd
/home/programmingknowledge
```

This output confirms that the user is currently operating within the `programmingknowledge` subdirectory, located inside the `/home` directory.

---