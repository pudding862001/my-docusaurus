---
title: Ep 4 Intro to the CLI
sidebar_label: Ep 4 Intro to the CLI
sidebar_position: 4
---

In this episode, we focus on how to physically connect to a Cisco device to access the **Command Line Interface (CLI)**, which is the first step for any network configuration.

---

## 1. Cisco IOS
* **Cisco IOS** stands for **Internetwork Operating System**.
* It is the software used on most Cisco routers and switches to manage network functions.
* **Note**: This is entirely different from Apple's mobile operating system (iOS).

---

## 2. Connecting to a Cisco Device
To perform the initial configuration, you need a direct physical connection to the device's **Console port**.



* Modern switches like the **Catalyst 2960-S** offer two types of console ports:
    * **RJ45 Console Port** (Standard)
    * **USB Mini-B Console Port** (Newer)
* You can use either port to establish a management session with your computer.

---

## 3. The Rollover Cable
The standard cable used for console connections is called a **Rollover cable** (usually light blue).



* It is called "rollover" because the pinouts on one end are exactly reversed on the other end.
* **Rollover Pinout Mapping**:

| End A (Pin) | End B (Pin) |
| :--- | :--- |
| 1 | 8 |
| 2 | 7 |
| 3 | 6 |
| 4 | 5 |
| 5 | 4 |
| 6 | 3 |
| 7 | 2 |
| 8 | 1 |

---

## 4. Terminal Emulation Settings (PuTTY)
To interact with the CLI, you need terminal emulation software like **PuTTY**. The software settings must match the Cisco device's default serial requirements.

### Standard "8/N/1" Configuration:
* **Baud rate (Speed)**: 9600
* **Data bits**: 8
* **Parity**: None (N)
* **Stop bits**: 1
* **Flow control**: None

Once these settings are applied and the serial connection is opened, you will be able to see the Cisco IOS command prompt.

---