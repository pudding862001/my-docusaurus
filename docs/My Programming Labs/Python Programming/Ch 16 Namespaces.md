---
title: Ch 16 Scope & Namespaces
sidebar_label: Ch 16 Namespaces
sidebar_position: 16
---

In this chapter, we explore how Python manages variables behind the scenes using **Namespaces** and **Scope**. Understanding where a variable lives and how Python finds it is crucial to avoid unexpected bugs, especially when working with nested functions or global variables.

---

## 1. Namespaces and the LEGB Rule

A **Namespace** is a system Python uses to ensure that all names (variables, functions, classes) in a program are unique and can be used without conflict. 

When you use a variable, Python searches for it in a specific order known as the **LEGB Rule**:
1.  **L (Local)**: Inside the current function.
2.  **E (Enclosing)**: Inside enclosing functions (if it's a nested function).
3.  **G (Global)**: At the top level of the module/script.
4.  **B (Built-in)**: Pre-defined by Python (e.g., `print`, `len`, `copyright`).

### Overwriting Built-ins
Because Python searches Local and Global scopes before Built-in, you can accidentally overwrite built-in variables.

```python
# 'copyright' is a Built-in variable
print(copyright)

# Overwriting the Built-in variable in the Global namespace
copyright = 'This is my copyright'

# Now Python finds 'copyright' in Global before reaching Built-in
print(copyright)
```

---

## 2. Inspecting Namespaces (`globals` & `locals`)

Python provides built-in functions to inspect the current state of your namespaces.
* `globals()`: Returns a dictionary representing the current global symbol table.
* `locals()`: Returns a dictionary representing the current local symbol table.

```python
c = 100
copyright = "global copyright"

def foo(x, y):
    c = x + y  # Local 'c', shadows the Global 'c'
    copyright = "enclosing copyright"

    print("--- Inside foo ---")
    print("Locals:", locals())   # Shows {'x': 10, 'y': 20, 'c': 30, 'copyright': ...}
    
    def bar():
        # Searches Local -> Enclosing (Finds 'c' in foo!)
        print("c inside bar is:", c) 
        
        local_copyright = "local copyright"
        print(local_copyright)
        
    bar()

foo(10, 20)

print("--- Global Scope ---")
print("f =", c) # Output: 100 (Global 'c' was untouched)
```

---

## 3. Modifying Global Variables

By default, if you assign a value to a variable inside a function, Python assumes it is a **Local** variable. If you want to modify a Global variable from inside a function, you must use the `global` keyword.

### The `global` Keyword and Mutable Types

* **Immutable Types (int, str)**: Must use `global` to reassign.
* **Mutable Types (list, dict)**: Can be modified in place (e.g., `.append()`) *without* using the `global` keyword.
* **`globals()` Dictionary**: You can also modify global variables directly via the `globals()` dictionary.

```python
x = 10
y = 30
d = [1, 2]

def foo():
    # 1. Using 'global' keyword to modify integer
    global x
    x = 20

    # 2. Modifying via globals() dictionary
    globals()['y'] = 40

    # 3. Modifying a mutable list (No 'global' keyword needed!)
    d.append(3)

foo()

print(x) # Output: 20 (Changed!)
print(y) # Output: 40 (Changed!)
print(d) # Output: [1, 2, 3] (Changed!)
```

---

## 4. The `nonlocal` Keyword

When working with nested functions, you might want an inner function to modify a variable defined in the outer (enclosing) function. 

* `global` will not work here because the variable is not at the module level.
* You must use the `nonlocal` keyword to tell Python to look in the **Enclosing** scope.

```python
def foo():
    x = 10  # Enclosing variable

    def bar():
        # global x  <-- This would look for 'x' at the module level (Global), not in foo()!
        
        nonlocal x  # Tells Python to use 'x' from the enclosing function foo()
        x = 20      # Modifies the 'x' in foo

    bar()
    print("x after bar():", x)  # Output: 20

foo()
```

---