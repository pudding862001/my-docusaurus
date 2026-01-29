---
title: Ep 51 Configuration Management Tools
sidebar_label: Ep 51 Config Management Tools
sidebar_position: 51
---

In this episode, we explore the tools used to manage and automate network configurations at scale: **Ansible**, **Puppet**, and **Chef**.

---

## 1. Benefits of Configuration Management

Manual configuration via SSH is impractical in large networks. Management tools offer several advantages:
* **Standard Templates**: Maintain a "golden" configuration for all devices.
* **Consistency Check**: Automatically verify if a device's current config matches the defined standard.
* **Scalability**: Perform changes across thousands of devices simultaneously.

---

## 2. Ansible (Red Hat)

Ansible is a popular, Python-based automation tool.

* **Agentless**: No special software needs to be installed on the managed network devices. It uses **SSH** to connect and push changes.
* **Push Model**: The control node (server) initiates the connection and "pushes" the configuration to the devices.
* **Key Files**: Uses **Playbooks** written in **YAML** to define tasks.

---

## 3. Puppet

Puppet is a Ruby-based configuration management tool.

* **Agent-based**: Requires specific software (an agent) to be installed on the managed devices.
* **Pull Model**: Managed devices (clients) periodically check in with the central Puppet Master server to "pull" their required configuration.
* **Communication**: Uses **HTTPS** (REST API) on port **8140**.
* **Key Files**: Uses **Manifests** written in a Ruby-based DSL.

---

## 4. Chef

Chef is another Ruby-based tool similar to Puppet in architecture.

* **Agent-based**: Like Puppet, it requires an agent to be installed on clients.
* **Pull Model**: Clients pull their configuration from the Chef Server.
* **Communication**: Uses **HTTPS** (REST API) on port **10002**.
* **Key Files**: Uses **Recipes** and **Cookbooks** to define configuration logic.

---

## 5. Comparison Summary

| Feature | Ansible | Puppet | Chef |
| :--- | :--- | :--- | :--- |
| **Agent** | Agentless | Agent-based | Agent-based |
| **Model** | Push | Pull | Pull |
| **Protocol** | SSH (Port 22) | HTTPS (Port 8140) | HTTPS (Port 10002) |
| **Key Files** | Playbooks (YAML) | Manifests | Recipes/Cookbooks |

---