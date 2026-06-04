---
title: Ch 1 Deploy and Manage Azure Compute Resources
sidebar_label: Ch 1 Deploy and Manage Azure Compute Resources
sidebar_position: 1
---

In this section, we cover the core of Azure Compute services. We move from Infrastructure as a Service (IaaS) with Virtual Machines, to managing storage and security, ensuring high availability with Scale Sets, and finally exploring PaaS solutions like Web Apps and Containers.

---

## 1. Azure Virtual Machines (IaaS)

Virtual Machines (VMs) provide on-demand, scalable computing resources. You control the OS, software, and configuration.

### The Anatomy of a VM
When you build a VM in Azure, you are actually deploying multiple resources tied together:
* **Virtual Machine**: The compute resource.
* **Virtual Network (VNet) & NIC**: For connectivity.
* **Disks**: OS Disk (C: or /root) and Temporary Disk (D: or /mnt - **Data loss on restart**).
* **Public IP**: (Optional) For external access.
* **Network Security Group (NSG)**: Firewall rules (Allow RDP port 3389 or SSH port 22).

### Windows vs. Linux Management
* **Connection**:
    * **Windows**: Uses **RDP** (Remote Desktop Protocol).
    * **Linux**: Uses **SSH** (Secure Shell). For better security, use **SSH Keys** (public/private key pair) instead of passwords.
* **Web Server Setup**:
    * **Windows**: Typically installs **IIS** (Internet Information Services).
    * **Linux**: Typically installs **Apache** or **Nginx**.

### VM Sizes & Resizing
* **VM Sizes**: Categorized by workload (e.g., General Purpose, Compute Optimized, Memory Optimized).
* **Resizing**: You can change the size (Vertical Scaling) of a VM (e.g., adding more RAM/CPU). **Note:** This usually requires a **reboot** of the machine.

---

## 2. Disk Storage & Encryption

Azure VMs use Managed Disks for persistent storage.

### Disk Operations
* **Data Disks**: You can attach additional Empty Disks or existing disks to a VM for storing application data.
* **Snapshots**: A point-in-time backup of a disk. Used to create new disks or restore data.
* **Stop vs. Deallocate**:
    * **Stopped**: OS shut down, but compute resources reserved. **Billing continues.**
    * **Stopped (Deallocated)**: OS shut down and resources released. **Billing stops** (except for storage). Public IP may be released if dynamic.

### Security & Encryption
* **SSE (Server-Side Encryption)**: Default encryption for data at rest. Managed by Azure Platform.
* **ADE (Azure Disk Encryption)**: Encrypts the OS and Data disks inside the VM using BitLocker (Windows) or DM-Crypt (Linux).
* **Azure Key Vault**: A service to securely store keys, secrets, and certificates. ADE uses Key Vault to manage encryption keys.

---

## 3. Automation & Configuration

How to configure the VM *after* it's deployed without logging in manually.

* **Custom Script Extensions**: Scripts (PowerShell for Windows, Bash for Linux) stored in Azure Storage that run on the VM after provisioning. Useful for installing software automatically.
* **Cloud-init**: An industry-standard method for cross-platform cloud instance initialization (Linux only). Runs on the first boot.
* **Boot Diagnostics**: Helps troubleshoot boot failures by capturing console logs and screenshots of the VM.

---

## 4. High Availability & Scalability

Strategies to ensure your application stays online and handles load.

### Availability Options
1.  **Availability Sets**: Protects against hardware failures within a **single datacenter**.
    * **Fault Domains (FD)**: Racks with separate power/network. (Protects against hardware failure).
    * **Update Domains (UD)**: Logical grouping for patching reboots. (Protects against maintenance).
    * *SLA: 99.95%*
2.  **Availability Zones**: Protects against **entire datacenter failures**. VMs are placed in physically separate datacenters within a Region.
    * *SLA: 99.99%*

### Virtual Machine Scale Sets (VMSS)
Allows you to create and manage a group of load-balanced VMs.
* **Scalability**: Automatically increase (**Scale Out**) or decrease (**Scale In**) the number of VMs based on demand (CPU usage, schedule, etc.).
* **Orchestration Modes**:
    * **Uniform**: Identical instances, traditional scale sets.
    * **Flexible**: Mix of standard VMs and Spot VMs, higher availability guarantees.

---

## 5. Azure Web Apps (PaaS)

**Azure App Service** allows you to host web applications without managing the underlying OS (PaaS).

* **Key Features**: Supports .NET, Java, Node.js, Python, PHP.
* **Deployment Slots**: Create staging environments (e.g., "Dev", "Staging"). You can **Swap** slots to promote code to Production with **zero downtime**.
* **Autoscaling**: Similar to VMSS, Web Apps can scale out (add more instances) based on traffic.

---

## 6. Container Services

Containers bundle code and dependencies together, making applications portable.

### Core Services
* **Docker**: The tool to create container images (like a snapshot of your app).
* **ACR (Azure Container Registry)**: A private place to store your Docker Images in Azure (similar to Docker Hub but private).
* **ACI (Azure Container Instances)**: The fastest way to run a container. Serverless. Good for simple applications or task automation.
* **ACA (Azure Container Apps)**: Built on Kubernetes. Serverless containers optimized for microservices (KEDA scaling).
* **Web App for Containers**: Deploy a Docker container directly to Azure App Service.

---