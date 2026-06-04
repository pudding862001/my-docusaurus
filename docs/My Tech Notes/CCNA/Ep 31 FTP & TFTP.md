---
title: Ep 31 FTP & TFTP
sidebar_label: Ep 31 FTP & TFTP
sidebar_position: 31
---

In this episode, we discuss **File Transfer Protocol (FTP)** and **Trivial File Transfer Protocol (TFTP)**. Both are industry-standard protocols used to move files across a network, most commonly for upgrading device firmware or backing up configurations.

---

## 1. Trivial File Transfer Protocol (TFTP)

TFTP is a simple, lightweight protocol designed for basic file transfers without the overhead of complex features.

### Key Characteristics:
* **Protocol**: Uses **UDP port 69**.
* **Simplicity**: Only allows a client to copy a file to or from a server.
* **No Security**: There is no authentication (no username/password) and no encryption; all data is sent in plain text.
* **Environment**: Best used in controlled local environments for transferring small files quickly.

### Reliability Mechanism
Since UDP is unreliable, TFTP provides its own reliability through **lock-step communication**.
* **Acknowledgments**: Every data message must be acknowledged before the next one is sent.
* **Retransmission**: If an expected message or ACK is not received, the sender will re-send the previous message.



---

## 2. File Transfer Protocol (FTP)

FTP is a more robust and feature-rich protocol than TFTP, providing better reliability and basic security.

### Key Characteristics:
* **Protocol**: Uses **TCP** to ensure reliable data delivery.
* **Authentication**: Requires a username and password to access the server, though data is still sent in plain text (not encrypted).
* **Dual Connections**: FTP uses two separate TCP connections to function:
    - **Control Connection (Port 21)**: Used for sending commands and receiving replies.
    - **Data Connection (Port 20)**: Used for the actual transfer of files.

---

## 3. FTP Active vs. Passive Mode

FTP can establish its data connection in two different ways, which affects how it interacts with firewalls.

| Feature | Active Mode | Passive Mode |
| :--- | :--- | :--- |
| **Initiator** | The **Server** initiates the data connection. | The **Client** initiates both connections. |
| **Port Used** | Server uses Port 20. | Client uses a random high port. |
| **Firewall Issues** | Often blocked by client-side firewalls. | Generally more firewall-friendly. |



---

## 4. Cisco IOS Configuration

Cisco routers can act as clients to transfer files to or from an external server.

### TFTP Transfer
TFTP requires you to know the exact filename on the server before starting the transfer.
```bash
# Copy a file from TFTP server to Router Flash
Router# copy tftp: flash:
# You will be prompted for the Server IP and Filename
```


### FTP Transfer
Because FTP requires authentication, you must provide credentials before the transfer.
```bash
# Configure FTP credentials
Router(config)# ip ftp username Jeremy
Router(config)# ip ftp password jeremysitlab

# Copy a file from FTP server to Flash
Router# copy ftp: flash:
```


---

## 5. Summary Table: FTP vs. TFTP

| Feature | TFTP | FTP |
| :--- | :--- | :--- |
| **Transport** | UDP (Port 69) | TCP (Ports 20, 21) |
| **Reliability** | Built into TFTP | Provided by TCP |
| **Authentication**| None | Username/Password |
| **Usage** | Small files, fast | Large files, robust |

---