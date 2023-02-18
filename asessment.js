function delivery_route_optimization(buildings, start) {
  let n = buildings.length;

  // Create a distance matrix
  let dist = new Array(n).fill().map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      dist[i][j] = buildings[i].distance[buildings[j].name];
    }
  }

  // Initialize visited array and starting node
  let visited = new Array(n).fill(false);
  visited[start.index] = true;

  // Initialize the current node and route
  let curr = start;
  let route = [start];

  // Loop through all nodes
  while (route.length < n) {
    let next = null;
    let minDist = Number.MAX_SAFE_INTEGER;

    // Find the nearest unvisited neighbor
    for (let i = 0; i < n; i++) {
      if (!visited[i] && dist[curr.index][i] < minDist) {
        next = buildings[i];
        minDist = dist[curr.index][i];
      }
    }

    // Add the nearest neighbor to the route and mark as visited
    route.push(next);
    visited[next.index] = true;
    curr = next;
  }

  // Add the starting node to the end of the route
  route.push(start);

  return route;
}

let buildings = [
  { name: 'A', distance: { A: 0, B: 10, C: 15, D: 20 } },
  { name: 'B', distance: { A: 10, B: 0, C: 35, D: 25 } },
  { name: 'C', distance: { A: 15, B: 35, C: 0, D: 30 } },
  { name: 'D', distance: { A: 20, B: 25, C: 30, D: 0 } }
];

let start = buildings[0];

let route = delivery_route_optimization(buildings, start);

console.log(route);