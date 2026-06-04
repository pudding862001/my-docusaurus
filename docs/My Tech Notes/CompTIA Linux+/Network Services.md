---
title: Network Services
sidebar_label: Network Services
sidebar_position: 8
---

## 1. Dynamic Host Configuration Protocol (DHCP)

DHCP automates the assignment of IP addresses, subnet masks, gateways, and other networking parameters to clients.

### The DHCP Handshake (DORA)
The process of obtaining an IP address follows four main steps:
1. **Discover**: Client broadcasts to find a server.
2. **Offer**: Server responds with a configuration offer.
3. **Request**: Client accepts the offer (possibly including lease time).
4. **Acknowledge**: Server acknowledges the acceptance.


### Kea DHCP Server Configuration
Modern Linux systems often use **Kea** as the DHCP server (`apt install kea`).
* **Main Configuration**: Located at `/etc/kea/kea-dhcp4.conf`.
* **Subnets and Pools**: Defined under the `subnet4` section to specify the range of addresses governed by Kea.
* **Reservations**: Used to assign a static IP to a specific hardware (MAC) address (e.g., `"hw-address": "1a:1b..."`).
* **Option Data**: Defines critical client info such as default routers (gateways) and DNS servers.

---

## 2. Domain Name System (DNS)

DNS resolves human-readable domain names into machine-readable IP addresses using UDP port 53.

### Common DNS Record Types
Different records store different types of information in a DNS zone:

| Record Type | Description |
| :--- | :--- |
| **A** | Resolves FQDN to an IPv4 address. |
| **AAAA** | Resolves FQDN to an IPv6 address. |
| **PTR** | Reverse lookup; resolves an IP address to an FQDN. |
| **MX** | Mail Exchanger; specifies the mail server for the domain. |
| **CNAME** | Alias record for a domain. |
| **NS** | Specifies the authoritative Name Server for the zone. |

### DNS Security and Management
* **Bind9**: The standard tool for installing a Linux DNS server (`apt-get install bind9`).
* **Client Configuration**: Handled via `/etc/resolv.conf` or through Netplan settings.
* **Security Measures**: Includes limiting zone transfers, monitoring for malicious TXT records, and using **DNSSEC** (DNS Security Extensions) for digital signature authentication.

---

## 3. Network Time Protocol (NTP)

Accurate system time is critical for security logs, authentication (like Active Directory), and scheduled tasks.

* **`timedatectl`**: A command used to check and configure the system date and time.
* **systemd-timesyncd**: A built-in daemon for basic network time synchronization.
* **Chrony**: A more advanced NTP implementation (`apt-get install chrony`).
    * `chronyc tracking`: Check synchronization status.
    * `chronyc sources`: View the current time sources/servers.
    * `chronyc activity`: Check if sources are online.

---

## 4. Secure Remote Transfers (SCP and SFTP)

Linux provides secure methods to move files between hosts using the SSH protocol.

### Secure Copy (SCP)
Allows copying files or directories to a remote server:
* `scp A.txt username@192.168.2.156:/home/`.

### Secure FTP (SFTP)
An interactive way to manage files over an encrypted connection.
* **`put`**: Uploads a local file to the remote server.
* **`get`**: Downloads a file from the remote server to the local machine.
* **`lpwd` / `lls`**: View local working directory and list local files while inside SFTP.


---

## 5. Web Services (Apache)

Apache is a widely used web server on Linux.
* **Main Configuration**: Located at `/etc/apache2/apache2.conf`.
* **Default Web Content**: The home page (index) is typically stored at `/var/www/html/index.html`.

---