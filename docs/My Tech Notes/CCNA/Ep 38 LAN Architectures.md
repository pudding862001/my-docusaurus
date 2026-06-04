---
title: Ep 38 LAN Architectures
sidebar_label: Ep 38 LAN Architectures
sidebar_position: 38
---

In this episode, we explore common network topologies and the hierarchical design architectures used in different environments, such as Campus LANs, Data Centers (Spine-Leaf), and SOHO networks.

---

## 1. Common Topologies

Network topology refers to how devices are connected, which determines the data paths and the level of redundancy.

* **Star Topology**: All devices connect to a single central node.
* **Full Mesh Topology**: Every device connects to every other device, providing the highest level of redundancy.
* **Partial Mesh Topology**: Some devices are connected to each other, but not all, balancing cost and redundancy.

---

## 2. 3-Tier Campus LAN Design

Large enterprise networks typically use a hierarchical three-tier design to improve scalability and management.

| Layer | Description |
| :--- | :--- |
| **Access Layer** | Where end hosts (PCs, cameras) connect. Tasks like QoS marking, Port Security, and DAI are performed here. |
| **Distribution Layer** | Aggregates connections from Access Layer switches. It is usually the boundary between Layer 2 and Layer 3. |
| **Core Layer** | Used in large LANs to connect multiple Distribution layers. It focuses on high-speed switching; CPU-intensive operations should be avoided here. |

---

## 3. 2-Tier / Collapsed Core Design

In smaller networks, the Core and Distribution layers are merged into a single layer to reduce costs.

* **Collapsed Core**: A design where the core layer is omitted, and its functions are handled by the distribution switches.
* **Benefit**: Ideal for small to medium campus environments that do not require the scale of a full 3-tier architecture.

---

## 4. Data Center Architecture: Spine-Leaf

Traditional 3-tier designs can cause bottlenecks for "East-West" traffic within a data center.

* **North-South Traffic**: Data entering or leaving the data center.
* **East-West Traffic**: Traffic between servers within the data center, which has increased due to virtualization.
* **Spine-Leaf Design**:
    * **Consistent Latency**: Every server is the same number of hops away, providing stable latency for East-West traffic.
    * **Scalability**: New Leaf switches can be added easily by connecting them to every Spine switch.
    * **Load Balancing**: Traffic load is randomly balanced across all Spine switches.



---

## 5. SOHO vs. Enterprise Networks

Network designs vary significantly based on the size of the office environment.

* **SOHO (Small Office Home Office)**: Typically uses a single "all-in-one" device (Home Router) that combines routing, switching, and wireless access point functions.
* **Enterprise Networks**: Use dedicated, specialized hardware for each function (separate routers, switches, and APs) organized into hierarchical layers.

---