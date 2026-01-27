---
sidebar_label: Storage
sidebar_position: 6
---

# Kubernetes Storage: Persistent Volumes and Configuration

This chapter covers how Kubernetes manages data persistence and application configuration. Understanding the decoupling of storage from Pod lifecycles is a core CKA requirement.

---

## 1. Volumes: Ephemeral Storage
By default, data in a container is lost if the container crashes or is deleted. Kubernetes Volumes solve this.

* **emptyDir**: A simple empty directory that exists as long as the Pod is running on that node. If the Pod is deleted, the data is gone. Great for multi-container scratch space.
* **hostPath**: Mounts a file or directory from the host node's filesystem into your Pod. Useful for system-level tools but generally avoided for application data.

---

## 2. Persistent Volumes (PV) and Claims (PVC)
To provide storage that survives Pod restarts and migrations, Kubernetes uses a request-provisioning model.


### Persistent Volume (PV)
A cluster-wide resource (like a Node) provisioned by an administrator.
* **Access Modes**:
    * `ReadWriteOnce` (RWO): Mounted as read-write by a single node.
    * `ReadOnlyMany` (ROX): Mounted read-only by many nodes.
    * `ReadWriteMany` (RWX): Mounted as read-write by many nodes (e.g., NFS).
* **Reclaim Policy**:
    * `Retain`: Manual reclamation; data is kept when PVC is deleted.
    * `Delete`: Deletes the underlying storage asset when PVC is deleted.

### Persistent Volume Claim (PVC)
A request for storage by a user. It looks for a PV that meets its requirements (size and access mode).

### CKA Workflow:
1.  **Create PV**: Define the capacity and storage type (NFS, HostPath, etc.).
2.  **Create PVC**: Request a specific size (e.g., 1Gi).
3.  **Mount in Pod**: Reference the PVC by name in the `volumes` section of the Pod spec.

---

## 3. ConfigMaps and Secrets
These objects decouple configuration artifacts from image content to keep applications portable.

### ConfigMaps
Used for non-sensitive configuration (env vars, config files).
* **Create from literal**:
    ```bash
    kubectl create configmap [cm-name] --from-literal=APP_COLOR=blue
    ```
* **Usage**: Can be injected as environment variables or mounted as files in a volume.

### Secrets
Used for sensitive data (passwords, tokens, keys).
* **Storage**: Secrets are stored in `etcd` in an encoded format (base64).
* **Create from file**:
    ```bash
    kubectl create secret generic [secret-name] --from-file=ssh-key=./id_rsa
    ```
* **Usage**: Similar to ConfigMaps, but more secure.

---

## 4. Environment Variables
You can define hardcoded values or pull them from ConfigMaps/Secrets.

```yaml
spec:
  containers:
  - name: my-app
    image: nginx
    env:
    - name: DB_URL
      value: "localhost:5432"
    - name: DB_PASSWORD
      valueFrom:
        secretKeyRef:
          name: db-secret
          key: password
```

---

## 5. CKA Survival Tips: Storage
1.  **Check PV Status**: A PVC will stay `Pending` if it cannot find a matching PV. Check `kubectl get pv` to ensure a PV is `Available`.
2.  **Matching Access Modes**: The PVC access mode **must** be a subset of the PV's access modes.
3.  **Base64 Encoding**: When creating a Secret via YAML, remember the values must be base64 encoded:
    ```bash
    echo -n 'password123' | base64
    ```
4.  **Describe is King**: If a Pod won't start due to a mount error, use `kubectl describe pod [pod-name]` to see exactly which volume or secret is missing.
5.  **Edit Secrets**: You can quickly update a secret with `kubectl edit secret [secret-name]`.