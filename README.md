#__**Problem-solving challenge**

##_Design an offline mobile banking app_
--

---

##_1.How would you implement an offline mobile money app that allows only one party to be online in the transaction and will be used by at least 100,000 users in the first year of launch?_
To implement an offline mobile money app that allows only one party to be online in the transaction and will be used by at least 100,000 users in the first year of launch, the following steps can be taken:

A. Define the App Requirements: The first step in implementing an offline mobile money app is to define the app requirements. This includes identifying the features that the app should have, the target audience, and the platforms the app will be available on.

B. Design the App Architecture: After defining the app requirements, the next step is to design the app architecture. This involves creating a detailed plan that outlines the app's functionality, including how the app will handle transactions and how it will store and synchronize data.

C. Choose the Right Technologies: Once the app architecture is designed, the next step is to choose the right technologies for implementing the app. This includes selecting the programming language, the database management system, and the framework to be used.

D. Develop and Test the App: With the app requirements, architecture, and technologies in place, the next step is to develop and test the app. This involves writing code, creating a user interface, testing the app's functionality, and fixing any bugs that are discovered.

E. Launch and Maintain the App: After the app has been developed and tested, the final step is to launch the app and maintain it. This involves ensuring that the app is available on the intended platforms, providing technical support to users, and updating the app as needed.

In summary, to implement an offline mobile money app that allows only one party to be online in the transaction and will be used by at least 100,000 users in the first year of launch, it is essential to define the app requirements, design the app architecture, choose the right technologies, develop and test the app, and finally launch and maintain the app.

##_2.Design an application architecture for the above application. The application architecture diagram should include all application modules, components, and the interactions between them that constitute the application. You only need to attach the application architecture diagram & send it to jobs@360ground.com_ 
```sql
   +-------------------------+
   | Mobile Banking App       |
   +-------------------------+
              |
              | (1) Request for Transaction
              |
   +-------------------------+
   | Device Storage Module    |
   +-------------------------+
              |
              | (2) Retrieve Transaction Request
              |
   +-------------------------+
   | Local Transaction Module |
   +-------------------------+
              |
              | (3) Process Transaction
              |
   +-------------------------+
   | Backend Server           |
   +-------------------------+
              |
              | (4) Update Transaction Status
              |
   +-------------------------+
   ```
  * Mobile Banking App: This is the front-end application that is installed on the user's device. It allows the user to request a transaction, view their account balance, and manage their transactions.

* Device Storage Module: This module is responsible for storing the transaction request locally on the user's device when there is no internet connection.

* Local Transaction Module: This module processes the transaction request stored on the device and ensures that it adheres to the business rules of the application. If the transaction is valid, it updates the user's account balance and prepares the transaction for submission to the backend server.

* Backend Server: This module receives the transaction request from the Local Transaction Module and updates the user's account balance on the server-side. It also updates the transaction status to indicate whether the transaction was successful or not.

##__The interactions between the application modules are as follows:_

* When the user requests a transaction, the Mobile Banking App sends a request to the Device Storage Module.
* The Device Storage Module retrieves the transaction request when an internet connection is not available and returns it to the Mobile Banking App.
* The Mobile Banking App sends the retrieved transaction request to the Local Transaction Module for processing.
The Local Transaction Module processes the transaction request and prepares it for submission to the Backend Server.
* The Local Transaction Module sends the transaction request to the Backend Server.
* The Backend Server updates the user's account balance and the transaction status, and sends a response back to the Local Transaction Module.
* The Local Transaction Module updates the Mobile Banking App with the transaction status, indicating whether the transaction was successful or not.
* This architecture ensures that the application can be used offline and that the user's data is stored locally on their device when there is no internet connection. It also provides a secure and reliable way to process transactions and update the user's account balance.

##_3.Propose a technology (framework, kit...) to implement the mobile & web app and discuss why you picked it._

## For implementing the mobile and web app, I would recommend using React Native and ReactJS. Here are some reasons why:

* Cross-Platform Support: React Native is a cross-platform framework that allows developers to build apps for both iOS and Android platforms with a single codebase. This saves time and effort as developers do not need to write separate code for each platform. Similarly, ReactJS can be used to build web applications that work on all major web browsers.

* Component-Based Architecture: React Native and ReactJS both use a component-based architecture, which makes it easy to build complex user interfaces with reusable components. This also makes it easy to maintain the codebase as changes to one component do not affect the other components.

* Large Community and Ecosystem: React Native and ReactJS have a large and active community of developers and contributors. This means that developers can find answers to their questions quickly and easily, and can leverage the many libraries, tools, and plugins available for these frameworks.

* Performance: React Native is known for its performance, thanks to its native rendering capabilities and its use of a just-in-time (JIT) compiler. ReactJS also performs well, thanks to its virtual DOM, which minimizes the number of updates needed to the actual DOM.

* Strong Developer Tools: Both React Native and ReactJS have a rich set of developer tools, including powerful debugging and testing tools, code editors, and integrations with popular IDEs.

* Scalability: React Native and ReactJS are highly scalable, making it easy to add new features and functionality as the application grows.

Overall, I recommend using React Native and ReactJS for implementing the mobile and web app due to their cross-platform support, component-based architecture, large community and ecosystem, performance, strong developer tools, and scalability.
-
---------

# Contents

* Given problem

* My Solution


  * Project Structure
  * Building helper class
  * Buildings helper class
  * DeliveryRouter class
  * Ground360Application Main class

# Given
## Code Challange

### Implement a route planning algorithm for a delivery company.

A delivery company has to deliver packages to several buildings in a city. Given the set of buildings and the distance between every pair of buildings, the problem is to find the shortest possible route that visits every building exactly once and returns to the starting building.

Implement a function that takes a list of buildings and a starting building and returns the shortest possible route to travel from the starting building to all the other buildings, visiting all the buildings exactly once and returning to the starting building.
```python
Given Definition(Function) using python
def delivery_route_optimization(buildings: List[Building], start: Building) -> List[Building]:
  ```
  ```python
Mine implementation using java 
public static computesShortestPossibleRoutesToTravelFromSourceBuildings(Buildings buildings, Building sourceBuilding){
  // Write or include the logic here
}
```
where:

* buildings is a list of buildings with the name and distance attributes.
* start is the starting building.

The function should return a list of buildings representing the optimized delivery route, starting and ending with the start building.

Note: Assume that the distance between any two buildings is given and it is symmetrical (i.e., if there is a path from building A to building B with a distance of d, then there is a path from building B to building A with a distance of d).

## Submission Instructions
1. Code: you can write your solution in a preferred programming language and provide the full code.
2. Comments: The code should be well-commented and should explain the thought process and logic behind the solution.
3. Test Cases: provide test cases that demonstrate the correctness of their solution, including edge cases.
4. Time & Space Complexity Analysis: provide an analysis of the time and space complexity of their solution.
5. Document: Provide a document explaining the solution, how you approached the problem, and how you tested it.
6. Submission: You can upload the code to a code hosting platform (e.g., GitHub, GitLab, Bitbucket) and share the link.

### Plagiarism
It is important to note that plagiarism will not be tolerated. All submitted solutions must be original and written by you, who applied for the vacancy and submitted the solution. Any evidence of plagiarism will be thoroughly investigated and may result in disqualification from the assessment process.

### Solution

```javascript 

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
```


