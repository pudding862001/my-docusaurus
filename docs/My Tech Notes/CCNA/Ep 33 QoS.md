---
title: Ep 33 Quality of Service (QoS)
sidebar_label: Ep 33 QoS
sidebar_position: 33
---

In this episode, we explore **Quality of Service (QoS)**. QoS refers to the set of technologies used to manage network resources by providing different priorities to different types of data traffic, ensuring that critical applications like voice and video receive the necessary bandwidth and low latency.

---

## 1. Network Traffic Characteristics

Different types of traffic have different requirements for optimal performance. Understanding these metrics is the first step in QoS design.

* **Bandwidth**: The overall capacity of the link.
* **Delay (Latency)**: The time it takes for a packet to travel from source to destination. For interactive voice, one-way delay should be **≤ 150 ms**.
* **Jitter**: Variation in the delay of received packets. High jitter can degrade voice quality. IP phones use a "jitter buffer" to mitigate this, but jitter should ideally remain **≤ 30 ms**.
* **Loss**: The percentage of packets that fail to reach their destination. For voice, loss should be **≤ 1%**.

---

## 2. Voice VLANs and IP Phones

IP phones typically share a single switch port with a PC to save cabling costs. Separating voice and data traffic into different VLANs is a best practice.

* **Configuration**: Switches use CDP to tell the IP phone which VLAN to use for voice traffic.
* **Tagging**: PC traffic is typically untagged (Access VLAN), while voice traffic is tagged with a VLAN ID (Voice VLAN).
```bash
Router(config-if)# switchport mode access
Router(config-if)# switchport access vlan 10
Router(config-if)# switchport voice vlan 11
```


---

## 3. Classification and Marking

Classification involves identifying and categorizing traffic, while marking colors the traffic by changing fields in the packet header so other devices can recognize its priority.

* **Methods**: Traffic can be classified using ACLs or **NBAR** (Network Based Application Recognition), which performs deep packet inspection up to Layer 7.
* **Layer 2 Marking (PCP/CoS)**: Uses 3 bits in the 802.1Q tag, allowing for 8 priority values (0-7). Voice is typically marked as **CoS 5**.
* **Layer 3 Marking (DSCP)**: Uses the Differentiated Services Code Point field in the IP header for more granular priority levels.

---

## 4. Congestion Management (Queuing and Scheduling)

When a device's outbound interface is congested, packets are held in queues. The scheduler determines which queue to empty next.

* **Tail Drop**: When a queue is full, new packets are simply dropped. This can lead to **TCP Global Synchronization**, where all TCP hosts decrease their window size simultaneously, causing network underutilization.
* **RED (Random Early Detection)**: Prevents tail drop by randomly dropping packets once a queue reaches a certain threshold, preventing global sync.
* **Scheduling Algorithms**:
    * **Round Robin**: Takes packets from each queue in turn.
    * **Strict Priority**: Always services the high-priority queue until it is empty. This is ideal for voice but can "starve" other queues if not policed.

---

## 5. Traffic Shaping and Policing

Both mechanisms are used to limit the rate of traffic, but they handle excess traffic differently.

| Feature | Traffic Shaping | Traffic Policing |
| :--- | :--- | :--- |
| **Action** | Buffers excess packets in a queue. | Drops excess packets (or re-marks them). |
| **Application** | Typically applied to **outbound** traffic. | Typically applied to **inbound** traffic. |
| **Traffic Flow** | Results in a smoother, more consistent flow. | Can be "bursty" as it strictly enforces a limit. |

---