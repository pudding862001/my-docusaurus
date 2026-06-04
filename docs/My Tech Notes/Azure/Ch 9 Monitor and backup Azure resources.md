---
title: Ch 9 Monitor and backup Azure resources
sidebar_label: Ch 9 Monitor & Backup
sidebar_position: 9
---

In this section, we focus on operational excellence. We learn how to keep an eye on our resources using **Azure Monitor** and **Log Analytics**, and how to protect our data using **Azure Backup** and **Azure Site Recovery (ASR)**.

---

## 1. Azure Monitor



**Azure Monitor** is the central service that collects, analyzes, and acts on telemetry data from your Azure and on-premises environments.

### Metrics vs. Logs
* **Metrics**: Numerical values (e.g., CPU Usage = 80%). Lightweight and real-time. Good for alerting.
* **Logs**: Text-based records (e.g., "User A deleted VM B"). Structured data. Good for deep analysis.

### Alerts
You can configure alerts to notify you when something goes wrong.
* **Action Groups**: A reusable object that defines *who* to notify (Email, SMS, Push) and *what* to do (Run Automation Runbook, Webhook).
* **Alert Rules**:
    * **Metric Alert**: Trigger when CPU > 90%.
    * **Activity Log Alert**: Trigger when someone "Stops" a VM.
    * **Log Query Alert**: Trigger when a specific error appears in the logs.

---

## 2. Log Analytics Workspace



The **Log Analytics Workspace** is the central repository where logs are stored. It is the "brain" of Azure Monitor's logging capabilities.

* **Kusto Query Language (KQL)**: The powerful language used to query logs. (Similar to SQL).
    * *Example*: `Heartbeat | where TimeGenerated > ago(1h) | summarize count() by Computer`
* **Agents**:
    * **Azure Monitor Agent (AMA)**: The new, recommended agent.
    * **Log Analytics Agent (MMA/OMS)**: The legacy agent (being deprecated).
* **VM Insights**: A feature that provides a pre-built dashboard for VM performance (CPU, Memory, Disk) and map dependencies.

---

## 3. Azure Backup

**Azure Backup** is a managed service to back up data to the cloud. It replaces traditional on-prem tape solutions.

### Recovery Services Vault (RSV)
The resource that stores your backups.
* **Protected Items**: What are you backing up? (Azure VMs, SQL DBs, File Shares).
* **Backup Policy**: When to take a backup? (Schedule) and How long to keep it? (Retention).
* **Soft Delete**: A security feature. Even if a hacker deletes your backup, the data is retained for **14 days** in a soft-delete state, allowing you to recover it.

### Backup Methods
1.  **Azure VM Backup**: Snapshot-based. Backs up the entire VM image.
    * **Restore Options**: Restore entire VM, Restore specific disks, or **File Recovery** (Mounts the backup as a drive script to copy specific files).
2.  **MARS Agent (Microsoft Azure Recovery Services)**:
    * Used for **On-Premises** files and folders (or Azure VMs guest OS files).
    * Does **NOT** support System State or Bare Metal Recovery (MABS/DPM is needed for that).
3.  **Azure Files Backup**: Snapshot-based backup for Azure File Shares.

### Backup Vault vs. Recovery Services Vault
This is a confusing naming convention in Azure.
* **Recovery Services Vault (Old/Standard)**: Supports Azure VMs, SQL in VM, Azure Files (Standard).
* **Backup Vault (New)**: Supports newer workloads like **Azure Blobs**, **Azure Disks**, and PostgreSQL.

---

## 4. Azure Site Recovery (ASR)

While Azure Backup is for data recovery (long-term), **ASR** is for **Business Continuity and Disaster Recovery (BCDR)** (quick failover).

* **Goal**: Minimize RTO (Recovery Time Objective) and RPO (Recovery Point Objective).
* **Scenario**:
    * **Region Failover**: Replicate an Azure VM from *East US* to *West US*.
    * **On-Prem to Cloud**: Replicate VMware/Hyper-V VMs to Azure (Migration).
* **Failover Process**:
    1.  Enable Replication (Data syncs continuously).
    2.  **Test Failover** (Creates a test VM in an isolated network; *Production is NOT impacted*).
    3.  **Failover** (Production moves to the secondary region).

---