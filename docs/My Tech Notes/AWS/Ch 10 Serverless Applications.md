---
title: Ch 10 Serverless Applications
sidebar_label: Ch 10 Serverless
sidebar_position: 10
---

In this section, we explore **Serverless Compute** with Lambda, **API Management** with API Gateway, and **Application Integration** using messaging services like SQS and SNS.

---

## 1. AWS Lambda (Serverless Compute)

**AWS Lambda** allows you to run code without provisioning or managing servers. You pay only for the compute time you consume.

* **Key Characteristics**:
    * **Event-Driven**: Functions are triggered by events (e.g., S3 upload, API Gateway request).
    * **Scaling**: Scales out automatically; if 10,000 requests come in, AWS creates 10,000 concurrent function instances.
    * **Configuration**: You allocate **Memory** (128MB - 10GB); **CPU** power scales proportionally with memory.
* **Limitations**:
    * **Timeout**: Maximum execution time is **15 minutes** (900 seconds).
    * **VPC Access**: By default, Lambda cannot access private VPC resources (like RDS). To enable this, you must provide Subnet IDs and Security Groups (Lambda creates an ENI).
* **Versioning**:
    * **$LATEST**: The mutable draft version.
    * **Versions**: Immutable snapshots of code.
    * **Aliases**: Pointers (e.g., "Prod", "Dev") used for **Blue/Green deployment** or traffic shifting.

---

## 2. Amazon API Gateway

**Amazon API Gateway** acts as the "front door" for applications to access data, business logic, or functionality from your backend services.

* **Features**: Handles authentication, traffic throttling, routing, and API versioning.

---

## 3. Application Integration (Messaging)

Decoupling application components ensures that if one part fails, the whole system doesn't crash.

### Amazon SQS (Simple Queue Service)
A message queue service for decoupling producers and consumers (Pull-based).
* **Standard Queue**: Unlimited throughput, best-effort ordering, at-least-once delivery.
* **FIFO Queue**: Exactly-once processing, strict ordering, limited throughput (300/s or 3000/s with batching).
* **Visibility Timeout**: Hides a message from other consumers while it is being processed.
* **Dead Letter Queue (DLQ)**: Stores messages that failed to process multiple times for debugging.

### Amazon SNS (Simple Notification Service)
A Pub/Sub messaging service (Push-based).
* **Fan-out Pattern**: A single message published to an SNS topic is pushed to multiple subscribers (e.g., SQS queues, Lambda functions, Email) simultaneously.

### Amazon MQ
A managed broker service for **Apache ActiveMQ** and **RabbitMQ**.
* **Use Case**: Use only when migrating existing applications that rely on standard protocols like MQTT or AMQP. For new cloud-native apps, prefer SQS/SNS.

---

## 4. Workflow Orchestration

* **AWS Step Functions**: A serverless function orchestrator that lets you coordinate multiple AWS services into serverless workflows.
    * **State Machine**: Visualizes the workflow. Ideal for long-running processes or complex logic (e.g., if-then-else).

---