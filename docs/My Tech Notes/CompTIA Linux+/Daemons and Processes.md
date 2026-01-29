---
title: Daemons and Processes
sidebar_label: Daemons and Processes
sidebar_position: 7
---

## 1. Managing Linux Processes

A process is a running instance of a program, identified by a unique Process ID (PID). Linux provides several tools to monitor and manage these processes.

* **Monitoring Tools**:
    * **`ps`**: Displays a snapshot of current processes. Often used as `ps aux` to show all processes for all users.
    * **`top`**: Provides a real-time, dynamic view of system processes and resource usage.
    * **`pstree`**: Visualizes processes in a tree format to show parent-child relationships.
* **Terminating Processes**: Use the `kill` command followed by the PID (e.g., `kill 6759`) to stop a running process.


---

## 2. Background Jobs and Daemons

Processes can run in the foreground (occupying the terminal) or the background.

* **Background Execution (`&`)**: Adding an ampersand to the end of a command (e.g., `ping google.com &`) allows it to run in the background, freeing up the terminal.
* **Job Control**:
    * **`jobs`**: Lists all background tasks associated with the current terminal.
    * **`bg`**: Resumes a stopped job in the background.
* **`nohup` (No Hang Up)**: Used to run a command that will keep running even after the terminal window is closed or the user logs out.
* **Daemons**: These are specialized background programs that provide system services, such as `cron` (scheduling), `sshd` (remote access), and `httpd` (web services).

---

## 3. Scheduling Tasks with Cron

The **Cron** daemon is used to schedule programs to run automatically at specific times or intervals.

### The Crontab Structure
System-wide tasks are defined in `/etc/crontab`, while individual users use `crontab -e` to manage their own schedules. A job definition follows this sequence:

| Field | Range | Description |
| :--- | :--- | :--- |
| **Minute** | 0 - 59 | The exact minute the command runs. |
| **Hour** | 0 - 23 | The hour of the day. |
| **Day of Month** | 1 - 31 | The specific day of the month. |
| **Month** | 1 - 12 | The month (or jan, feb, etc.). |
| **Day of Week** | 0 - 6 | 0 or 7 represents Sunday. |

---

## 4. System Logging and Log Rotation

Linux logs system events to help with monitoring and troubleshooting.

* **Key Log Files**:
    * **`/var/log/syslog`**: The primary log file for general system messages.
    * **`dmesg`**: A command used to view kernel-related log messages.
* **Log Rotation (`logrotate`)**: To prevent log files from taking up too much disk space, the `logrotate` tool is used to compress, remove, or mail old logs.
* **Configuration**: Log rotation behavior is defined in `/etc/logrotate.conf` and specific daemon files in `/etc/logrotate.d/`. Common settings include `daily`, `rotate 3` (keeping 3 old logs), and `compress`.

---

## 5. Remote Log Management with rsyslog

The `rsyslog` daemon allows a system to send its log messages to a remote server for centralized management.

* **Client Configuration**: In `/etc/rsyslog.conf`, you can specify a remote target using the `@` symbol followed by an IP address (e.g., `*.* @192.168.2.42:514`).
* **Server Configuration**: The receiving server uses templates to organize logs from multiple hosts into separate directories, such as `/var/log/%HOSTNAME%/Remotelog.log`.

---