---
title: Ch 5 Azure Resource Manager Templates
sidebar_label: Ch 5 ARM Templates
sidebar_position: 5
---

In this section, we explore **Azure Resource Manager (ARM) Templates**, the native Infrastructure as Code (IaC) solution for Azure. We learn how to define infrastructure declaratively using **JSON**, manage dependencies, and use parameters for reusable deployments.

---

## 1. What are ARM Templates?

ARM Templates are **JSON (JavaScript Object Notation)** files that define the infrastructure and configuration for your project.

* **Declarative Syntax**: You state "what you want" (e.g., "I want a VM"), without writing the step-by-step programming commands to create it.
* **Idempotent**: You can deploy the same template multiple times. If the resource already exists and matches the configuration, nothing changes. If it's missing, it's created.
* **Orchestration**: Azure Resource Manager handles the deployment order automatically (unless dependencies are specified).

---

## 2. Template Structure



A standard ARM template has a specific skeleton. Understanding these sections is critical for the exam.

```json
{
  "$schema": "[https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#](https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#)",
  "contentVersion": "1.0.0.0",
  "parameters": { ... },
  "variables": { ... },
  "resources": [ ... ],
  "outputs": { ... }
}
```

* **$schema**: Defines the location of the JSON schema file that describes the version of the template language.
* **contentVersion**: A version number for your internal use (e.g., 1.0.0.1).
* **parameters**: Values provided **at runtime** (when you deploy). Makes the template reusable (e.g., asking for `adminUsername`).
* **variables**: Values used **internally** to simplify the template. (e.g., combining a prefix with a region code).
* **resources**: The actual Azure resources to deploy (Storage, VM, VNet). This is the core section.
* **outputs**: Values returned **after deployment** (e.g., the Public IP address of the new VM).

---

## 3. Parameters and Security

Hardcoding values (like passwords) in templates is a security risk and bad practice.

* **Parameters File**: A separate JSON file (e.g., `azuredeploy.parameters.json`) that stores environment-specific values (Dev vs. Prod). You pass this file during deployment.
* **Secure String**: A parameter type used for sensitive data (passwords, secrets). Azure will **not** expose these values in the deployment logs.

    ```json
    "adminPassword": {
        "type": "secureString"
    }
    ```

---

## 4. Dependencies and Ordering

Azure tries to deploy resources in parallel for speed. However, some resources must exist before others (e.g., a VNet must exist before a NIC).

* **`dependsOn`**: An element in the resource block that tells ARM to wait for another resource to finish first.
    * *Example*: The Virtual Machine resource will have `"dependsOn": [ "Microsoft.Network/networkInterfaces/..." ]`.
    * *Implicit Dependency*: If you reference a resource ID dynamically using functions like `resourceId()`, ARM usually figures it out, but explicit `dependsOn` is safer.

---

## 5. Advanced Features

### Copy Loops (Multiple Instances)
If you need 10 Storage Accounts, you don't write the code 10 times. You use the `copy` element.

* **Syntax**:
    ```json
    "copy": {
        "name": "storageLoop",
        "count": 5
    }
    ```
* This iterates through the resource definition `count` times.

### Custom Script Extensions
Automates post-deployment tasks inside the VM.
* **Usage**: You define a resource of type `Microsoft.Compute/virtualMachines/extensions`. It points to a script (PowerShell/Bash) stored in a storage account or GitHub, which runs immediately after the VM is provisioned.

---

## 6. Deployment Tools

To deploy an ARM template, you typically use PowerShell or CLI.

**PowerShell Command**:

```powershell
New-AzResourceGroupDeployment `
  -ResourceGroupName "MyRG" `
  -TemplateFile "azuredeploy.json" `
  -TemplateParameterFile "azuredeploy.parameters.json"
```

* **Validation**: It's good practice to run `Test-AzResourceGroupDeployment` first to check for syntax errors without actually deploying.

---