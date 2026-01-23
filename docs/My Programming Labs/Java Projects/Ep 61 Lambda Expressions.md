---
title: Ep61 Lambda Expressions
hide_title: true
sidebar_label: Ep61 Lambda Expressions
sidebar_position: 61
---

## Ep61 Lambda Expressions

In this episode, we introduce **Lambda Expressions**, a powerful feature that allows you to treat functionality as a method argument, or code as data. Lambdas provide a clear and concise way to represent one-method interfaces using an expression.

---

### Lambda Syntax and Functional Interfaces

A lambda expression consists of three parts: a comma-separated list of formal parameters enclosed in parentheses, the arrow token `->`, and a body. To use a lambda, you must have a **Functional Interface**, which is an interface that contains exactly one abstract method.


```java
// Functional Interface with no parameters
interface FunctionInterface {
    abstract int giveNumber();
}

// Functional Interface with parameters
interface FunctionInterface2 {
    double giveResult(double a, double b);
}

public class Main {
    public static void main(String[] args) {

        // 1. Lambda with no parameters and a simple return value
        FunctionInterface interface1;
        interface1 = () -> 123;
        System.out.println(interface1.giveNumber());

        // 2. Lambda with a calculation
        interface1 = () -> 123 * 5;
        System.out.println(interface1.giveNumber());

        // 3. Lambda with explicit parameter types
        FunctionInterface2 adding = (double a, double b) -> a + b;
        System.out.println(adding.giveResult(4.5, 5.6));

        // 4. Lambda with Type Inference (compiler figures out the types)
        FunctionInterface2 substracting = (a, b) -> a - b;
        System.out.println(substracting.giveResult(8, 2.5));
    }
}
```

---

### Execution Logic Analysis

Based on the provided implementation:

* **Zero-Parameter Lambdas**: If the interface method takes no arguments, empty parentheses `()` must be used before the arrow operator.
* **Implicit Return**: For single-expression bodies, the result of the expression is automatically returned without needing the `return` keyword or curly braces.
* **Strict Type Matching**: The lambda expression must return a type that is compatible with the return type defined in the functional interface. For example, attempting to return a `String` where an `int` is expected would result in a compile error.
* **Type Inference**: Java is smart enough to look at the interface definition (`FunctionInterface2`) and infer that `a` and `b` are doubles, allowing you to omit the explicit type declarations in the lambda parameters.

---

### Key Lambda Components

| Feature | Syntax Example | Description |
| :--- | :--- | :--- |
| **No Parameters** | `() -> 100` | Used when the interface method has zero arguments. |
| **One Parameter** | `(n) -> n * n` | Parentheses can be omitted if there is only one parameter. |
| **Multi Parameters** | `(a, b) -> a + b` | Parameters are separated by commas. |
| **Block Body** | `(n) -> { ... }` | Use curly braces if the logic requires multiple lines or an explicit return. |

---

> [!TIP]
> While not strictly required, it is best practice to mark your functional interfaces with the `@FunctionalInterface` annotation. This tells the compiler to throw an error if someone accidentally adds a second abstract method to the interface, which would break your lambda expressions.

---