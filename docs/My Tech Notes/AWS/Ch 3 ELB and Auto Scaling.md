---
title: Ch 3 ELB and Auto Scaling
sidebar_label: Ch 3 ELB & ASG
sidebar_position: 3
---

In this section, we cover **Elastic Load Balancing (ELB)** for distributing traffic and **Auto Scaling Groups (ASG)** for ensuring high availability and elasticity of your applications.

---

## 1. Elastic Load Balancing (ELB)

**ELB** automatically distributes incoming application traffic across multiple targets, such as EC2 instances, containers, and IP addresses, in multiple Availability Zones.

### Benefits:
* **High Availability**: Ensures your application remains available by distributing traffic only to healthy targets.
* **Health Checks**: ELB monitors the health of its registered targets and routes traffic only to the healthy ones.

---

## 2. Types of Load Balancers

AWS provides four types of load balancers, each suited for different needs.

* **Application Load Balancer (ALB)**:
    * Operates at **Layer 7** (Application Layer).
    * Ideal for HTTP/HTTPS traffic and advanced routing (e.g., path-based or host-based routing).
* **Network Load Balancer (NLB)**:
    * Operates at **Layer 4** (Transport Layer).
    * Designed for ultra-high performance and low latency, handling millions of requests per second.
* **Gateway Load Balancer (GWLB)**:
    * Used to deploy, scale, and manage third-party virtual appliances (e.g., firewalls, intrusion detection systems).
    * Operates at **Layer 3** (Network Layer).
* **Classic Load Balancer (CLB)**:
    * The legacy generation. Operates at both Layer 4 and Layer 7 but is less flexible than ALB/NLB.

---

## 3. Auto Scaling Groups (ASG)



**Auto Scaling Groups** help you ensure that you have the correct number of EC2 instances available to handle the load for your application.

### Key Concepts:
* **Scale Out**: Adds instances to the group when demand increases.
* **Scale In**: Removes instances from the group when demand decreases to save costs.
* **Capacity Settings**:
    * **Minimum Capacity**: The minimum number of instances to keep running.
    * **Maximum Capacity**: The maximum number of instances allowed.
    * **Desired Capacity**: The target number of instances the group attempts to maintain.

### Scaling Policies:
* **Target Tracking**: Automatically adjusts capacity to maintain a specified metric (e.g., keep average CPU utilization at 50%).
* **Simple/Step Scaling**: Adds or removes instances based on CloudWatch alarms.

---