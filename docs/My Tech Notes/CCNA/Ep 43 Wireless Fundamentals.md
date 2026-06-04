---
title: Ep 43 Wireless Fundamentals
sidebar_label: Ep 43 Wireless Fundamentals
sidebar_position: 43
---

In this episode, we explore the core concepts of **Wireless LANs (WLANs)**, which are defined by the **IEEE 802.11** standard and commonly referred to as **Wi-Fi**.

---

## 1. Wireless Connection Issues

Unlike wired Ethernet, wireless communication faces unique challenges due to its shared medium and physical environment.

* **Shared Medium**: All devices within range receive all transmitted frames, leading to privacy concerns.
* **Half-Duplex**: Wireless devices use **CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance)** to manage transmissions. A device waits for the channel to be free before transmitting to avoid collisions.
* **Signal Interference**: Signals can be affected by **Absorption** (walls), **Reflection** (metal surfaces), **Refraction** (bending through mediums), **Diffraction** (traveling around obstacles), and **Scattering** (dust or uneven surfaces).


---

## 2. Radio Frequency (RF) Bands and Channels

Wi-Fi primarily operates in two main frequency bands, each divided into multiple channels.

| Band | Characteristics |
| :--- | :--- |
| **2.4 GHz** | Provides longer reach and better obstacle penetration, but suffers from more interference due to many devices using this band. |
| **5 GHz** | Offers higher data rates and less interference but has a shorter effective range. |
| **6 GHz** | Introduced with **Wi-Fi 6E (802.11ax)** to further expand available spectrum. |

* **Non-overlapping Channels**: In the 2.4 GHz band, it is recommended to use channels **1, 6, and 11** to avoid interference.

---

## 3. Wireless Standards Comparison

The IEEE 802.11 standards have evolved significantly over time to provide higher data rates.

* **802.11n (Wi-Fi 4)**: Operates at 2.4/5 GHz with rates up to 600 Mbps.
* **802.11ac (Wi-Fi 5)**: Operates at 5 GHz with rates up to 6.93 Gbps.
* **802.11ax (Wi-Fi 6)**: Operates at 2.4/5/6 GHz and provides higher efficiency and capacity.

---

## 4. Service Set Types

802.11 defines how groups of wireless devices are organized into service sets.

* **IBSS (Independent Basic Service Set)**: Also called **Ad Hoc** mode. Devices connect directly to each other without an Access Point (AP).
* **BSS (Basic Service Set)**: Clients connect to a single AP. The AP is identified by its **BSSID** (the AP's MAC address).
* **ESS (Extended Service Set)**: Multiple APs are connected via a wired distribution system (DS) using the same **SSID**. This allows for **Roaming**, where clients move between APs seamlessly.
* **MBSS (Mesh Basic Service Set)**: Used when wired connections are difficult. APs connect wirelessly to each other, with at least one **Root Access Point (RAP)** connected to the wired network.


---

## 5. Other AP Operation Modes

Access Points can be configured for specialized roles beyond basic client connectivity.

* **Repeater**: Extends the range of a BSS by retransmitting received signals.
* **Workgroup Bridge (WGB)**: Connects a wired device (or multiple devices in Cisco proprietary mode) to a wireless network.
* **Outdoor Bridge**: Connects two remote networks over long distances without physical cables.

---