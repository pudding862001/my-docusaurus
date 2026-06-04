---
title: Ep 24 Extended Access Control Lists (ACLs)
sidebar_label: Ep 24 Extended ACLs
sidebar_position: 24
---

In this episode, we advance our study of traffic filtering with **Extended Access Control Lists (ACLs)**. While Standard ACLs are limited to source IP filtering, Extended ACLs provide granular control by examining multiple fields in the packet header.

---

## 1. Extended ACL Fundamentals

Extended ACLs allow for much more precise traffic management because they can evaluate several criteria:
* **Source IP Address**
* **Destination IP Address**
* **Protocol Type** (IP, TCP, UDP, ICMP, etc.)
* **Port Numbers** (for TCP and UDP)

### Numbering Ranges:
Extended ACLs use specific number ranges:
* **Normal Range**: 100 – 199
* **Expanded Range**: 2000 – 2699

---

## 2. Comparison: Standard vs. Extended

| Feature | Standard ACL | Extended ACL |
| :--- | :--- | :--- |
| **Filtering Criteria** | Source IP Only | Source/Dest IP, Protocol, Port |
| **Placement** | Close to Destination | Close to Source |
| **Numeric Range** | 1-99, 1300-1999 | 100-199, 2000-2699 |

---

## 3. Filtering by Protocol and Ports

One of the most powerful features of Extended ACLs is the ability to target specific applications by their port numbers.

* **Operators**: You can use operators like `eq` (equal), `neq` (not equal), `gt` (greater than), `lt` (less than), and `range`.
* **Protocol Keywords**: When filtering, you specify the protocol first. For example, to filter web traffic, you specify `tcp` and then port `80` (HTTP) or `443` (HTTPS).



---

## 4. ACL Placement Rule

Because Extended ACLs are very specific, they can filter out undesirable traffic before it consumes network bandwidth. Therefore:

> **Place Extended ACLs as close to the Source as possible.**

This prevents traffic that will eventually be dropped from traveling across the entire network.

---

## 5. Configuration and Verification

### Configuring a Numbered Extended ACL

```bash
# Deny FTP traffic (TCP port 21) from Host A to Server B
Router(config)# access-list 101 deny tcp host 192.168.1.10 host 10.1.1.50 eq 21

# Permit all other IP traffic (to avoid the implicit deny)
Router(config)# access-list 101 permit ip any any

# Apply to the interface closest to the source (Inbound)
Router(config)# interface g0/0
Router(config-if)# ip access-group 101 in
```

### Configuring a Named Extended ACL

```bash
# Enter named extended ACL mode
Router(config)# ip access-list extended WEB_FILTER

# Permit HTTP and HTTPS traffic from a subnet to any destination
Router(config-ext-nacl)# permit tcp 192.168.1.0 0.0.0.255 any eq 80
Router(config-ext-nacl)# permit tcp 192.168.1.0 0.0.0.255 any eq 443

# Deny everything else explicitly (optional for clarity)
Router(config-ext-nacl)# deny ip any any

# Apply to interface
Router(config)# interface g0/1
Router(config-if)# ip access-group WEB_FILTER out
```

### Verification Commands

```bash
# View entries and match counts
show access-lists

# Check interface application
show ip interface g0/0

# View the running configuration for ACL details
show running-config | include access-list
```

---