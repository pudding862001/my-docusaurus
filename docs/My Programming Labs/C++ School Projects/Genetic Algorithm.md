---
title: Genetic Algorithm
sidebar_label: Genetic Algorithm
sidebar_position: 2
hide_title: true
---

## Genetic Algorithm (GA)

Genetic Algorithm (GA) is a meta-heuristic search and optimization technique inspired by the process of natural selection. It is widely used to solve complex combinatorial optimization problems where traditional gradient-based methods fail.

* **Fundamental Principles:**
  <ul style={{ marginTop: '-12px', lineHeight: '1.5' }}>
    <li style={{ marginBottom: '6px' }}>
      <span style={{ fontSize: '14.5px' }}>**Encoding & Population:** Solutions are represented as "Chromosomes" (often binary strings), forming a diverse "Population" of potential candidates.</span>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <span style={{ fontSize: '14.5px' }}>**Fitness Function:** A critical objective function that quantifies the quality of each individual solution to guide the evolution process.</span>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <span style={{ fontSize: '14.5px' }}>**Selection:** Stochastic mechanisms (e.g., Roulette Wheel or Tournament Selection) ensure that higher-quality solutions have a better chance of reproducing.</span>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <span style={{ fontSize: '14.5px' }}>**Genetic Operators:** **Crossover** (exchanging genetic material) and **Mutation** (stochastic alterations) maintain population diversity and prevent premature convergence.</span>
    </li>
  </ul>

---

### C++ Implementation Framework

This snippet demonstrates a clean, modular structure for a GA cycle, showcasing object-oriented design and meta-heuristic logic.



```cpp title="GeneticAlgorithm.cpp"
#include <iostream>
#include <vector>
#include <algorithm>
#include <random>

using namespace std;

struct Individual {
    vector<int> chromosome;
    double fitness;

    Individual(int length) {
        chromosome.resize(length);
        // Initialize with random values
    }
};

class GeneticAlgorithm {
private:
    int popSize;
    double mutationRate;
    double crossoverRate;

public:
    GeneticAlgorithm(int pSize, double mRate, double cRate) 
        : popSize(pSize), mutationRate(mRate), crossoverRate(cRate) {}

    // Main Evolution Cycle
    void evolve(vector<Individual>& population) {
        vector<Individual> nextGeneration;
        
        while (nextGeneration.size() < popSize) {
            // 1. Selection
            Individual parentA = select(population);
            Individual parentB = select(population);

            // 2. Crossover
            if ((double)rand() / RAND_MAX < crossoverRate) {
                crossover(parentA, parentB);
            }

            // 3. Mutation
            mutate(parentA);
            mutate(parentB);

            nextGeneration.push_back(parentA);
            if (nextGeneration.size() < popSize) 
                nextGeneration.push_back(parentB);
        }
        population = nextGeneration;
    }

    // Placeholder for Selection, Crossover, and Mutation logic...
    Individual select(const vector<Individual>& pop);
    void crossover(Individual& a, Individual& b);
    void mutate(Individual& i);
};