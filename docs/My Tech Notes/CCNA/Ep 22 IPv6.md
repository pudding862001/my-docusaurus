---
title: Ep 22 Internet Protocol Version 6 (IPv6)
sidebar_label: Ep 22 IPv6
sidebar_position: 22
---

[cite_start]In this episode, we dive into **IPv6 (Internet Protocol Version 6)**, designed to replace IPv4 and provide a virtually inexhaustible supply of IP addresses[cite: 1]. [cite_start]Over these three parts, we cover everything from basic notation to advanced routing and neighbor discovery.

---

## 1. IPv6 Notation and Representation

[cite_start]IPv6 uses a **128-bit** address space, represented as eight groups of four hexadecimal digits (hextets) separated by colons[cite: 1].

### Compression Rules:
[cite_start]To make addresses easier to read, we use two primary rules[cite: 1]:
* [cite_start]**Omit Leading Zeros**: You can remove leading zeros in any hextet (e.g., `0db8` becomes `db8`)[cite: 1].
* [cite_start]**Double Colon (::)**: You can replace consecutive hextets of zeros with a double colon once per address (e.g., `2001:db8:0:0:0:0:0:1` becomes `2001:db8::1`)[cite: 1].



---

## 2. IPv6 Address Types

[cite_start]IPv6 categorizes addresses differently than IPv4[cite: 1]:

* [cite_start]**Global Unicast Address (GUA)**: Publicly routable addresses, typically starting with `2000::/3`[cite: 1].
* **Link-Local Address (LLA)**: Used for communication within a single link/subnet. [cite_start]They start with `fe80::/10`[cite: 1].
* [cite_start]**Unique Local Address (ULA)**: Similar to private IPv4 addresses, starting with `fc00::/7`[cite: 1].
* [cite_start]**Multicast**: Used for one-to-many communication, starting with `ff00::/8`[cite: 1].
* [cite_start]**Loopback**: `::1/128`[cite: 1].



---

## 3. Address Assignment and EUI-64

[cite_start]Routers and hosts can acquire IPv6 addresses through various methods[cite: 2]:

### EUI-64 (Extended Unique Identifier)
[cite_start]This allows a host to automatically create a unique 64-bit interface ID from its 48-bit MAC address[cite: 2]:
1. [cite_start]Split the MAC address in half[cite: 2].
2. [cite_start]Insert `fffe` in the middle[cite: 2].
3. [cite_start]Flip the **7th bit** of the first byte (Universal/Local bit)[cite: 2].



### Dynamic Assignment
* [cite_start]**SLAAC (Stateless Address Autoconfiguration)**: Hosts use Router Advertisement (RA) messages to learn the network prefix and prefix length, then generate their own interface ID[cite: 2].
* [cite_start]**DHCPv6**: Can be **Stateless** (SLAAC for address, DHCP for DNS) or **Stateful** (DHCP manages addresses and all other info)[cite: 2].

---

## 4. Neighbor Discovery Protocol (NDP)

[cite_start]NDP replaces ARP in IPv6 and handles several critical functions using ICMPv6 messages[cite: 3]:

* [cite_start]**Router Solicitation (RS) / Router Advertisement (RA)**: Used for hosts to find routers and learn prefix information[cite: 3].
* [cite_start]**Neighbor Solicitation (NS) / Neighbor Advertisement (NA)**: Replaces ARP to find the MAC address of a known IPv6 address[cite: 3].
* [cite_start]**Duplicate Address Detection (DAD)**: Ensures no two devices on the same link have the same IPv6 address[cite: 3].



---

## 5. IPv6 Routing (Static and OSPFv3)

[cite_start]Routing in IPv6 follows similar logic to IPv4 but with updated protocols[cite: 3].

### OSPFv3 (OSPF for IPv6)
* [cite_start]**LSA Changes**: OSPFv3 uses new LSA types (Type 8 and 9) to handle IPv6 prefixes[cite: 3].
* [cite_start]**Router ID**: A 32-bit Router ID (in IPv4 format) is still **required** even if no IPv4 addresses are configured on the router[cite: 3].
* [cite_start]**Link-Local Adjacency**: Neighbors are formed using Link-Local addresses rather than global addresses[cite: 3].

---

## 6. Configuration and Verification

### Basic IPv6 Configuration

```bash
# Enable IPv6 unicast routing (MUST be done first)
Router(config)# ipv6 unicast-routing

# Configure a Global Unicast Address
Router(config-if)# ipv6 address 2001:db8:acad:1::1/64

# Configure an interface to use EUI-64
Router(config-if)# ipv6 address 2001:db8:acad:1::/64 eui-64

# Configure a Link-Local address manually
Router(config-if)# ipv6 address fe80::1 link-local
```

### OSPFv3 Configuration

```bash
# Start OSPFv3 process
Router(config)# ipv6 router ospf 1
Router(config-rtr)# router-id 1.1.1.1

# Enable OSPFv3 on the interface directly
Router(config-if)# ipv6 ospf 1 area 0
```

### Verification Commands

```bash
# View IPv6 interface status and addresses
show ipv6 interface brief

# View the IPv6 routing table
show ipv6 route

# View OSPFv3 neighbors
show ipv6 ospf neighbor

# View the IPv6 neighbor cache (NDP table)
show ipv6 neighbors
```

---