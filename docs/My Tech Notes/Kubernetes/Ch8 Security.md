---
sidebar_label: Security
sidebar_position: 8
---

# Kubernetes Security: RBAC, ServiceAccounts, and Kubeconfig

Security in Kubernetes follows the principle of least privilege. In the **CKA exam**, you must be able to configure permissions using RBAC, manage ServiceAccounts for Pods, and understand how to navigate Kubeconfig files.

---

## 1. Role-Based Access Control (RBAC)
RBAC is the mechanism that regulates access to computer or network resources based on the roles of individual users within a cluster.

### RBAC Components
1.  **Role / ClusterRole**: Defines **what** can be done (verbs like get, list, create) on which resources (pods, deployments).
    * **Role**: Applied to a specific namespace.
    * **ClusterRole**: Applied cluster-wide (non-namespaced resources like Nodes).
2.  **RoleBinding / ClusterRoleBinding**: Defines **who** (User, Group, or ServiceAccount) is granted the permissions defined in the Role.

### Exam Commands (Time Savers)
* **Create a Role**:
    ```bash
    kubectl create role [role-name] --verb=get,list,watch --resource=pods,deployments
    ```
* **Create a RoleBinding**:
    ```bash
    kubectl create rolebinding [binding-name] --role=[role-name] --user=[user-name]
    ```
* **Test Permissions (Essential)**:
    ```bash
    kubectl auth can-i create deployments --as [user-name]
    ```

---

## 2. ServiceAccounts
While Users are for humans, **ServiceAccounts** are for processes running in Pods to authenticate with the API Server.

* **Default ServiceAccount**: Every namespace has one, but it usually has no permissions by default.
* **Assigning to a Pod**:
    ```yaml
    spec:
      serviceAccountName: [sa-name]
      containers:
      - name: my-app
        image: nginx
    ```

---

## 3. Kubeconfig Files
The `kubeconfig` file is used to configure access to clusters. It is composed of three main sections:

1.  **Clusters**: The API Server URL and certificate authority.
2.  **Users**: Client certificates or tokens for authentication.
3.  **Contexts**: Links a User to a Cluster (and optionally a Namespace).

### CKA Context Switching
* **View current context**: `kubectl config current-context`
* **Switch context**: `kubectl config use-context [context-name]`
* **Set a new context**:
    ```bash
    kubectl config set-context [context-name] --cluster=[cluster-name] --user=[user-name] --namespace=[ns-name]
    ```

---

## 4. Certificates and API Security
Kubernetes components communicate over TLS. As an admin, you may need to:
* View certificate information using `openssl`.
* Check the certificate file paths in the Static Pod manifests (e.g., `/etc/kubernetes/manifests/kube-apiserver.yaml`).

---

## 5. Tips: Security
1.  **Check the Namespace**: RBAC is often namespace-specific. Always verify the `-n [namespace]` flag.
2.  **Verify with `auth can-i`**: This is the fastest way to check if your RBAC configuration is correct without switching users.
3.  **ClusterRole vs Role**: If a task asks to grant access to "all namespaces" or "nodes/PVs", you **must** use a `ClusterRole` and `ClusterRoleBinding`.
4.  **Api-Groups**: When creating Roles via YAML, ensure you put the correct `apiGroups`.
    * Pods/Services -> `""` (Core group)
    * Deployments -> `"apps"`
    * CronJobs -> `"batch"`
    * (Use `kubectl api-resources` to check).