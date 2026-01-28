---
title: Linux Storage and File Systems
sidebar_label: Storage & File Systems
sidebar_position: 4
---

## 1. Linux Partitions and Storage Management

Linux supports different partitioning schemes depending on hardware requirements and disk size.

* **MBR (Master Boot Record)**: Supports a maximum partition size of 2TB and up to 4 primary partitions.
* **GPT (GUID Partition Table)**: Offers no practical limit on disk size or the number of partitions.
* **Essential Commands**:
    * `lsblk`: Lists all block storage devices.
    * `fdisk`: Used to partition disks.
    * `mkfs`: Used to "make" (format) a file system on a partition.
    * `mount`: Makes a file system available at a specific directory (mount point).

---

## 2. Filesystem Hierarchy Standard (FHS)

The Linux FHS defines the directory structure and content in Unix-like operating systems.

| Directory | Description |
| :--- | :--- |
| `/` | The Root filesystem where all files and directories appear. |
| `/bin/` | Essential binary command files (e.g., `cat`, `grep`). |
| `/boot/` | Boot loader files, typically for GRUB. |
| `/dev/` | Device files for hardware and special items. |
| `/etc/` | System-wide configuration files. |
| `/home/` | User home directories. |
| `/lib/` | Library files supporting system commands. |
| `/proc/` | Virtual filesystem for system process and kernel data. |
| `/var/` | Variable length files like system logs. |
| `/sbin/` | System binaries used for administration (e.g., `fdisk`, `mkfs`). |

---

## 3. Creating and Mounting Partitions

The standard workflow for adding new storage to a Linux system involves four main steps:

1.  **Partition**: Use `fdisk /dev/sdb` to create a new partition.
2.  **Format**: Use `mkfs -t ext4 /dev/sdb1` to create the filesystem.
3.  **Create Mount Point**: Use `mkdir /data1` to create a target directory.
4.  **Mount**: Use `mount /dev/sdb1 /data1` to attach the storage.

> [!TIP]
> Use the `partprobe` command to instruct the kernel to re-read partition tables so you don't need to reboot after partitioning.

---

## 4. Hard Links vs. Symbolic Links

Linux uses two types of links to reference files.

* **Hard Links**: A new filename that points to an existing **inode**. They cannot span different disk partitions.
* **Symbolic (Soft) Links**: Created using `ln -s`. These are shortcuts that point to a filename rather than an inode and **can** span across different partitions.

---

## 5. RAID Levels and Configuration

RAID (Redundant Array of Independent Disks) provides data redundancy and performance improvements.


* **RAID 0 (Striping)**: Data is written across all disks. High performance but no fault tolerance.
* **RAID 1 (Mirroring)**: A complete copy of data is written to each disk. High fault tolerance.
* **RAID 5**: Striping with distributed parity. Requires at least three disks.
* **RAID 6**: Similar to RAID 5 but uses double-parity, tolerating two disk failures. Requires at least four disks.
* **RAID 10**: A combination of mirroring and striping (RAID 1+0) for high performance and redundancy.

---

## 6. Logical Volume Management (LVM)

LVM provides a flexible way to manage disk space, allowing you to resize volumes easily.

1.  **Physical Volume (PV)**: Mark raw storage devices using `pvcreate /dev/sdb`.
2.  **Volume Group (VG)**: Pool PVs together into a VG using `vgcreate VolGroup1 /dev/sdb /dev/sdc`.
3.  **Logical Volume (LV)**: Create usable partitions from the pool using `lvcreate -L 50G -n projects VolGroup1`.

To ensure volumes are mounted automatically at boot, entries must be added to the **`/etc/fstab`** file.

---

## 7. Network Storage: SAN and NAS

Enterprise environments often use network-based storage solutions.

* **SAN (Storage Area Network)**: A dedicated high-speed network for storage access.
    * **iSCSI**: Encapsulates SCSI commands within IP packets. Operates on **TCP port 3260**.
    * **Fibre Channel (FC)**: High-speed enterprise network requiring Host Bus Adapters (HBAs) and FC switches.
* **NAS (Network Attached Storage)**: Storage connected to a standard network, accessed via protocols like **SMB** or **NFS**.


---