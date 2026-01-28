---
title: Firewalls and Monitoring
sidebar_label: Firewalls & Monitoring
sidebar_position: 13
---

## 1. Firewall Fundamentals

Firewalls act as a barrier between different network zones, such as an internal network, a DMZ (screened subnet), and the Internet.

### Stateless vs. Stateful Filtering
* **Stateless**: Processes each packet separately without knowledge of the overall session.
* **Stateful**: Capable of understanding multiple packets within a session to make more informed security decisions.

### OSI Layer Filtering
Firewalls operate at different layers of the OSI model to filter traffic:
* **Layer 2**: Filters by MAC addresses in the Ethernet header.
* **Layer 3**: Filters by IP addresses in the IP header.
* **Layer 4**: Filters by port addresses in the TCP or UDP header.
* **Layers 5-7**: Filters based on application protocols like HTTP.


---

## 2. Linux Firewall Management Tools

Linux offers several tools for managing firewall rules, ranging from legacy command-line utilities to modern front-end managers.

| Tool | Description |
| :--- | :--- |
| **iptables** | A legacy tool for configuring IPv4 packet filtering rules. |
| **nftables** | The modern successor to iptables, offering better performance and syntax. |
| **firewalld** | A front-end management tool for nftables, commonly used in RHEL, CentOS, and Fedora. |
| **ufw** | The "Uncomplicated Firewall," a user-friendly front-end common in Ubuntu. |

### Common Commands
* **iptables**: `iptables -A INPUT -i eth1 -p icmp -j ACCEPT` (Adds a rule to allow ICMP traffic on eth1).
* **ufw**: 
    * `sudo ufw allow ssh`: Allows SSH traffic.
    * `sudo ufw allow 80/tcp`: Allows HTTP traffic.
    * `sudo ufw status numbered`: Shows active rules with their index numbers.

---

## 3. Web Application Firewalls (WAF) and Proxies

### WAF (OSI Layer 7)
A WAF protects web applications from common attacks by inspecting HTTP traffic.
* **Protections**: Defends against DOS/DDOS attacks, sensitive data leakage, and malicious URLs.


### Proxy Servers
Proxies act as intermediaries for requests from clients seeking resources from other servers.
* **Forward/Transparent Proxy**: Internal clients point their gateway to the proxy to access the Internet.
* **Reverse Proxy**: Used for load balancing to distribute incoming requests across multiple backend servers.
* **Squid**: A popular open-source proxy server (`apt install squid`).

---

## 4. Intrusion Detection and Prevention (IDS/IPS)

Intrusion systems monitor networks or hosts for malicious activity or policy violations.

* **HIDS**: Host-based IDS that monitors a single machine.
* **NIDS**: Network-based IDS that monitors entire network segments (e.g., **Snort**).
* **Honeypots**: Decoy systems intentionally configured to be vulnerable to attract attackers away from real environments and study their methods.

### Snort (NIDS)
Snort is an open-source tool used for real-time traffic analysis and packet logging.
* **Rules**: Located in `/etc/snort/rules`, these define patterns to alert on, such as trojan activity or botnet commands.

---

## 5. Security Operations (SIEM and SOAR)

To manage modern security threats, organizations use centralized management platforms.

* **SIEM (Security Information and Event Management)**: Collects and correlates activity data from multiple sources to provide real-time security alerts.
* **SOAR (Security Orchestration, Automation and Response)**: Automates security incident responses using "playbooks" to remediate threats quickly (e.g., automatically deleting phishing emails).


---