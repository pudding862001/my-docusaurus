---
sidebar_label: Troubleshooting
sidebar_position: 11
---

# Kubernetes Troubleshooting: Applications, Nodes, and Control Plane

Troubleshooting is the most critical skill for a Kubernetes Administrator. In the **CKA exam**, you will be presented with "broken" clusters and expected to identify and fix the issues under time pressure. 



---

## 1. Application Troubleshooting
When a Pod is not running as expected, follow this diagnostic sequence:

### Step 1: Check Status and Events
```bash
kubectl get pods
kubectl describe pod [pod-name]
```
* **Pending**: Usually a scheduling issue (Resource limits, Node affinity, or Taints).
* **ContainerCreating / ImagePullBackOff**: Network issues, wrong image name, or missing image pull secrets.
* **CrashLoopBackOff**: The application is starting but immediately crashing (check logs).

### Step 2: Check Logs
```bash
kubectl logs [pod-name]
kubectl logs [pod-name] --previous # Check logs of the crashed instance
```

---

## 2. Control Plane Troubleshooting
The control plane components (API Server, Scheduler, Controller Manager) usually run as **Static Pods** on the master node.

* **Manifest Path**: `/etc/kubernetes/manifests/`
    * If you make a typo in these YAML files, the component will crash, and `kubectl` might stop responding.
* **Check Logs via Docker/CRI**:
    If `kubectl` is down, use the container runtime CLI:
    ```bash
    # For containerd
    crictl ps
    crictl logs [container-id]
    ```
* **Check System Logs**:
    ```bash
    journalctl -u kubelet -f
    ```

---

## 3. Worker Node Troubleshooting
If a Node status is `NotReady`, it is likely a problem with the **Kubelet** or the **Container Runtime**.



### Diagnostic Steps on the Affected Node:
1.  **Check Kubelet Status**:
    ```bash
    systemctl status kubelet
    ```
2.  **Check Kubelet Logs**:
    ```bash
    journalctl -u kubelet | tail -n 50
    ```
3.  **Check Container Runtime**:
    ```bash
    systemctl status containerd
    ```
4.  **Check Network Configuration (CNI)**:
    Ensure files exist in `/etc/cni/net.d/` and that the CNI plugin (e.g., Flannel/Calico) is running.

---

## 4. Networking Troubleshooting
If Pods can't communicate:
* **Check Service Selectors**: Ensure the Service's `selector` matches the Pod's `labels`.
* **Check DNS**: Use a `busybox` pod to see if `nslookup` works for the service name.
* **Check NetworkPolicies**: Ensure there isn't a policy blocking the traffic.

---

## 5. CKA Exam Survival Tips: Troubleshooting
1.  **Don't Panic**: If `kubectl` doesn't work, SSH into the master node and check if the API server container is running.
2.  **Kubelet is Key**: Most "Node NotReady" issues are fixed by starting or enabling the kubelet (`systemctl enable --now kubelet`).
3.  **Typos in Manifests**: If you edit a static pod manifest and it disappears, check the file for indentation errors.
4.  **The "Pre-Check"**: Always run `kubectl get nodes` and `kubectl get pods -A` at the start of every question to understand the current state.