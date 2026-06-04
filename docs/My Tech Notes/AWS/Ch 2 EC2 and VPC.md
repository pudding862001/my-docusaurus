---
title: Ch 2 EC2 and VPC
sidebar_label: Ch 2 EC2 & VPC
sidebar_position: 2
---

In this section, we explore **Amazon EC2**, the fundamental compute service of AWS, and **Amazon VPC**, the networking layer that provides a secure, isolated environment for your resources.

---

## 1. Amazon EC2 (Elastic Compute Cloud)

**Amazon EC2** provides scalable computing capacity in the AWS cloud. It allows you to rent virtual servers, known as **instances**, to run your applications.

* **Instance Types**: AWS offers various instance families optimized for different use cases (e.g., General Purpose, Compute Optimized, Memory Optimized).
* **Pricing Models**:
    * **On-Demand**: Pay for compute capacity by the second with no long-term commitment.
    * **Reserved Instances (RI)**: Provides a significant discount (up to 72%) compared to On-Demand pricing in exchange for a 1 or 3-year commitment.
    * **Spot Instances**: Allows you to bid on unused EC2 capacity for up to 90% off, but instances can be interrupted by AWS with 2 minutes of notice.
    * **Dedicated Hosts**: Physical servers dedicated for your use, often required for compliance or software licensing.

---

## 2. Security Groups



**Security Groups** act as a virtual firewall for your EC2 instances to control incoming and outgoing traffic.

### Key Characteristics:
* **Instance Level**: Security Groups operate at the instance level, not the subnet level.
* **Allow Rules Only**: You can only specify "Allow" rules; you cannot specify "Deny" rules.
* **Stateful**: If you send a request from your instance, the response traffic for that request is allowed to flow in regardless of inbound security group rules.
* **Default Behavior**: By default, all inbound traffic is blocked, and all outbound traffic is allowed.

---

## 3. Amazon VPC (Virtual Private Cloud)

**Amazon VPC** lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.

* **Region Scope**: A VPC is specific to a **Region**; it does not span across regions.
* **CIDR Block**: When you create a VPC, you must specify a range of IPv4 addresses in the form of a Classless Inter-Domain Routing (CIDR) block (e.g., `10.0.0.0/16`).

---

## 4. Subnets

A **Subnet** is a range of IP addresses in your VPC. You launch resources like EC2 instances into a specific subnet.

* **AZ Scope**: A subnet resides entirely within one **Availability Zone (AZ)** and cannot span zones.
* **Public vs. Private**:
    * **Public Subnet**: Has a route to an **Internet Gateway (IGW)**, allowing resources to communicate with the internet.
    * **Private Subnet**: Does not have a direct route to the internet. Resources often use a **NAT Gateway** to access the internet securely.

---