---
sidebar_label: Create Kubernetes Clusters
sidebar_position: 2
---



## Install containerd, kubeadm, kubelet, kubectl

Create a new install.sh file

```bash
vim install.sh
```

```bash
#!/bin/bash

# swap already support https://kubernetes.io/blog/2023/08/24/swap-linux-beta/ if you want to enalbe swap, please check the link
echo "[TASK 1] Disable and turn off SWAP"
sed -i '/swap/d' /etc/fstab
swapoff -a

echo "[TASK 2] install some tools"
apt install -qq -y vim jq iputils-ping net-tools >/dev/null 2>&1

echo "[TASK 3] Stop and Disable firewall"
systemctl disable --now ufw >/dev/null 2>&1

echo "[TASK 4] Enable and Load Kernel modules"
cat >>/etc/modules-load.d/containerd.conf<<EOF
overlay
br_netfilter
EOF
modprobe overlay
modprobe br_netfilter

echo "[TASK 5] Add Kernel settings"
cat >>/etc/sysctl.d/kubernetes.conf<<EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables  = 1
net.ipv4.ip_forward                 = 1
EOF
sysctl --system >/dev/null 2>&1

echo "[TASK 6] Install containerd runtime"
mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo   "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
apt -qq update >/dev/null 2>&1
apt install -qq -y containerd.io >/dev/null 2>&1
containerd config default >/etc/containerd/config.toml
sed -i 's/SystemdCgroup = false/SystemdCgroup = true/' /etc/containerd/config.toml
systemctl restart containerd
systemctl enable containerd >/dev/null 2>&1

echo "[TASK 7] Add apt repo for kubernetes"
apt-get install -y apt-transport-https ca-certificates curl gpg >/dev/null 2>&1
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.30/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
echo 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.30/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list > /dev/null
apt -qq update >/dev/null 2>&1
```

```bash
sh install.sh
```

Run below commands in every node, make sure the version are all identical.

```bash
VERSION=1.30.3-1.1
sudo apt install -y kubeadm=$VERSION kubelet=$VERSION kubectl=$VERSION
```
* A newer version might be available, can use 'apt list -a kubeadm' command to check the latest available version.

## Initialize Master Node

Pull the neccessary images.

```bash
sudo kubeadm config images pull
```

Initialize kubeadm

```bash
sudo kubeadm init --apiserver-advertise-address=192.168.56.10  --pod-network-cidr=10.244.0.0/16
```

Configure .kube

```bash
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

kubectl autocomplete

```bash
source <(kubectl completion bash)
echo "source <(kubectl completion bash)" >> ~/.bashrc
```

Deploy pod network (In here we use flannel)

```bash
curl -LO https://github.com/flannel-io/flannel/releases/download/v0.25.5/kube-flannel.yml
```

Configure the CIDR as 10.244.0.0/16

```bash
net-conf.json: |
  {
    "Network": "10.244.0.0/16",
    "Backend": {
      "Type": "vxlan"
    }
  }
```

Check the interface name (In here our interface name is enp0s8)

```bash
vagrant@k8s-master:~$ ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
      valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
      valid_lft forever preferred_lft forever
2: enp0s3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 02:9a:67:51:1e:b6 brd ff:ff:ff:ff:ff:ff
    inet 10.0.2.15/24 brd 10.0.2.255 scope global dynamic enp0s3
      valid_lft 85351sec preferred_lft 85351sec
    inet6 fe80::9a:67ff:fe51:1eb6/64 scope link
      valid_lft forever preferred_lft forever
3: enp0s8: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 08:00:27:59:c5:26 brd ff:ff:ff:ff:ff:ff
    inet 192.168.56.10/24 brd 192.168.56.255 scope global enp0s8
      valid_lft forever preferred_lft forever
    inet6 fe80::a00:27ff:fe59:c526/64 scope link
      valid_lft forever preferred_lft forever
```

Go to kube-flannel.yml, make sure iface=enp0s8 exists. If it doesn't exist, add it.

```bash

vim kube-flannel.yml

- name: kube-flannel
  image: docker.io/flannel/flannel:v0.24.2
  command:
  - /opt/bin/flanneld
  args:
  - --ip-masq
  - --kube-subnet-mgr
  - --iface=enp0s8
```

And run the yaml file.

```bash
kubectl apply -f kube-flannel.yml
```


## Add worker nodes to master node

Go to node 1, get token and cert-hash by below command.

Get token name.

```bash
$ kubeadm token list

(output)
TOKEN                     TTL         EXPIRES                USAGES                   DESCRIPTION                                                EXTRA GROUPS
0pdoeh.wrqchegv3xm3k1ow   23h         2022-07-19T20:13:00Z   authentication,signing   The default bootstrap token generated by 'kubeadm init'.   system:bootstrappers:kubeadm:default-node-token
```

Copy the token name. (0pdoeh.wrqchegv3xm3k1ow in this example.)


Get the cert-hash

```bash
openssl x509 -in /etc/kubernetes/pki/ca.crt -pubkey -noout |
openssl pkey -pubin -outform DER |
openssl dgst -sha256

(output)
(stdin)= f4e693bde148f5c0ff03b66fb24c51f948e295775763e8c5c4e60d24ff57fe82
```

Copy the cert-hash

And add the master node IP (192.168.56.10 in this example) address by below command to join.

```bash
$ sudo kubeadm join 192.168.56.10:6443 --token 0pdoeh.wrqchegv3xm3k1ow \
  --discovery-token-ca-cert-hash sha256:f4e693bde148f5c0ff03b66fb24c51f948e295775763e8c5c4e60d24ff57fe82
```
