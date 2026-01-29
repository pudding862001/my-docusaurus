---
title: Ep 50 Software-Defined Networking (SDN)
sidebar_label: Ep 50 SDN
sidebar_position: 50
---

In this episode, we dive into specific SDN solutions, focusing on Cisco's **SD-Access** and the role of the **DNA Center** in modern network management.

---

## 1. SD-Access Architecture

Cisco's SD-Access (Software-Defined Access) solution uses a centralized controller to manage the network fabric.

### The Fabric (Underlay + Overlay)
* **Underlay**: The physical network of devices and cables.
* **Overlay**: A virtual network built on top of the physical underlay, typically using **VXLAN** tunnels to encapsulate traffic.

### Switch Roles in SD-Access
1. **Edge Node**: Connects directly to end hosts (PCs, printers).
2. **Border Node**: Connects the SDA domain to outside networks (Internet, WAN).
3. **Control Node**: Manages the central database of host locations using the **LISP** (Locator ID Separation Protocol).

---

## 2. Cisco DNA Center

The DNA Center is the centralized SDN controller at the heart of the SD-Access solution.

* **Main Roles**:
    * **SDN Controller**: Manages the SDA fabric.
    * **Network Manager**: Acts as a management platform for traditional (non-SDA) networks.
* **Intent-Based Networking (IBN)**: Allows engineers to specify their "intent" (e.g., "Guest traffic cannot access HR servers"), and the DNA Center automatically converts that intent into specific configurations for all devices.

---

## 3. Traditional Management vs. DNA Center

| Feature | Traditional Management | DNA Center |
| :--- | :--- | :--- |
| **Method** | Devices configured one-by-one via SSH. | Centrally managed via GUI or REST APIs. |
| **Policy** | Managed per device. | Centrally defined and pushed to all devices. |
| **Speed** | Slow due to manual labor. | Rapid deployment through automation. |
| **Reliability** | Prone to human error. | Highly consistent and error-free. |

---

## 4. Key Protocols (LISP & VXLAN)

* **LISP (Control Plane)**: Instead of every switch knowing every route, they ask the **Control Node** for the location of a destination host.
* **VXLAN (Data Plane)**: Encapsulates Layer 2 Ethernet frames into Layer 3 UDP packets, allowing Layer 2 networks to stretch across Layer 3 boundaries.

---