---
sidebar_label: Logging and Monitoring
sidebar_position: 10
---

# Logging, Monitoring, and JsonPath

Effective observability is the key to maintaining a healthy Kubernetes cluster. This chapter covers how to access logs, monitor resource usage, and use JsonPath to filter complex API responses—a must-have skill for the **CKA exam**.

---

## 1. Logging in Kubernetes
Logs are the first place to look when a Pod is failing. Kubernetes provides built-in commands to stream and manage logs.



### Basic Log Commands
* **Get logs from a Pod**:
    ```bash
    kubectl logs [pod-name]
    ```
* **Stream logs (Tail -f)**:
    ```bash
    kubectl logs -f [pod-name]
    ```
* **Logs from a multi-container Pod**:
    ```bash
    kubectl logs [pod-name] -c [container-name]
    ```
* **Get logs from a previous instance** (Useful if a container crashed and restarted):
    ```bash
    kubectl logs [pod-name] --previous
    ```

---

## 2. Cluster Events
Events provide high-level information about what is happening in the cluster (e.g., Pod scheduling, image pulling, node readiness).

* **View all events**: `kubectl get events`
* **Sort events by time**:
    ```bash
    kubectl get events --sort-by='.lastTimestamp'
    ```

---

## 3. Monitoring with Metrics Server
Kubernetes doesn't store historical resource data by default. You need the **Metrics Server** to see real-time CPU and Memory usage.



* **Check Node resource usage**:
    ```bash
    kubectl top nodes
    ```
* **Check Pod resource usage**:
    ```bash
    kubectl top pods
    ```
* **CKA Tip**: If `kubectl top` returns an error, the Metrics Server might not be installed or is failing. This is a common troubleshooting scenario.

---

## 4. JsonPath Filtering (Exam Essential)
JsonPath allows you to filter and format the output of `kubectl` to extract specific values.

### Common Patterns
* **List all Pod names**:
    ```bash
    kubectl get pods -o jsonpath='{.items[*].metadata.name}'
    ```
* **List Node names and their Internal IPs**:
    ```bash
    kubectl get nodes -o jsonpath='{.items[*].status.addresses[?(@.type=="InternalIP")].address}'
    ```
* **Format with newlines**:
    ```bash
    kubectl get pods -o jsonpath='{range .items[*]}{.metadata.name}{"\n"}{end}'
    ```

---

## 5. Troubleshooting with Logs & Monitoring
When a Pod is stuck in `CrashLoopBackOff`:
1.  **Check Events**: `kubectl describe pod [pod-name]` to see if there are pulling or scheduling errors.
2.  **Check Logs**: `kubectl logs [pod-name]` to see the application's internal errors.
3.  **Check Resources**: `kubectl top pod [pod-name]` to see if it is hitting CPU/Memory limits (OOMKilled).

---

## 6. CKA Exam Survival Tips
1.  **JsonPath Mastery**: During the exam, you might be asked to "Save the names of all nodes to a file". JsonPath is the fastest way to do this.
2.  **Container Context**: In multi-container Pods, forgetting the `-c` flag is a common mistake. If the Pod has an InitContainer, you can also check its logs specifically.
3.  **The `-A` Flag**: Remember to use `kubectl get pods -A` if you can't find the Pod you're looking for; it might be in a different namespace.