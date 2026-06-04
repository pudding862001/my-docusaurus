---
title: Ch 11 Databases and Analytics
sidebar_label: Ch 11 Databases
sidebar_position: 11
---

In this section, we cover the vast landscape of AWS databases, distinguishing between **Relational (OLTP)**, **NoSQL**, and **Analytics (OLAP)** services, and how to move data using ETL tools.

---

## 1. Amazon RDS (Relational Database Service)

**Amazon RDS** is a managed service that makes it easy to set up, operate, and scale a relational database in the cloud.

* **Managed Service**: AWS handles patching, backups, and maintenance. You cannot SSH into the underlying OS.
* **Engines**: Supports PostgreSQL, MySQL, MariaDB, Oracle, and SQL Server.
* **Architecture Patterns**:
    * **Multi-AZ**: Used for **Disaster Recovery (DR)**. Data is synchronously replicated to a standby instance in another AZ. Automatic failover occurs if the primary fails.
    * **Read Replicas**: Used for **Performance**. Data is asynchronously replicated to read-only instances to offload read traffic from the primary DB.

---

## 2. Amazon Aurora

**Amazon Aurora** is an AWS-native relational database built for the cloud, compatible with MySQL and PostgreSQL.

* **Performance**: Up to 5x faster than standard MySQL and 3x faster than PostgreSQL.
* **Storage Architecture**:
    * **6 Copies**: Data is automatically replicated 6 times across 3 Availability Zones.
    * **Self-Healing**: It automatically detects and repairs failures in the storage layer.
* **Aurora Serverless**: Automatically starts up, shuts down, and scales capacity based on application demand.
* **Aurora Global Database**: Replicates data across multiple regions with sub-second latency for DR or local reads.

---

## 3. Amazon DynamoDB (NoSQL)

**Amazon DynamoDB** is a fully managed, serverless, key-value NoSQL database designed for single-digit millisecond latency at any scale.

* **Key-Value Store**: Stores data in items (rows) and attributes (columns) without a rigid schema.
* **Performance Features**:
    * **DAX (DynamoDB Accelerator)**: A fully managed, in-memory cache that reduces response times from milliseconds to microseconds.
    * **Global Tables**: Replicates your DynamoDB tables automatically across your choice of AWS Regions.

---

## 4. Analytics & Data Warehousing

* **Amazon Redshift (OLAP)**: A petabyte-scale data warehouse. It uses **Columnar Storage** to optimize complex queries and aggregation over massive datasets.
* **Amazon Athena**: A serverless query service that allows you to analyze data directly in **Amazon S3** using standard SQL.
* **Amazon ElastiCache**: A fully managed in-memory caching service (supporting Redis and Memcached) used to improve the performance of read-heavy applications.

---

## 5. Data Integration (ETL)

* **AWS Glue**: A serverless data integration service used for **ETL (Extract, Transform, Load)** tasks.
    * **Data Catalog**: A central repository of metadata. The **Glue Crawler** scans your data (e.g., in S3) to infer the schema and populate the catalog.
* **Amazon Kinesis**:
    * **Data Streams**: For real-time streaming data ingestion (requires custom consumers).
    * **Data Firehose**: The easiest way to load streaming data into data stores like S3 or Redshift.

---