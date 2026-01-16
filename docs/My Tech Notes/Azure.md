---
title: Azure Administrator & Cloud Foundations
sidebar_label: Azure Cloud Foundations
sidebar_position: 5
hide_title: true
---

## Azure Cloud Foundations

Microsoft Azure is a continuously expanding set of cloud services to help your organization meet your business challenges. For a Staff Engineer, mastering Azure involves understanding its unique resource hierarchy and identity management (Entra ID).

---

### 1. Azure Resource Hierarchy

Azure provides a four-level management hierarchy to organize resources effectively:

* **Management Groups:** Containers that help you manage access, policy, and compliance for multiple subscriptions.
* **Subscriptions:** A logical unit of Azure services that is linked to an Azure account. Billing is managed at this level.
* **Resource Groups:** A logical container into which Azure resources (like VMs, Web Apps) are deployed and managed.
* **Resources:** Instances of services that you create, such as virtual machines, storage, or SQL databases.

---

### 2. Azure Global Infrastructure

* **Regions:** A set of data centers deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network.
* **Region Pairs:** Each Azure region is paired with another region within the same geography (at least 300 miles away) to ensure business continuity.
* **Availability Zones:** Unique physical locations within an Azure region. Each zone is made up of one or more data centers equipped with independent power, cooling, and networking.

---

### 3. Core Azure Services

| Category | Service | Description |
| :--- | :--- | :--- |
| **Compute** | **Virtual Machines (VM)** | On-demand, scalable computing resources (IaaS). |
| **Storage** | **Blob Storage** | Object storage solution for the cloud, optimized for storing massive amounts of unstructured data. |
| **Database** | **Azure SQL** | Managed, intelligent, and scalable relational database service. |
| **Networking** | **Virtual Network (VNet)** | Enables Azure resources to securely communicate with each other, the internet, and on-premises networks. |

---

### 4. Governance and Security

* **Azure Policy:** Helps to enforce organizational standards and to assess compliance at-scale.
* **Role-Based Access Control (RBAC):** Fine-grained access management for Azure resources, allowing you to grant only the amount of access that users need.
* **Microsoft Entra ID (formerly Azure AD):** The cloud-based identity and access management service.

---

> **Staff Engineer Note:** Comparing **Azure VNet** with **AWS VPC** is essential for multi-cloud architecture. In Azure, the resource group model provides a very clean way to manage the lifecycle of an application's components. Based on my background at **Lenovo** and **Moxa**, implementing robust **RBAC** and **Azure Policies** is the foundation for maintaining security compliance in large-scale production environments, especially when integrating with Kubernetes (CKA) clusters.