---
title: Ep 35 Port Security
sidebar_label: Ep 35 Port Security
sidebar_position: 35
---

In this episode, we cover **Port Security**, a Layer 2 security feature that allows network administrators to control which specific devices (based on their MAC addresses) are permitted to access the network through a switch port.

---

## 1. Overview of Port Security

Port security is used to prevent unauthorized devices from connecting to the network and to mitigate common Layer 2 attacks.

* **Access Control**: It limits the source MAC addresses that are allowed to enter a specific interface.
* **Default Behavior**: By default, only **one** MAC address is allowed per port if enabled.
* **Attack Mitigation**: It is highly effective at protecting against **DHCP starvation attacks** and **MAC address spoofing** by limiting the total number of MACs allowed on a port.



---

## 2. MAC Address Types

There are three ways a switch can learn and store secure MAC addresses:

* **Static**: Manually configured by the administrator. These are stored in the address table and added to the running configuration.
* **Dynamic**: Learned automatically from the first frame that enters the port. These are stored only in the address table and are lost if the switch restarts.
* **Sticky**: Dynamically learned addresses that are "converted" into permanent entries. They are added to the running configuration and will persist after a restart if the configuration is saved.

---

## 3. Violation Modes

When a device with an unauthorized MAC address connects to a secured port, or the maximum number of allowed addresses is exceeded, a **violation** occurs. The switch can respond in three ways:

| Mode | Traffic Forwarded? | Send Log/SNMP? | Increment Counter? | Status |
| :--- | :--- | :--- | :--- | :--- |
| **Shutdown** (Default) | No. | Yes. | Yes. | **err-disabled**. |
| **Restrict** | No. | Yes. | Yes. | Up. |
| **Protect** | No. | No. | No. | Up. |

---

## 4. Configuration and Sticky MACs

To enable and configure port security, follow these steps:

### Basic Configuration
```bash
# Set port to access mode (Port security doesn't work on dynamic ports)
Router(config-if)# switchport mode access

# Enable port security
Router(config-if)# switchport port-security

# Set the maximum number of allowed MACs (e.g., 2)
Router(config-if)# switchport port-security maximum 2
```


### Sticky MAC Configuration
```bash
# Enable the switch to "stick" dynamically learned MACs into the config
Router(config-if)# switchport port-security mac-address sticky
```


---

## 5. Verification Commands

Monitoring port security status is vital for identifying unauthorized access attempts.

* **`show port-security interface [ID]`**: Shows the specific security settings, violation mode, and count for an interface.
* **`show port-security`**: Provides a summary of all ports with security enabled.
* **`show mac address-table secure`**: Displays all MAC addresses that have been secured on the switch.

---