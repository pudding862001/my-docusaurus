---
sidebar_label: Scheduling
sidebar_position: 5
---

# Kubernetes Scheduling: Node Selection and Maintenance

Scheduling in Kubernetes is the process of ensuring that Pods are matched to Nodes so that the Kubelet can run them. For the **CKA (Certified Kubernetes Administrator)** exam, you must master how to control this placement and how to safely manage nodes during maintenance.

---

## 1. Node Selector
The simplest way to constrain a Pod to run on specific Nodes. It uses a key-value pair match.

### Step 1: Label the Node
```bash
kubectl label nodes [node-name] disktype=ssd
```

### Step 2: Add nodeSelector to Pod Spec
```yaml
spec:
  containers:
  - name: nginx
    image: nginx
  nodeSelector:
    disktype: ssd
```

---

## 2. Node Affinity
Node Affinity is a more powerful version of `nodeSelector`. It allows for complex logic like "In", "NotIn", "Exists", etc.

### Two Types (Exam Essentials):
1.  **Hard (Required)**: `requiredDuringSchedulingIgnoredDuringExecution`
    * The Pod **will not** be scheduled unless the rule is met.
2.  **Soft (Preferred)**: `preferredDuringSchedulingIgnoredDuringExecution`
    * The scheduler will **try** to find a matching node, but if none exist, it will schedule the Pod anyway.

---

## 3. Taints and Tolerations
While Affinity attracts Pods to Nodes, **Taints** allow a Node to repel a set of Pods. **Tolerations** are applied to Pods to allow (but not require) them to stay on Tainted nodes.

### Manage Taints on Nodes
* **Add a Taint:**
    ```bash
    kubectl taint nodes [node-name] key1=value1:NoSchedule
    ```
* **Taint Effects:**
    * `NoSchedule`: New Pods won't be scheduled unless they have a matching toleration.
    * `PreferNoSchedule`: Soft version of NoSchedule.
    * `NoExecute`: Existing Pods without toleration will be **evicted** immediately.
* **Remove a Taint:**
    ```bash
    kubectl taint nodes [node-name] key1=value1:NoSchedule-
    ```

### Add Toleration to Pod Spec
```yaml
spec:
  tolerations:
  - key: "key1"
    operator: "Equal"
    value: "value1"
    effect: "NoSchedule"
```

---

## 4. Node Maintenance: Cordon and Drain
These commands are vital for cluster maintenance (e.g., kernel upgrades or hardware replacement).

### Cordon
Marks the node as `Unschedulable`. Existing Pods remain, but no new Pods will be placed on the node.
```bash
kubectl cordon [node-name]
```

### Drain
Safely evicts all Pods from the node before you take it down.
```bash
kubectl drain [node-name] --ignore-daemonsets --delete-emptydir-data
```
* **--ignore-daemonsets**: Required because DaemonSets cannot be "evicted" (they run on every node).
* **--delete-emptydir-data**: Required if any Pod uses local `emptyDir` storage, as that data will be lost.

### Uncordon
Brings the node back into service.
```bash
kubectl uncordon [node-name]
```

---

## 5. Manual Scheduling
If you need to bypass the Kubernetes Scheduler entirely, you can manually assign a Pod to a node by setting the `nodeName` field in the Pod spec.
```yaml
spec:
  nodeName: [node-name]
```

---

## 6. CKA Exam Tips
* **Identify Labels:** Use `kubectl get nodes --show-labels` to verify your target nodes.
* **Troubleshooting Pending Pods:** If a Pod is stuck in `Pending`, check `kubectl describe pod [pod-name]`. It usually indicates a scheduling failure due to Taints or Affinity mismatches.
* **Static Pods:** These are managed directly by the Kubelet, not the Scheduler. You can find their manifests in `/etc/kubernetes/manifests` on the worker node.
* **Speed:** Use `alias k=kubectl` and practice using the `-h` flag (e.g., `kubectl drain -h`) if you forget specific parameter names during the test.