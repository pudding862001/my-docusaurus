---
title: CompTIA Linux+ Core Fundamentals
sidebar_label: CompTIA Linux+ Fundamentals
sidebar_position: 2
hide_title: true
---

## CompTIA Linux+ Core Fundamentals (To be continue...)

The CompTIA Linux+ certification validates the competencies required of an early-career system administrator. For a Staff Engineer, mastering the Linux CLI and system architecture is essential for managing containerized environments and cloud-native workloads.

---

### 1. Filesystem Hierarchy Standard (FHS)

Understanding where configuration and binary files reside is crucial for system troubleshooting and security auditing.

| Directory | Description |
| :--- | :--- |
| `/etc` | System-wide configuration files (e.g., `hosts`, `resolv.conf`). |
| `/var` | Variable data files, such as logs (`/var/log`) and mail. |
| `/bin` | Essential user command binaries (e.g., `ls`, `cp`). |
| `/sbin` | Essential system binaries, usually for root (e.g., `ip`, `reboot`). |
| `/proc` | Virtual filesystem providing process and kernel information. |

---

### 2. Permissions and Ownership

Linux security is built on the foundation of user, group, and others (UGO) permissions.

**Numeric Representation:**
* **4**: Read (r)
* **2**: Write (w)
* **1**: Execute (x)

```bash title="Permission Management Examples"
# Change ownership to 'william' and group 'admin'
chown william:admin script.sh

# Set permissions to rwxr-xr-x (755)
chmod 755 script.sh

# Set Special Permissions (SUID)
chmod u+s /usr/bin/executable_file