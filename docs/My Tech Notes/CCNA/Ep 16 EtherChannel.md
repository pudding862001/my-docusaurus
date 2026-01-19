---
title: Ep 16 EtherChannel
sidebar_label: Ep 16 EtherChannel
sidebar_position: 16
---

In this episode, we explore **EtherChannel**, a technology used to group multiple physical Ethernet links into a single logical link. This provides increased bandwidth and redundancy while overcoming the limitations of Spanning Tree Protocol (STP).

---

## 1. The Need for EtherChannel

[cite_start]In a typical network topology, access layer switches connect to distribution layer switches[cite: 8, 9, 10]. [cite_start]When the bandwidth required by end hosts exceeds the capacity of the uplink, it is called **oversubscription**[cite: 17, 18, 19]. 

[cite_start]Simply adding more physical links between switches does not solve the congestion[cite: 24, 25, 27, 28]. [cite_start]This is because **STP** will detect a loop and disable all but one of the redundant links to prevent broadcast storms[cite: 29, 31, 33]. [cite_start]EtherChannel solves this by tricking STP into treating multiple physical links as a **single logical interface**[cite: 41, 42, 43].

---

## 2. EtherChannel Overview

[cite_start]EtherChannel is also known as a **Port Channel** or **Link Aggregation Group (LAG)**[cite: 46, 47]. It offers several key benefits:
* [cite_start]**Increased Bandwidth**: Combines the capacity of up to 8 active physical interfaces[cite: 102].
* [cite_start]**Load Balancing**: Traffic is distributed across the physical links using a specific algorithm[cite: 50, 51].
* **Redundancy**: If one physical link fails, traffic is automatically redistributed among the remaining links without STP recalculation.

### Load Balancing Methods
[cite_start]You can configure the inputs used for the load-balancing calculation based on the switch's capabilities[cite: 58, 69]:
* [cite_start]**Source MAC / Destination MAC** [cite: 59, 60]
* [cite_start]**Source IP / Destination IP** [cite: 62, 63]
* [cite_start]**Source and Destination MAC/IP (XOR logic)** [cite: 61, 64, 78, 79]


---

## 3. EtherChannel Configuration Protocols

There are three main methods to configure an EtherChannel, depending on whether you want dynamic negotiation or a static setup.

### (1) PAgP (Port Aggregation Protocol)
* [cite_start]**Type**: Cisco Proprietary[cite: 89].
* [cite_start]**Function**: Dynamically negotiates the creation and maintenance of the EtherChannel[cite: 90].
* **Modes**:
    * [cite_start]**Desirable**: Actively attempts to negotiate a link (Active)[cite: 112].
    * [cite_start]**Auto**: Negotiates only if the other side initiates it (Passive)[cite: 111].

### (2) LACP (Link Aggregation Control Protocol)
* [cite_start]**Type**: IEEE 802.3ad Industry Standard[cite: 93].
* **Function**: Preferred protocol for vendor interoperability.
* **Modes**:
    * [cite_start]**Active**: Actively initiates negotiation[cite: 110].
    * [cite_start]**Passive**: Responds to negotiation requests[cite: 116].

### (3) Static EtherChannel
* [cite_start]**Type**: No protocol used[cite: 95].
* [cite_start]**Mode**: **On**[cite: 113, 132].
* [cite_start]**Requirement**: Both sides must be manually set to "On"[cite: 148].

### Negotiation Summary Table
| Mode | Compatible With | Result |
| :--- | :--- | :--- |
| **Desirable** | Desirable / Auto | [cite_start]**EtherChannel Formed** [cite: 118] |
| **Auto** | Auto | [cite_start]No EtherChannel [cite: 118] |
| **Active** | Active / Passive | [cite_start]**EtherChannel Formed** [cite: 136] |
| **Passive** | Passive | [cite_start]No EtherChannel [cite: 136] |
| **On** | On | [cite_start]**EtherChannel Formed** [cite: 148] |

---

## 4. Configuration Requirements

[cite_start]For physical interfaces to successfully bundle into an EtherChannel, their configurations **must match**[cite: 182, 187]:
* [cite_start]**Duplex**: Must be the same (usually Full Duplex)[cite: 183].
* [cite_start]**Speed**: Must be identical on all member ports[cite: 184].
* [cite_start]**Switchport Mode**: All must be Access or all must be Trunk[cite: 185].
* [cite_start]**VLAN Settings**: Same allowed VLANs and Native VLAN for trunks[cite: 186].

---

## 5. Configuration and Verification

### Layer 2 EtherChannel Configuration (LACP)

```bash
# Select the physical interfaces
SW1(config)# interface range g0/0 - 3

# Define the protocol (optional but recommended)
SW1(config-if-range)# channel-protocol lacp

# Assign to a group and set the mode
SW1(config-if-range)# channel-group 1 mode active
```

### Layer 3 (Routed) EtherChannel Configuration

```bash
# Convert physical ports to routed ports
SW1(config)# interface range g0/0 - 3
SW1(config-if-range)# no switchport

# Bundle them into the channel group
SW1(config-if-range)# channel-group 1 mode active

# Configure the IP address on the logical Port-Channel interface
SW1(config)# interface port-channel 1
SW1(config-if)# ip address 10.0.0.1 255.255.255.252
```

### Verification Commands

```bash
# View summary of all EtherChannels (Flags: P = bundled, U = in use)
show etherchannel summary

# Check the load-balancing method currently in use
show etherchannel load-balance

# Display detailed status of the Port-Channel interface
show etherchannel port-channel

# Verify STP is treating the bundle as a single logical interface
show spanning-tree
```

---