---
title: Ep 15 Rapid Spanning Tree Protocol (RSTP)
sidebar_label: Ep 15 Rapid Spanning Tree Protocol
sidebar_position: 15
---

In this episode, we explore the **Rapid Spanning Tree Protocol (RSTP)**, defined in the **IEEE 802.1w** standard. RSTP is an evolution of the original 802.1D STP, designed to provide significantly faster network convergence in the event of a topology change.

---

## 1. RSTP vs. STP: Key Differences

The primary goal of RSTP is to reduce the time it takes for a network to recover from a link failure. While traditional STP can take 30 to 50 seconds to converge, RSTP can often converge in less than a second (milliseconds).

### Improvements in RSTP:
* **Convergence**: RSTP uses a proposal/agreement mechanism rather than relying solely on timers.
* **BPDUs**: Switches now send their own BPDUs every hello interval (2 seconds) instead of simply relaying them from the Root Bridge.
* **Backward Compatibility**: RSTP is fully backward compatible with legacy 802.1D STP.

---

## 2. RSTP Port Roles

RSTP adds two new port roles to the existing Root Port (RP) and Designated Port (DP) to provide immediate backup paths.

* **Alternate Port**: A backup for the **Root Port**. It receives BPDUs from another switch but is blocked. If the Root Port fails, the Alternate Port can transition to forwarding almost immediately.
* **Backup Port**: A backup for the **Designated Port**. It receives BPDUs from the same switch (usually through a hub). It provides redundancy for the segment.

---

## 3. RSTP Port States

RSTP simplifies the five STP port states into just three. It merges the Disabled, Blocking, and Listening states into a single state called **Discarding**.

| STP State (802.1D) | RSTP State (802.1w) | Port Status |
| :--- | :--- | :--- |
| Disabled | **Discarding** | Does not forward data |
| Blocking | **Discarding** | Does not forward data |
| Listening | **Discarding** | Does not forward data |
| Learning | **Learning** | Learning MAC addresses |
| Forwarding | **Forwarding** | Normal data transmission |

---

## 4. RSTP Concepts: Edge Ports and Link Types

RSTP uses specific port classifications to determine how quickly a port can transition to the forwarding state.

### Edge Ports
An **Edge Port** is a port connected to an end device (like a PC or printer). 
* It transitions to the **Forwarding** state immediately (similar to PortFast).
* If an Edge Port receives a BPDU, it immediately loses its edge status and becomes a normal spanning-tree port.

### Link Types
* **Point-to-Point**: A link connecting exactly two switches in full-duplex mode. These links can transition to forwarding rapidly.
* **Shared**: A link connecting to a hub in half-duplex mode. These links must use the traditional timer-based convergence.

---

## 5. Configuration and Verification

### Configuring Rapid PVST+

To enable RSTP on a Cisco switch, you must change the spanning-tree mode. Most modern Cisco networks use **Rapid PVST+** (Per-VLAN Spanning Tree Plus).

```bash
# Enable Rapid PVST+ mode
SW1(config)# spanning-tree mode rapid-pvst

# Configure an interface as an Edge Port (using PortFast command)
SW1(config)# interface g0/1
SW1(config-if)# spanning-tree portfast
```