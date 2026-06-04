---
title: Ep 14 Spanning Tree Protocol (STP)
sidebar_label: Ep 14 Spanning Tree Protocol
sidebar_position: 14
---

In this episode, we explore the **Spanning Tree Protocol (STP)**. We will discuss why Layer 2 redundancy is necessary, the problems caused by loops, and how STP creates a loop-free topology by selectively blocking specific ports.

---

## 1. The Need for STP: Layer 2 Loops

Redundancy is critical in network design to prevent a single point of failure. However, physical loops in a Layer 2 network (switches) can lead to several major issues because Ethernet frames do not have a **Time to Live (TTL)** field.

### Problems Caused by Loops
* **Broadcast Storms**: Broadcast frames circulate endlessly, consuming all available bandwidth and crashing the network.
* **MAC Table Instability**: Switches receive the same frame from multiple ports, causing the MAC address table to constantly flap (update), which degrades performance.
* **Duplicate Frame Delivery**: Multiple copies of the same unicast frame are delivered to the destination host.

**STP (IEEE 802.1D)** was designed to solve these problems by logically blocking redundant paths while keeping them available as backups.

---

## 2. The STP Election Process

STP uses a "Root and Branch" approach. Every switch participates in an election process using **Bridge Protocol Data Units (BPDUs)** to determine its role in the topology.

### Step 1: Elect the Root Bridge
The **Root Bridge** is the center of the STP universe. The switch with the **Lowest Bridge ID (BID)** becomes the Root Bridge.
* **Bridge ID** = Priority (Default: 32768) + MAC Address.
* If priorities are tied, the switch with the lowest MAC address wins.

### Step 2: Elect Root Ports (RP)
Every **Non-Root Bridge** must select one **Root Port**. This is the port with the lowest **Root Path Cost** to reach the Root Bridge.

### Step 3: Elect Designated Ports (DP)
On every network segment (link), one port must be selected as the **Designated Port**. 
* All ports on the Root Bridge are Designated Ports.
* On other segments, the port on the switch with the lowest path cost to the Root Bridge wins.

### Step 4: Block Remaining Ports
Any port that is neither a Root Port nor a Designated Port is put into the **Blocking State** (Non-Designated Port) to break the loop.

---

## 3. STP Port States and Timers

STP transitions ports through several states to ensure that the topology is stable before forwarding data.

### STP Port States
1.  **Blocking**: Only receives BPDUs. Does not forward data or learn MAC addresses.
2.  **Listening**: Sends/receives BPDUs to determine the path. No data forwarding or MAC learning.
3.  **Learning**: Still no data forwarding, but starts populating the MAC address table.
4.  **Forwarding**: Normal operation. Sends/receives data and continues learning MACs.
5.  **Disabled**: Port is administratively shut down.

### Default STP Timers
* **Hello Timer**: 2 seconds (How often BPDUs are sent).
* **Forward Delay**: 15 seconds (Time spent in Listening and Learning states).
* **Max Age**: 20 seconds (How long a switch keeps BPDU info before discarding it).

---

## 4. STP Optimization: PortFast and BPDU Guard

Standard STP can take up to 50 seconds to transition a port to Forwarding. This is too slow for end-user devices (PCs, IP phones).

* **PortFast**: Immediately transitions an access port to the Forwarding state. It should **only** be enabled on ports connected to end hosts.
* **BPDU Guard**: A security feature used with PortFast. If a BPDU is received on a PortFast-enabled port, the port is immediately disabled (err-disable) to prevent loops.

---

## 5. Configuration and Verification

### Basic STP Configuration

```bash
# Change the Bridge Priority to influence Root Bridge election
# (Priority must be a multiple of 4096)
SW1(config)# spanning-tree vlan 1 priority 4096

# Enable PortFast on an access port
SW1(config)# interface g0/1
SW1(config-if)# spanning-tree portfast

# Enable BPDU Guard on an access port
SW1(config-if)# spanning-tree bpduguard enable
```

### Verification Commands


```bash
# Check the STP status for a specific VLAN
show spanning-tree vlan 1

# View a summary of STP status and port roles
show spanning-tree summary

# Check the Bridge ID and Root Bridge ID information
show spanning-tree
```