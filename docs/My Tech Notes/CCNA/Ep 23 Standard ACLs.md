---
title: Ep 23 Standard Access Control Lists (ACLs)
sidebar_label: Ep 23 Standard ACLs
sidebar_position: 23
---

In this episode, we explore **Standard Access Control Lists (ACLs)**, a fundamental tool for network security and traffic management. ACLs act as a packet filter, allowing or denying traffic based on a set of rules defined by the network administrator.

---

## 1. ACL Fundamentals

Access Control Lists are processed in a specific, logical sequence to determine if a packet should be permitted or denied.

### Key Characteristics of ACL Processing:
* **Sequential Logic**: The router evaluates ACL entries (Access Control Entries - ACEs) from top to bottom.
* **Immediate Match**: Once a packet matches an ACE, the defined action (permit or deny) is taken, and no further rules are checked for that packet.
* **Implicit Deny All**: Every ACL has an invisible "deny all" rule at the very end. If a packet does not match any explicit rule, it will be dropped.
* **Inbound vs. Outbound**: ACLs can be applied to an interface in either an **inbound** (before routing) or **outbound** (after routing) direction.


---

## 2. Standard vs. Extended ACLs

While there are multiple types of ACLs, they differ primarily in what they can filter:

* **Standard ACLs**: Filter traffic based **only** on the **Source IP address**.
* **Extended ACLs**: Filter based on Source/Destination IP, Protocol (TCP/UDP), and Port numbers (covered in the next episode).

### Numbering Ranges:
Standard ACLs use specific number ranges to identify their type:
* **Normal Range**: 1 – 99
* **Expanded Range**: 1300 – 1999

---

## 3. Wildcard Masks

ACLs use **Wildcard Masks** instead of subnet masks to specify the range of addresses to match. 
* A wildcard mask bit of **0** means the bit **must match**.
* A wildcard mask bit of **1** means the bit is a **"don't care"** (can be anything).

For example, a wildcard mask of $0.0.0.255$ is often used to match an entire /24 subnet.

---

## 4. ACL Placement Rule

Because Standard ACLs only look at the source IP, they lack precision. To avoid accidentally blocking legitimate traffic to other destinations, a cardinal rule is followed:

> **Place Standard ACLs as close to the Destination as possible.**


---

## 5. Configuration and Verification

### Configuring a Numbered Standard ACL

```bash
# Create a rule to permit a specific host
Router(config)# access-list 1 permit host 192.168.1.10

# Create a rule to deny a whole subnet
Router(config)# access-list 1 deny 192.168.2.0 0.0.0.255

# Explicitly permit all other traffic (otherwise the implicit deny kicks in)
Router(config)# access-list 1 permit any

# Apply the ACL to an interface in the outbound direction
Router(config)# interface g0/0
Router(config-if)# ip access-group 1 out
```

### Configuring a Named Standard ACL

Named ACLs are easier to edit and manage than numbered ones.

```bash
# Enter named ACL configuration mode
Router(config)# ip access-list standard MY_SECURE_LIST

# Add rules inside the mode
Router(config-std-nacl)# deny 10.1.1.0 0.0.0.255
Router(config-std-nacl)# permit any

# Apply to interface
Router(config-if)# ip access-group MY_SECURE_LIST in
```

### Verification Commands

```bash
# View all configured ACLs and their hit counts
show access-lists

# Check which ACL is applied to a specific interface and in which direction
show ip interface g0/0
```

---