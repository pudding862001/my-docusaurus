---
title: Ch 1 IAM
sidebar_label: Ch 1 IAM
sidebar_position: 1
---

In this section, we cover the core concepts of AWS Identity and Access Management (IAM), including the differences between the root account and IAM users, the structure of groups and roles, and how policies control access permissions.

---

## 1. What is IAM?



**AWS Identity and Access Management (IAM)** is a global service that helps you securely control access to AWS resources. It allows you to manage who is authenticated (signed in) and authorized (has permissions) to use resources.

* **Global Service**: IAM is a global service; it does not require region selection.
* **Free Service**: There is no additional charge for using IAM.

---

## 2. Root Account vs. IAM Users

It is crucial to understand the distinction between the Root Account and IAM Users for security purposes.

### Root Account
The **Root Account** is the identity created when you first set up your AWS account.

* **Full Access**: It has complete access to all AWS services and resources in the account.
* **Security Best Practice**: It should **not** be used for daily tasks. You should lock it away and use it only for specific account management tasks (e.g., billing).

### IAM Users
**IAM Users** represent a person or service that interacts with AWS.

* **Least Privilege**: Users start with no permissions and must be granted access explicitly.
* **Credentials**: Each user has their own credentials (password for console access, Access Keys for programmatic access).

*Example: Instead of sharing the Root Account password, create an individual IAM User for each developer (e.g., Alice, Bob).*

---

## 3. IAM Groups



**IAM Groups** are collections of IAM users. They allow you to specify permissions for multiple users at once, which simplifies management.

### Key Characteristics:
* **Inheritance**: Users in a group automatically inherit the permissions assigned to that group.
* **Organization**: Groups typically reflect job functions (e.g., Admins, Developers, Testers).
* **No Nesting**: Groups cannot contain other groups; they can only contain users.

*Example: If you have a "Developers" group with S3 access, adding a new employee to this group automatically gives them S3 access.*

---

## 4. IAM Policies



**Policies** are documents that define permissions. In AWS, these are typically written in **JSON** format.

### Structure:
* **Version**: The policy language version (e.g., "2012-10-17").
* **Statement**: The main rule block containing:
    * **Effect**: `Allow` or `Deny`.
    * **Action**: The specific API calls allowed (e.g., `s3:ListBucket`).
    * **Resource**: The specific AWS resource the action applies to.

---

## 5. IAM Roles

**IAM Roles** are identities that have specific permissions but are not associated with a specific person. They are intended to be **assumed** by anyone who needs them.

### Key Characteristics:
* **Temporary Credentials**: unlike users, roles do not have long-term passwords or access keys. They provide temporary security credentials.
* **Use Cases**:
    * **AWS Services**: Allowing an EC2 instance to access S3.
    * **Cross-Account Access**: allowing a user from one AWS account to access resources in another.

---

## 6. MFA (Multi-Factor Authentication)



**MFA** adds an extra layer of protection on top of your user name and password.

* **Requirement**: You must provide a simplified code from a physical or virtual MFA device (like Google Authenticator) in addition to your password.
* **Recommendation**: It is highly recommended to enable MFA for the **Root Account** and all IAM Users.

---