---
title: Ep 11 Subnetting and VLSM
sidebar_label: Ep 11 Subnetting & VLSM
sidebar_position: 11
---

In this episode, we address the inefficiencies of the "Classful" network system and explore how **Subnetting** and **VLSM** allow us to utilize IP addresses more efficiently.

---

## 1. The Need for Subnetting

Originally, the IANA assigned IP addresses based on fixed classes (A, B, and C). This "Classful" system led to significant waste:
* **Point-to-Point Inefficiency**: Using a Class C network (/24) for a connection between two routers wastes 252 addresses, as only 2 are needed.
* **Large Company Waste**: A company needing 5,000 addresses would be assigned a Class B network (/16) with 65,534 usable addresses, wasting over 60,000 IPs.

In 1993, the IETF introduced **CIDR (Classless Inter-Domain Routing)** to replace fixed classes, allowing networks to be split into smaller, more efficient **Subnetworks (Subnets)**.

---

## 2. Subnetting Mathematics

To divide a network, we "borrow" bits from the host portion and give them to the network portion.

### The Key Formulas:
* **Number of Subnets** = $2^x $ (where $x$ is the number of borrowed bits).
* **Number of Usable Hosts** = $2^n - 2$ (where $n$ is the number of remaining host bits).
    * *Note: We subtract 2 for the Network Address and the Broadcast Address.*


---

## 3. Equal-Sized Subnetting Example

If you need to divide `192.168.1.0/24` into **4 subnets** to accommodate 45 hosts each:
1.  **Borrow Bits**: To get at least 4 subnets, we need $2^2 = 4$. So, we borrow 2 bits.
2.  **New Prefix**: The new prefix is `/24 + 2 = /26`.
3.  **Calculate Hosts**: With 6 bits left for hosts ($32 - 26 = 6$), we have $2^6 - 2 = 62$ usable addresses per subnet, which fits the 45-host requirement perfectly.

**The resulting subnets would be:**
* **Subnet 1**: 192.168.1.0/26 (Range: .0 - .63)
* **Subnet 2**: 192.168.1.64/26 (Range: .64 - .127)
* **Subnet 3**: 192.168.1.128/26 (Range: .128 - .191)
* **Subnet 4**: 192.168.1.192/26 (Range: .192 - .255)

---

## 4. VLSM (Variable-Length Subnet Masking)

While equal-sized subnetting is better than classful addressing, **VLSM** provides the ultimate efficiency by allowing subnets of different sizes within the same network block.

### VLSM Strategy:
1.  **Assign the largest subnet first** (the one requiring the most hosts).
2.  **Assign the next largest subnet** from the remaining address space.
3.  **Repeat** until all subnets are assigned.

### Practical Scenario:
Given `192.168.1.0/24`, assign IPs for:
* Tokyo LAN A: 110 hosts (Needs `/25`, 126 hosts)
* Toronto LAN B: 45 hosts (Needs `/26`, 62 hosts)
* Toronto LAN A: 29 hosts (Needs `/27`, 30 hosts)
* Tokyo LAN B: 8 hosts (Needs `/28`, 14 hosts)
* P2P Link: 2 hosts (Needs `/30`, 2 hosts)


---

## 5. Summary Reference Tables

### Class C Subnetting Table (/24 base)
| Prefix | Subnets | Usable Hosts | Use Case |
| :--- | :--- | :--- | :--- |
| **/25** | 2 | 126 | Large LANs |
| **/26** | 4 | 62 | Medium LANs |
| **/27** | 8 | 30 | Small LANs |
| **/30** | 64 | 2 | Point-to-Point Links |
| **/31** | 128 | 0 (Special) | Modern P2P (No Net/BC needed) |
| **/32** | 256 | 0 (1 Host) | Loopbacks / Static Routes to Specific Hosts |

### Class B Subnetting Table (/16 base)
| Prefix | Subnets | Usable Hosts |
| :--- | :--- | :--- |
| **/17** | 2 | 32,766 |
| **/20** | 16 | 4,094 |
| **/24** | 256 | 254 |

---