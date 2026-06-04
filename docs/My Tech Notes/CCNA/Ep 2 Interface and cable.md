---
title: Ep 2 Interfaces and Cables
sidebar_label: Ep 2 Interfaces and Cables
sidebar_position: 2
---

In this episode, we dive into the physical layer of networking, focusing on the cables and interfaces that move data between devices. Understanding these fundamentals is crucial for troubleshooting connectivity issues.

---

## 1. Fundamentals of Data Measurement

Before looking at cables, we must understand how data is measured in a network.

* **Bit**: The smallest unit of data (0 or 1).
* **Byte**: A group of 8 bits (e.g., `00111001`).
* **Network Speed**: Always measured in **bits per second (bps)**, such as kbps, Mbps, Gbps, or Tbps. 

| Unit | Number of Bits |
| :--- | :--- |
| **Kilobit (kb)** | 1,000 bits |
| **Megabit (Mb)** | 1,000,000 bits |
| **Gigabit (Gb)** | 1,000,000,000 bits |
| **Terabit (Tb)** | 1,000,000,000,000 bits |

---

## 2. UTP (Unshielded Twisted Pair)

UTP is the most common cable used in LAN environments. It consists of color-coded copper wires twisted together to protect against **EMI (Electromagnetic Interference)**.


### Ethernet Standards (Copper)

| Speed | Common Name | IEEE Standard | Informal Name | Max Length |
| :--- | :--- | :--- | :--- | :--- |
| **10 Mbps** | Ethernet | 802.3i | 10BASE-T | 100 m |
| **100 Mbps** | Fast Ethernet | 802.3u | 100BASE-T | 100 m |
| **1 Gbps** | Gigabit Ethernet | 802.3ab | 1000BASE-T | 100 m |
| **10 Gbps** | 10 Gig Ethernet | 802.3an | 10GBASE-T | 100 m |

* **BASE**: Refers to baseband signaling.
* **T**: Refers to twisted pair.

---

## 3. Network Wiring and Pinouts

Different devices use different pins to transmit (Tx) and receive (Rx) data.

### Device Pinout Table (10/100 BASE-T)
| Device Type | Transmit (Tx) Pins | Receive (Rx) Pins |
| :--- | :--- | :--- |
| **Router / PC / Firewall** | 1 and 2 | 3 and 6 |
| **Switch** | 3 and 6 | 1 and 2 |

### Cable Types
* **Straight-through Cable**: Used to connect **different** types of devices (e.g., PC to Switch). Pin 1 connects to Pin 1, Pin 2 to Pin 2, etc.
* **Crossover Cable**: Used to connect **similar** types of devices (e.g., Switch to Switch or Router to Router). It crosses the Tx pins on one end to the Rx pins on the other.
* **Auto MDI-X**: A feature in newer devices that automatically detects which pins the neighbor is transmitting on, allowing you to use either cable type.

---

## 4. Fiber-Optic Cables

Fiber-optic cables send data as **light pulses** over glass fibers. They are used for high-speed, long-distance, and EMI-immune connections.


### Single-mode vs. Multimode Fiber

| Feature | Single-mode Fiber (SMF) | Multimode Fiber (MMF) |
| :--- | :--- | :--- |
| **Core Diameter** | Narrow (~10µm) | Wider (50-100µm) |
| **Light Source** | Laser (Expensive) | LED (Cheaper) |
| **Distance** | Very Long (Up to 10km+) | Shorter than SMF, but longer than UTP |
| **Cost** | High | Medium |

### Fiber-Optic Standards

| Informal Name | IEEE Standard | Speed | Cable Type | Max Length |
| :--- | :--- | :--- | :--- | :--- |
| **1000BASE-LX** | 802.3z | 1 Gbps | SM or MM | 5 km (SM) / 550 m (MM) |
| **10GBASE-SR** | 802.3ae | 10 Gbps | Multimode | 400 m |
| **10GBASE-LR** | 802.3ae | 10 Gbps | Single-Mode | 10 km |
| **10GBASE-ER** | 802.3ae | 10 Gbps | Single-Mode | 30 km |

---

## 5. Summary: UTP vs. Fiber-Optic

| Feature | UTP (Copper) | Fiber-Optic |
| :--- | :--- | :--- |
| **Cost** | Lower | Higher |
| **Distance** | Short (~100m) | Very Long |
| **EMI Resistance** | Vulnerable | Immune |
| **Security** | Lower (Emits signal) | Higher (No signal leakage) |
| **Interface** | RJ45 (Cheaper) | SFP Transceiver (More expensive) |

---