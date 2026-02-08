---
title: Ch 13 Logging
sidebar_label: Ch 13 Logging
sidebar_position: 13
---

In this chapter, we move beyond `print()` debugging and learn professional **Logging**. Logging allows you to track events that happen when some software runs. It is crucial for diagnosing problems in production environments.

---

## 1. Why Logging? (vs Print)

* **Print**: Displays output to the console. Good for temporary debugging, but data is lost once the console closes.
* **Logging**:
    * **Categorization**: Distinguish between normal information and critical errors.
    * **Persistency**: Save logs to files for later analysis.
    * **Formatting**: Automatically add timestamps, line numbers, and file names.

### Log Levels
Python defines 5 standard levels of severity. The default level is **WARNING** (meaning Debug and Info are ignored by default).

| Level | Value | Description |
| :--- | :--- | :--- |
| **DEBUG** | 10 | Detailed info, typically of interest only when diagnosing problems. |
| **INFO** | 20 | Confirmation that things are working as expected. |
| **WARNING** | 30 | An indication that something unexpected happened (e.g., "disk space low"). |
| **ERROR** | 40 | Due to a more serious problem, the software has not been able to perform some function. |
| **CRITICAL** | 50 | A serious error, indicating that the program itself may be unable to continue running. |

---

## 2. Basic Logging

To start logging, use `logging.basicConfig()`. You can set the threshold level and the output file.

```python
import logging

# Basic setup:
# 1. Set level to DEBUG (so all messages are captured)
# 2. Save to 'newlog.txt' instead of console
# 3. filemode='w' overwrites the file each time (default is 'a' for append)
logging.basicConfig(level='DEBUG', filename='newlog.txt', filemode='w')

logging.debug('This is a debug message')
logging.info('This is an info message')
logging.warning('This is a warning message')
logging.error('This is an error message')
logging.critical('This is a critical message')
```

---

## 3. Formatting Logs

Raw messages are often not enough. We need to know **when** and **where** the log occurred. We can use `format` parameters.

* `%(asctime)s`: Time of the log.
* `%(levelname)s`: Level (DEBUG, ERROR, etc.).
* `%(name)s`: Name of the logger.
* `%(message)s`: The actual message.
* `%(lineno)d`: Line number where the log was triggered.

```python
import logging

# Define a custom format
log_format = '%(asctime)s---%(lineno)d---%(levelname)s---%(name)s---%(message)s'

logging.basicConfig(level='DEBUG', format=log_format)

logging.warning('This is a warning with timestamp and line number')
# Output Example:
# 2023-10-27 10:00:00,123---5---WARNING---root---This is a warning...
```

---

## 4. Advanced: Handlers and Loggers

For complex applications, `basicConfig` is not enough. You might want to **save all logs to a file** but **show only errors on the console**. This is achieved using **Loggers**, **Handlers**, and **Formatters**.

* **Logger**: The entry point for the application code.
* **Handler**: Determines where the log goes (Console, File, Email, etc.).
* **Formatter**: Determines the layout of the log.

```python
import logging

# 1. Create a custom logger
logger = logging.getLogger(name='demo')
logger.setLevel(logging.DEBUG)  # Global setting

# 2. Create Handlers
c_handler = logging.StreamHandler()      # Console Handler
f_handler = logging.FileHandler('myfile.log') # File Handler

# 3. Set Levels for each Handler
c_handler.setLevel(logging.ERROR) # Console shows only ERROR and CRITICAL
f_handler.setLevel(logging.INFO)  # File records INFO and above

# 4. Create Formatters and add to Handlers
c_format = logging.Formatter("%(levelname)s:%(name)s:%(message)s")
f_format = logging.Formatter('%(asctime)s---%(levelname)s---%(message)s')

c_handler.setFormatter(c_format)
f_handler.setFormatter(f_format)

# 5. Add Handlers to the Logger
logger.addHandler(c_handler)
logger.addHandler(f_handler)

# Testing
logger.debug('Debug: Won't appear anywhere (File level is INFO)')
logger.info('Info: Saved to file only')
logger.error('Error: Appears in BOTH console and file')
```

---

## 5. Configuration via File

Instead of hardcoding settings in Python, you can load configuration from a separate file (e.g., `log.conf`). This allows you to change logging behavior without modifying the code.

```python
import logging
from logging.config import fileConfig

# Load config from external file
fileConfig('log.conf')

logger = logging.getLogger()
logger.debug("This uses the settings defined in log.conf")
```

---