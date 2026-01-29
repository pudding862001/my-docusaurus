---
title: Authentication and Authorization
sidebar_label: Authentication and Authorization
sidebar_position: 12
---

## 1. Core Concepts of Identity Management

Security in Linux is built on two primary pillars that define who a user is and what they are allowed to do.

* **Authentication**: The process of providing proof of identity. This ensures that the person or system attempting to access the machine is who they claim to be.
* **Authorization**: The specific access rights or permissions granted to an authenticated identity. A common example is using the `chmod` command to assign file permissions to specific users or groups.

---

## 2. Pluggable Authentication Modules (PAM)

PAM acts as a flexible intermediary layer between Linux applications that require security services and the underlying security mechanisms of the operating system.

* **Role**: It allows administrators to configure authentication methods for various apps without having to modify the apps themselves.
* **Common Tasks**:
    * **Account Verification**: Confirming the validity of a user account.
    * **Authentication**: Handling login credentials.
    * **Password Updates**: Managing the process of changing user passwords.
    * **Session Auditing**: Tracking and recording user session activities for security compliance.

---

## 3. SSH Public Key Authentication

Secure Shell (SSH) is the standard for remote Linux management, typically operating over **TCP port 22**. Public key authentication offers a more secure alternative to traditional passwords.

### The Key Pair Mechanism
SSH authentication relies on a pair of cryptographic keys:
* **Private Key**: This remains stored securely on the **SSH client** (the administrator's machine). It must never be shared.
* **Public Key**: This key is intended to be shared and must be copied to the **SSH server** you wish to manage.

### Implementation
* **Generating Keys**: Use the `ssh-keygen` utility to create a new private/public key pair.
* **Deployment**: Once generated, the administrator copies the public key to the server to establish a trusted connection.


---