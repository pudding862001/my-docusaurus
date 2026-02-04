---
title: Ch 4 Organizations and Control Tower
sidebar_label: Ch 4 Orgs & Control Tower
sidebar_position: 4
---

In this section, we explore how to manage multiple AWS accounts efficiently using **AWS Organizations** and how to enforce governance and best practices using **AWS Control Tower**.

---

## 1. AWS Organizations

**AWS Organizations** is an account management service that enables you to consolidate multiple AWS accounts into an organization that you create and centrally manage.

* **Management Account (Root)**: The account that creates the organization. It pays the charges of all member accounts (Consolidated Billing).
* **Member Accounts**: Other accounts in the organization. They can be grouped for easier management.
* **Benefits**:
    * **Consolidated Billing**: Receive a single bill for all accounts and benefit from volume discounts (e.g., aggregating S3 usage across accounts).
    * **Centralized Control**: Apply policies across multiple accounts simultaneously.

---

## 2. Organizational Units (OUs)



**Organizational Units (OUs)** are containers for accounts within a root. They allow you to organize your accounts into a hierarchy that reflects your business needs (e.g., by department or environment like "Prod" vs "Dev").

---

## 3. Service Control Policies (SCPs)

**Service Control Policies (SCPs)** are a type of organization policy that you use to manage permissions in your organization.

* **Boundary**: SCPs define the **maximum** available permissions for IAM users and roles in member accounts. They do **not** grant permissions; they only filter them.
* **Inheritance**: Policies applied to the Root or an OU are inherited by the accounts within them.
* **Root User Restriction**: Unlike local IAM policies, SCPs **do** affect the Root user of the member account.
* **Allow vs. Deny**: Like IAM, an explicit **Deny** overrides any **Allow**.

*Example: You can use an SCP to deny access to specific AWS regions (e.g., deny all regions except us-east-1) for compliance purposes.*

---

## 4. AWS Control Tower

**AWS Control Tower** provides the easiest way to set up and govern a secure, multi-account AWS environment based on best practices.

* **Landing Zone**: Control Tower automates the setup of a "Landing Zone," which is a well-architected, multi-account environment.
* **Account Factory**: A configurable template that automates the provisioning of new accounts with pre-approved network and security configurations.

---

## 5. Guardrails

Control Tower uses **Guardrails** to enforce governance.

* **Preventive Guardrails**: Disallow actions that violate policies (implemented via **SCPs**).
    * *Example: Prevent users from disabling AWS CloudTrail.*
* **Detective Guardrails**: Monitor and detect non-compliant resources (implemented via **AWS Config**).
    * *Example: Detect if an S3 bucket is publicly accessible.*

---