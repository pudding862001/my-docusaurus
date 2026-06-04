---
title: Ep 6 IPv4 Addressing Fundamentals
sidebar_label: Ep 6 IPv4 Fundamentals
sidebar_position: 6
---

In this episode, we move up to **Layer 3 (Network Layer)**. While Layer 2 handles communication within a LAN, Layer 3 is responsible for connectivity between different networks, logical addressing, and path selection (routing).

---

## 1. The IPv4 Header

An IPv4 header is 32 bits wide and contains essential information for routing packets across the internet.


### Key Fields:
* **Version**: Always 4 for IPv4.
* **Time To Live (TTL)**: A counter that prevents packets from looping forever. Each router decrements this value by 1.
* **Protocol**: Indicates the next level protocol (e.g., TCP or UDP).
* **Source & Destination IP Addresses**: 32-bit addresses identifying the sender and receiver.

---

## 2. IP Address Structure

An IPv4 address consists of **32 bits**, divided into four **octets** (8 bits each). We usually write them in **dotted-decimal notation** (e.g., `192.168.1.1`).


Every IP address is split into two parts:
1.  **Network Portion**: Identifies the specific network.
2.  **Host Portion**: Identifies a specific device on that network.

---

## 3. Classful Addressing

Historically, IP addresses were divided into five classes based on their first octet.

| Class | First Octet Range | Prefix | Purpose |
| :--- | :--- | :--- | :--- |
| **A** | 1 – 126 | /8 | Very large networks |
| **B** | 128 – 191 | /16 | Medium to large networks |
| **C** | 192 – 223 | /24 | Small networks |
| **D** | 224 – 239 | N/A | Multicast |
| **E** | 240 – 255 | N/A | Experimental / Reserved |

:::important Loopback Address
The range **127.0.0.0 to 127.255.255.5** is reserved for loopback testing. It is used to test the network stack on the local device itself.
:::

---

## 4. Calculating Usable Hosts

To find out how many devices can fit on a network, we use the formula:  
$$2^n - 2$$  
*(Where $n$ is the number of bits in the Host portion)*

### Why subtract 2?
* **Network Address**: The address where the host portion is all **0s**. It identifies the network and **cannot** be assigned to a host.
* **Broadcast Address**: The address where the host portion is all **1s**. It is used to send data to everyone on the network.


### Maximum Hosts by Class:
* **Class A (/8)**: $2^{24} - 2 = 16,777,214$ hosts.
* **Class B (/16)**: $2^{16} - 2 = 65,534$ hosts.
* **Class C (/24)**: $2^{8} - 2 = 254$ hosts.

---

## 5. Practical Examples

Here is how you find the usable range for different classes:

### Class C Example: `209.211.3.202/24`
* **Network Address**: `209.211.3.0`
* **Broadcast Address**: `209.211.3.255`
* **First Usable**: `209.211.3.1`
* **Last Usable**: `209.211.3.254`

### Class B Example: `129.221.23.13/16`
* **Network Address**: `12