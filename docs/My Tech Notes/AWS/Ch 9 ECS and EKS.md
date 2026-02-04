---
title: Ch 9 ECS and EKS
sidebar_label: Ch 9 ECS & EKS
sidebar_position: 9
---

In this section, we cover **Container Orchestration** on AWS, comparing the native **ECS** with the Kubernetes-based **EKS**, and exploring the different **Launch Types** (Fargate vs. EC2).

---

## 1. Container Orchestration Services

Orchestration services manage the deployment, placement, and lifecycle of containers.

* **Amazon ECS (Elastic Container Service)**:
    * **AWS Native**: Deeply integrated with AWS services (IAM, ALB, CloudWatch).
    * **Simplicity**: Easier to set up and manage, ideal for teams focused purely on the AWS ecosystem.
* **Amazon EKS (Elastic Kubernetes Service)**:
    * **Industry Standard**: Fully compatible with upstream Kubernetes.
    * **Hybrid/Multi-Cloud**: Ideal if you are migrating from on-premise K8s or want the flexibility to run on other clouds.
    * **Management**: AWS manages the **Control Plane** (Master Nodes), while you manage the **Worker Nodes**.

---

## 2. Launch Types

You can run containers on ECS or EKS using two different modes. This determines who manages the underlying infrastructure.

* **AWS Fargate (Serverless)**:
    * **No Ops**: You do not manage or patch EC2 instances. You just define the container requirements.
    * **Pricing**: Pay-as-you-go based on vCPU and Memory resources requested by the Task.
    * **Use Case**: Variable workloads, batch jobs, or when you want to minimize operational overhead.
* **EC2 Launch Type**:
    * **Full Control**: You provision and manage the EC2 instances that host your containers.
    * **Cost Optimization**: Suitable for steady, high-traffic workloads where you can leverage **Reserved Instances** or **Savings Plans**.
    * **Use Case**: Access to GPUs, specific OS configurations, or utilizing existing reserved capacity.

---

## 3. ECS Core Terms (vs. Kubernetes)

For those familiar with Kubernetes (CKA), here is a mapping of concepts:

| ECS Term | Kubernetes Equivalent | Description |
| :--- | :--- | :--- |
| **Task Definition** | Pod Spec / Deployment YAML | The blueprint defining the image, CPU/Memory, and ports. |
| **Task** | Pod | The running instance of a container (or group of containers). |
| **Service** | Deployment / ReplicaSet | Ensures the specified number of Tasks are running and manages load balancing. |

---