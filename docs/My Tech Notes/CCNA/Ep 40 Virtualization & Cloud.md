---
title: Ep 40 Cloud Computing - Virtualization & Services
sidebar_label: Ep 40 Virtualization & Cloud
sidebar_position: 40
---

In this episode, we explore the foundations of **Cloud Computing**, focusing on the virtualization technology that makes it possible and the various service models used to deliver cloud resources.

---

## 1. Virtualization Fundamentals

Virtualization allows a single physical computer to run multiple virtual computers (Virtual Machines) simultaneously by abstracting hardware resources.

### The Hypervisor
The Hypervisor is the software responsible for creating and managing Virtual Machines (VMs). There are two main types:

* **Type 1 Hypervisor (Bare Metal)**: Runs directly on the physical hardware. Examples include VMware ESXi and Microsoft Hyper-V. It is highly efficient and common in enterprise data centers.
* **Type 2 Hypervisor (Hosted)**: Runs as an application on top of an existing Operating System. Examples include VMware Workstation and Oracle VirtualBox. It is typically used for development and testing on personal computers.



---

## 2. Essential Characteristics of Cloud Computing

According to NIST, Cloud Computing must possess five essential characteristics to be considered a true cloud service:

* **On-demand Self-service**: Users can provision computing resources automatically without requiring human interaction with the service provider.
* **Broad Network Access**: Capabilities are available over the network and accessed through standard mechanisms (e.g., mobile phones, tablets, laptops).
* **Resource Pooling**: The provider's computing resources are pooled to serve multiple consumers using a multi-tenant model.
* **Rapid Elasticity**: Resources can be elastically provisioned and released to scale rapidly outward and inward with demand.
* **Measured Service**: Cloud systems automatically control and optimize resource use by leveraging a metering capability (pay-as-you-go).

---

## 3. Cloud Service Models

Cloud services are categorized based on how much of the "stack" is managed by the provider versus the customer.

| Model | Description | Examples |
| :--- | :--- | :--- |
| **IaaS (Infrastructure as a Service)** | Provides fundamental computing, storage, and networking resources. The customer manages the OS and applications. | AWS EC2, GCP Compute Engine, Azure VMs. |
| **PaaS (Platform as a Service)** | Provides a platform allowing customers to develop, run, and manage applications without the complexity of infrastructure. | Google App Engine, AWS Elastic Beanstalk. |
| **SaaS (Software as a Service)** | Software is licensed on a subscription basis and centrally hosted. The customer manages nothing but the data/settings. | Google Drive, Microsoft 365, Salesforce. |



---

## 4. Cloud Deployment Models

Cloud infrastructure can be deployed in different ways depending on ownership and access:

* **Public Cloud**: The infrastructure is made available to the general public over the Internet and owned by a cloud provider.
* **Private Cloud**: The infrastructure is operated solely for a single organization, whether managed internally or by a third party.
* **Hybrid Cloud**: A composition of two or more distinct cloud infrastructures (Private and Public) that remain unique entities but are bound together.
* **Community Cloud**: Shared by several organizations and supports a specific community that has shared concerns (e.g., mission, security requirements).

---