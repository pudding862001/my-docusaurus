---
title: Ep 20 First Hop Redundancy Protocol (FHRP)
sidebar_label: Ep 20 FHRP
sidebar_position: 20
---

In this episode, we explore **First Hop Redundancy Protocol (FHRP)**. In a typical network, end hosts are configured with a single default gateway IP address. If that gateway (router) fails, the hosts lose all connectivity to outside networks. [cite_start]FHRP provides a way to group multiple physical routers into a single logical "virtual" router to ensure high availability.

---

## 1. The Need for FHRP

[cite_start]Standard host configurations only support one default gateway. [cite_start]Without FHRP, if the primary router fails, an administrator would have to manually change the gateway IP on every host, which is not scalable. [cite_start]FHRP automates this failover process.

### Key FHRP Protocols:
* [cite_start]**HSRP (Hot Standby Router Protocol)**: Cisco proprietary protocol.
* [cite_start]**VRRP (Virtual Router Redundancy Protocol)**: An open standard protocol similar to HSRP.
* [cite_start]**GLBP (Gateway Load Balancing Protocol)**: Cisco proprietary protocol that supports active load balancing among multiple routers.



---

## 2. HSRP (Hot Standby Router Protocol)

HSRP is the most common FHRP in Cisco environments. [cite_start]It allows two or more routers to work together to present the appearance of a single virtual router to the hosts on the LAN.

### HSRP Roles:
* [cite_start]**Active Router**: The router currently responsible for forwarding traffic sent to the virtual IP.
* [cite_start]**Standby Router**: The backup router that monitors the active router's status.
* [cite_start]**Virtual Router**: A logical entity with its own **Virtual IP (VIP)** and **Virtual MAC Address**.

### Virtual MAC Address Format:
[cite_start]For HSRP version 1, the virtual MAC address follows the format: **0000.0c07.acXX** (where **XX** is the HSRP group number in hexadecimal).

---

## 3. HSRP Election and States

[cite_start]Routers in an HSRP group exchange "Hello" packets (every 3 seconds by default) to elect the roles.

* [cite_start]**Priority**: The router with the highest HSRP priority (Default: 100) becomes the Active router. [cite_start]If priorities are tied, the highest IP address wins.
* [cite_start]**Preemption**: By default, if a router with a higher priority joins an existing group, it will *not* take over the Active role unless **preemption** is explicitly configured.

### HSRP States:
1. [cite_start]**Initial**: The starting state.
2. [cite_start]**Listen**: The router knows the virtual IP but is not yet Active or Standby.
3. [cite_start]**Speak**: The router sends periodic Hello messages and participates in the election.
4. [cite_start]**Standby**: The router is a candidate to become the next Active router.
5. [cite_start]**Active**: The router is currently forwarding traffic.



---

## 4. Object Tracking

[cite_start]HSRP can monitor specific interfaces (Object Tracking). [cite_start]If a tracked interface (such as a WAN link) goes down, the HSRP priority of the router is automatically decreased, allowing the Standby router to take over the Active role and maintain outbound connectivity.

---

## 5. Configuration and Verification

### Basic HSRP Configuration (IPv4)

```bash
# Enter the interface connected to the LAN
R1(config)# interface g0/0

# Assign the virtual IP address for the group
R1(config-if)# standby 1 ip 192.168.1.254

# Set the priority (Optional, higher wins)
R1(config-if)# standby 1 priority 110

# Enable preemption to allow the router to retake the active role
R1(config-if)# standby 1 preempt

# Configure object tracking for an interface
R1(config-if)# standby 1 track g0/1 20
```

### Verification Commands

```bash
# Detailed view of HSRP status, virtual MAC, and timers
show standby

# Quick summary of HSRP roles and virtual IP
show standby brief

# View status of tracked objects
show track
```

---