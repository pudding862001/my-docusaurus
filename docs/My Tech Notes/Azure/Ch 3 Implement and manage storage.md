---
title: Ch 3 Implement and manage storage
sidebar_label: Ch 3 Storage
sidebar_position: 3
---

In this section, we explore the Azure Storage platform, focusing on Blob Storage for unstructured data, security mechanisms like SAS tokens, and strategies for data redundancy and lifecycle management.

---

## 1. Storage Account Fundamentals

A **Storage Account** is the top-level container that groups a set of Azure Storage services together. It provides a unique namespace for your data.

### Types of Storage Accounts
* **Standard General-Purpose v2 (GPv2)**: The recommended default for most scenarios. Supports Blobs, Files, Queues, and Tables.
* **Premium**: High-performance hardware (SSD). Optimized for specific workloads:
    * **Block Blobs**: High transaction rates (e.g., AI/ML).
    * **File Shares**: Enterprise-grade file sharing.
    * **Page Blobs**: Database storage.

---

## 2. Azure Blob Storage



Blob (Binary Large Object) storage is designed for storing massive amounts of unstructured data, such as text or binary data.

### Structure
* **Account**: The namespace (e.g., `mystorage.blob.core.windows.net`).
* **Container**: Like a folder. Grouping of blobs. Access policies are set here.
* **Blob**: The file itself (e.g., `image.jpg`).

### Blob Access Tiers (Cost Optimization)
You can optimize costs by placing data in the correct tier based on access frequency.
* **Hot Tier**: Highest storage cost, lowest access cost. For data accessed frequently.
* **Cool Tier**: Lower storage cost, higher access cost. Stored for at least **30 days**.
* **Cold Tier**: Even lower cost. Stored for at least **90 days**.
* **Archive Tier**: Lowest storage cost, highest retrieval cost. Data is offline and takes **hours (Rehydration)** to retrieve. Stored for at least **180 days**.

### Lifecycle Management
Automated rules to move data between tiers.
* *Example Rule*: "If a file hasn't been modified for 30 days, move it to Cool. If not modified for 365 days, move to Archive."

---

## 3. Security and Authorization

Azure Storage provides multiple ways to authorize access.

### 1. Storage Access Keys
* **Concept**: "Master Keys". You get two keys (Key1, Key2) that provide **Full Admin Access** to the storage account.
* **Risk**: If leaked, the attacker has total control. Not recommended for daily application use.

### 2. Shared Access Signatures (SAS)
* **Concept**: "Valet Key". Grants limited access to specific resources for a specific time.
* **Granularity**:
    * **Service SAS**: Access to a specific Blob.
    * **Account SAS**: Access to the entire account.
* **Parameters**: You define **Permissions** (Read/Write), **Start/End Time**, and **Allowed IPs**.

### 3. Stored Access Policies
* **Concept**: "SAS Management Group".
* **Problem with SAS**: Once a SAS token is generated and given out, you cannot revoke it easily (unless you regenerate the account keys, which breaks everything).
* **Solution**: Create a Policy on the Container. Generate the SAS linked to this Policy. To revoke access, simply **delete or modify the Policy**.

---

## 4. Data Redundancy & Protection

How Azure keeps your data safe from hardware failures and disasters.

### Redundancy Options
* **LRS (Locally-redundant storage)**: 3 copies in a single datacenter. (Cheapest, protects against disk failure).
* **ZRS (Zone-redundant storage)**: 3 copies across 3 Availability Zones. (Protects against datacenter failure).
* **GRS (Geo-redundant storage)**: LRS in primary region + Async copy to a secondary region (Paired Region).
* **GZRS (Geo-zone-redundant storage)**: ZRS in primary region + Async copy to secondary.

### Data Protection Features
* **Immutable Storage (WORM)**: "Write Once, Read Many". Prevents data from being modified or deleted for a set period. Critical for legal/compliance (e.g., storing financial logs for 7 years).
* **Versioning**: Keeps previous versions of an object automatically when it is overwritten.
* **Snapshots**: Manual point-in-time backup of a blob.
* **Object Replication**: Asynchronously copies block blobs between a source storage account and a destination account (can be cross-region).

---

## 5. Azure Files

Fully managed file shares in the cloud that are accessible via the industry-standard **SMB** protocol.

* **Usage**: You can "mount" an Azure File Share on Windows, Linux, or macOS just like a local drive (Network Drive).
* **Soft Delete**: Acts like a "Recycle Bin". Deleted files can be recovered within a retention period (default 7 days).

---

## 6. Data Transfer Tools

### Azure Storage Explorer
A free standalone desktop app from Microsoft (Windows/Mac/Linux) to manage Azure Storage data using a GUI. Easier than the Portal for uploading/downloading large folders.

### AzCopy
A command-line utility designed for **high-performance** data transfer.
* **Scriptable**: Ideal for automation tasks.
* **Speed**: Optimized for network throughput.
* *Command Example*: `azcopy copy "source" "destination"`

---