---
title: Dijkstra's Algorithm
sidebar_label: Dijkstra's Algorithm
sidebar_position: 1
hide_title: true
---

## Dijkstra's Algorithm (Shortest Path)

Dijkstra's Algorithm is a fundamental graph algorithm used to find the shortest path from a single source vertex to all other vertices in a weighted graph with non-negative edge weights.

* **Core Technical Concepts:**
  <ul style={{ marginTop: '-12px', lineHeight: '1.5' }}>
    <li style={{ marginBottom: '6px' }}>
      <span style={{ fontSize: '14.5px' }}>**Greedy Strategy:** At each step, the algorithm selects the unvisited vertex with the smallest tentative distance.</span>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <span style={{ fontSize: '14.5px' }}>**Edge Relaxation:** For a chosen vertex, the algorithm checks all its neighbors and updates their shortest distance if a shorter path is found.</span>
    </li>
    <li style={{ marginBottom: '6px' }}>
      <span style={{ fontSize: '14.5px' }}>**Min-Priority Queue:** Utilizing a `std::priority_queue` (min-heap) reduces the complexity to find the next vertex, making it efficient for large-scale graphs.</span>
    </li>
  </ul>

---

### C++ Implementation (Optimized with Min-Heap)

This implementation uses an **Adjacency List** and a **Priority Queue** to ensure high performance, which is a common requirement in competitive programming and system design.



```cpp title="Dijkstra.cpp"
#include <iostream>
#include <vector>
#include <queue>
#include <climits>

using namespace std;

// Pair representing {distance, vertex}
typedef pair<int, int> pii;

/**
 * Dijkstra's Algorithm Implementation
 * @param start: The source node index
 * @param adj: Adjacency list where each element is {neighbor, weight}
 * @param dist: Vector to store the calculated shortest distances
 */
void dijkstra(int start, const vector<vector<pii>>& adj, vector<int>& dist) {
    // Min-priority queue to always process the closest node first
    priority_queue<pii, vector<pii>, greater<pii>> pq;
    
    dist[start] = 0;
    pq.push({0, start});

    while (!pq.empty()) {
        int d = pq.top().first;
        int u = pq.top().second;
        pq.pop();

        // Skip processing if a shorter path to u has already been found
        if (d > dist[u]) continue;

        for (auto& edge : adj[u]) {
            int v = edge.first;
            int weight = edge.second;

            // Relaxation Step
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push({dist[v], v});
            }
        }
    }
}