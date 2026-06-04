---
title: Ep 5 Ethernet Switching and ARP
sidebar_label: Ep 5 Switching & ARP
sidebar_position: 5
---

In this episode, we explore how Layer 2 (Data Link Layer) works in practice. We will break down the Ethernet frame structure, understand how switches build their MAC address tables, and learn how ARP helps bridge the gap between IP and MAC addresses.

---

## 1. Ethernet Frame Structure

An Ethernet frame is the PDU of Layer 2. It wraps the Layer 3 packet with a header and a trailer to ensure successful delivery over a physical medium.


| Field | Length | Description |
| :--- | :--- | :--- |
| **Preamble** | 7 Bytes | A pattern of alternating 1s and 0s that allows devices to synchronize their receiver clocks. |
| **SFD** | 1 Byte | **Start Frame Delimiter**. Marks the end of the preamble and the beginning of the actual frame data. |
| **Destination MAC** | 6 Bytes | The physical address of the receiving device. |
| **Source MAC** | 6 Bytes | The physical address of the sending device. |
| **Type / Length** | 2 Bytes | Indicates the type of encapsulated packet (e.g., **0x0800** for IPv4, **0x86DD** for IPv6). |
| **FCS** | 4 Bytes | **Frame Check Sequence**. Uses a CRC algorithm to detect if data was corrupted during transmission. |

:::info Frame Size Limits
The minimum size of an Ethernet frame is **64 bytes**. Since the header and trailer take up 18 bytes, the minimum payload (packet) size must be **46 bytes**. If a packet is smaller than 46 bytes, "Padding" bytes are added to meet the requirement.
:::

---

## 2. Understanding MAC Addresses

A MAC (Media Access Control) address is a 48-bit (6 bytes) physical address burned into the network interface.

* **BIA (Burned-In Address)**: It is globally unique and assigned at the factory.
* **Format**: Written as 12 hexadecimal characters (e.g., `AAAA.AA00.0001`).
* **Structure**:
    * **First 3 Bytes (OUI)**: Organizationally Unique Identifier. Assigned to the company that manufactured the device.
    * **Last 3 Bytes**: Unique identifier for the specific device itself.

---

## 3. How a Switch Operates

Switches use a **MAC Address Table** to determine where to send frames. This table associates a specific MAC address with a physical port on the switch.

### The Two Core Functions:
1.  **Learning**: The switch looks at the **Source MAC** of every incoming frame. If it's not in the table, the switch adds it along with the port it arrived on.
2.  **Forwarding**: The switch looks at the **Destination MAC** to decide where to send the frame:
    * **Known Unicast**: If the destination is in the table, the switch **forwards** the frame out of that specific port.
    * **Unknown Unicast / Broadcast**: If the destination is unknown, the switch **floods** the frame out of all ports (except the one it came from).

---

## 4. ARP (Address Resolution Protocol)

ARP is used to discover the Layer 2 (MAC) address of a device when only its Layer 3 (IP) address is known.

### The ARP Process:
1.  **ARP Request (Broadcast)**: "I have IP 192.168.1.1. Who has 192.168.1.3? Tell me your MAC!" This message is sent to everyone on the LAN.
2.  **ARP Reply (Unicast)**: The device with the matching IP replies, "I am 192.168.1.3, and here is my MAC address."

:::tip Ping and ARP
When you perform a **Ping**, the first packet often fails. This is because the source device must first use ARP to learn the destination's MAC address before the actual ICMP (Ping) data can be sent.
:::

---

## 5. Useful Switch CLI Commands

To manage and troubleshoot the MAC address table on a Cisco switch, use these commands:

* **View the table**: `show mac address-table` (Shows the VLAN, MAC, Type, and Port).
* **Clear the table**: `clear mac address-table dynamic` (Manually clears all learned addresses).
* **Aging Time**: By default, a switch keeps a dynamic MAC address in its table for **5 minutes**. If no traffic is seen from that MAC, the entry is cleared.

---