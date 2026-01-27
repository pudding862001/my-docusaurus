---
sidebar_label: API Server and Pod
sidebar_position: 3
---

# Kubernetes Core: API Server, Objects, and Pods

This guide covers the essentials of the Kubernetes API Server and Pods, specifically focused on the knowledge required for the **CKA (Certified Kubernetes Administrator)** exam.

---

## 1. The API Server
The API Server is the central management entity of the Kubernetes control plane. It exposes the Kubernetes API (REST).

* **Communication:** All components (nodes, users, internal controllers) communicate with the API Server.
* **State Store:** The API Server is **stateless**. It stores all cluster data in **etcd**.

### Useful Commands
* **Check API Endpoint:** `kubectl cluster-info`
* **View Config:** `kubectl config view`
* **Detailed Output:** Use `-v=6` or `-v=8` to see the actual API calls being made.
    * Example: `kubectl get pods -v=8`

---

## 2. API Objects
Every resource in Kubernetes (Pods, ConfigMaps, Secrets) is an **API Object**.

* **Key Fields:**
    * **Kind:** The type of object (e.g., Pod, Service).
    * **Group:** The API group (e.g., `apps`, `batch`, or `core`).
    * **Version:** The API version (e.g., `v1`, `v1beta1`).
    * **Metadata:** Information like `name`, `namespace`, and `labels`.

* **Exploration (CKA Must-Know):**
    * List all supported resources: `kubectl api-resources`
    * Explain a resource's fields:
        ```bash
        kubectl explain pod.spec.containers
        ```

---

## 3. Pods: The Smallest Unit
A Pod represents a single instance of a running process in your cluster.

### A. Creating Pods (Speed is Key)
In the CKA exam, **do not write YAML from scratch**.

* **Generate a Template (Dry Run):**
    ```bash
    kubectl run nginx-pod --image=nginx --dry-run=client -o yaml > pod.yaml
    ```
* **Apply a Manifest:**
    ```bash
    kubectl apply -f pod.yaml
    ```

### B. Troubleshooting & Operations
* **Check Status/Events:** `kubectl describe pod [pod-name]`
* **View Logs:** `kubectl logs [pod-name] -c [container-name]`
* **Interactive Shell:** ```bash
    kubectl exec -it [pod-name] -- sh
    ```

---

## 4. Pod Lifecycle & Health
* **Init Containers:** Run **before** the main containers. They must exit successfully.
* **LivenessProbe:** Restarts the container if it fails.
* **ReadinessProbe:** Removes Pod from Service endpoints if it fails.