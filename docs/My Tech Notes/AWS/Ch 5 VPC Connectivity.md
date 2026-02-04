---
title: Ch 5 VPC Connectivity
sidebar_label: Ch 5 VPC Connectivity
sidebar_position: 5
---

In this section, we cover advanced networking topics, including how to connect different VPCs (Peering), how to access AWS services privately (Endpoints), and how to connect your on-premises infrastructure to AWS (VPN & Direct Connect).

---

## 1. VPC Peering

**VPC Peering** allows you to connect two VPCs via a direct network route using private IP addresses.

* **Behavior**: Instances in peered VPCs can communicate as if they are on the same network.
* **Restrictions**:
    * **No Overlapping CIDRs**: You cannot peer two VPCs with matching or overlapping IP ranges.
    * **Non-Transitive**: If VPC A peers with VPC B, and VPC B peers with VPC C, VPC A **cannot** talk to VPC C directly. A separate peering connection is required.

---

## 2. VPC Endpoints

**VPC Endpoints** allow you to connect to supported AWS services without requiring an Internet Gateway, NAT device, or VPN connection. All traffic remains within the AWS network.

### Types of Endpoints:
1.  **Gateway Endpoints**:
    * Target: **S3** and **DynamoDB** only.
    * Configuration: Uses a route table entry (e.g., target `pl-xxxx`).
    * Cost: Free to use.
2.  **Interface Endpoints (AWS PrivateLink)**:
    * Target: Most other AWS services (e.g., CloudWatch, EC2 API, SNS).
    * Configuration: Provisions an Elastic Network Interface (ENI) with a private IP in your subnet.
    * Cost: Billable per hour and per GB of data processed.

---

## 3. Site-to-Site VPN

**AWS Site-to-Site VPN** enables you to securely connect your on-premises network or branch office to your VPC.

* **Components**:
    * **Virtual Private Gateway (VGW)**: Attached to the VPC side (AWS).
    * **Customer Gateway (CGW)**: Represents the physical device (firewall/router) on the customer's side (On-Premises).
* **Characteristics**: Setup is quick, runs over the public internet, and traffic is encrypted via **IPsec**.

---

## 4. AWS Direct Connect (DX)

**AWS Direct Connect** provides a dedicated physical connection from your premises to AWS.

* **Private Connection**: Traffic does not travel over the public internet.
* **Benefits**: Consistent network performance, lower latency, and reduced bandwidth costs for heavy data transfer.
* **Setup Time**: Takes significantly longer to set up (weeks to months) compared to a VPN.

---

## 5. Transit Gateway (TGW)



**AWS Transit Gateway** acts as a central hub that connects your VPCs and on-premises networks.

* **Transitive Peering**: unlike VPC peering, TGW solves the "peering mesh" problem by allowing transitive routing.
* **Topology**: Simplifies network architecture into a **Hub-and-Spoke** model, making it easier to manage hundreds of VPCs.

---