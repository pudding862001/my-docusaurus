---
title: Ch 4 Azure Powershell and Azure CLI
sidebar_label: Ch 4 PowerShell & CLI
sidebar_position: 4
---

In this section, we move away from the Azure Portal (GUI) and step into the world of **Infrastructure as Code (IaC)** and automation. We explore the two primary command-line tools for managing Azure resources: **Azure PowerShell** and **Azure CLI**, along with the browser-based **Cloud Shell**.

---

## 1. Azure PowerShell



Azure PowerShell is a set of modules (cmdlets) for managing Azure resources directly from PowerShell. It is built on the **.NET Standard** and is **Object-Oriented**.

### Key Concepts
* **The `Az` Module**: The current, cross-platform module recommended for interacting with Azure (replaces the old `AzureRM`).
* **Syntax Structure**: Follows the standard `Verb-Noun` format.
    * **Verb**: What action do you want to perform? (`New`, `Get`, `Set`, `Remove`)
    * **Noun**: What resource are you targeting? (`AzResourceGroup`, `AzVM`, `AzVirtualNetwork`)
    * *Example*: `New-AzResourceGroup -Name "MyRG" -Location "EastUS"`

### Common Workflow (from Labs)
To deploy a VM using PowerShell, you typically follow this order:
1.  **Resource Group**: `New-AzResourceGroup`
2.  **Networking**:
    * `New-AzVirtualNetwork`
    * `New-AzVirtualNetworkSubnetConfig`
    * `New-AzPublicIpAddress`
    * `New-AzNetworkInterface` (Connects IP and Subnet)
3.  **Security**: `New-AzNetworkSecurityGroup` (and `Add-AzNetworkSecurityRuleConfig`)
4.  **Compute**: `New-AzVMConfig` -> `Set-AzVMOperatingSystem` -> `New-AzVM`

---

## 2. Azure Cloud Shell

**Azure Cloud Shell** is an interactive, authenticated, browser-accessible shell for managing Azure resources.

* **Access**: Available directly in the Azure Portal (top right icon) or via `shell.azure.com`.
* **Environment**: You can choose between **Bash** (Linux environment) or **PowerShell** (Windows environment).
* **Storage Requirement**:
    * The first time you launch Cloud Shell, it asks to create a **Storage Account** and **File Share**.
    * This is used to persist your `$Home` directory files across sessions.
* **Pre-installed Tools**: It comes with Azure CLI, PowerShell, Terraform, Ansible, Git, Docker, and code editors (like `code .`) pre-installed.

---

## 3. Azure CLI (Command-Line Interface)



Azure CLI is a cross-platform command-line tool to connect to Azure and execute administrative commands. It is based on **Python** and outputs **Text/JSON**.

### Key Concepts
* **Cross-Platform**: Runs natively on Windows, macOS, and Linux.
* **Syntax Structure**: Follows a hierarchical `Group Subgroup Command` format.
    * `az [service] [resource] [action]`
    * *Example*: `az group create --name MyRG --location eastus`

### Common Workflow (from Labs)
The logic is identical to PowerShell, but the commands differ:
1.  **Resource Group**: `az group create`
2.  **Networking**:
    * `az network vnet create`
    * `az network public-ip create`
    * `az network nic create`
3.  **Security**: `az network nsg create`
4.  **Compute**: `az vm create`
    * *Note*: The `az vm create` command is often "smarter" than PowerShell. It can automatically create the VNet, Public IP, and NSG for you if they don't exist, reducing the number of commands needed for a simple setup.

---

## 4. PowerShell vs. Azure CLI Comparison

Which one should you use? It often depends on your background and the task.

| Feature | Azure PowerShell | Azure CLI |
| :--- | :--- | :--- |
| **Based On** | .NET (Object-Oriented) | Python (Text/String based) |
| **Syntax Style** | `Verb-Noun` (e.g., `Get-AzVM`) | `Command Group` (e.g., `az vm list`) |
| **Output** | Returns **Objects**. Easy to pipe into other .NET commands. | Returns **JSON** strings. Easy to parse with tools like `jq`. |
| **Preferred By** | Windows Admins, .NET Developers. | Linux Admins, Bash users, DevOps engineers. |
| **Verbosity** | Explicit. You usually define every resource step-by-step. | Concise. Often has "defaults" that create dependencies automatically. |

> **Exam Tip**: You don't need to memorize every parameter for the exam, but you **MUST** be able to recognize the syntax difference.
> * If you see `New-Az...` -> It's **PowerShell**.
> * If you see `az ... create` -> It's **CLI**.

---