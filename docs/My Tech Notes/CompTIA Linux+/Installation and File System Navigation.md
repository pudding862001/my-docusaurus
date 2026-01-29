---
title: Installation and File System Navigation
sidebar_label: Installation and File System Navigation
sidebar_position: 14
---

In this episode, we cover the fundamentals of installing a Linux system and navigating its standard filesystem hierarchy.

---

## 1. Linux Installation Overview

The installation process involves several key decisions regarding the environment and resource allocation.

* **Installation Methods**: Linux can be installed via graphical user interface (GUI) or text-based installers (e.g., Anaconda for RHEL-based systems).
* **Automated Installation**: **Kickstart** files allow for unattended installations by pre-defining configuration choices.
* **Bootloaders**: **GRUB2** (Grand Unified Bootloader version 2) is the standard bootloader for most modern Linux distributions, responsible for loading the kernel into memory.

---

## 2. Disk Partitioning Schemes

Choosing the right partitioning scheme is critical for disk management and system compatibility.

* **MBR (Master Boot Record)**:
    * Supports disks up to **2 TB**.
    * Limited to **4 primary partitions**.
* **GPT (GUID Partition Table)**:
    * Supports disks up to **9.4 ZB**.
    * Supports up to **128 partitions**.
    * Required for systems using **UEFI** firmware instead of legacy BIOS.

---

## 3. Common Linux Filesystems

Linux supports various filesystem types, each optimized for different workloads.

* **Ext4**: A mature journaling filesystem, widely used as the default for many distributions.
* **XFS**: A high-performance journaling filesystem, often the default in RHEL/CentOS systems due to its scalability.
* **Btrfs (B-tree FS)**: Focuses on fault tolerance, repair, and easy administration, supporting features like snapshots.
* **Swap**: A dedicated partition used as "virtual memory" when physical RAM is exhausted.

---

## 4. Filesystem Hierarchy Standard (FHS)

Linux follows a standardized directory structure to ensure consistency across distributions.

| Directory | Purpose |
| :--- | :--- |
| **`/bin`** | Essential user command binaries (e.g., `ls`, `cp`). |
| **`/sbin`** | Essential system binaries for administration (e.g., `ip`, `reboot`). |
| **`/etc`** | Host-specific system-wide **configuration files**. |
| **`/home`** | Personal directories for regular users. |
| **`/root`** | Home directory for the **root user** (superuser). |
| **`/var`** | Variable data files, such as **logs** (`/var/log`) and mail spools. |
| **`/tmp`** | Temporary files, often cleared upon reboot. |
| **`/usr`** | User utilities and applications. |
| **`/dev`** | Device files representing hardware (e.g., `/dev/sda`). |

---

## 5. Basic File System Navigation

Command-line tools are used to move through and inspect the filesystem.

* **`pwd` (Print Working Directory)**: Displays the current absolute path.
* **`ls` (List)**: Displays the contents of a directory.
    * `ls -l`: Long format (shows permissions, owner, size).
    * `ls -a`: Shows hidden files (starting with a dot).
* **`cd` (Change Directory)**: Navigates between directories.
    * `cd ~`: Move to the user's home directory.
    * `cd ..`: Move up one level to the parent directory.
    * `cd -`: Move to the previous directory.

---