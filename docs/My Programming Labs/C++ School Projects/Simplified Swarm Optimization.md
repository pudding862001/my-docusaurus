---
title: Simplified Swarm Optimization
sidebar_label: Simplified Swarm Optimization
sidebar_position: 4
hide_title: true
---

## Simplified Swarm Optimization (SSO)

Simplified Swarm Optimization (SSO), proposed by **Prof. Wei-Chang Yeh**, is a highly efficient population-based stochastic optimization algorithm. Unlike traditional PSO which relies on complex velocity vectors and inertia weights, SSO utilizes a direct **Update Mechanism (UM)** to evolve solutions, making it exceptionally powerful for both discrete and continuous optimization tasks.

### Core Update Mechanism

For each variable x in a particle, the new value is determined by selecting from four potential sources based on a random number **rho** and three predefined thresholds (Cw, Cp, Cg):

* **Current Value (Stay):** Retains the current state to maintain stability (Exploitation).
* **Personal Best (pBest):** Learns from the particle's own historical success.
* **Global Best (gBest):** Synchronizes with the best-known solution in the entire swarm (Social Learning).
* **Random Search:** Introduces a new random value to prevent local optima (Exploration).

---

### Mathematical Model (Update Mechanism)

The stochastic selection process is defined as follows to ensure robust MDX rendering:

```text
The j-th variable of the i-th particle at generation t is updated by:

x(i,j,t) = 
  Case 1: x(i,j,t-1)  if  0 <= rho < Cw  (Stay)
  Case 2: p(i,j,t-1)  if  Cw <= rho < Cp (Personal Best)
  Case 3: g(j,t-1)    if  Cp <= rho < Cg (Global Best)
  Case 4: x_random    if  Cg <= rho <= 1 (Random Search)
```

### C++ Implementation (Clean & Modular)

This implementation demonstrates the elegance of the SSO update logic, focusing on branch-based state transitions.

```cpp title="SSO.cpp"
#include <iostream>
#include <vector>
#include <random>

using namespace std;

struct Particle {
    vector<double> x;      // Current position
    vector<double> pBest;  // Personal best
    double fitness;
    double pBestFit;

    Particle(int dim) : x(dim), pBest(dim), fitness(1e18), pBestFit(1e18) {}
};

class SSOManager {
private:
    // Typical parameters: Cw=0.1, Cp=0.4, Cg=0.9
    double Cw, Cp, Cg; 
    vector<double> gBest;
    double gBestFit = 1e18;

public:
    SSOManager(double w, double p, double g) : Cw(w), Cp(p), Cg(g) {}

    void update(vector<Particle>& swarm, double minVal, double maxVal) {
        random_device rd;
        mt19937 gen(rd());
        uniform_real_distribution<> dis(0.0, 1.0);
        uniform_real_distribution<> valDis(minVal, maxVal);

        for (auto& p : swarm) {
            for (int j = 0; j < p.x.size(); ++j) {
                double rho = dis(gen);

                if (rho < Cw) {
                    // Stay: x[j] remains x[j]
                } else if (rho < Cp) {
                    p.x[j] = p.pBest[j]; // Move to Personal Best
                } else if (rho < Cg) {
                    p.x[j] = gBest[j];   // Move to Global Best
                } else {
                    p.x[j] = valDis(gen); // Random Search
                }
            }
            // Evaluate fitness and update pBest/gBest here...
        }
    }
};