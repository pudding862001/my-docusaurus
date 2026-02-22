---
title: Ch 8 Manage Azure identities and governance
sidebar_label: Ch 8 Identity & Governance
sidebar_position: 8
---

In this section, we focus on **Security** and **Governance**. We learn how to manage users and groups using **Microsoft Entra ID** (formerly Azure AD), enforce permissions with **RBAC**, and govern resources using **Policies**, **Locks**, and **Tags**.

---

## 1. Microsoft Entra ID (Formerly Azure AD)



**Microsoft Entra ID** is Azure's cloud-based identity and access management service. It is **NOT** simply a cloud version of Windows Server Active Directory; it is a flat structure designed for web-based services (HTTP/HTTPS).

### Key Concepts
* **Tenants**: A dedicated instance of Entra ID that an organization receives when it signs up for a Microsoft cloud service like Azure or Microsoft 365.
* **Users**:
    * **Member**: Native users created inside the tenant.
    * **Guest (B2B)**: External users invited from other organizations (e.g., partners, vendors). They sign in with their *own* credentials.
* **Groups**: Used to manage permissions efficiently. You assign licenses or roles to a group, and all members inherit them.
* **Licenses**: Features like "Group-based licensing" or "Conditional Access" require Premium licenses (P1 or P2).

### Self-Service Password Reset (SSPR)
Allows users to reset their own passwords without calling IT helpdesk.
* **Requirement**: Must be enabled at the tenant level (or for specific groups). Users must register authentication methods (phone, email, app).

---

## 2. Role-Based Access Control (RBAC)

**Azure RBAC** is the authorization system used to manage access to Azure resources (VMs, Storage, etc.).



### The 3 Elements of RBAC
1.  **Security Principal**: Who? (User, Group, Service Principal, Managed Identity).
2.  **Role Definition**: What can they do? (Reader, Contributor, Owner).
3.  **Scope**: Where applies? (Management Group > Subscription > Resource Group > Resource).

### Built-in Roles (Key for Exam)
* **Owner**: Full access to resources **AND** can manage access (assign roles to others).
* **Contributor**: Full access to resources (create/delete VMs), but **CANNOT** assign roles to others.
* **Reader**: Can view resources but cannot make any changes.
* **User Access Administrator**: Can *only* manage user access (assign roles), but has no access to view or edit the resources themselves.

### Custom Roles
If built-in roles don't meet your needs, you can create custom roles using JSON.
* *Example*: A "VM Operator" who can restart VMs but cannot delete them.

---

## 3. Azure RBAC vs. Entra ID Roles

This is a critical distinction.

| Feature | Azure RBAC | Entra ID Roles |
| :--- | :--- | :--- |
| **Purpose** | Manage access to **Azure Resources** (VMs, SQL, Storage). | Manage access to **Identity tasks** (Reset passwords, Create users). |
| **Examples** | Contributor, Reader, Owner. | Global Administrator, User Administrator, Billing Admin. |
| **Scope** | Subscription, Resource Group. | Tenant-wide. |

> **Global Administrator**: The highest level admin in Entra ID. By default, they do NOT have access to Azure Subscriptions. However, they can "elevate" their access to manage all Azure Subscriptions if needed.

---

## 4. Azure Governance

How to control costs, ensure compliance, and prevent accidental deletion.

### Resource Locks
Prevents accidental modification or deletion.
* **CanNotDelete**: Users can read and modify a resource, but **cannot delete** it.
* **ReadOnly**: Users can read a resource, but **cannot modify or delete** it.
* *Note*: Locks apply to all users, **including Owners**.

### Azure Policy
Enforces rules and compliance on your resources.
* **Difference from RBAC**: RBAC controls *who* can do it. Policy controls *what* can be done.
* **Use Cases**:
    * "Allowed Locations": Only allow creating resources in "East US".
    * "Allowed VM SKUs": Prevent users from creating expensive G-series VMs.
    * "Require Tags": Ensure every resource has a "CostCenter" tag.

### Tags
Key-Value pairs (e.g., `Env: Production`, `Dept: IT`) attached to resources for logical organization and **Cost Management** (billing reports).

### Management Groups
A container to manage access, policy, and compliance across **multiple subscriptions**.
* **Hierarchy**: Root Management Group -> Management Group -> Subscription -> Resource Group.
* *Benefit*: Apply a Policy to a Management Group, and it automatically inherits down to all 50 subscriptions under it.

---