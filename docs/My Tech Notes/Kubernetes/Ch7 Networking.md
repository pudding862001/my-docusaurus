---
sidebar_label: Networking
sidebar_position: 7
---

# Kubernetes Networking: Services, Ingress, and DNS

Networking is often considered the most complex part of the CKA exam. It covers how Pods communicate with each other, how they are discovered via DNS, and how external traffic reaches your applications.

---

## 1. Kubernetes Service Types
A Service provides a stable IP address and DNS name for a set of Pods, acting as a load balancer.



### Three Core Service Types
1.  **ClusterIP (Default)**:
    * Exposes the Service on a cluster-internal IP.
    * Accessible only within the cluster.
2.  **NodePort**:
    * Exposes the Service on each Node's IP at a static port (30000-32767).
    * Allows external traffic to reach the service via `[Node-IP]:[NodePort]`.
3.  **LoadBalancer**:
    * Exposes the Service externally using a cloud provider's load balancer.
    * Automatically creates a NodePort and ClusterIP.

### Exam Command Shortcuts
* **Expose a Deployment quickly**:
    ```bash
    kubectl expose deployment [deploy-name] --port=80 --target-port=8080 --type=NodePort
    ```
* **Check Endpoints** (Crucial for troubleshooting):
    ```bash
    kubectl get endpoints [service-name]
    ```

---

## 2. Ingress (Layer 7 Load Balancing)
While a Service works at L4 (TCP/UDP), Ingress works at L7 (HTTP/HTTPS) to provide routing based on Hostnames or Paths.



### Ingress Resource Example
In the exam, you may need to create or edit an Ingress resource:
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: minimal-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: my-app.com
    http:
      paths:
      - path: /testpath
        pathType: Prefix
        backend:
          service:
            name: test-service
            port:
              number: 80
```

---

## 3. Cluster DNS (CoreDNS)
Kubernetes uses **CoreDNS** to provide service discovery. Every Service is assigned a DNS name.

* **Standard FQDN Format**:
  `[service-name].[namespace].svc.cluster.local`
* **Internal Pod Communication**:
  If two Pods are in the same namespace, they can reach each other simply by the `[service-name]`.

---

## 4. Pod Networking (CNI)
Kubernetes requires a **CNI (Container Network Interface)** plugin (like Flannel, Calico, or Weave) to ensure:
* All Pods can communicate with all other Pods without NAT.
* All Nodes can communicate with all Pods.
* The IP that a Pod sees itself as is the same IP that others see it as.

**CKA Checkpoint**: CNI config files are typically located in `/etc/cni/net.d/`.

---

## 5. Resource Management (Quotas and Limits)
Networking efficiency is often tied to resource allocation:
* **Requests**: The minimum resources (CPU/Memory) guaranteed for a container.
* **Limits**: The maximum resources a container is allowed to consume.
* **ResourceQuotas**: Used to limit the total resource consumption per namespace.

---

## 6. Tips: Networking
1.  **Label Selectors**: 90% of Service issues are caused by mismatched labels. Always verify that `service.spec.selector` matches `pod.metadata.labels`.
2.  **Target Port vs. Port**:
    * `port`: The port exposed by the Service.
    * `targetPort`: The port the application is actually listening on inside the container.
3.  **Connectivity Test**: Use a temporary Pod to test network connectivity:
    ```bash
    kubectl run busybox --image=busybox:1.28 --restart=Never --rm -it -- nslookup [service-name]
    ```
4.  **Ingress Speed**: Use the `kubectl create ingress` command with flags to generate a YAML template quickly during the exam.