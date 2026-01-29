---
title: Ep 47 Intro to Network Automation
sidebar_label: Ep 47 Network Automation
sidebar_position: 47
---

In this episode, we introduce **Network Automation**, exploring why it is essential for modern infrastructure, the three planes of network operation, and the shift toward Software-Defined Networking (SDN).

---

## 1. Why Network Automation?

Traditional manual configuration is becoming unsustainable in large-scale environments due to several factors.

* **Avoiding Errors**: Automation helps eliminate "typos" and human errors during configuration.
* **Efficiency**: It significantly reduces the time required for repetitive tasks.
* **Consistency**: Automation ensures that every device in the network uses the same standardized configuration.
* **Cost Reduction**: It helps reduce overall Operating Expenses (OpEx).
* **Key Tools**: Common automation tools include **Python scripts**, **SDN controllers**, and configuration management tools like **Ansible** and **Puppet**.

---

## 2. The Three Planes of Network Operation

To understand how automation and SDN work, we must divide a network device's functions into three logical planes.

| Plane | Function | Examples |
| :--- | :--- | :--- |
| **Data Plane** | Responsible for the actual forwarding of user traffic. | Forwarding packets based on IP or MAC addresses. |
| **Control Plane** | Information and protocols that tell the data plane how to forward traffic. | OSPF, routing tables, ARP tables, and STP. |
| **Management Plane** | Used by administrators to manage and monitor the device. | SSH, Telnet, SNMP, and Syslog. |



---

## 3. Hardware Processing: ASIC vs. CPU

Modern devices use different hardware components to handle traffic from different planes.

* **CPU**: Processes control and management plane traffic (e.g., routing protocol updates or SSH sessions).
* **ASIC (Application Specific Integrated Circuit)**: Specialized hardware used to process data plane traffic at maximum speed (wire speed).

---

## 4. Software-Defined Networking (SDN)

SDN is an approach that centralizes the **Control Plane** into a single software application called a **Controller**.

### Traditional vs. SDN Architecture
* **Traditional**: Each router or switch has its own independent control plane (distributed intelligence).
* **SDN**: The controller maintains a global view of the network and tells each device exactly what its routing/switching table should be.

[Image comparing traditional distributed control plane with centralized SDN controller architecture]

---

## 5. Northbound and Southbound Interfaces

The SDN controller uses specific interfaces to communicate with users and network hardware.

* **Northbound Interface (NBI)**: Allows users or applications to interact with the controller to program or monitor the network. This typically uses **REST APIs** and structured data formats like **JSON** or **XML**.
* **Southbound Interface (SBI)**: The communication protocol used by the controller to manage the network devices (e.g., OpenFlow or NETCONF).



---