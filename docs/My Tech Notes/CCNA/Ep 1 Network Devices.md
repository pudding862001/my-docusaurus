---
title: Ep 1 Network Devices
sidebar_label: Ep 1 Network Devices
sidebar_position: 1
---

In this section, we cover the fundamental components of a computer network, including nodes, clients, servers, and the specific roles of switches, routers, and firewalls.

---

## 1. What is a Computer Network?



A **computer network** is a digital telecommunication network that allows all nodes to share resources. 

* **Node**: Any device connected to the network, such as a router, switch, firewall, server, or client.
* **Client**: A device that accesses a service made available by a server.
* **Server**: A device that provides functions or services for clients.

---

## 2. Switches



**Switches** are the primary devices used to connect hosts within the same local area.

### Key Characteristics:
* **High Port Density**: They have many network interfaces/ports for end-host connections.
* **Local Connectivity**: They provide connectivity to hosts within the same **LAN (Local Area Network)**.
* **Limitations**: They do **not** provide connectivity between different LANs or over the Internet.

*Example: In a branch office, PC1 and PC2 would connect to a local switch (SW1) to communicate with each other.*

---

## 3. Routers



**Routers** are the devices responsible for moving data between different networks and connecting to the internet.

### Key Characteristics:
* **Interface Count**: Generally have fewer network interfaces than switches.
* **Inter-LAN Connectivity**: They are used to provide connectivity **between** different LANs.
* **Internet Access**: They are responsible for sending data over the Internet.

*Example: R1 and R2 are used to connect a New York Branch and a Tokyo Branch across the Internet.*

---

## 4. Firewalls



**Firewalls** are security devices that monitor and control network traffic based on configured rules. They are the gatekeepers of the network.

### Key Features:
* **Monitoring**: Controls traffic based on specific, pre-defined security rules.
* **Placement**: Can be placed either inside or outside the network boundary.
* **Next-Generation Firewalls (NGFW)**: Modern firewalls that include advanced filtering and security capabilities.
* **Common Hardware**: Cisco ASA5500-X and Firepower 2100 series.

### Types of Firewalls:

| Type | Description |
| :--- | :--- |
| **Network Firewalls** | Dedicated hardware devices that filter traffic moving between different networks. |
| **Host-based Firewalls** | Software applications installed on a device (like a PC) that filter traffic for that specific host. |

---