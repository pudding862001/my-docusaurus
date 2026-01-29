---
title: Ep 49 REST APIs
sidebar_label: Ep 49 REST APIs
sidebar_position: 49
---

In this episode, we explore **REST APIs** (Representational State Transfer), the standard way for applications to communicate with SDN controllers (via Northbound Interfaces) and for controllers to manage network devices (via Southbound Interfaces).

---

## 1. CRUD Operations and HTTP Verbs

The four basic functions of persistent storage are known as **CRUD**. In REST APIs, these operations map directly to specific **HTTP Verbs**.

| Purpose | CRUD Operation | HTTP Verb |
| :--- | :--- | :--- |
| Create a new resource | **Create** | **POST** |
| Retrieve a value | **Read** | **GET** |
| Change an existing value | **Update** | **PUT / PATCH** |
| Delete a resource | **Delete** | **DELETE** |

---

## 2. Anatomy of an HTTP Request

An API request consists of several components sent from the client to the server.

* **Uniform Resource Identifier (URI)**: The address used to identify the resource.
    * **Scheme**: The protocol used (e.g., `https`).
    * **Authority**: The host or server address.
    * **Path**: The specific resource location on the server.
* **Request Header**: Contains metadata about the request, such as authentication tokens or the desired data format (JSON/XML).
* **Request Body (Data)**: The actual data being sent to the server (common in POST and PUT requests).

---

## 3. HTTP Response Codes

The server responds with a status code indicating the outcome of the request.

* **1xx (Informational)**: Request received and processing.
* **2xx (Successful)**:
    * **200 OK**: Request succeeded.
    * **201 Created**: Request succeeded and a new resource was made.
* **3xx (Redirection)**: Further action needed to complete the request.
* **4xx (Client Error)**:
    * **403 Unauthorized**: Authentication is required.
    * **404 Not Found**: The resource does not exist.
* **5xx (Server Error)**: The server failed to fulfill a valid request.

---

## 4. REST Constraints and Statelessness

For an API to be considered **RESTful**, it must follow specific architectural constraints.

* **Client-Server**: Separation of concerns between the user interface and data storage.
* **Statelessness**: This is a core requirement. Each API exchange is an independent event. The server does not remember past requests; therefore, the client must provide all necessary information (including authentication) with **every** request.
* **Cacheable**: The API must indicate if data can be stored locally by the client to improve performance.

---