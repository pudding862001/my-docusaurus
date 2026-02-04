---
title: Ch 15 Migration
sidebar_label: Ch 15 Migration
sidebar_position: 15
---

In this section, we explore the strategies for moving to the cloud (The 6 R's) and the tools used for data and application migration.

---

## 1. Migration Strategies (The 6 R's)

Deciding how to move your applications to the cloud.

1.  **Rehost (Lift & Shift)**: Moving the application "as-is" to EC2. Fastest method but least cloud-native.
2.  **Replatform (Lift & Reshape)**: Making minor optimizations, such as moving a DB to **RDS** or an App to **Elastic Beanstalk**, without changing the core code.
3.  **Refactor (Rearchitect)**: Rewriting the application to be cloud-native (e.g., moving to **Lambda** or **Containers**).
4.  **Repurchase**: Moving from a legacy system to a **SaaS** platform (e.g., Salesforce, Microsoft 365).
5.  **Retain**: Keeping the application on-premises for now.
6.  **Retire**: Decommissioning applications that are no longer needed.

---

## 2. Migration Tools

* **AWS DMS (Database Migration Service)**:
    * **Metaphor**: A **"Universal Data Adapter"**. Continuously replicates data from source to destination with minimal downtime.
    * **Heterogeneous Migration**: Uses **SCT (Schema Conversion Tool)** to translate schemas (e.g., Oracle to Aurora).
* **AWS MGN (Application Migration Service)**: The recommended tool for automated "Rehosting" (Lift & Shift) of servers to AWS.

---

## 3. AWS Snow Family

Used for offline data transfer when the network is too slow.

* **Snowcone**: Small, portable device for edge computing and data transfer.
* **Snowball Edge**: Larger device for petabyte-scale data transport.

---