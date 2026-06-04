---
title: Ep 37 Dynamic ARP Inspection (DAI)
sidebar_label: Ep 37 DAI
sidebar_position: 37
---

In this episode, we cover **Dynamic ARP Inspection (DAI)**. DAI is a Layer 2 security feature that validates ARP packets in a network to prevent ARP spoofing and Man-in-the-Middle (MitM) attacks.

---

## 1. Review of ARP and Potential Vulnerabilities

ARP (Address Resolution Protocol) is used to map a known IP address to a MAC address. 

* **The Process**: Typically involves an ARP Request (broadcast) and an ARP Reply (unicast).
* **The Weakness**: ARP is inherently insecure because it trusts ARP replies even if no request was sent. This is known as **Gratuitous ARP**.
* **ARP Poisoning/Spoofing**: An attacker can send malicious ARP replies to redirect traffic to their own MAC address, effectively becoming a "Man-in-the-Middle" between a victim and their gateway.



---

## 2. Overview of DAI

DAI prevents ARP poisoning by intercepting and validating all ARP packets on untrusted ports.

* **Trusted vs. Untrusted Ports**:
    * **Trusted Ports**: Interfaces leading to other switches or routers. DAI does not check ARP packets on these ports.
    * **Untrusted Ports**: Interfaces connected to end-user devices. All ARP packets on these ports must be validated.
* **Validation Logic**: The switch compares the source MAC and IP addresses in the ARP packet against the **DHCP Snooping Binding Table**. If no matching entry exists, the ARP packet is discarded.

---

## 3. Configuration of DAI

DAI requires DHCP snooping to be enabled for its binding table, or manual ARP ACLs for devices with static IPs.

### Basic Commands
```bash
# Enable DAI for specific VLANs
Router(config)# ip arp inspection vlan 10,20

# Configure a trusted port (Uplink)
Router(config-if)# ip arp inspection trust
```


### Rate Limiting and Error Recovery
To prevent DoS attacks via ARP floods, DAI limits the number of ARP packets per second on untrusted ports.
```bash
# Set rate limit (Default is 15 pps)
Router(config-if)# ip arp inspection limit rate 20

# Enable automatic recovery if a port is disabled by DAI
Router(config)# errdisable recovery cause arp-inspection
```


---

## 4. Handling Static IP Devices (ARP ACLs)

For devices that do not use DHCP, the switch will not have a binding entry. You must create an **ARP Access Control List** to manually permit their traffic.

```bash
Router(config)# arp access-list MY_STATIC_DEVICES
Router(config-arp-acl)# permit ip 192.168.1.5 mac 0011.2233.4455
Router(config)# ip arp inspection vlan 10 filter MY_STATIC_DEVICES
```


---

## 5. Verification Commands

Monitoring DAI is essential to ensure legitimate traffic is not being inadvertently blocked.

* **`show ip arp inspection`**: Displays a summary of the DAI status for each VLAN, including the number of forwarded and dropped ARP packets.
* **`show ip arp inspection interfaces`**: Shows the trust status and rate limits for all interfaces.
* **`show ip arp inspection vlan [ID]`**: Provides detailed statistics for a specific VLAN, including failure counts for source MAC or IP validation.

---