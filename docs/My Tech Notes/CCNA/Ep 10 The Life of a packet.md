---
title: Ep 10 The Life of a Packet
sidebar_label: Ep 10 The Life of a Packet
sidebar_position: 10
---

In this episode, we follow the journey of a packet as it travels across multiple routers and switches. This is a critical exercise to understand how **Layer 2 (Data Link)** and **Layer 3 (Network Layer)** addresses interact during transmission.

---

## 1. The Scenario
Consider a network where **PC1** (192.168.1.1) wants to send data to **PC4** (192.168.4.1). Because they are on different networks, the traffic must pass through several routers (R1, R2, and R4).


### Key Addresses:
* **PC1**: IP 192.168.1.1 | MAC 1111
* **PC4**: IP 192.168.4.1 | MAC 4444
* **R1 (Default Gateway)**: IP 192.168.1.254 | MAC aaaa

---

## 2. Stage 1: PC1 to the Default Gateway (R1)
Before PC1 can send the packet, it checks its routing table and realizes PC4 is on a remote network. It must send the packet to its **Default Gateway (R1)**.

1.  **ARP Process**: If PC1 doesn't know R1's MAC address, it sends an **ARP Request** (Broadcast).
2.  **ARP Reply**: R1 responds with its MAC address (`aaaa`) via a **Unicast** message.
3.  **Encapsulation**: PC1 creates a frame:
    * **Source IP**: 192.168.1.1 | **Dest IP**: 192.168.4.1
    * **Source MAC**: 1111 | **Dest MAC**: aaaa

---

## 3. Stage 2: Router to Router (R1 to R2)
When R1 receives the frame, it performs the following steps:

1.  **De-encapsulation**: R1 strips off the Layer 2 Ethernet header.
2.  **Routing Lookup**: R1 looks at the **Destination IP** (192.168.4.1) and finds the next hop (R2) in its routing table.
3.  **Re-encapsulation**: R1 creates a **new** Ethernet header for the next link:
    * **Source MAC**: bbbb (R1's exit interface)
    * **Dest MAC**: cccc (R2's receiving interface)
    * **Note**: The Source and Destination IP addresses **remain the same**.

---

## 4. Stage 3: The Intermediate Hop (R2 to R4)
The process repeats. R2 receives the frame, checks the IP, and realizes it needs to forward the packet to R4.

1.  **ARP (if needed)**: R2 sends an ARP request to find R4's MAC if it is not in the cache.
2.  **New Header**:
    * **Source MAC**: dddd
    * **Dest MAC**: eeee
    * **IP Packet**: Still 192.168.1.1 → 192.168.4.1.

---

## 5. Stage 4: Final Delivery (R4 to PC4)
R4 receives the packet and sees that the destination network (192.168.4.0/24) is **directly connected** to its interface.

1.  **Final ARP**: R4 sends an ARP request to find PC4's MAC address (`4444`).
2.  **Final Frame**:
    * **Source MAC**: fffe (R4's interface)
    * **Dest MAC**: 4444 (PC4)
3.  **Delivery**: SW4 receives the frame and switches it to the correct port based on the MAC table.

---

## 6. Key Observations

| Feature | Behavior During the Journey |
| :--- | :--- |
| **IP Addresses** | **Stay Constant.** The Source/Dest IP do not change from end-to-end. |
| **MAC Addresses** | **Change at Every Hop.** Each router strips the old L2 header and adds a new one. |
| **Switches** | **Forward/Learn.** They do not de-encapsulate the L3 packet; they only look at the L2 header. |

:::info The Return Path
When PC4 replies to PC1, the process is reversed. However, if the routers still have the MAC addresses in their **ARP Cache**, they do not need to send ARP requests again, making the return journey faster.
:::

---