---
title: Software Management
sidebar_label: Software Management
sidebar_position: 9
---

## 1. Kernel and Module Management

The kernel is the core of the Linux operating system. Managing its versions and modules is a critical task for system administrators.

### Checking Kernel Information
* **`uname`**: The basic command to check the kernel version.
* **`/proc/version_signature`**: You can use `sudo cat /proc/version_signature` to view detailed version information on Ubuntu systems.

### Managing Kernel Modules
Modules allow the kernel to support hardware and features without rebooting the entire system.
* **Listing Modules**: Use `lsmod` to see all currently loaded kernel modules.
* **Loading Modules**: The `modprobe` command is used to add modules (e.g., `modprobe raid10`).
* **Removing Modules**: Use `modprobe -r` to safely remove a running module from the kernel.

---

## 2. Package Management: Red Hat Systems (Yum)

Red Hat-based distributions (like RHEL or CentOS) primarily use the `yum` (Yellowdog Updater, Modified) utility for software management.

* **`yum search [keyword]`**: Searches for all packages related to a specific keyword (e.g., `yum search docker`).
* **`yum info [package]`**: Provides detailed information and metadata about a specific package.
* **`yum update`**: Updates all currently installed packages to their latest available versions.
* **Specific Updates**: You can update a single package by specifying its name, such as `yum update docker`.

---

## 3. Package Management: Ubuntu Systems (APT)

Ubuntu and other Debian-based systems use the Advanced Package Tool (APT) suite to manage software.

* **`apt update`**: Refreshes the local package index to show which packages can be upgraded.
* **`apt upgrade`**: Actually performs the upgrade of all installed packages to the newest versions.
* **`apt remove [package]`**: Removes an installed package from the system (e.g., `apt remove docker.io`).
* **`add-apt-repository`**: Adds a new external repository source to the system's list, allowing you to install software not found in default stores.

---

## 4. Compiling from Source

In some cases, software may not be available in standard repositories, requiring users to install it manually.

* **Makefiles**: The `make` command is often used to compile and build executable programs from source code. If a system does not have the necessary build tools installed, you cannot use a **Makefile** to complete the installation.

---