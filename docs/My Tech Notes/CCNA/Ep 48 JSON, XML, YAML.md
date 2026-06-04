---
title: Ep 48 Data Serialization (JSON, XML, YAML)
sidebar_label: Ep 48 JSON, XML, YAML
sidebar_position: 48
---

In this episode, we discuss **Data Serialization**, the process of converting data into a standardized format that allows different applications and systems to understand each other. We will compare the three most common formats used in network automation: JSON, XML, and YAML.

---

## 1. What is Data Serialization?

Data serialization provides a strict structure for variables (containers that store values) so that a REST client (app) and a REST server (controller) can exchange information seamlessly. Without a standard format, internal variables would be unintelligible between different programming languages.

---

## 2. JSON (JavaScript Object Notation)

JSON is an open standard, language-independent data exchange format standardized in **RFC 8259**. It is both machine-readable and human-readable.

* **Structure**: Uses key-value pairs and arrays.
* **Syntax Rules**:
    * Data is in name/value pairs (e.g., `"status": "up"`).
    * Objects are wrapped in curly braces `{}`.
    * Arrays (ordered lists) are wrapped in square brackets `[]`.
    * Keys must be wrapped in double quotes.

---

## 3. XML (Extensible Markup Language)

XML is a markup language traditionally used for formatting text but is now widely used for data serialization, especially in older REST APIs.

* **Structure**: Uses a tag-based system similar to HTML: `<key>value</key>`.
* **Characteristics**:
    * Generally considered less readable and more "wordy" than JSON.
    * Whitespace is insignificant in XML.
* **Example**:
```xml
<entry>
    <Interface>GigabitEthernet0/0</Interface>
    <Status>up</Status>
</entry>
```


---

## 4. YAML (Yet Another Markup Language)

YAML is a data serialization format designed for high human readability. It is the primary format used by automation tools like **Ansible**.

* **Characteristics**:
    * Extremely clean and easy to read compared to XML or JSON.
    * **Whitespace is significant**: Indentation is used to define the structure and hierarchy.
* **Syntax Rules**:
    * Uses a dash `-` to indicate an item in a list.
    * Key-value pairs use a colon followed by a space `: `.
    * YAML files typically start with three dashes `---`.

---