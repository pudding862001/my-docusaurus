---
title: Ch 6 Bicep language for deploying resources
sidebar_label: Ch 6 Bicep
sidebar_position: 6
---

In this section, we transition from the verbose JSON syntax of ARM templates to **Bicep**, a domain-specific language (DSL) that offers a cleaner, simpler syntax for deploying Azure resources. Bicep is a transparent abstraction over ARM templates.

---

## 1. Introduction to Bicep

**Bicep** is designed to be easier to read and write than JSON, while offering the same capabilities.



* **Transpilation**: Bicep code (`.bicep`) is compiled into standard ARM Template JSON (`.json`) before being sent to Azure. Azure itself only understands JSON; Bicep is a tool for *humans*.
* **Key Benefits**:
    * **Less Syntax**: No commas, no quotes around properties, no curly braces hell.
    * **Modules**: Better support for modularizing code.
    * **Automatic Dependency Management**: Bicep automatically detects dependencies (e.g., a NIC needs a VNet), reducing the need for explicit `dependsOn`.

---

## 2. Basic Syntax & Structure

A Bicep file is much more concise. Here is the general structure:

```bicep
// 1. Parameters (Input)
param location string = resourceGroup().location
param adminUsername string

// 2. Resources (The Core)
resource stg 'Microsoft.Storage/storageAccounts@2019-06-01' = {
  name: 'uniquestoragename'
  location: location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
}

// 3. Outputs (Return values)
output storageId string = stg.id
```

* **`resource` keyword**: Defines a resource.
* **Symbolic Name**: (e.g., `stg` above) This name is used to reference the resource *inside* the Bicep file. It is NOT the actual Azure resource name.
* **String Interpolation**: You can easily insert variables into strings using `${variableName}`.

---

## 3. Loops and Conditionals

Bicep simplifies complex logic like loops.

### Loops (Multiple Instances)
Instead of the complex `copy` object in JSON, Bicep uses a simple `for` loop syntax.

```bicep
// Create 3 Storage Accounts
resource storageAccounts 'Microsoft.Storage/storageAccounts@2019-06-01' = [for i in range(0, 3): {
  name: 'stg${i}'
  location: location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
}]
```

---

## 4. Dependencies

In Bicep, dependencies are usually **implicit**.
* If Resource B uses a property of Resource A (e.g., `nic.properties.ipConfigurations[0].properties.subnet.id = vnet.properties.subnets[0].id`), Bicep *knows* that the VNet must be created before the NIC.
* **Explicit Dependency**: You can still use `dependsOn: [ resourceSymbolicName ]` if necessary, but it's rare.

---

## 5. Deployment

You can deploy Bicep files directly using Azure CLI or PowerShell without manually compiling them to JSON first (the tools handle it in the background).

**Azure CLI Command**:
```bash
az deployment group create \
  --resource-group MyRG \
  --template-file main.bicep \
  --parameters adminUsername=adminUser
```

**PowerShell Command**:
```powershell
New-AzResourceGroupDeployment `
  -ResourceGroupName "MyRG" `
  -TemplateFile "main.bicep"
```

---

## 6. Modules (Reusability)

Bicep allows you to call other Bicep files as **Modules**. This is powerful for creating standard "building blocks" (e.g., a standard VNet configuration) that can be reused across different projects.

```bicep
// Calling a module
module myVNet 'modules/vnet.bicep' = {
  name: 'deployVNet'
  params: {
    location: location
  }
}
```

---