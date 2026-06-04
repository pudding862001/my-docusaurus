---
title: Ep 17 Dynamic Routing
sidebar_label: Ep 17 Dynamic Routing
sidebar_position: 17
---

[cite_start]In this episode, we explore **Dynamic Routing**, a method where routers automatically exchange routing information to build and maintain their routing tables[cite: 1]. [cite_start]Compared to static routing, dynamic routing is more scalable and can automatically adapt to changes in the network topology[cite: 1].

---

## 1. Static vs. Dynamic Routing

[cite_start]Routing can be broadly categorized into two types based on how the routing table is populated[cite: 1]:

* [cite_start]**Static Routing**: Routes are manually configured by a network administrator[cite: 1]. [cite_start]While it provides full control and uses fewer resources, it is difficult to manage in large or frequently changing networks[cite: 1].
* [cite_start]**Dynamic Routing**: Routers use routing protocols to share information about network reachability with each other[cite: 1]. [cite_start]It allows routers to automatically discover new networks and find alternative paths if a link fails[cite: 1].

---

## 2. Autonomous Systems and Protocol Categories

[cite_start]A collection of networks under a single administrative control is known as an **Autonomous System (AS)**[cite: 1]. [cite_start]Routing protocols are categorized based on whether they operate within or between these systems[cite: 1]:

* [cite_start]**Interior Gateway Protocols (IGP)**: Used for routing within a single Autonomous System[cite: 1]. [cite_start]Examples include OSPF, EIGRP, and RIP[cite: 1].
* [cite_start]**Exterior Gateway Protocols (EGP)**: Used to exchange routing information between different Autonomous Systems[cite: 1]. [cite_start]**BGP (Border Gateway Protocol)** is the standard EGP used on the internet today[cite: 1].

[Image of Autonomous Systems and the relationship between IGP and EGP]

---

## 3. IGP Algorithm Types

[cite_start]IGPs are further classified based on the algorithm they use to determine the best path[cite: 1]:

### Distance Vector Protocols
* [cite_start]**Concept**: Often described as "routing by rumor" because routers only know the distance and direction to a destination based on information from neighbors[cite: 1].
* [cite_start]**Examples**: **RIP** (Routing Information Protocol) and **EIGRP** (Enhanced Interior Gateway Routing Protocol)[cite: 1].

### Link State Protocols
* [cite_start]**Concept**: Every router possesses a complete "map" or topology of the entire network area[cite: 1]. [cite_start]Each router independently calculates the best path to every destination[cite: 1].
* [cite_start]**Examples**: **OSPF** (Open Shortest Path First) and **IS-IS** (Intermediate System to Intermediate System)[cite: 1].

---

## 4. Administrative Distance (AD)

[cite_start]When a router learns about the same destination from multiple sources, it uses **Administrative Distance (AD)** to determine which source is most reliable[cite: 1]. [cite_start]A **lower AD value** indicates a more preferred and trustworthy source[cite: 1].

### Common AD Values
| Route Source | Default AD Value |
| :--- | :--- |
| **Connected Interface** | [cite_start]0 [cite: 1] |
| **Static Route** | [cite_start]1 [cite: 1] |
| **EIGRP** | [cite_start]90 [cite: 1] |
| **OSPF** | [cite_start]110 [cite: 1] |
| **RIP** | [cite_start]120 [cite: 1] |

[Image of a router choosing between OSPF and RIP based on Administrative Distance]

---

## 5. Metrics

[cite_start]If multiple paths to the same destination are learned via the **same** routing protocol, the router uses a **Metric** to find the best path[cite: 1]. [cite_start]Each protocol uses a different calculation for its metric[cite: 1]:

* [cite_start]**RIP Metric**: Uses **Hop Count** (the number of routers between the source and destination)[cite: 1].
* [cite_start]**OSPF Metric**: Uses **Cost**, which is inversely proportional to the bandwidth of the links[cite: 1].
* [cite_start]**EIGRP Metric**: Uses a complex calculation (K-values) involving **Bandwidth and Delay**[cite: 1].

---

## 6. Verification Commands

```bash
# View the routing table and see the source of each route
show ip route

# Check the active routing protocols and their parameters
show ip protocols

# Verify the details of a specific route, including its AD and metric
show ip route [destination_network]
```

---