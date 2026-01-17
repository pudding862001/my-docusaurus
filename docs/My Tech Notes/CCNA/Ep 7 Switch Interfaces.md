---
title: Ep 7 Switch Interface Management & Duplexing
sidebar_label: Ep 7 Interface Management
sidebar_position: 7
---

In this episode, we focus on the practical management of switch interfaces. We will learn how to verify interface status, understand the difference between Full and Half Duplex, and troubleshoot common interface errors.

---

## 1. Interface Status Verification

To manage a network effectively, you must be able to verify whether interfaces are physically and logically active.

### Key CLI Commands:
* `show ip interface brief` (or `sh ip int br`): Provides a quick overview of all interfaces, their IP addresses (if any), and their current status.
* `show interfaces status`: Displays the state, VLAN assignment, duplex settings, and speed for each port.

### Default States:
* **Routers**: Interfaces have the `shutdown` command applied by default, meaning they are **administratively down** until you manually enable them.
* **Switches**: Interfaces do **not** have the `shutdown` command applied by default. They will be in an **up/up** state as long as they are connected to another active device.

| Status | Meaning |
| :--- | :--- |
| **connected** | The port is active and connected to another device. |
| **notconnect** | The port is active but no device is detected on the other end. |

---

## 2. Full-Duplex vs. Half-Duplex


The duplex setting determines how data flows through a cable.

* **Half-Duplex**: A device cannot send and receive data at the same time. If it is receiving, it must wait before sending. Traditional **Hubs** operate in half-duplex mode.
* **Full-Duplex**: A device can send and receive data simultaneously. Modern **Switches** operate in full-duplex mode.

---

## 3. The CSMA/CD Mechanism

In half-duplex environments, collisions can occur if two devices send data at the same time. To manage this, we use **CSMA/CD (Carrier Sense Multiple Access with Collision Detect)**.

### How it works:
1. **Listen**: Before sending frames, a device "listens" to the network to ensure no other device is transmitting.
2. **Jamming**: If a collision occurs, the device sends a **jamming signal** to inform all other devices.
3. **Backoff**: Each device waits for a **random period of time** before attempting to retransmit.

---

## 4. Autonegotiation and Mismatches

Modern interfaces use **Autonegotiation** to automatically agree on the best speed and duplex settings with their neighbor.

### What happens if Autonegotiation fails?
If a switch cannot sense the speed of its neighbor, it defaults to the **slowest supported speed** (e.g., **10 Mbps**). For duplex settings:
* If speed is **1