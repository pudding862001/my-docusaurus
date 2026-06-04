---
title: Ch 8 Block and File Storage
sidebar_label: Ch 8 Block & File Storage
sidebar_position: 8
---

In this section, we distinguish between different types of storage available for EC2, specifically focusing on **EBS** (Block Storage) and **EFS** (File Storage).

---

## 1. Amazon EBS (Elastic Block Store)

**Amazon EBS** provides persistent block storage volumes for use with EC2 instances. It acts like a virtual hard drive.

* **Availability**: An EBS volume is locked to a specific **Availability Zone (AZ)**. To move it to another AZ, you must snapshot it and restore it.
* **Persistence**: By default, the Root EBS volume is deleted when the instance is terminated, but additional attached volumes persist.

### EBS Volume Types
* **General Purpose SSD (gp2/gp3)**: Balances price and performance. Used for most workloads (boot volumes, dev/test).
* **Provisioned IOPS SSD (io1/io2)**: Designed for critical, I/O intensive applications (databases) where you need sustained performance.
* **HDD (st1/sc1)**: Throughput optimized for big data or cold storage. Cannot be used as a boot volume.

---

## 2. Instance Store

**Instance Store** (Ephemeral Storage) provides temporary block-level storage for your instance.

* **Physical Attachment**: It is located on disks that are physically attached to the host computer.
* **Data Loss**: Data persists only during the lifetime of the instance. If you **Stop** or **Terminate** the instance, the data is lost forever. It is ideal for buffers, caches, or temporary content.

---

## 3. Amazon EFS (Elastic File System)

**Amazon EFS** provides a simple, scalable, fully managed elastic NFS file system.

* **Multi-AZ**: Unlike EBS, EFS can be mounted by multiple EC2 instances across different Availability Zones simultaneously.
* **Protocol**: Supports the Network File System version 4 (NFSv4) protocol.
* **OS Support**: Compatible with Linux-based AMIs only (not Windows).
* **Use Case**: Ideal for content management systems, web serving farms, and shared datasets.

---