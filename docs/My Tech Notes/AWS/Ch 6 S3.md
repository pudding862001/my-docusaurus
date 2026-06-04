---
title: Ch 6 S3
sidebar_label: Ch 6 S3
sidebar_position: 6
---

In this section, we explore **Amazon S3 (Simple Storage Service)**, AWS's primary object storage service known for its infinite scalability, durability, and tiered storage options.

---

## 1. S3 Overview

**Amazon S3** is an object storage service that offers industry-leading scalability, data availability, security, and performance.

* **Buckets**: S3 stores data in containers called "buckets".
    * **Global Uniqueness**: Bucket names must be unique across *all* AWS accounts (like domain names).
    * **Region Specific**: Although S3 is a global service console-wise, buckets are created in a specific region.
* **Objects**: The fundamental entities stored in S3.
    * **Key**: The name of the object (e.g., `images/logo.png`).
    * **Value**: The data itself (sequence of bytes).
    * **Metadata**: Name-value pairs describing the object.

---

## 2. S3 Storage Classes

S3 offers various storage classes designed for different use cases.

* **S3 Standard**: General purpose storage for frequently accessed data. High durability and availability.
* **S3 Intelligent-Tiering**: Automatically moves data between two access tiers (frequent and infrequent) when access patterns change, optimizing costs.
* **S3 Standard-IA (Infrequent Access)**: For data that is accessed less frequently but requires rapid access when needed. Cheaper storage cost than Standard but has a retrieval fee.
* **S3 One Zone-IA**: Stores data in a single Availability Zone. Lower cost (20% less than Standard-IA) but less resilient.

---

## 3. S3 Glacier (Archival Storage)

Designed for data archiving where retrieval time is less critical.

* **S3 Glacier Instant Retrieval**: For archiving data that is rarely accessed but requires milliseconds retrieval.
* **S3 Glacier Flexible Retrieval**: Retrieval times range from minutes to hours.
* **S3 Glacier Deep Archive**: Lowest cost storage class. Retrieval time of 12 hours (Standard) or 48 hours (Bulk).

---

## 4. S3 Security & Versioning

* **Bucket Policies**: JSON-based policies applied to the bucket to control access (e.g., allow public read access).
* **Versioning**: Stores all versions of an object (including all writes and even if you delete an object). It helps recover from accidental deletions or unintended overwrites.
    * *Note: Once enabled, versioning cannot be disabled, only suspended*.

---