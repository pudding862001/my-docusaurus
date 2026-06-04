---
title: Ep 45 Wireless Security
sidebar_label: Ep 45 Wireless Security
sidebar_position: 45
---

In this episode, we explore the fundamental concepts of **Wireless Security**, focusing on how to ensure authentication, data confidentiality, and message integrity in a wireless environment.

---

## 1. Core Security Concepts

Wireless security is built upon three major pillars to protect data transmitted over the air.

* **Authentication**: Verifying the identity of a client before allowing network access. This can involve passwords, usernames, or digital certificates.
* **Encryption**: Protecting data from being read by unauthorized parties. Each client uses a unique key so that other devices on the same WLAN cannot eavesdrop on the traffic.
* **Integrity**: Ensuring that a message is not tampered with during transit. A **MIC (Message Integrity Check)** is added to each frame. If the recipient's calculated MIC matches the sender's, the message is considered authentic.



---

## 2. Wireless Authentication Modes

There are several ways an Access Point (AP) can handle client authentication.

* **Open Security**: No password is required for the initial connection. Clients are often required to authenticate via a secondary method, such as a web portal (e.g., Starbucks Wi-Fi).
* **Personal Mode (Pre-Shared Key - PSK)**: All clients use the same password (PSK) to authenticate. This key is then used to generate unique encryption keys for each session.
* **Enterprise Mode (802.1X)**: Clients use individual credentials (username/password or certificates). Authentication is handled by a centralized **RADIUS server**.

---

## 3. Wireless Security Protocols (WEP to WPA3)

Wireless standards have evolved to address various security vulnerabilities found in earlier protocols.

### WEP (Wired Equivalent Privacy)
* **Status**: Legacy and highly vulnerable; should not be used in modern networks.
* **Mechanism**: Uses the **RC4** stream cipher for encryption.

### WPA (Wi-Fi Protected Access)
* **Mechanism**: Uses **TKIP (Temporal Key Integrity Protocol)**.
* **Note**: Based on WEP but more secure. It was a temporary solution before WPA2 was finalized.

### WPA2
* **Status**: The most widely used standard today (released in 2004).
* **Mechanism**: Uses **CCMP** (AES-based encryption) to provide robust security.

### WPA3
* **Status**: The newest standard (released in 2018) providing enhanced security features.
* **Mechanism**: Uses **GCMP** (AES-based).
* **Key Features**:
    * **PMF (Protected Management Frames)**: Protects management frames from being forged or eavesdropped.
    * **SAE (Simultaneous Authentication of Equals)**: Protects the initial handshake in personal mode against offline dictionary attacks.
    * **Forward Secrecy**: Prevents past traffic from being decrypted even if the session key is compromised later.

---

## 4. Summary Table: Encryption and Integrity Protocols

| Protocol | Based On | Encryption Method | Used In |
| :--- | :--- | :--- | :--- |
| **TKIP** | WEP Improvement | RC4 Stream Cipher | WPA |
| **CCMP** | AES | Counter/CBC-MAC | WPA2 |
| **GCMP** | AES | Galois/Counter Mode | WPA3 |

---