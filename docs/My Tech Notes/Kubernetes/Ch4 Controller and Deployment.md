---
sidebar_label: Controller and Deployment
sidebar_position: 4
---

# Controllers and Deployments

In Kubernetes, Controllers ensure the current state matches your desired state.

---

## 1. Labels and Selectors
* **Show labels:** `kubectl get pods --show-labels`
* **Add/Update a label:** `kubectl label pod [pod-name] tier=frontend`
* **Remove a label:** `kubectl label pod [pod-name] tier-`
* **Filter by label:** `kubectl get pods -l tier=frontend`

---

## 2. Deployments
A Deployment provides declarative updates for Pods and ReplicaSets.

### Management & Scaling
* **Create (Imperative):**
  ```bash
  kubectl create deployment web --image=nginx:1.14.2 --replicas=3
  ```
* **Scaling:**
  ```bash
  kubectl scale deployment web --replicas=5
  ```

### Rollouts and Version Control
* **Update Image:**
  ```bash
  kubectl set image deployment/web nginx=nginx:1.16.1
  ```
* **Check Rollout Status:**
  ```bash
  kubectl rollout status deployment web
  ```
* **Rollback:**
  ```bash
  kubectl rollout undo deployment web --to-revision=2
  ```

---

## 3. Jobs and CronJobs
* **Job:** Runs a Pod to completion. `restartPolicy` must be `Never` or `OnFailure`.
* **CronJob:** Scheduled tasks using cron syntax (`* * * * *`).

---

## 4. CKA Practice Highlights
1.  **Alias `k`:** Use `alias k=kubectl` to save time.
2.  **Dry Run:** Always use `--dry-run=client -o yaml`.
3.  **Rollout Restart:**
    ```bash
    kubectl rollout restart deployment [deployment-name]
    ```