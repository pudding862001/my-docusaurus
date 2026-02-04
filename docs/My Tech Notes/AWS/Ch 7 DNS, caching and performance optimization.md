---
title: Ch 7 DNS, Caching & Performance
sidebar_label: Ch 7 DNS & Performance
sidebar_position: 7
---

In this section, we cover how to route users to your application using **Route 53**, how to cache content globally with **CloudFront**, and how to optimize performance.

---

## 1. Amazon Route 53 (DNS)

**Amazon Route 53** is a highly available and scalable cloud Domain Name System (DNS) web service.

* **Records**: Define how to route traffic for a domain. Common types include:
    * **A Record**: Maps a hostname to an IPv4 address.
    * **CNAME**: Maps a hostname to another hostname (cannot be used for the root domain).
    * **Alias**: AWS specific. Maps a hostname to an AWS resource (e.g., Load Balancer, S3 bucket). Can be used for the root domain.

---

## 2. Routing Policies

Route 53 supports complex routing policies to direct traffic.

* **Simple Routing**: Route traffic to a single resource.
* **Weighted Routing**: Distribute traffic across multiple resources based on assigned weights (e.g., 80% to V1, 20% to V2).
* **Latency Routing**: Route traffic to the region that provides the lowest latency for the user.
* **Failover Routing**: Route to a primary resource unless it is unhealthy, then route to a secondary (DR) resource.
* **Geolocation Routing**: Route traffic based on the location of your users (e.g., users in France go to French servers).

---

## 3. Amazon CloudFront (CDN)

**Amazon CloudFront** is a Content Delivery Network (CDN) that speeds up the distribution of your static and dynamic web content.

* **Edge Locations**: A global network of data centers. Content is cached here to be closer to users.
* **Origin**: The source of the content (e.g., S3 Bucket, EC2 Instance, ELB).
* **S3 Origin**: Using CloudFront to front an S3 bucket improves read performance and reduces S3 request costs.

---

## 4. Performance Optimization

* **Global Accelerator**: Improves availability and performance of your applications with local or global users using the AWS global network. It provides two static IP addresses that act as a fixed entry point to your application.

---