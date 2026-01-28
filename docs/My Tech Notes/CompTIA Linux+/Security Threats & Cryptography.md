---
title: Security Threats & Cryptography
sidebar_label: Security & Crypto
sidebar_position: 11
---

## 1. File and Disk Encryption

Encryption is essential for protecting sensitive data from unauthorized access. Linux provides several tools for both individual file and full-disk encryption.

### Symmetric Encryption with GPG
GPG (GNU Privacy Guard) can be used to encrypt files with a passphrase.
* **Encrypting a File**: Use the command `gpg --symmetric project_A.txt`. This generates an encrypted file named `Project_A.txt.gpg`.
* **Decrypting a File**: To restore the original file, use `gpg --output Project_A.txt --decrypt Project_A.txt.gpg`. The system will prompt for the passphrase used during encryption.

### Full Disk Encryption
* **`cryptsetup`**: The standard utility for setting up disk encryption using LUKS (Linux Unified Key Setup). Example command: `cryptsetup luksOpen /dev/sde cryptpart`.

---

## 2. File Hashing and Integrity

Hashing is a one-way process used to ensure file integrity by detecting unauthorized modifications.

* **SHA-256**: The Secure Hash Algorithm (256-bit) is a common standard for generating unique message digests.
* **Integrity Check**: If the source data is modified even slightly, future hashes will differ significantly from the original, alerting administrators to a potential security breach.


---

## 3. Public Key Infrastructure (PKI)

PKI manages digital certificates and public-key encryption to provide secure communications.

### The PKI Hierarchy
PKI follows a tiered structure for trust:
1. **Root CA**: The primary Certificate Authority.
2. **Subordinate CA**: Authorities that issue certificates on behalf of the Root CA.
3. **End-Entity Certificates**: Issued to users, servers, or devices.

### The Certificate Lifecycle
A digital certificate moves through several stages:
* **CSR**: Certificate Signing Request is generated.
* **Issuance**: The CA signs and issues the certificate.
* **Use**: The certificate is deployed for secure communication.
* **Revocation**: If compromised, the certificate is invalidated before expiry.
* **Renewal/Expiry**: Certificates must be updated periodically.

---

## 4. Deploying Certificates with OpenSSL and Easy-RSA

Linux provides open-source tools to build a private Certificate Authority and manage keys.

* **Easy-RSA**: A command-line utility used to build and manage a PKI CA (`apt install easy-rsa`).
* **OpenSSL**: A robust toolkit for generating keys and requests:
    - `openssl genrsa`: Generates a private RSA key.
    - `openssl req`: Creates a new Certificate Signing Request (CSR).

---

## 5. TLS Communication Handshake

Transport Layer Security (TLS) secures traffic over TCP port 443 through a multi-step process:

1. **Initiation**: The client contacts the server and presents its supported cipher suites.
2. **Agreement**: The server and client agree on a specific cipher suite.
3. **Certificate Exchange**: The server sends its PKI certificate (including the public key) to the client.
4. **Key Generation**: The client confirms the certificate is valid, generates a unique session key, encrypts it with the server's public key, and sends it back.
5. **Decryption**: The server uses its private key to decrypt the session key, establishing a secure, encrypted channel.

---