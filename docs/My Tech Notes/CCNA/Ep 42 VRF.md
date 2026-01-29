---
title: Ep 42 Cloud Computing - Virtual Routing & Forwarding (VRF)
sidebar_label: Ep 42 VRF
sidebar_position: 42
---

In this episode, we cover **Virtual Routing and Forwarding (VRF)**. VRF is a technology that allows multiple instances of a routing table to co-exist within the same router at the same time.

---

## 1. What is VRF?

VRF is often described as **"VLANs for Routers"**. Just as VLANs allow a single physical switch to be partitioned into multiple isolated Layer 2 networks, VRF allows a single physical router to be partitioned into multiple isolated Layer 3 routing instances.

* **Independence**: Each VRF maintains its own separate routing table.
* **Isolation**: By default, traffic cannot move between different VRFs, providing inherent security between different departments or customers.



---

## 2. Solving the Overlapping IP Problem

One of the most critical use cases for VRF is supporting customers or departments that use the same private IP address ranges.

* **Traditional Routing Conflict**: Without VRF, a router cannot have two different paths for the same IP subnet (e.g., 192.168.1.0/24) in a single routing table.
* **The VRF Solution**: Because each VRF has its own table, the router can manage multiple `192.168.1.0/24` networks simultaneously without any conflict or traffic leaking between them.

---

## 3. VRF Configuration (VRF-Lite)

Implementing VRF without MPLS is commonly referred to as **VRF-Lite**. The configuration involves defining the VRF instance and then assigning it to specific interfaces.

### Step 1: Create the VRF Instance
```bash
Router(config)# ip vrf CUSTOMER_A
Router(config-vrf)# rd 1:1  # Route Distinguisher
```


### Step 2: Assign an Interface to the VRF
When an interface is assigned to a VRF, its IP address is removed, and it must be re-configured within the VRF context.
```bash
Router(config)# interface g0/0
Router(config-if)# ip vrf forwarding CUSTOMER_A
Router(config-if)# ip address 192.168.1.1 255.255.255.0
```


---

## 4. Verification and Troubleshooting

Commands used for standard routing must be modified to specify which VRF instance you are investigating.

* **`show ip vrf`**: Displays a summary of all defined VRFs and the interfaces assigned to each.
* **`show ip route vrf [NAME]`**: Displays the specific routing table for the named instance.
* **`ping vrf [NAME] [IP]`**: Initiates a ping from the perspective of a specific VRF routing table.
* **`show ip protocols vrf [NAME]`**: Verifies which routing protocols (like OSPF or EIGRP) are running within the VRF instance.

---

## 5. Summary: VRF vs. VLAN

| Feature | VLAN (Layer 2) | VRF (Layer 3) |
| :--- | :--- | :--- |
| **Separation** | MAC Address Table. | Routing Table. |
| **Purpose** | Isolated broadcast domains. | Isolated routing instances. |
| **Conflict Handling** | Same MACs in different VLANs. | Overlapping IPs in different VRFs. |

---