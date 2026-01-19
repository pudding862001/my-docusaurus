---
title: Ep 25 CDP and LLDP
sidebar_label: Ep 25 CDP & LLDP
sidebar_position: 25
---

In this episode, we explore **Neighbor Discovery Protocols**. These Layer 2 protocols allow network devices to discover information about directly connected neighbors, regardless of the Layer 3 protocols being used. We will focus on Cisco's proprietary **CDP** and the industry-standard **LLDP**.

---

## 1. CDP (Cisco Discovery Protocol)

CDP is a Cisco proprietary protocol used to share information between directly connected Cisco devices.

### Key Characteristics of CDP:
* **Cisco Proprietary**: Only works between Cisco devices.
* **Enabled by Default**: Most Cisco devices have CDP enabled globally by default.
* **Layer 2 Protocol**: It does not require an IP address to be configured on the interface to work.
* **Information Shared**: Includes Device ID, Local/Remote Port ID, Capabilities (Router, Switch, etc.), Platform, and Management IP address.

### CDP Timers:
* **Hello Timer**: Sends advertisements every **60 seconds**.
* **Hold Timer**: Tells the neighbor to keep the info for **180 seconds** before discarding it.



---

## 2. LLDP (Link Layer Discovery Protocol)

LLDP is a vendor-neutral protocol based on the **IEEE 802.1AB** standard. It provides similar functionality to CDP but is used in multivendor environments.

### Key Characteristics of LLDP:
* **Open Standard**: Works between devices from different vendors (e.g., Cisco, HP, Juniper).
* **Often Disabled by Default**: Unlike CDP, LLDP is frequently disabled by default on Cisco devices and must be turned on manually.
* **TLVs (Type-Length-Value)**: LLDP uses TLVs to send attributes.

### LLDP Timers:
* **Hello Timer**: Sends advertisements every **30 seconds**.
* **Hold Timer**: Tells the neighbor to keep the info for **120 seconds**.

---

## 3. Comparison Table: CDP vs. LLDP

| Feature | CDP | LLDP |
| :--- | :--- | :--- |
| **Standard** | Cisco Proprietary | IEEE 802.1AB |
| **Default State** | Enabled | Usually Disabled |
| **Hello Interval** | 60 Seconds | 30 Seconds |
| **Hold Time** | 180 Seconds | 120 Seconds |
| **Multicast MAC** | 0100.0ccc.cccc | 0180.c200.000e |

---

## 4. Security Considerations

While discovery protocols are helpful for administrators, they can also be a security risk. They broadcast sensitive information (software versions, IP addresses, device models) in plain text.

> **Best Practice**: Disable CDP/LLDP on ports connected to end-user devices, service providers, or any untrusted network.

---

## 5. Configuration and Verification

### CDP Configuration

```bash
# Enable or disable CDP globally
Router(config)# cdp run
Router(config)# no cdp run

# Enable or disable CDP on a specific interface
Router(config-if)# cdp enable
Router(config-if)# no cdp enable
```

### LLDP Configuration

```bash
# Enable LLDP globally
Router(config)# lldp run

# Enable LLDP transmit and receive on an interface
Router(config-if)# lldp transmit
Router(config-if)# lldp receive
```

### Verification Commands

```bash
# View summary of connected neighbors
show cdp neighbors
show lldp neighbors

# View detailed info (IP address, software version)
show cdp neighbors detail
show lldp neighbors detail

# View protocol status and timers
show cdp
show lldp
```



---