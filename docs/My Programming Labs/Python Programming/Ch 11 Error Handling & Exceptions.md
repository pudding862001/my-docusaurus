---
title: Ch 11 Error Handling & Exceptions
sidebar_label: Ch 11 Exceptions
sidebar_position: 11
---

In this chapter, we learn how to handle runtime errors gracefully using **Try-Except** blocks. We will also explore how to raise custom exceptions, use assertions for debugging, and ensure cleanup code runs with `finally`.

---

## 1. Basic Exception Handling (`try...except`)

When an error occurs, Python normally stops and generates an error message. The `try...except` block allows us to handle the error and keep the program running.

* **`try`**: The block of code to test for errors.
* **`except`**: The block of code to handle the error.

### Catching Specific Errors
It is best practice to catch specific errors (like `ZeroDivisionError`) rather than a generic `Exception`.

```python
a = [10, 2, 5, 'test', 6, 7, 0, 1]

try:
    # Logic: 100 divided by item.
    # This can fail if item is 0 (ZeroDivision) or 'test' (TypeError)
    b = [100 / item for item in a]
    print(b)

except ZeroDivisionError:
    print("Error: You cannot divide by zero!")

except TypeError:
    print("Error: You cannot divide by a string!")

except Exception:
    print("An unknown error occurred.")

print('Program finished successfully.')
```

---

## 2. Advanced Blocks (`else` & `finally`)

Python provides two optional blocks to make error handling more robust.

* **`else`**: Runs **only if no exception occurs**.
* **`finally`**: Runs **always**, regardless of whether an exception occurred or not. This is perfect for cleanup tasks (like closing files).

```python
def my_error():
    # Manually trigger an error for demonstration
    raise FileNotFoundError("Simulated File Error")

try:
    # Try to run some code
    # my_error() 
    print("Operation successful")

except FileNotFoundError as error:
    print(f"Caught an error: {error}")

else:
    # Runs ONLY if try block succeeds
    print("No errors! We can proceed to read the file.")

finally:
    # Runs ALWAYS (Cleanup)
    print('Cleaning up resources... (This always runs)')
```

---

## 3. Raising and Asserting

Sometimes we want to trigger errors intentionally to enforce rules or for debugging.

### `raise`
The `raise` keyword allows you to manually throw an exception.

```python
# Manually raising a built-in exception
try:
    raise NameError("Owl Error")
except NameError:
    print("Caught a manually raised NameError")
```

### `assert`
The `assert` keyword tests if a condition is true. If it is false, it raises an `AssertionError`. It is commonly used for debugging.

```python
def demo(x, y):
    return x + y

# If the condition is False, the program crashes with AssertionError
# assert(demo(1, 2) == 5)  # This would crash because 1+2 != 5
```

---

## 4. User-Defined Exceptions

You can create your own exception types by creating a new class that inherits from the built-in `Exception` class. This is useful for building libraries or specific application logic.

```python
# 1. Define a custom exception class
class MyCoolException(Exception):
    pass

# 2. Use the custom exception
try:
    raise MyCoolException("This is a custom error message")
except MyCoolException as e:
    print(f"Caught custom error: {e}")

# Checking types
err = MyCoolException("Test")
print(isinstance(err, Exception))  # Output: True
```

---