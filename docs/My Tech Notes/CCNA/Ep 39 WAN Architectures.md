---
title: Ep 39 WAN Architectures
sidebar_label: Ep 39 WAN Architectures
sidebar_position: 39
---

In this episode, we explore **Wide Area Network (WAN) Architectures**. WANs are used to connect geographically dispersed Local Area Networks (LANs) across long distances, typically using services provided by a Service Provider (SP).

---

## 1. WAN Fundamentals and Terminology

A WAN operates at the physical and data link layers of the OSI model. Understanding the roles of equipment and the interface boundaries is essential.

* **Service Provider (SP)**: A company that owns the network infrastructure used to connect customer sites.
* **Customer Premises Equipment (CPE)**: The hardware located at the customer site (e.g., routers, switches).
* **Customer Edge (CE)**: The device at the customer site that connects to the SP.
* **Provider Edge (PE)**: The device at the SP site that connects to the customer's CE device.
* **Demarcation Point (Demarc)**: The physical point where the customer's network ends and the SP's network begins.

---

## 2. Dedicated Leased Lines

A leased line is a dedicated, point-to-point serial connection between two sites.

* **Physical Connection**: Uses a serial cable connected to a CSU/DSU (Channel Service Unit/Data Service Unit).
* **Layer 2 Protocols**:
    * **HDLC (High-Level Data Link Control)**: The Cisco proprietary default for serial links.
    * **PPP (Point-to-Point Protocol)**: An industry-standard protocol that supports authentication and multilink connections.
* **Pros/Cons**: Provides guaranteed bandwidth and high security, but is expensive and lacks flexibility.

---

## 3. Multiprotocol Label Switching (MPLS)

MPLS is a high-performance packet-switched technology that uses "labels" rather than IP addresses to make forwarding decisions.

* **Label Switching**: Routers (Label Switch Routers) look at a 20-bit label instead of the full routing table, which is faster and allows for complex traffic engineering.
* **Layer 2.5 Protocol**: It is often called a "Layer 2.5" protocol because it sits between the data link layer and the network layer.
* **Efficiency**: Allows a single SP infrastructure to carry traffic for many different customers securely using VPNs.

---

## 4. Metro Ethernet (MetroE)

Metro Ethernet extends Ethernet technology beyond the LAN into the WAN environment, typically within a metropolitan area.

* **Simplicity**: Administrators can use familiar Ethernet configurations instead of complex serial or MPLS commands.
* **Scalability**: Bandwidth can be easily adjusted (e.g., from 10 Mbps to 10 Gbps) without changing physical hardware.
* **EoMPLS**: Often implemented as **Ethernet over MPLS**, where Ethernet frames are encapsulated within MPLS labels across the SP core.

---

## 5. Internet-Based WAN

Using the public Internet to connect sites is a cost-effective alternative to private leased lines or MPLS.

* **Connectivity Technologies**:
    * **DSL (Digital Subscriber Line)**: Uses existing telephone lines to provide high-speed data.
    * **Cable**: Uses the coaxial cable infrastructure of cable television providers.
    * **Wireless/Cellular**: Uses 4G/5G technology to provide WAN access in mobile or remote areas.
* **Trade-off**: While cheaper and widely available, the public Internet does not provide guaranteed quality of service or inherent security.

---

## 6. Virtual Private Networks (VPN)

To secure traffic sent over the untrusted public Internet, organizations use VPNs to create encrypted "tunnels".

* **Site-to-Site VPN**: Connects entire offices to each other. The routers at each site handle the encryption/decryption.
* **Remote Access VPN**: Allows individual users to connect securely to the corporate network from any location.
* **IPsec (IP Security)**: A suite of protocols used to provide authentication, integrity, and confidentiality for VPN traffic.

---