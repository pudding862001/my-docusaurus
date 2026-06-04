---
title: Ep 36 DHCP Snooping
sidebar_label: Ep 36 DHCP Snooping
sidebar_position: 36
---

In this episode, we explore **DHCP Snooping**, a Layer 2 security feature on Cisco switches that acts like a firewall between untrusted hosts and trusted DHCP servers. It helps prevent common DHCP-based attacks and ensures that clients only receive valid IP configurations from legitimate sources.

---

## 1. Overview of DHCP Snooping

DHCP Snooping is used to filter and monitor DHCP messages received on an interface.

* **Trusted vs. Untrusted Ports**: By default, all ports are untrusted when DHCP snooping is enabled.
    * **Trusted Ports**: Typically the uplinks leading toward the legitimate DHCP server. These ports can receive all types of DHCP messages.
    * **Untrusted Ports**: Typically the downlink ports connected to end-user devices. These ports are only permitted to send DHCP requests, not DHCP offers or acknowledgments.
* **Message Filtering**: If a DHCP "Offer" or "ACK" (messages normally sent by a server) is received on an untrusted port, the switch will discard the message to prevent rogue server attacks.



---

## 2. Mitigating DHCP Starvation Attacks

A **DHCP Starvation attack** occurs when an attacker sends thousands of DHCP Discover messages with spoofed MAC addresses to exhaust the server's IP address pool.

* **CHADDR Validation**: DHCP Snooping checks the **CHADDR** (Client Hardware Address) field inside the DHCP payload against the source MAC address of the Ethernet frame.
* **Action**: If they do not match, the switch identifies the attack and discards the packet, preventing the pool from being exhausted.

---

## 3. The DHCP Snooping Binding Table

The switch maintains a dynamic database called the **DHCP Snooping Binding Table**. This table tracks every device on an untrusted port that has successfully received an IP address via DHCP.

* **Information Stored**:
    * MAC Address.
    * IP Address.
    * Lease Time.
    * VLAN ID.
    * Interface ID.
* **Usage**: This table is critical for other security features like **Dynamic ARP Inspection (DAI)** and **IP Source Guard**.

---

## 4. Configuration and Rate Limiting

To enable and configure DHCP Snooping, follow these administrative steps:

### Basic Configuration
```bash
# Enable DHCP Snooping globally
Router(config)# ip dhcp snooping

# Enable it for specific VLANs
Router(config)# ip dhcp snooping vlan 10,20

# Configure trusted ports (Uplinks)
Router(config-if)# ip dhcp snooping trust
```


### Rate Limiting
To prevent a malicious host from overwhelming the switch CPU with DHCP packets, you can limit the number of DHCP packets allowed per second on an untrusted port.
```bash
Router(config-if)# ip dhcp snooping limit rate 10
```


---

## 5. Verification Commands

* **`show ip dhcp snooping`**: Displays the global status of DHCP snooping and a list of trusted/untrusted interfaces.
* **`show ip dhcp snooping binding`**: Displays all currently active entries in the binding database.
* **`debug ip dhcp snooping packet`**: Used for real-time troubleshooting to see which DHCP packets are being accepted or dropped.

---