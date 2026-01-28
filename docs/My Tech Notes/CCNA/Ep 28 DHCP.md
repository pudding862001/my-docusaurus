---
title: Ep 28 Dynamic Host Configuration Protocol (DHCP)
sidebar_label: Ep 28 DHCP
sidebar_position: 28
---

In this episode, we cover **Dynamic Host Configuration Protocol (DHCP)**. DHCP is a critical network service that allows hosts to automatically learn their network configuration, reducing the need for manual setup and preventing configuration errors.

---

## 1. Overview of DHCP

DHCP allows devices to dynamically acquire essential network settings from a server.

* **Automatic Configuration**: Hosts can learn their IP address, subnet mask, default gateway, and DNS server addresses automatically.
* **Lease Mechanism**: The DHCP server "leases" an IP address to a client for a specific period. These leases are temporary and must be renewed by the client.
* **Server Roles**: In small networks, a Cisco router typically acts as the DHCP server. In larger enterprise environments, a dedicated Linux or Windows host is often used.

---

## 2. The DHCP Operation Process (DORA)

The process of a client acquiring an IP address involves four main messages, commonly known by the acronym **DORA**.

1.  **Discover**: The client broadcasts a message to find any available DHCP servers on the network.
2.  **Offer**: One or more DHCP servers respond with a unicast (or broadcast) message offering an IP address and configuration settings.
3.  **Request**: The client broadcasts a message to formally request the offered IP address from a specific server.
4.  **Acknowledge (ACK)**: The server sends a final message to the client confirming the lease and providing the configuration details.

---

## 3. Configuring a Cisco Router as a DHCP Server

To set up a Cisco router to provide IP addresses to clients, follow these configuration steps:

### Step 1: Exclude Static IP Addresses
Always exclude addresses used for routers, servers, or printers to avoid IP conflicts.
```bash
Router(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.10
```

### Step 2: Create and Configure the DHCP Pool
Define the range of addresses and the settings for the clients.
```bash
Router(config)# ip dhcp pool MY_POOL
Router(dhcp-config)# network 192.168.1.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# dns-server 8.8.8.8
Router(dhcp-config)# domain-name jeremysitlab.com
Router(dhcp-config)# lease 0 12 0  # Days Hours Minutes
```

---

## 4. DHCP Relay Agent (IP Helper Address)

Since DHCP Discover messages are broadcasts, they are normally blocked by routers. If the DHCP server is located in a different subnet, the local router must act as a **Relay Agent**.

* **Configuration**: On the interface receiving the client's broadcast, configure the helper address pointing to the DHCP server's IP.
```bash
Router(config)# interface g0/0
Router(config-if)# ip helper-address 10.0.0.2
```

---

## 5. Cisco Router as a DHCP Client

A router interface can also be configured to receive its IP address from a DHCP server.

* **Command**: Use the `ip address dhcp` command on the desired interface.
```bash
Router(config)# interface g0/1
Router(config-if)# ip address dhcp
```

### Verification Commands
* **`show ip dhcp binding`**: Lists the IP addresses currently leased to clients and their MAC addresses.
* **`show ip dhcp pool`**: Displays statistics about the configured address pools and usage.
* **`show ip interface`**: Confirms if an interface address was determined by DHCP.

---