---
title: Ep 27 Domain Name System (DNS)
sidebar_label: Ep 27 DNS
sidebar_position: 27
---

In this episode, we explore the **Domain Name System (DNS)**, which is a fundamental service that allows network devices to use human-readable names instead of numeric IP addresses for communication.

---

## 1. Overview of DNS

DNS is used to resolve (convert) human-readable names, such as `google.com` or `youtube.com`, into machine-readable IP addresses.

* **Memorability**: Names are much easier for humans to remember than 32-bit (IPv4) or 128-bit (IPv6) addresses.
* **Resolution Process**: When a user types a name into a browser, the device queries a DNS server to find the associated IP address.
* **Configuration**: A device's DNS server settings can be configured manually or learned automatically via **DHCP**.
* **Verification**: On a Windows PC, you can use the `ipconfig /all` command to verify the current DNS servers (e.g., Google's public DNS at `8.8.8.8`).

---

## 2. DNS in Cisco IOS

Cisco routers can act as DNS clients to resolve hostnames when performing tasks like pinging or connecting to remote servers.

### Key Configuration Commands
To enable DNS resolution on a Cisco router, use the following commands:

* **`ip name-server [IP]`**: Specifies the IP address of one or more DNS servers the router should query.
* **`ip domain lookup`**: Enables the router to perform DNS queries. This is typically enabled by default.
* **`ip domain name [NAME]`**: Configures a default domain name that is automatically appended to any hostname without a specified domain (e.g., `ping pc1` becomes `ping pc1.jeremysitlab.com`).

---

## 3. DNS Cache and Tables

Routers maintain a table of host-to-IP mappings to speed up subsequent requests for the same name.

* **Static Entries**: Manually configured mappings that are permanent (`perm`) and do not expire.
* **Temporary (Dynamic) Entries**: Learned from a DNS server and marked as `temp`. These will need to be re-learned once they expire.

---

## 4. Verification and Troubleshooting

Once DNS is configured, you can verify its operation by attempting to reach a host by its name.

* **Ping by Name**: Running `ping youtube.com` will trigger the router to translate the name via the configured DNS server.
* **Successful Resolution**: If successful, the router will display "Translating 'youtube.com'... domain server (8.8.8.8) [OK]" before sending the ICMP packets.
* **Failure**: If the host is unrecognized or the protocol is not running, the router will return an error stating the host could not be translated.

---