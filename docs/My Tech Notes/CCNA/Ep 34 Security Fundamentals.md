---
title: Ep 34 Security Fundamentals
sidebar_label: Ep 34 Security
sidebar_position: 34
---

In this episode, we explore **Security Fundamentals**, focusing on the core principles of the CIA Triad, common network attacks, and the AAA framework used to manage access to network resources.

---

## 1. The CIA Triad

The CIA Triad forms the foundation of all security programs and represents the three core goals of network security.

* **Confidentiality**: Ensuring that only authorized users can access sensitive data.
* **Integrity**: Ensuring that data has not been tampered with or modified by unauthorized users and remains accurate and authentic.
* **Availability**: Ensuring that the network and its systems are operational and accessible to authorized users when needed.



---

## 2. Key Security Definitions

To effectively mitigate risks, administrators must understand the relationships between vulnerabilities, exploits, and threats.

* **Vulnerability**: Any potential weakness that can compromise the CIA of a system (e.g., an open window in a house).
* **Exploit**: Something that can potentially be used to take advantage of a vulnerability (e.g., a rock used to break a window).
* **Threat**: The actual potential for a vulnerability to be exploited (e.g., a robber intending to use a rock to break a window).
* **Mitigation**: Techniques or tools implemented to protect against threats. Mitigation should be applied across client devices, servers, and networking hardware.

---

## 3. Common Network Attacks

Attackers use various methods to threaten the availability, integrity, or confidentiality of a system.

### Denial-of-Service (DoS)
DoS attacks primarily threaten the **availability** of a system by overwhelming it with traffic.
* **TCP SYN Flood**: A common DoS attack where the attacker sends continuous SYN requests to a target but never completes the three-way handshake, eventually exhausting the target's resources.



---

## 4. The AAA Framework

The AAA framework provides a structured way to manage access to network devices and resources.

* **Authentication**: Proof of identity ("Who are you?").
* **Authorization**: Specific access granted to a resource ("What are you allowed to do?").
* **Accounting**: Recording what the user did and when they did it ("What did you actually do?").



### AAA Protocols
Enterprises typically use a centralized AAA server, such as **Cisco ISE (Identity Services Engine)**, which supports two main protocols:

| Feature | RADIUS | TACACS+ |
| :--- | :--- | :--- |
| **Standard** | Open Standard. | Cisco Proprietary. |
| **Transport** | UDP (Ports 1812, 1813). | TCP (Port 49). |
| **Encryption** | Only encrypts passwords. | Encrypts the entire packet. |

---

## 5. Security Program Elements and Physical Control

A robust security posture involves both digital and physical safeguards.

### User Awareness vs. Training
* **User Awareness**: Programs designed to make employees aware of potential threats (e.g., sending harmless "false" phishing emails to educate staff).
* **User Training**: Formal sessions that educate users on corporate policies, strong passwords, and threat avoidance.

### Physical Access Control
Protects hardware from unauthorized access to prevent physical tampering.
* **Multifactor Locks**: Using multiple authentication factors for physical entry, such as swiping a badge **and** scanning a fingerprint.
* **Dynamic Permissions**: Badge permissions can be instantly updated or removed if an employee leaves the company.

---