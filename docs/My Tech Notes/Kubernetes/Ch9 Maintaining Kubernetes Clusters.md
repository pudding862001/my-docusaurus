---
sidebar_label: Maintaining Clusters
sidebar_position: 9
---

# Maintaining Kubernetes Clusters: Upgrades and Backups

This chapter covers critical cluster maintenance tasks. In the **CKA exam**, you will likely be asked to perform a cluster upgrade and an ETCD snapshot backup/restore.

---

## 1. ETCD Backup and Restore
ETCD is the "source of truth" for the cluster. Protecting this data is the top priority for any cluster administrator.



### Backup (Snapshot)
You must use the `etcdctl` CLI. Pay close attention to the certificate paths.
```bash
# Example of taking a snapshot
export ETCDCTL_API=3
etcdctl --endpoints=[https://127.0.0.1:2379](https://127.0.0.1:2379) \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key \
  snapshot save [snapshot-path.db]
```

### Restore
To restore, you define a new data directory to avoid overwriting current live data immediately.
```bash
etcdctl --data-dir=[new-data-dir] \
  snapshot restore [snapshot-path.db]
```
* **Post-Restore Action**: After restoring, you must update the ETCD Static Pod manifest (usually at `/etc/kubernetes/manifests/etcd.yaml`) to point the `hostPath` volumes to the `[new-data-dir]`.

---

## 2. Cluster Upgrades with Kubeadm
CKA often requires upgrading the Control Plane first, followed by the Worker nodes.



### Step 1: Upgrade the Control Plane Node
1.  **Upgrade kubeadm**:
    ```bash
    apt-get update && apt-get install -y kubeadm=[version]
    ```
2.  **Plan and Apply**:
    ```bash
    kubeadm upgrade plan
    kubeadm upgrade apply [version]
    ```
3.  **Upgrade kubelet and kubectl**:
    ```bash
    apt-get install -y kubelet=[version] kubectl=[version]
    systemctl daemon-reload
    systemctl restart kubelet
    ```

### Step 2: Upgrade Worker Nodes
1.  **Drain the node**: `kubectl drain [node-name] --ignore-daemonsets`
2.  **Upgrade kubeadm**: `apt-get install -y kubeadm=[version]`
3.  **Upgrade node configuration**: `kubeadm upgrade node`
4.  **Upgrade kubelet/kubectl**: Same as the Master node steps.
5.  **Uncordon the node**: `kubectl uncordon [node-name]`

---

## 3. Certificate Management
Kubernetes internal certificates usually expire after **one year**.

* **Check expiration**:
    ```bash
    kubeadm certs check-expiration
    ```
* **Renew all certificates**:
    ```bash
    kubeadm certs renew all
    ```
* **Note**: After renewing, you must restart the control plane components (API Server, Controller Manager, Scheduler) to pick up the new certificates.

---

## 4. High Availability (HA) Concepts
In a production or HA environment:
* **Stacked ETCD**: ETCD runs on the same nodes as the control plane components.
* **External ETCD**: ETCD runs on a dedicated separate cluster for better isolation and performance.

---

## 5. CKA Exam Survival Tips: Maintenance
1.  **Path Precision**: In the ETCD restore task, double-check the file paths for the `--cacert`, `--cert`, and `--key`. They are usually found in the `etcd.yaml` manifest.
2.  **Order Matters**: Always upgrade the **Master** node before the **Worker** nodes.
3.  **The "Dry Run" of Upgrades**: Always run `kubeadm upgrade plan` first to see if there are any version mismatches.
4.  **Backup Before Upgrade**: In a real-world scenario (and good for exam habit), always take an ETCD snapshot before starting an upgrade.
5.  **Systemd**: Remember to `systemctl restart kubelet` after upgrading the binary, or the version shown in `kubectl get nodes` won't update.