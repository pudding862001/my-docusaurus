---
title: Ch 14 Security
sidebar_label: Ch 14 Security
sidebar_position: 14
---

In this section, we cover Identity services beyond basic IAM and Encryption services for data protection.

---

## 1. Identity Services

* **Amazon Cognito**:
    * **Metaphor**: The **"App Receptionist"**. Handles sign-up and sign-in for your mobile/web apps so you don't have to code it yourself.
    * **User Pools**: A "User Directory". Handles registration, login, and supports social identity providers (Facebook, Google).
    * **Identity Pools**: A "Temporary Pass". Exchanges user credentials for temporary AWS credentials to access resources like S3 directly.
* **AWS Directory Service**:
    * **Managed Microsoft AD**: Real Windows AD running on AWS.
    * **AD Connector**: A "Proxy". It does not store data but forwards login requests to your on-premises AD.

---

## 2. Data Encryption (KMS vs. CloudHSM)

* **AWS KMS (Key Management Service)**:
    * **Metaphor**: A **"Bank Vault Center"**. You manage the keys (CMK), and AWS manages the physical vault.
    * **Multi-tenant**: Hardware is shared among customers.
    * **Key Rotation**: AWS Managed keys rotate every 3 years; Customer Managed keys rotate every 1 year.
* **AWS CloudHSM**:
    * **Metaphor**: Your **"Private Heavy-duty Safe"**.
    * **Single-tenant**: Dedicated hardware for your use only, required for strict compliance (FIPS 140-2 Level 3).
    * **Control**: AWS manages the hardware, but **even AWS administrators cannot see your keys**.

---