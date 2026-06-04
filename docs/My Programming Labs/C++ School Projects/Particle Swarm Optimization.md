---
title: Particle Swarm Optimization
sidebar_label: Particle Swarm Optimization
sidebar_position: 3
hide_title: true
---

## Particle Swarm Optimization (PSO)

Particle Swarm Optimization (PSO) is a computational method that optimizes a problem by iteratively trying to improve a candidate solution with regard to a given measure of quality. Inspired by the social behavior of bird flocking or fish schooling, PSO is a powerful meta-heuristic for continuous optimization.

### Technical Core Mechanics

* **Particles & Velocity:** Each solution is a "Particle" in the search space, possessing a position and a velocity that dictates its movement.
* **Personal Best (pBest):** Each particle tracks the best coordinates it has personally achieved so far.
* **Global Best (gBest):** The swarm tracks the overall best position found by any member of the population, facilitating social learning.
* **Velocity Update:** Movement is governed by three factors: Inertia (previous direction), Cognitive (return to pBest), and Social (move toward gBest).

---

### Mathematical Model

The velocity and position of each particle $i$ are updated using the following equations:


```text
$$v_{i}(t+1) = w \cdot v_{i}(t) + c_1 \cdot r_1 \cdot (pBest_{i} - x_{i}(t)) + c_2 \cdot r_2 \cdot (gBest - x_{i}(t))$$
$$x_{i}(t+1) = x_{i}(t) + v_{i}(t+1)$$

Where $w$ is the inertia weight, $c_1, c_2$ are acceleration coefficients, and $r_1, r_2$ are random numbers.
```

---

### C++ Implementation Framework

This implementation highlights a scalable structure for handling multi-dimensional search spaces.



```cpp title="PSO.cpp"
#include <iostream>
#include <vector>
#include <random>

using namespace std;

struct Particle {
    vector<double> position;
    vector<double> velocity;
    vector<double> pBest;
    double fitness;
    double pBestFitness;

    Particle(int dimensions) {
        position.resize(dimensions);
        velocity.resize(dimensions);
        pBest.resize(dimensions);
        fitness = 1e18; // Minimize
        pBestFitness = 1e18;
    }
};

class PSOManager {
private:
    double w = 0.729;  // Inertia weight
    double c1 = 1.494; // Cognitive coefficient
    double c2 = 1.494; // Social coefficient
    vector<double> gBest;
    double gBestFitness = 1e18;

public:
    void updateSwarm(vector<Particle>& swarm) {
        for (auto& p : swarm) {
            // Update Velocity & Position per dimension
            for (int d = 0; d < p.position.size(); ++d) {
                double r1 = (double)rand() / RAND_MAX;
                double r2 = (double)rand() / RAND_MAX;

                p.velocity[d] = w * p.velocity[d] + 
                                c1 * r1 * (p.pBest[d] - p.position[d]) + 
                                c2 * r2 * (gBest[d] - p.position[d]);
                
                p.position[d] += p.velocity[d];
            }
            
            // Evaluation logic...
        }
    }
};