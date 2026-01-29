---
title: Ep 46 Wireless Configuration
sidebar_label: Ep 46 Wireless Configuration
sidebar_position: 46
---

In this episode, we focus on the practical configuration of a Wireless LAN infrastructure, including switch port setup for Management and Wireless LAN Controller (WLC) GUI access, as well as basic security policies.

---

## 1. Network Topology and VLAN Planning

A structured VLAN design is essential for separating management traffic from user data in a wireless environment.

* **Management VLAN (VLAN 10)**: Used for managing network devices like switches, APs, and the WLC. Subnet: `192.168.1.0/24`.
* **Internal User VLAN (VLAN 100)**: Dedicated to internal employees. SSID: `Internal`. Subnet: `10.0.0.0/24`.
* **Guest User VLAN (VLAN 200)**: Dedicated to visitors with restricted access. SSID: `Guest`. Subnet: `10.1.0.0/24`.

---

## 2. Switch Infrastructure Configuration

Before deploying the WLC and APs, the underlying switch must be configured to support the necessary VLANs and provide access to the management interface.

### VLAN Creation
```bash
SW1(config)# vlan 10
SW1(config-vlan)# name Management
SW1(config-vlan)# vlan 100
SW1(config-vlan)# name Internal
SW1(config-vlan)# vlan 200
SW1(config-vlan)# name Guest
```


### Management Port Configuration
Ports connected to the WLC management interface or an administrator's PC are configured as access ports in the Management VLAN. Enabling `spanning-tree portfast` allows these ports to transition to the forwarding state immediately.
```bash
# Example: Configuring ports for WLC and Admin PC access
SW1(config)# interface range f0/6-8
SW1(config-if-range)# switchport mode access
SW1(config-if-range)# switchport access vlan 10
SW1(config-if-range)# spanning-tree portfast
```


---

## 3. Wireless LAN Controller (WLC) Security

Once basic connectivity is established via the GUI, administrators can implement security policies to protect the WLC itself and the traffic it manages.

* **Management ACLs**: Access Control Lists can be applied to the WLC to restrict which IP addresses or subnets are allowed to access the management interface (HTTP/HTTPS/SSH).
* **ACL Rules**:
    * **Permit**: Allows specific trusted administrative hosts (e.g., `192.168.1.100`) to access the WLC.
    * **Deny**: Blocks all other unauthorized traffic from attempting to reach the management console.

---

## 4. AP Connectivity and CAPWAP

Access Points (APs) are connected to the switch and typically receive their IP addresses via **DHCP**.

* **CAPWAP Discovery**: Once an AP receives an IP, it begins the process of discovering its assigned WLC to form the CAPWAP control and data tunnels.
* **Interface Roles**: The WLC typically connects to the switch via a **Trunk port** (or LAG) to carry multiple VLANs (Management, Internal, Guest) back to the wired infrastructure.

---