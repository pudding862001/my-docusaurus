---
title: CCNA Networking Fundamentals
sidebar_label: CCNA Basics
sidebar_position: 1
hide_title: true
---

## CCNA Networking Fundamentals

Cisco Certified Network Associate (CCNA) covers a broad range of networking foundations. As a Staff Engineer, understanding the underlying network architecture is crucial for troubleshooting distributed systems and cloud infrastructure.

### The OSI Model (Open Systems Interconnection)

The OSI model is a conceptual framework used to understand network interactions in seven distinct layers:

* **Layer 7 - Application:** Interface for end-user processes (HTTP, FTP, DNS).
* **Layer 6 - Presentation:** Data representation and encryption (SSL/TLS, JPEG).
* **Layer 5 - Session:** Inter-host communication and session management.
* **Layer 4 - Transport:** End-to-end connections and reliability (TCP, UDP).
* **Layer 3 - Network:** Path determination and logical addressing (IP, ICMP, Routers).
* **Layer 2 - Data Link:** Physical addressing and MAC access (Ethernet, Switches).
* **Layer 1 - Physical:** Binary transmission over physical media (Cables, Hubs).

---

### Core IP Addressing Concepts

Efficient IP management is the backbone of any scalable network.

```text
IPv4 Addressing:
- Total Bits: 32 bits (4 octets)
- Format: Dotted-decimal (e.g., 192.168.1.1)
- Classes: A (1-126), B (128-191), C (192-223)

Private IP Ranges (RFC 1918):
- 10.0.0.0    - 10.255.255.255
- 172.16.0.0  - 172.31.255.255
- 192.168.0.0 - 192.168.255.255