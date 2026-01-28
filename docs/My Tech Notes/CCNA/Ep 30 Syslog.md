---
title: Ep 30 Syslog
sidebar_label: Ep 30 Syslog
sidebar_position: 30
---

In this episode, we cover **Syslog**, an industry-standard protocol for message logging. Syslog allows network devices to generate and send notification messages about system events to various destinations for monitoring and troubleshooting.

---

## 1. Overview of Syslog

Syslog is used to capture system events, such as interface status changes or configuration updates.

* **Storage Destinations**: Log messages can be displayed in the Command Line Interface (CLI), saved in the device's RAM (buffered logging), or sent to an external Syslog server.
* **Standardization**: While it is a standard protocol, different vendors (e.g., Cisco vs. Juniper) may have slightly different definitions for severity levels.

---

## 2. Syslog Message Format

A standard Cisco Syslog message follows a specific structure:

**`seq: timestamp: %facility-severity-MNEMONIC: description`**

* **Sequence Number**: Indicates the order in which messages were generated.
* **Timestamp**: Indicates the exact date and time (or system uptime) when the event occurred.
* **Facility**: Identifies the specific hardware or software process that generated the message.
* **Severity**: A number (0–7) indicating the importance or impact of the event.
* **Mnemonic**: A short, capitalized code that identifies the specific event (e.g., `LINK`, `CONFIG_I`).
* **Description**: Detailed information about the reported event.

---

## 3. Syslog Severity Levels

Syslog defines eight severity levels, ranging from critical system failures to debugging information.

| Level | Keyword | Description |
| :--- | :--- | :--- |
| **0** | **Emergency** | System is unusable. |
| **1** | **Alert** | Action must be taken immediately. |
| **2** | **Critical** | Critical conditions. |
| **3** | **Error** | Error conditions. |
| **4** | **Warning** | Warning conditions. |
| **5** | **Notice** | Normal but significant conditions (Notifications). |
| **6** | **Informational** | General informational messages. |
| **7** | **Debugging** | Detailed messages used for troubleshooting. |

> **Mnemonic to remember levels**: "Every Awesome Cisco Engineer Will Need Ice cream Daily".

---

## 4. Configuration and Customization

Cisco IOS allows you to customize how logs are generated and where they are sent.

### Global Logging Commands
```bash
# Send logs to the console line
Router(config)# logging console [severity]

# Send logs to terminal lines (VTY/SSH)
Router(config)# logging monitor [severity]

# Save logs in the local RAM buffer (best for performance)
Router(config)# logging buffered [size] [severity]

# Send logs to an external Syslog server
Router(config)# logging host [IP_ADDRESS]
```


### System Services for Logging
* **`logging synchronous`**: Prevents log messages from interrupting your command typing by moving the cursor to a new line after the message.
* **`service timestamps log datetime`**: Configures logs to show the actual date and time instead of system uptime.
* **`service sequence-numbers`**: Enables the display of sequence numbers at the beginning of each log message.

---

## 5. Verification Commands

* **`show logging`**: Displays the contents of the logging buffer and current logging configuration, including which destinations are active and their severity filters.
* **`show clock detail`**: Verifies if the time source is authoritative, which is critical for accurate log timestamps.

---