---
title: Ep 32 Network Address Translation (NAT)
sidebar_label: Ep 32 NAT
sidebar_position: 32
---

In this episode, we explore **Network Address Translation (NAT)**. NAT is a technology used to conserve the limited supply of IPv4 addresses by allowing multiple devices to share a smaller number of public IP addresses when accessing the Internet.

---

## 1. The Necessity of NAT and Private IP Addresses

The modern world has exhausted the supply of available IPv4 addresses. While the long-term solution is transitioning to IPv6, NAT and Private IPv4 addresses serve as critical short-term fixes.

### RFC 1918 Private IP Ranges
Private addresses can be used freely within internal networks but are not routable over the public Internet:
* **Class A**: 10.0.0.0 to 10.255.255.255.
* **Class B**: 172.16.0.0 to 172.31.255.255.
* **Class C**: 192.168.0.0 to 192.168.255.255.

NAT allows these private addresses to be translated into globally unique public IP addresses before traffic enters the Internet.

---

## 2. NAT Terminology

Understanding the four types of addresses used in NAT is essential for configuration and troubleshooting:

| Address Type | Description |
| :--- | :--- |
| **Inside Local** | The actual private IP address assigned to a host on the inner network. |
| **Inside Global** | The public IP address that represents the inside host to the outside network. |
| **Outside Local** | The IP address of an outside host as it appears to the inside network. |
| **Outside Global** | The actual public IP address assigned to a host on the outside network. |

---

## 3. Static NAT

Static NAT provides a permanent, one-to-one mapping between an inside local address and an inside global address.

* **Use Case**: Typically used for internal servers (like web or mail servers) that need to be reachable from the Internet using a consistent public IP.
* **Configuration**:
    ```bash
    Router(config)# ip nat inside source static 192.168.0.167 100.0.0.1
    Router(config)# interface g0/0
    Router(config-if)# ip nat inside
    Router(config)# interface g0/1
    Router(config-if)# ip nat outside
    ```
   

---

## 4. Dynamic NAT

Dynamic NAT automatically maps inside local addresses to a pool of available public (inside global) addresses as needed.

* **Mechanism**: An Access Control List (ACL) identifies the internal traffic, and a NAT Pool defines the range of available public IPs.
* **Limitation**: If the pool runs out of addresses (NAT Pool Exhaustion), subsequent translation requests will fail until an existing translation expires.
* **Configuration**:
    ```bash
    Router(config)# access-list 1 permit 192.168.0.0 0.0.0.255
    Router(config)# ip nat pool MY_POOL 100.0.0.1 100.0.0.10 netmask 255.255.255.0
    Router(config)# ip nat inside source list 1 pool MY_POOL
    ```
   

---

## 5. NAT Overload (Port Address Translation - PAT)

PAT is the most common form of NAT used today. It allows multiple inside local addresses to be mapped to a single public IP address by using unique source port numbers.

* **Efficiency**: A single public IP can support thousands of simultaneous internal connections.
* **Configuration (using a Pool)**:
    ```bash
    Router(config)# ip nat inside source list 1 pool MY_POOL overload
    ```
* **Configuration (using an Interface)**:
    ```bash
    Router(config)# ip nat inside source list 1 interface g0/1 overload
    ```
   

---

## 6. Verification and Maintenance

To ensure NAT is functioning correctly, use the following commands:

* **`show ip nat translations`**: Displays the active translation table. This includes protocol, local, and global address mappings.
* **`show ip nat statistics`**: Shows the total number of active translations, pool information, and interface assignments.
* **`clear ip nat translation *`**: Clears all dynamic entries from the NAT translation table.

---