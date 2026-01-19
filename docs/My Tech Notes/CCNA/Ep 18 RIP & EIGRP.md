---
title: Ep 18 RIP and EIGRP
sidebar_label: Ep 18 RIP & EIGRP
sidebar_position: 18
---

In this episode, we dive into two classic Dynamic Routing Protocols: **Routing Information Protocol (RIP)** and **Enhanced Interior Gateway Routing Protocol (EIGRP)**. While RIP is an older distance-vector protocol, EIGRP is a powerful, advanced distance-vector protocol developed by Cisco.

---

## 1. RIP (Routing Information Protocol)

RIP is one of the oldest distance-vector routing protocols. It is simple to configure but has limitations in scalability and convergence speed.

### Key Characteristics of RIP:
* **Distance-Vector**: Routers share their entire routing table with neighbors at regular intervals (every 30 seconds).
* **Metric**: Uses **Hop Count** (the number of routers to the destination).
    * Maximum hops: 15.
    * A hop count of 16 is considered **unreachable**.
* **Administrative Distance (AD)**: 120.
* **Versions**:
    * **RIPv1**: Classful (does not send subnet mask), uses broadcast.
    * **RIPv2**: Classless (supports VLSM/CIDR), uses multicast (224.0.0.9).


---

## 2. EIGRP (Enhanced Interior Gateway Routing Protocol)

EIGRP is often called an "Advanced Distance-Vector" or "Hybrid" protocol because it combines the best features of distance-vector and link-state protocols.

### Key Characteristics of EIGRP:
* **Fast Convergence**: Uses the **DUAL (Diffusing Update Algorithm)** to find loop-free backup paths (Feasible Successors) immediately.
* **Metric**: A composite value based primarily on **Bandwidth** and **Delay** (by default).
* **Administrative Distance (AD)**: 90 (Internal), 170 (External).
* **Partial Updates**: Only sends updates when a topology change occurs, rather than periodic full table updates.
* **Neighbor Adjacency**: Uses "Hello" packets to establish and maintain relationships with neighboring routers.


---

## 3. RIP vs. EIGRP Comparison

| Feature | RIPv2 | EIGRP |
| :--- | :--- | :--- |
| **Protocol Type** | Distance-Vector | Advanced Distance-Vector |
| **Standard** | Open Standard | Cisco Proprietary (Mostly) |
| **Metric** | Hop Count | Bandwidth & Delay |
| **Max Metric** | 15 Hops | 2^32 (64-bit) |
| **AD Value** | 120 | 90 |
| **Convergence** | Slow | Very Fast |

---

## 4. Configuration and Verification

### Basic RIPv2 Configuration

```bash
# Enter RIP configuration mode
R1(config)# router rip

# Enable version 2 for classless routing
R1(config-router)# version 2

# Disable auto-summarization to support VLSM
R1(config-router)# no auto-summary

# Advertise connected networks
R1(config-router)# network 192.168.1.0
R1(config-router)# network 10.0.0.0
```

### Basic EIGRP Configuration

```bash
# Enable EIGRP with an Autonomous System (AS) number
# The AS number must match on all routers in the group
R1(config)# router eigrp 100

# Advertise networks (Wildcard masks can be used for precision)
R1(config-router)# network 192.168.1.0 0.0.0.255
R1(config-router)# network 10.0.0.0 0.255.255.255

# Disable auto-summarization
R1(config-router)# no auto-summary
```

### Verification Commands

```bash
# Check the routing table for 'R' (RIP) or 'D' (EIGRP) routes
show ip route

# View the EIGRP neighbor table
show ip eigrp neighbors

# View the EIGRP topology table (Successors and Feasible Successors)
show ip eigrp topology

# Verify routing protocol parameters and timers
show ip protocols

# Display RIP database entries
show ip rip database
```

---