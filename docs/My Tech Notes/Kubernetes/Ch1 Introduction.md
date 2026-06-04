---
sidebar_label: Introduction
sidebar_position: 1
---

## Introduction


### Kubernetes Architecture

![Kubernetes Architecture](./kubernetes_architecture.jpg)

### Control Plane

4 Major components in master node

* **API Server:** The central hub/front-end of the cluster. It handles internal and external HTTP/REST requests, validates them, and updates the cluster state.
* **etcd:** Serves as the "source of truth" for all cluster data and state.
* **Scheduler:** Assigns newly created Pods to nodes.
* **Controller Manager:** Maintains the "desired state." It runs various controller processes (Node, Replication, Endpoints, etc.) to ensure the cluster matches your configuration.


### Worker Node

3 Major components in worker node
* **kubelet:** An agent that runs on each node in the cluster. It ensures that containers are running in a Pod and matches the PodSpec. It reports node status back to the API Server.
* **kubeproxy:** A network proxy that runs on each node, maintaining network rules on nodes, allowing network communication to your Pods from inside or outside of the cluster (via iptables or IPVS).
* **container runtime:** The software responsible for running containers. It implements the CRI (Container Runtime Interface) to pull images and manage container lifecycles.
