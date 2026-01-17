---
title: Ep 12 VLANs and Inter-VLAN Routing
sidebar_label: Ep 12 VLANs & Routing
sidebar_position: 12
---

In this episode, we explore **Virtual Local Area Networks (VLANs)**. We will learn how to break down large broadcast domains, how to carry multiple VLANs over a single link using Trunking, and the different methods for routing traffic between them.

---

## 1. What is a VLAN?

A **LAN** is technically a single **broadcast domain**. In a traditional flat network, every device receives broadcast frames from every other device, leading to:
* **Performance Issues**: Excessive broadcast traffic (e.g., ARP, DHCP) consumes CPU cycles on all hosts.
* **Security Risks**: Users in different departments (HR, Sales, Engineering) can see each other's traffic without restriction.

A **VLAN** allows us to logically segment a single physical switch into multiple, isolated broadcast domains.

### VLAN ID Ranges:
* **Normal Range**: 1 – 1005 (VLAN 1 is the default; 1002-1005 are reserved for legacy tech).
* **Extended Range**: 1006 – 4094 (Used in large-scale provider networks).

---

## 2. Trunking and 802.1Q Tagging

When traffic from multiple VLANs needs to cross a single physical link (e.g., between two switches or a switch and a router), we use a **Trunk Port**.

### IEEE 802.1Q (Dot1q)
To distinguish which frame belongs to which VLAN, a **4-byte Tag** is inserted into the Ethernet header. This tag contains the **VLAN ID**.
* **Access Port**: Carries traffic for only **one** specific VLAN. Frames are untagged.
* **Trunk Port**: Carries traffic for **multiple** VLANs. Frames are tagged with their VLAN ID.

### The Native VLAN
By default, VLAN 1 is the **Native VLAN**. Frames belonging to the Native VLAN are sent across a trunk link **without a tag**. For security reasons, it is a best practice to change the Native VLAN to an unused ID.

---

## 3. Inter-VLAN Routing Methods

Because VLANs are separate broadcast domains, they cannot communicate with each other without a Layer 3 device (Router or Layer 3 Switch).

### Method A: Router-on-a-Stick (ROAS)
In this method, a single physical interface on a router is divided into multiple **Sub-interfaces**, each acting as a default gateway for a specific VLAN.
* **Switch Config**: The port connecting to the router must be a **Trunk**.
* **Router Config**: Each sub-interface is configured with an IP address and `encapsulation dot1q [vlan-id]`.

### Method B: Layer 3 Switching (SVI)
Modern networks use **Multilayer Switches** to perform routing at hardware speeds. This is done via **Switch Virtual Interfaces (SVI)**.
* **Concept**: You create a virtual interface for each VLAN (e.g., `interface vlan 10`) and assign an IP address.
* **Advantage**: Much faster and more scalable than ROAS because it eliminates the physical bottleneck between the switch and router.

---

## 4. Configuration Guide

### Basic VLAN Setup
```bash
# Create VLAN and name it
SW1(config)# vlan 10
SW1(config-vlan)# name ENGINEERING

# Assign an interface to the VLAN
SW1(config)# interface g0/1
SW1(config-if)# switchport mode access
SW1(config-if)# switchport access vlan 10
```

### Configuring a Trunk Port

```bash
SW1(config)# interface g0/0
SW1(config-if)# switchport trunk encapsulation dot1q  # (Required on some models)
SW1(config-if)# switchport mode trunk
SW1(config-if)# switchport trunk native vlan 99       # (Optional security step)
```

### Configuring Inter-VLAN Routing (SVI)


```bash
# Enable routing on the Layer 3 switch
SW1(config)# ip routing

# Create the SVI for VLAN 10
SW1(config)# interface vlan 10
SW1(config-if)# ip address 192.168.1.62 255.255.255.192
SW1(config-if)# no shutdown
```

### 5. Verification Commands

* **`show vlan brief`**: Lists all configured VLANs and assigned ports.
* **`show interfaces trunk`**: Displays active trunk links and allowed VLANs.
* **`show ip interface brief`**: Checks the status of SVIs and physical interfaces.