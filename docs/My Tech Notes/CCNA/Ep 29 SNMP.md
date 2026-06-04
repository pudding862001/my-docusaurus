---
title: Ep 29 Simple Network Management Protocol (SNMP)
sidebar_label: Ep 29 SNMP
sidebar_position: 29
---

In this episode, we explore **Simple Network Management Protocol (SNMP)**. SNMP is an application-layer protocol used to monitor network-attached devices for conditions that warrant administrative attention and to perform remote configuration.

---

## 1. SNMP Components

An SNMP-managed network consists of two primary components:

* **Managed Devices**: These are the network devices (e.g., routers, switches, firewalls) that are being monitored and managed using SNMP.
* **Network Management Station (NMS)**: A central server or station that runs management software to monitor and control the managed devices.

---

## 2. SNMP Operations

There are three main types of operations used in SNMP communication:

* **Get**: The NMS asks a managed device for information about its current status, such as CPU usage or interface status.
* **Set**: The NMS tells a managed device to change its configuration, such as administrative status of an interface.
* **Traps and Informs**: Managed devices notify the NMS of specific events (e.g., an interface going down) without being asked.

### Traps vs. Informs
* **Traps**: Unreliable notifications sent via UDP port 162. The device does not receive an acknowledgment from the NMS.
* **Informs**: Reliable notifications. The NMS must send an acknowledgment back to the managed device. If no ACK is received, the device will resend the Inform.

---

## 3. MIBs and OIDs

SNMP uses a structured system to organize the information available on a device.

* **OID (Object Identifier)**: A unique identifier for a specific piece of information on a managed device. OIDs are organized in a hierarchical tree structure.
* **MIB (Management Information Base)**: A virtual database or "dictionary" that defines the OIDs available for a device and their meanings.

---

## 4. SNMP Versions

There are three major versions of SNMP, each offering different levels of security and functionality:

| Version | Security Mechanism | Features |
| :--- | :--- | :--- |
| **v1** | Community Strings (Clear text) | Basic functionality; uses Get, Set, and Trap. |
| **v2c** | Community Strings (Clear text) | Adds **GetBulk** and **Inform** messages for better performance and reliability. |
| **v3** | Username/Password & Encryption | Provides strong security through authentication and encryption. |

---

## 5. Configuration and Verification

To configure a Cisco router for basic SNMP v2c operations, follow these steps:

### Basic Configuration
```bash
# Configure the community string (password)
# ro = Read-Only; rw = Read-Write
Router(config)# snmp-server community Jeremy123 ro

# Specify the NMS host, version, and community string
Router(config)# snmp-server host 192.168.1.1 version 2c Jeremy123

# Enable the device to send traps to the NMS
Router(config)# snmp-server enable traps
```


### Verification
* **`show snmp`**: Displays general information about SNMP traffic and configured parameters.
* **Packet Capture**: Using a tool like Wireshark, you can observe SNMP traffic on **UDP port 161** (for Get/Set) and **UDP port 162** (for Traps/Informs).

---