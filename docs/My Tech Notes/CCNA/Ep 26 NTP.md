---
title: Ep 26 Network Time Protocol (NTP)
sidebar_label: Ep 26 NTP
sidebar_position: 26
---

In this episode, we cover **Network Time Protocol (NTP)**. Accurate timekeeping is essential for network operations, security auditing, and troubleshooting across distributed devices.

---

## 1. The Importance of Accurate Time

Having synchronized and accurate time across all network devices is critical for several reasons:
* **Troubleshooting**: Accurate timestamps in system logs (`show logging`) allow administrators to correlate events across different devices.
* **Security Auditing**: Knowing the exact time an event occurred is vital for forensic analysis and legal admissibility.
* **Scalability**: Manually configuring time on every device is not scalable, and internal hardware clocks inevitably drift over time.

---

## 2. Basic Time Configuration in Cisco IOS

Before configuring NTP, it is important to understand how Cisco devices manage time manually.

### Software vs. Hardware Clock
* **Software Clock (Clock)**: The time used by the operating system. Configured with `clock set hh:mm:ss {day|month} {month day} year`.
* **Hardware Calendar (Calendar)**: A battery-backed clock that maintains time even when the device is powered off. Configured with `calendar set ...`.

### Time Zone and Daylight Saving
* **Time Zone**: Configured using `clock timezone [NAME] [HOURS_OFFSET]`.
* **Daylight Saving (Summer Time)**: Configured using `clock summer-time [NAME] recurring ...` to adjust for seasonal changes.

---

## 3. NTP Hierarchy and Stratum

NTP uses a hierarchical system of time sources to distribute accurate time across a network.

* **Stratum 0**: These are high-precision reference clocks, such as atomic clocks or GPS clocks. They are not directly connected to the network.
* **Stratum 1**: Primary servers that are directly connected to a Stratum 0 source.
* **Stratum 2 and Above**: Secondary servers that receive their time from Stratum 1 or other Stratum 2 servers. The Stratum level increases by one with each hop away from the reference clock.
* **Maximum Stratum**: Stratum 15 is the highest reliable level; Stratum 16 is considered "unsynchronized" or unreliable.

---

## 4. NTP Operation Modes

Cisco devices can function in three main NTP modes:

| Mode | Description |
| :--- | :--- |
| **Server Mode** | The device provides time information to other clients. |
| **Client Mode** | The device requests time from a server to synchronize its own clock. |
| **Symmetric Active (Peer)** | Devices at the same Stratum level synchronize with each other to improve accuracy and redundancy. |

---

## 5. Configuration and Verification

### Basic NTP Configuration
```bash
# Set an NTP server to sync from
Router(config)# ntp server 216.239.35.0 [prefer]

# Update the hardware calendar with NTP time
Router(config)# ntp update-calendar

# Configure a device to act as an NTP master (if no upstream server is available)
Router(config)# ntp master 8
```


### NTP Authentication (Optional)
Authentication ensures that a client only synchronizes with a trusted and intended server.
```bash
Router(config)# ntp authenticate
Router(config)# ntp authentication-key 1 md5 [key_string]
Router(config)# ntp trusted-key 1
Router(config)# ntp server [IP_ADDRESS] key 1
```


### Verification Commands
```bash
# View all NTP associations and their status (Stratum, reachability, etc.)
show ntp associations

# View the current synchronization status and Stratum level
show ntp status

# View the time and the time source (User, NTP, etc.)
show clock detail
```


---