---
title: Ch 2 Configure and Manage Virtual Networking
sidebar_label: Ch 2 Virtual Networking
sidebar_position: 2
---

In this extensive section, we master the networking foundation of Azure. We cover everything from the basic VNet structure and IP addressing to advanced security with NSGs, load balancing, DNS resolution, and troubleshooting connectivity issues.

---

## 1. Network Architecture Fundamentals

Understanding how resources communicate starts with the Virtual Network (VNet).

### VNet and Subnets
* **Virtual Network (VNet)**: A logically isolated section of the Azure cloud. It is scoped to a single **Region**.
* **Address Space (CIDR)**: Defined using CIDR notation (e.g., `10.0.0.0/16`).
* **Subnets**: You segment the VNet address space into smaller subnets (e.g., `10.0.1.0/24`). Resources (like VMs) are deployed into specific subnets.
    * *Note: Azure reserves the first 4 and the last 1 IP address in every subnet.*
* **NIC (Network Interface Card)**: The component that attaches a VM to a Subnet. A VM can have multiple NICs.

### IP Addressing
* **Private IP**: Used for internal communication. Can be **Dynamic** (default) or **Static**.
* **Public IP**: Used for communication with the Internet. SKUs matter (Basic vs. Standard).

---

## 2. Network Security

Securing traffic flow is critical. Azure provides two main layers for this: NSGs and ASGs.

### Network Security Groups (NSG)

NSGs act as a firewall for your traffic. They contain a list of security rules.
* **Association**: Can be associated with a **Subnet** (Recommended) or a **Network Interface (NIC)**.
* **Rules**: Defined by 5-tuple (Source IP, Source Port, Destination IP, Destination Port, Protocol).
* **Priority**: Ranges from 100 to 4096. **Lower numbers have higher priority** (processed first).
* **Default Rules**: Every NSG comes with default rules (e.g., AllowVnetInBound) that you cannot delete, but you can override with higher priority rules.

### Application Security Groups (ASG)
ASGs allow you to group VMs by their application function (e.g., "WebServers", "DBServers") rather than IP addresses.
* **Benefit**: Simplifies NSG rules. Instead of updating IPs in your firewall rules when you add a new server, you just add the server to the ASG.

### Azure Bastion
A fully managed PaaS service that provides secure **RDP/SSH** access to your VMs directly from the Azure Portal.
* **Security**: You don't need to expose a Public IP on your VM. Traffic goes over SSL (Port 443).

---

## 3. Connectivity and Routing

How to connect different networks and control traffic paths.

### VNet Peering
Connects two VNets seamlessly so they behave as one.
* **Traffic**: Travels over the Azure backbone network (fast, secure), not the public internet.
* **Non-Transitive**: If VNet A peers with VNet B, and VNet B peers with VNet C, **A cannot talk to C** unless you explicitly peer A and C.

### User Defined Routes (UDR)
By default, Azure handles system routing. UDRs allow you to override this.
* **Route Table**: A resource where you define custom routes.
* **Next Hop**: Defines where traffic goes next. Common types:
    * **Virtual Appliance**: Sending traffic to a Firewall (NVA).
    * **Internet**: Forcing traffic out.
    * **None**: Dropping traffic (Blackhole).

---

## 4. Load Balancing

Distributing network traffic across multiple servers.

### Azure Load Balancer (Layer 4)
Operates at the Transport Layer (TCP/UDP). It distributes traffic to instances in a backend pool.
* **Public Load Balancer**: Distributes internet traffic to VMs.
* **Internal Load Balancer**: Distributes traffic inside a VNet (e.g., Web tier to Database tier).
* **Health Probes**: Checks if the backend VM is healthy. If not, it stops sending traffic to it.
* **Inbound NAT Rules**: Used to forward traffic to a specific port on a specific backend VM (e.g., RDP to a specific machine).

---

## 5. DNS Resolution

Translating domain names to IP addresses.

### Azure DNS (Public)
Hosting your public domains (e.g., `mystore.com`) on Azure's global name servers.

### Private DNS Zones
Resolving hostnames within a VNet or across peered VNets without creating a custom DNS server.
* **Scenario**: You want your database to be accessible via `db.internal.corp` instead of an IP address.
* **Auto-Registration**: Automatically creates DNS records when a new VM is deployed in the linked VNet.

### Custom DNS
If you need to resolve on-premises names or use Active Directory (AD DS), you configure the VNet to use your own **DNS Server IPs** instead of Azure's default resolver.

---

## 6. Monitoring & Troubleshooting

**Network Watcher** is a regional service that provides tools to monitor and diagnose network health.

### Key Tools
* **IP Flow Verify**: Checks if a packet is allowed or denied to/from a specific IP (tells you which NSG rule is blocking it).
* **Next Hop**: Tells you where traffic is being routed (helps debug UDR issues).
* **Connection Monitor**: Monitors connectivity between two points (e.g., VM to VM, or VM to Website) over time.
* **NSG Flow Logs**: Captures information about IP traffic flowing through an NSG. Useful for compliance and auditing.

---

## 7. PaaS Integration

### VNet Integration
Allows PaaS services (like **Azure Web Apps**) to access resources inside a Private VNet (like a SQL Database in a private subnet).
* The Web App remains public, but its *backend traffic* flows securely into the VNet.

---