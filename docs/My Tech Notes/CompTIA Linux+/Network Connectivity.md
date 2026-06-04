---
title: Network Connectivity and Management
sidebar_label: Network Connectivity
sidebar_position: 6
---

## 1. Network Interface Configuration

Linux has transitioned from older networking tools to the modern `iproute2` suite for managing interfaces and addresses.

* **Legacy Command**: `ifconfig -a` was previously used to view all interfaces.
* **Modern Command**: `ip a` (or `ip address`) is the current standard for displaying IP addresses and interface properties.
* **Assigning IP Addresses**: You can temporarily add an IP to an interface using:
  `sudo ip a add 192.168.1.45/24 dev eth0`.


---

## 2. Troubleshooting and Diagnostic Utilities

Linux provides a wide array of tools for diagnosing connectivity issues, performing DNS lookups, and monitoring sockets.

| Command | Description |
| :--- | :--- |
| **`traceroute`** | Shows the path packets take to reach a host, listing all intermediate routers. |
| **`dig` / `nslookup`** | DNS lookup utilities used to query name servers for domain records. |
| **`curl` / `wget`** | Tools used to transfer data from or to a server using protocols like HTTP, HTTPS, or FTP. |
| **`netstat`** | Monitors active network connections and listening ports (e.g., `netstat | grep ssh`). |
| **`nc` (Netcat)** | A "Swiss-army knife" for reading and writing data across network connections (TCP/UDP). |


---

## 3. Routing Management

Routing determines how data is directed between different networks. Linux supports both static and dynamic routing.

### Static vs. Dynamic Routing
* **Static Routing**: Manual entries in the routing table. Best for small, stable networks.
* **Dynamic Routing**: Learned automatically via protocols such as **RIP**, **OSPF**, or **EIGRP**.

### Managing Routes with the `ip` Command
* **View Table**: Use `ip route show` or the legacy `route` command.
* **Add Route**: `sudo ip route add 200.1.1.0/24 via 192.168.2.90 dev ens33`.
* **Delete Route**: `sudo ip route delete 200.1.1.0/24`.

---

## 4. Persistent Configuration with Netplan

In modern Ubuntu systems, network configurations are managed via **Netplan** using YAML files located in `/etc/netplan/`.


### Setting a Persistent Static Route
To ensure a route survives a system reboot, you must modify the configuration file (e.g., `00-installer-config.yaml`):

```yaml
network:
  version: 2
  ethernets:
    ens33:
      dhcp4: true
      routes:
        - to: 200.1.1.0/24
          via: 192.168.2.90
```

After editing, apply the changes with:
`sudo netplan apply`.

---

## 5. Advanced Packet Analysis and Syncing

### Traffic Analysis with `tcpdump`
`tcpdump` is a powerful command-line packet analyzer used to capture or filter network traffic.
* **Filter by Host**: `tcpdump host [IP]`.
* **Filter by Protocol**: `tcpdump icmp`.
* **Filter by Port**: `tcpdump port 22` (to capture SSH traffic).

### Secure File Synchronization with `rsync`
The `rsync` utility is used for efficiently copying and synchronizing files across systems over SSH.
* **Example**: `rsync -av /source/ user@192.168.2.42:/destination/`.

---