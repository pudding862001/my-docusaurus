---
title: Ep 8 IPv4 Header In-Depth
sidebar_label: Ep 8 IPv4 Header
sidebar_position: 8
---

In this episode, we take a deep dive into the **IPv4 Header**, which is a critical component of the **Network Layer (Layer 3)**. The header contains all the necessary information for routers to handle and forward packets across the internet.

---

## 1. IPv4 Header Overview

The IPv4 header size is not fixed; it varies depending on whether optional fields are present.

* **Minimum Length**: 20 Bytes (when IHL = 5).
* **Maximum Length**: 60 Bytes (when IHL = 15).

---

## 2. Header Fields Breakdown

### Basic Information
* **Version (4 bits)**: Identifies the IP version. For IPv4, the value is `4` (Binary `0100`).
* **Internet Header Length (IHL) (4 bits)**: Specifies the length of the header in 4-byte increments. The minimum is 5 (20 bytes) and the maximum is 15 (60 bytes).

### Quality of Service (QoS) & Congestion
* **DSCP (6 bits)**: Used for **Quality of Service (QoS)** to prioritize delay-sensitive data like voice or video streams.
* **ECN (2 bits)**: Provides end-to-end notification of network congestion without dropping packets.

### Transmission & Fragmentation
* **Total Length (16 bits)**: Indicates the total size of the packet (Header + Layer 4 Segment). The maximum value is 65,535 bytes.
* **Identification (16 bits)**: Used to identify fragments of a single packet. All fragments of the same original packet will share this ID.
* **Flags (3 bits)**: Controls and identifies fragments.
    * **Bit 1 (DF - Don't Fragment)**: If set to 1, the packet cannot be fragmented.
    * **Bit 2 (MF - More Fragments)**: Set to 1 if more fragments follow; 0 for the last fragment.
* **Fragment Offset (13 bits)**: Indicates the position of a fragment within the original packet, allowing the receiver to reassemble them even if they arrive out of order.

### Routing & Protocol
* **Time To Live (TTL) (8 bits)**: Prevents infinite loops. Each router the packet crosses (a "hop") decreases the TTL by 1. If it reaches 0, the packet is dropped.
* **Protocol (8 bits)**: Indicates the type of encapsulated Layer 4 PDU.
    * **1**: ICMP
    * **6**: TCP
    * **17**: UDP
    * **89**: OSPF

### Safety & Addressing
* **Header Checksum (16 bits)**: Used to check for errors in the header. If the checksum fails, the router drops the packet.
* **Source/Destination IP Address (32 bits each)**: The logical addresses of the sender and receiver.
* **Options**: Rarely used. If IHL is greater than 5, options are present.

---

## 3. Practical Example: Fragmentation & MTU

Standard Ethernet has an **MTU (Maximum Transmission Unit)** of 1500 bytes. If a packet exceeds this size, it must be fragmented unless the **DF (Don't Fragment)** bit is set.

:::danger Transmission Failure
If you send a packet larger than the MTU (e.g., `ping size 10000`) and set the **DF-bit**, the transmission will fail because the packet is too large to be sent and fragmentation is not allowed.
:::