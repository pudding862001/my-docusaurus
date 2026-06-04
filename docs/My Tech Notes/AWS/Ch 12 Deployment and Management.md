---
title: Ch 12 Deployment and Management
sidebar_label: Ch 12 Deployment
sidebar_position: 12
---

In this section, we focus on **Infrastructure as Code (IaC)**, automated deployment strategies, and tools for operational management and compliance.

---

## 1. AWS CloudFormation (IaC)

**AWS CloudFormation** allows you to model and provision AWS resources using code (YAML or JSON templates), treating infrastructure just like application code.

* **Templates**: The "blueprint" file describing the resources.
* **Stacks**: The collection of resources created from a template.
* **Key Features**:
    * **Drift Detection**: Detects if resources have been manually modified outside of CloudFormation.
    * **StackSets**: Enables you to create, update, or delete stacks across multiple accounts and regions with a single operation.
    * **DeletionPolicy**: Controls whether to retain or delete a resource (like an S3 bucket or RDS DB) when the stack is deleted.

---

## 2. AWS Elastic Beanstalk (PaaS)

**AWS Elastic Beanstalk** is an easy-to-use service for deploying and scaling web applications. It abstracts away the underlying infrastructure details.

* **Platform as a Service**: You upload your code, and Elastic Beanstalk automatically handles the deployment (capacity provisioning, load balancing, auto-scaling, and health monitoring).
* **Deployment Strategies**:
    * **All at once**: Fastest but incurs downtime.
    * **Rolling**: Updates a few instances at a time; capacity is reduced during deployment.
    * **Blue/Green**: Deploys the new version to a separate environment, then swaps the URL (via Route 53). Ensures zero downtime and easy rollback.

---

## 3. AWS Systems Manager (SSM)

**AWS Systems Manager** gives you visibility and control of your infrastructure.

* **Session Manager**: Allows you to manage EC2 instances through an interactive one-click browser-based shell without opening inbound ports (like SSH port 22) or managing bastion hosts.
* **Parameter Store**: Provides secure, hierarchical storage for configuration data management and secrets management (e.g., database connection strings, passwords).
* **Run Command**: Automates common administrative tasks (like installing patches) across large groups of instances.

---

## 4. AWS Config

**AWS Config** is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources.

* **Configuration Recorder**: Records and stores configuration changes over time.
* **Compliance**: You can set rules (e.g., "All S3 buckets must be private") and AWS Config will flag any non-compliant resources.

---