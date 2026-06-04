---
title: Ep 44 Wireless Architectures
sidebar_label: Ep 44 Wireless Architectures
sidebar_position: 44
---

In this episode, we delve into **Wireless Architectures**, covering the 802.11 frame format, the client association process, and the different deployment models for Access Points (APs) and Wireless LAN Controllers (WLCs).

---

## 1. 802.11 Frame Format

Unlike Ethernet frames, 802.11 frames must handle the complexities of wireless medium management. A single frame can contain up to four different MAC addresses.

* **Address Fields**:
    * **Destination Address (DA)**: The final recipient of the frame.
    * **Source Address (SA)**: The original sender of the frame.
    * **Receiver Address (RA)**: The immediate recipient (next hop) of the wireless frame.
    * **Transmitter Address (TA)**: The immediate sender of the wireless frame.
* **Control Fields**:
    * **Sequence Control**: Used for reassembling fragments and eliminating duplicates.
    * **QoS Control**: Prioritizes traffic based on service requirements.
    * **HT Control**: Introduced in 802.11n to support High Throughput operations.
* **FCS (Frame Check Sequence)**: Used to detect errors in the frame, similar to Ethernet.

---

## 2. 802.11 Association Process

Before a wireless client can send data, it must transition through three distinct connection states.

1. **Not Authenticated, Not Associated**: The initial state where the client is searching for a network.
2. **Authenticated, Not Associated**: The client has passed the 802.11 authentication but is not yet part of the BSS.
3. **Authenticated, Associated**: The final state where the client is fully connected and ready to transmit data.

**The Exchange**: Clients typically use **Probe Requests/Responses**, followed by **Authentication Requests/Responses**, and finally **Association Requests/Responses** to complete the process.

---

## 3. Autonomous vs. Lightweight APs

### Autonomous AP Architecture
* **Stand-alone Management**: Each AP is managed independently. All wireless functions (MAC management, encryption, and data forwarding) are handled locally by the AP.
* **Scalability**: Difficult to manage in large environments as every configuration change must be applied to each AP individually.

### Lightweight AP (LAP) & WLC Architecture
* **Split-MAC Architecture**: Wireless functions are split between the AP and a centralized **Wireless LAN Controller (WLC)**.
    * **AP Handles**: Real-time tasks like beaconing, frame exchange, and encryption.
    * **WLC Handles**: Management tasks like authentication, roaming coordination, and RF management.
* **Centralized Management**: Configuration is defined on the WLC and automatically pushed to all connected LAPs.

---

## 4. CAPWAP Tunnels

LAPs communicate with the WLC using the **CAPWAP (Control and Provisioning of Wireless Access Points)** protocol. It creates two distinct UDP tunnels:

* **Control Tunnel (UDP 5246)**: Used for management traffic and pushing configurations to the AP. This traffic is typically encrypted.
* **Data Tunnel (UDP 5247)**: Encapsulates user data traffic from the AP to the WLC. This allows user traffic to be tunneled to a central point before entering the wired network.

---

## 5. WLC Deployment Models

Cisco offers several ways to deploy WLCs depending on the size and requirements of the network.

| Model | Description | Capacity |
| :--- | :--- | :--- |
| **Unified / Centralized** | A physical hardware appliance located in a central data center. | Up to **6000 APs**. |
| **Cloud-based** | The WLC runs as a Virtual Machine (VM) in a private or public cloud. | Up to **3000 APs**. |
| **Embedded** | The WLC software is integrated directly into a network switch. | Up to **200 APs**. |
| **Mobility Express** | The WLC function runs on one of the APs within the site. | Up to **100 APs**. |

---