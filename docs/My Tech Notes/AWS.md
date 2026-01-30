---
title: AWS Cloud Practitioner & Solutions Architect Foundations
sidebar_label: AWS Cloud Foundations
sidebar_position: 4
hide_title: true
---

## AWS Cloud Foundations (To be continue...)

Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform. For a Staff Engineer, mastering AWS involves understanding how to architect highly available, scalable, and fault-tolerant systems.

---

### 1. AWS Global Infrastructure

AWS serves over a million active customers in more than 190 countries.

* **Regions:** Physical locations around the world where AWS clusters data centers. Each Region is geographically isolated.
* **Availability Zones (AZs):** One or more discrete data centers with redundant power, networking, and connectivity within an AWS Region.
* **Edge Locations:** Sites that CloudFront (CDN) uses to deliver content to end users with low latency.

---

### 2. Shared Responsibility Model

Security and Compliance is a shared responsibility between AWS and the customer.

* **AWS Responsibility ("Security OF the Cloud"):** Protecting the infrastructure that runs all of the services offered in the AWS Cloud (Hardware, software, networking, and facilities).
* **Customer Responsibility ("Security IN the Cloud"):** Management of the guest operating system, application software, and configuration of the AWS-provided security group firewall.

---

### 3. Core AWS Services (The Big Four)

| Category | Service | Description |
| :--- | :--- | :--- |
| **Compute** | **EC2** | Virtual servers in the cloud (Elastic Compute Cloud). |
| **Storage** | **S3** | Scalable object storage for data backup and archiving (Simple Storage Service). |
| **Database** | **RDS** | Managed relational database service for MySQL, PostgreSQL, etc. |
| **Networking** | **VPC** | Isolated cloud resources in a private virtual network. |

---

### 4. Scalability and Availability

* **Elastic Load Balancing (ELB):** Automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances.
* **Auto Scaling:** Automatically adds or removes compute resources to maintain performance and minimize cost.

---

> **Staff Engineer Note:** In our current roadmap for CKA and Azure certifications, comparing **AWS VPC** with **Azure VNet** is a key skill. While the terminology differs, the underlying principles of CIDR blocks, subnets, and routing tables remain consistent. From my experience at Lenovo and Advantech, leveraging AWS for high-performance computing requires a deep understanding of **IAM (Identity and Access Management)** to ensure the principle of least privilege is applied across all automated CI/CD pipelines.