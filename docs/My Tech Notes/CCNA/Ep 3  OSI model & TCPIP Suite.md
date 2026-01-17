---
title: Ep 3 Network Models
sidebar_label: Ep 3 Network Models
sidebar_position: 3
---

In this episode, we explore the fundamental structures of networking. A **Networking Model** categorizes and provides standards for networking protocols, ensuring different devices can communicate seamlessly.

---

## 1. The OSI Model (Open Systems Interconnection)

The OSI model is a 7-layer conceptual framework used to understand how data moves across a network.

[Image of the 7 layers of the OSI model]

| Layer | Name | Description & Functions |
| :--- | :--- | :--- |
| **7** | **Application** | Closest to the end user. Interacts with software (e.g., Chrome, Firefox). Uses protocols like **HTTP/HTTPS**. |
| **6** | **Presentation** | Translates data between application and network formats. Handles **encryption** and **decryption**. |
| **5** | **Session** | Controls dialogues (sessions). Establishes, manages, and terminates connections between applications. |
| **4** | **Transport** | Provides host-to-host communication. Breaks large data into smaller **Segments** and reassembles them. |
| **3** | **Network** | Provides connectivity between different networks (Outside LAN). Handles **IP addressing** and path selection. |
| **2** | **Data Link** | Provides node-to-node connectivity (e.g., PC to Switch). Defines data formatting for transmission. |
| **1** | **Physical** | Defines physical characteristics (cables, voltage, etc.). Converts digital bits into electrical or radio signals. |

---

## 2. Protocol Data Units (PDUs)

As data moves through the layers, it is wrapped in headers (Encapsulation) and referred to by different names.

[Image of the data encapsulation process from Layer 7 to Layer 1]

* **Layer 4 (Transport)**: The PDU is called a **Segment**.
* **Layer 3 (Network)**: The PDU is called a **Packet**.
* **Layer 2 (Data Link)**: The PDU is called a **Frame**.
* **Layer 1 (Physical)**: The PDU is a **Bit**.

---

## 3. The TCP/IP Suite

While the OSI model is great for theory, the **TCP/IP model** is what is actually used in modern networks. It combines several OSI layers into a simpler 4-layer structure.

### OSI vs. TCP/IP Comparison

| OSI Model Layer | TCP/IP Suite Layer |
| :--- | :--- |
| **7, 6, 5** (Application, Presentation, Session) | **4: Application** |
| **4** (Transport) | **3: Transport** |
| **3** (Network) | **2: Internet** |
| **2, 1** (Data Link, Physical) | **1: Link** |

[Image of OSI vs TCP/IP model comparison diagram]

---

## 4. Real-World Data Flow

In a real network topology, data flows from one host to another through various devices:

1. **Application Layer**: Handles process-to-process communication.
2. **Transport Layer**: Handles host-to-host communication.
3. **Internet Layer**: Routes data between different networks.
4. **Link Layer**: Moves data across physical mediums like **Ethernet**, **Fiber**, or **Satellite**.

---