---
title: Ch 7 Azure Infrastructure Project - Building with Bicep
sidebar_label: Ch 7 Bicep Project
sidebar_position: 7
---

In this chapter, we undertake a comprehensive **Infrastructure Project**. We will not just deploy resources randomly; we will architect a production-ready environment using **Bicep Modules**. The goal is to build a reusable, scalable, and secure infrastructure code base.

---

## 1. Project Architecture Overview



Before writing code, we must understand what we are building. The project typically involves a multi-tier architecture:

* **Networking**: A Virtual Network (VNet) with multiple subnets (Frontend, Backend, AzureBastionSubnet).
* **Security**: Network Security Groups (NSGs) to filter traffic and Azure Bastion for secure management.
* **Compute**: Multiple Windows VMs deployed using loops (Scale).
* **Storage**: Secure storage accounts with restricted network access.
* **Load Balancing**: An Internal Load Balancer to distribute traffic among backend VMs.
* **Connectivity**: VNet Peering to a test network and Private DNS integration.

---

## 2. Modularizing with Bicep

Instead of one giant `main.bicep` file, we split the infrastructure into logical **Modules**. This promotes reusability (DRY principle).

### Directory Structure
A professional Bicep project structure looks like this:

```text
/modules
    /vnet.bicep        (Network definitions)
    /storage.bicep     (Storage Account definitions)
    /vm.bicep          (Virtual Machine definitions)
    /bastion.bicep     (Bastion Host definitions)
    /nsg.bicep         (Security Rules)
main.bicep             (The Orchestrator)
azuredeploy.parameters.json
```

### The Role of `main.bicep`
The `main.bicep` file acts as the **Orchestrator**. It doesn't define resources directly; it calls the modules and passes parameters between them.

* *Example*: It gets the `subnetId` output from the `vnet.bicep` module and passes it as an input parameter to the `vm.bicep` module.

---

## 3. Key Implementation Steps

### Step 1: Networking & Security
We start by laying the foundation.
* **VNet Module**: Defines address spaces and subnets.
* **NSG Module**: Defines security rules (e.g., Allow HTTP, Deny All Inbound).
* **Integration**: We attach the NSG to the Subnets *within* the VNet module or as a separate step.

### Step 2: Compute (VMs) & Loops
Deploying one VM is easy; deploying 10 is tedious without code.
* **Loops**: We use `[for i in range(0, count): ...]` in Bicep to deploy multiple VM instances dynamically based on a parameter.
* **Outputs**: The VM module must output the **Network Interface IDs** or **Private IPs** so they can be added to the Load Balancer later.

### Step 3: Secure Management (Bastion)
We deploy **Azure Bastion** to manage our private VMs securely.
* **Requirement**: Bastion needs a dedicated subnet named `AzureBastionSubnet` (must be at least /26).
* **Public IP**: Bastion itself needs a Standard Public IP, but the target VMs do **not**.

### Step 4: Load Balancing
We deploy an **Internal Load Balancer (ILB)**.
* **Backend Pool**: The VMs created in Step 2 are added here.
* **Probes**: Checks port 80/443 to ensure the app is running.

---

## 4. Advanced Networking Features

This project also incorporates advanced connectivity features often found in enterprise environments.

### VNet Peering
Connecting our main VNet to a "Test VNet".
* **Bicep Resource**: `Microsoft.Network/virtualNetworks/virtualNetworkPeerings`.
* **Critical**: Peering must be established **both ways** (A to B, and B to A) to work.

### Service Endpoints vs. Private Endpoints
We secure the Storage Account so it's not accessible to the public internet.

* **Service Endpoints**: Configured on the VNet Subnet. Allows the Storage Account to firewall off the internet and **only allow traffic from that specific Subnet**. Traffic stays on the Azure Backbone.
* **Private Endpoints**: Injects a **Private IP** address from your VNet into the Storage Account. The storage account effectively becomes a device inside your network.
    * *Requires*: **Private DNS Zone** to resolve the storage name to the private IP.

---