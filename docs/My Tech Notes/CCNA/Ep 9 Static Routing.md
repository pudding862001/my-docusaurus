---
title: Ep 9 Static Routing
sidebar_label: Ep 9 Static Routing
sidebar_position: 9
---

In this episode, we transition from local switching to **Routing**. While switches manage traffic within a LAN, routers are responsible for moving data across a **WAN (Wide Area Network)**—a network that extends over a large geographical area.

---

## 1. Understanding the Routing Table

When a router receives a packet, it looks at its **Routing Table** to decide where to send it. You can view this table using the command: `show ip route`.

### Common Route Codes:
* **C (Connected)**: Directly connected networks. These are automatically added when an interface is configured with an IP and enabled.
* **L (Local)**: The specific IP address assigned to the router's interface (shown with a `/32` mask).
* **S (Static)**: Routes that are manually configured by a network administrator.

---

## 2. Configuring Static Routes

A static route tells the router exactly which path to take to reach a specific destination network.

### Command Syntax:
```bash
# Using Next-Hop IP
ip route [destination-network] [mask] [next-hop-address]

# Using Exit Interface
ip route [destination-network] [mask] [exit-interface]
```


### Key Concepts of Static Routing

* **Next-hop**: The IP address of the next router in the path.
* **Exit-interface**: The local interface used to send the box out.

---

### 3. The Default Route (Gateway of Last Resort)

* **Default Route** is a special type of static route that matches **ALL** possible destinations. It is used only when no more specific match is found in the routing table.

* **Syntax**: `ip route 0.0.0.0 0.0.0.0 [next-hop]`
* **Characteristics**: It is the "least specific" route possible (prefix length of `/0`).

---
### 4. The Default Route (Gateway of Last Resort)

A **Default Route** matches every possible destination. It acts as a "catch-all" if no specific route exists in the routing table.

* **Command**: `ip route 0.0.0.0 0.0.0.0 [next-hop/interface]`
* **Role**: It is the **least specific** route (prefix length `/0`). Routers use it only when all other route lookups fail.
* **PC Gateway**: On a Cisco router acting as a host, this is used to configure the "Gateway of Last Resort."

---

### 5. Troubleshooting: Two-Way Reachability

A common issue in routing is **One-Way Reachability**, where a packet reaches the destination, but the reply cannot return to the source.

#### The Problem:
If PC1 pings PC4, R1 and R2 might have routes to reach PC4. However, if R4 (the destination router) does not have a return route to PC1's network (`192.168.1.0/24`), it will drop the reply.

#### The Solution:
You must configure return paths on all intermediate routers to ensure **Two-Way Reachability**:

* **On R4**: `ip route 192.168.1.0 255.255.255.0 192.168.24.2` (Pointing back toward R2)
* **On R2**: `ip route 192.168.1.0 255.255.255.0 192.168.12.1` (Pointing back toward R1)

:::success Ping Success
Once two-way reachability is established, the success rate will reach **100%**. Note: The first ping might still fail (showing `.` instead of `!`) due to the time required for **ARP** processing.
:::

---

### 6. Longest Prefix Match Rule

When multiple routes in the routing table match a destination IP, the router follows the **Longest Prefix Match** rule.

* **The Rule**: The router chooses the "most specific" route, which is the one with the longest prefix length.
* **Priority Example**:
    1.  `/32` (Host Route) - **Most Specific**
    2.  `/24` (Subnet Route)
    3.  `/16` (Summary Route)
    4.  `/8` (Classful Route)
    5.  `/0` (Default Route) - **Least Specific**