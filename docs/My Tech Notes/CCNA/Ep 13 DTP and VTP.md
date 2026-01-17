---
title: Ep 13 DTP and VTP
sidebar_label: Ep 13 DTP & VTP
sidebar_position: 13
---

In this episode, we explore two Cisco proprietary protocols designed to automate switch port behavior and VLAN database synchronization: **DTP** and **VTP**.

---

## 1. Dynamic Trunking Protocol (DTP)

**DTP** is used to negotiate the trunking state between two directly connected switch ports. By default, many Cisco switches have DTP enabled, which can be a security risk if an unauthorized device attempts to negotiate a trunk link.

### DTP Switchport Modes
* **Access**: The port acts as a permanent non-trunking port.
* **Trunk**: The port acts as a permanent trunking port and actively attempts to negotiate the other side into a trunk.
* **Dynamic Auto**: The port is willing to become a trunk if the other side requests it (Passive).
* **Dynamic Desirable**: The port actively attempts to negotiate a trunk link with the other side (Active).

### DTP Negotiation Table
| Local Mode | Remote: Access | Remote: Dynamic Auto | Remote: Dynamic Desirable | Remote: Trunk |
| :--- | :--- | :--- | :--- | :--- |
| **Access** | Access | Access | Access | Error |
| **Dynamic Auto** | Access | Access | **Trunk** | **Trunk** |
| **Dynamic Desirable**| Access | **Trunk** | **Trunk** | **Trunk** |
| **Trunk** | Error | **Trunk** | **Trunk** | **Trunk** |



> **Security Note**: It is best practice to disable DTP on access ports by using the `switchport nonegotiate` command.

---

## 2. VLAN Trunking Protocol (VTP)

**VTP** synchronizes the VLAN database (vlan.dat) across multiple switches within the same VTP domain. This reduces the need to manually configure the same VLANs on every switch in the network.

### VTP Operating Modes
1.  **Server (Default)**: Full control to create, modify, and delete VLANs. It sends VTP advertisements.
2.  **Client**: Cannot change the VLAN database locally. It synchronizes based on advertisements from the server.
3.  **Transparent**: Forwards VTP advertisements but does not synchronize its own database. It can create local VLANs that are not shared.
4.  **Off**: Does not participate in VTP or forward advertisements.

### Important VTP Concepts
* **Configuration Revision Number**: A counter used to determine which switch has the most recent VLAN database. A switch with a higher revision number will overwrite the database of switches with lower numbers.
* **VTP Pruning**: Optimizes bandwidth by preventing broadcast traffic for specific VLANs from traveling over trunk links where those VLANs are not needed.



---

## 3. Configuration and Verification

### Configuring DTP Modes

```bash
# Set a port to actively negotiate a trunk
SW1(config)# interface g0/1
SW1(config-if)# switchport mode dynamic desirable

# Disable DTP negotiation (Turn off DTP)
SW1(config-if)# switchport nonegotiate
```

### Configuring VTP

```bash
# Set the VTP mode and domain
SW1(config)# vtp mode server
SW1(config)# vtp domain MY_NETWORK
SW1(config)# vtp password CISCO_PASS

# Enable VTP Pruning to save bandwidth
SW1(config)# vtp pruning
```

### Verification Commands

```bash
# View DTP negotiation status on an interface
show dtp interface g0/1

# Check VTP domain, version, and revision number
show vtp status

# Verify the configured VTP password
show vtp password
```
