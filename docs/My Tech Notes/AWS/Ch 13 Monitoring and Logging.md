---
title: Ch 13 Monitoring and Logging
sidebar_label: Ch 13 Monitoring
sidebar_position: 13
---

In this section, we distinguish between two critical services: **Amazon CloudWatch** for performance monitoring and **AWS CloudTrail** for auditing and compliance.

---

## 1. Amazon CloudWatch

**Amazon CloudWatch** focuses on performance monitoring and operational health.

* **Metaphor**: Like a **"Hospital Monitor + Alarm System"**. It measures heart rate (CPU) and blood pressure (Network). If data is abnormal, it beeps (Alarms) and notifies the doctor (SNS).
* **Metrics**: Data points ordered by time.
    * **Default Metrics**: CPU, Disk I/O, Network.
    * **Custom Metrics**: **Memory** usage and **Disk Space** are *not* included by default. You must install the **CloudWatch Agent** on the EC2 instance to track them.
* **Alarms**: Triggers actions based on metrics (e.g., if CPU > 80%, trigger Auto Scaling).
* **Logs**: Collects and stores system logs (e.g., Apache Access Log, Lambda Logs).
* **EventBridge (formerly CloudWatch Events)**: A "Reflex System". When Event A happens (e.g., EC2 state change), it automatically triggers Action B (e.g., send an email).

---

## 2. AWS CloudTrail

**AWS CloudTrail** focuses on governance, compliance, and auditing.

* **Metaphor**: Like a **"Bank CCTV + Logbook"**. It doesn't care how fast the server runs; it only cares about **WHO** did **WHAT** at **WHEN**.
* **API Records**: Records all API calls made via the Console, SDK, or CLI.
* **Storage**: Default retention is 90 days. For long-term storage, you must create a **Trail** to send logs to **S3** or **CloudWatch Logs**.
* **CloudTrail Insights**: Uses AI to detect abnormal API usage patterns (e.g., an unusual spike in instance provisioning).

---

## 3. Comparison Summary

| Feature | Amazon CloudWatch | AWS CloudTrail |
| :--- | :--- | :--- |
| **Primary Focus** | Performance & Health (CPU, Network). | Audit & Compliance (API Calls). |
| **Question Answered** | "How is the system performing?". | "Who made the change?". |

---