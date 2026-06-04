---
title: Ep 21 TCP and UDP
sidebar_label: Ep 21 TCP & UDP
sidebar_position: 21
---

In this episode, we move up to **Layer 4 (Transport Layer)** of the OSI model to explore the two primary protocols that handle end-to-end communication: **Transmission Control Protocol (TCP)** and **User Datagram Protocol (UDP)**. Understanding these protocols is crucial for troubleshooting network applications and performance issues.

---

## 1. The Role of the Transport Layer

The Transport Layer is responsible for the delivery of data between applications running on different hosts. Its main functions include:
* **Multiplexing**: Using port numbers to allow multiple applications to share a single network connection.
* **Segmentation**: Breaking large data streams into smaller pieces called **Segments**.
* **Error Recovery (TCP only)**: Ensuring data arrives intact or requesting retransmission.
* **Flow Control (TCP only)**: Managing the rate of data transfer to prevent overwhelming the receiver.

---

## 2. TCP (Transmission Control Protocol)

TCP is defined in **RFC 793** and is designed for reliability. It is a **connection-oriented** protocol, meaning a session must be established before data is sent.

### Key Features of TCP:
* **Reliability**: Uses sequence numbers to track data and acknowledgments to confirm receipt.
* **Connection-Oriented**: Uses a formal process to start and end a session.
* **Ordered Data Reconstruction**: Ensures segments are reassembled in the correct order.
* **Flow Control**: Uses **Windowing** to adjust how much data can be sent before waiting for an acknowledgment.

### The TCP Three-Way Handshake
TCP establishes a connection using a three-step process:
1. **SYN**: The client sends a Synchronize packet.
2. **SYN-ACK**: The server responds with a Synchronize-Acknowledgment packet.
3. **ACK**: The client sends an Acknowledgment packet back.



---

## 3. UDP (User Datagram Protocol)

UDP is defined in **RFC 768** and is designed for speed and low overhead. It is a **connectionless** protocol.

### Key Features of UDP:
* **Connectionless**: No formal session establishment; it simply sends the data.
* **Unreliable Delivery**: No acknowledgments or retransmissions; it is "best-effort".
* **Low Overhead**: Much smaller header (8 bytes) compared to TCP (20 bytes).
* **Real-time Performance**: Ideal for applications like VoIP, Video Streaming, and DNS where speed is more critical than 100% accuracy.

---

## 4. Comparison Table: TCP vs. UDP

| Feature | TCP | UDP |
| :--- | :--- | :--- |
| **Connection** | Connection-oriented | Connectionless |
| **Reliability** | Guaranteed (Retransmissions) | Not guaranteed (Best-effort) |
| **Speed** | Slower (due to overhead) | Faster (low overhead) |
| **Flow Control** | Yes (Windowing) | No |
| **Data Unit** | Segment | Datagram |
| **Typical Apps** | HTTP, HTTPS, SSH, FTP | VoIP, DHCP, DNS, TFTP |



---

## 5. Port Numbers

Port numbers are used to identify specific processes or services running on a host. They range from **0 to 65535** and are divided into three categories:

* **Well-Known Ports (0 - 1023)**: Assigned to common services by IANA (e.g., HTTP: 80, HTTPS: 443, SSH: 22).
* **Registered Ports (1024 - 49151)**: Assigned to specific applications by vendors or organizations.
* **Dynamic / Private Ports (49152 - 65535)**: Also known as **Ephemeral Ports**, used as source ports by client devices.

---

## 6. Verification Commands

While TCP/UDP are host-to-host protocols, you can verify connection status and active sockets on end devices or see session info on routers:

```bash
# On a Windows or Linux host, view all active TCP/UDP connections
netstat -an

# On a Cisco router, view active Telnet/SSH sessions
show users

# Display active TCP connections to the router
show tcp brief
```

---