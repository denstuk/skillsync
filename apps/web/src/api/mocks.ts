export const MOCK_TASKS = [
    {
        "type": "SingleChoice",
        "question": "Which of the following is NOT a core component of the Node.js Event Loop?",
        "options": [
            "Timer Queue",
            "Pending Callbacks Queue",
            "HTTP Request Queue",
            "Poll Queue"
        ],
        "answer": "HTTP Request Queue",
        "level": "Novice"
    },
    {
        "type": "FreeText",
        "question": "Explain the concept of the Node.js Event Loop and how it handles asynchronous operations.",
        "answer": [
            "The Node.js Event Loop is a single-threaded process that manages asynchronous operations. It constantly checks for new events and executes callbacks from the event queues. When an operation is initiated, it's added to a queue, and the Event Loop continues to process other tasks. Once the operation completes, its callback is moved to the appropriate queue to be executed later."
        ],
        "level": "Intermediate"
    },
    {
        "type": "Code",
        "question": "Write a Node.js code snippet that demonstrates how to use the `setTimeout()` function to simulate an asynchronous operation and handle its callback.",
        "answer": "javascript\nsetTimeout(() => {\n  console.log('This message will be displayed after 2 seconds.');\n}, 2000);\n",
        "level": "Advanced"
    },
    {
      "type": "Diagram",
      "question": "Draw a diagram illustrating a reliable system architecture for a web application. Include components like load balancers, redundancy, and failover mechanisms to ensure high availability and fault tolerance."
    },
    {
        "type": "FreeText",
        "question": "Describe a real-world scenario where understanding Node.js Event Loop optimization is crucial for building a high-performance application.",
        "answer": [
            "A real-time chat application heavily reliant on handling user messages and notifications. If the Event Loop is not optimized, long-running tasks or blocking operations could slow down the response time for real-time updates, leading to a poor user experience."
        ],
        "level": "Expert"
    },
    {
        "type": "SingleChoice",
        "question": "Which of the following is a core benefit of using promises in asynchronous JavaScript?",
        "options": [
            "Improved readability and code organization",
            "Enhanced error handling capabilities",
            "Simplified handling of multiple asynchronous operations",
            "All of the above"
        ],
        "answer": "All of the above",
        "level": "Novice"
    },
    {
        "type": "Code",
        "question": "Write a Node.js code snippet that demonstrates how to chain promises to perform two asynchronous operations sequentially, handling any errors that might occur.",
        "answer": "javascript\nconst fs = require('fs');\n\nfunction readFile(filename) {\n  return new Promise((resolve, reject) => {\n    fs.readFile(filename, 'utf8', (err, data) => {\n      if (err) {\n        reject(err);\n      } else {\n        resolve(data);\n      }\n    });\n  });\n}\n\nreadFile('file1.txt')\n  .then(data1 => {\n    console.log('File 1 contents:', data1);\n    return readFile('file2.txt');\n  })\n  .then(data2 => {\n    console.log('File 2 contents:', data2);\n  })\n  .catch(err => {\n    console.error('Error:', err);\n  });\n",
        "level": "Intermediate"
    },
    {
        "type": "MultipleChoice",
        "question": "Which of the following are valid ways to handle asynchronous operations in Node.js?",
        "options": [
            "Callbacks",
            "Promises",
            "Async/Await",
            "Event Emitters",
            "All of the above"
        ],
        "answer": [
            "Callbacks",
            "Promises",
            "Async/Await",
            "Event Emitters"
        ],
        "level": "Advanced"
    },
    {
        "type": "FreeText",
        "question": "Discuss the pros and cons of using async/await compared to traditional callback-based asynchronous programming in Node.js.",
        "answer": [
            "Async/await provides a more synchronous-like syntax, making code more readable and easier to understand, especially for complex asynchronous flows. However, it relies on Promises internally, so understanding Promises is still essential. Callback-based programming can be more verbose but offers more flexibility in handling asynchronous operations."
        ],
        "level": "Expert"
    },
    {
        "type": "SingleChoice",
        "question": "Which of the following is a popular package manager used for managing Node.js project dependencies?",
        "options": [
            "npm",
            "yarn",
            "bower",
            "Both npm and yarn"
        ],
        "answer": "Both npm and yarn",
        "level": "Novice"
    },
    {
        "type": "FreeText",
        "question": "Explain the difference between a Node.js module and a package, and how they relate to package management tools like npm.",
        "answer": [
            "A module is a single JavaScript file containing reusable code, while a package is a collection of modules and associated resources that can be published and shared. Package managers like npm help install, manage, and update packages within Node.js projects, providing efficient dependency management and reusability."
        ],
        "level": "Intermediate"
    },
    {
        "type": "Code",
        "question": "Write a Node.js code snippet that creates a simple module and exports a function that calculates the sum of two numbers. Then, demonstrate how to import and use this module in another file.",
        "answer": "javascript\n// module.js\nfunction sum(a, b) {\n  return a + b;\n}\n\nmodule.exports = { sum };\n\n// main.js\nconst myModule = require('./module');\n\nconst result = myModule.sum(5, 3);\nconsole.log(result); // Output: 8\n",
        "level": "Advanced"
    },
    {
        "type": "FreeText",
        "question": "Describe a scenario where you would use a Node.js package manager to streamline your development process and enhance collaboration among team members.",
        "answer": [
            "A large-scale Node.js project with multiple developers working on different components. Using a package manager like npm or yarn allows developers to easily share reusable code modules, manage dependencies consistently across the project, and ensure everyone is using the same versions of libraries and tools, fostering seamless collaboration."
        ],
        "level": "Expert"
    },
    {
        "type": "SingleChoice",
        "question": "Which of the following is a popular Node.js framework commonly used for building web servers?",
        "options": [
            "Express",
            "Koa",
            "NestJS",
            "All of the above"
        ],
        "answer": "All of the above",
        "level": "Novice"
    },
    {
        "type": "Code",
        "question": "Write a simple Express.js route handler that responds to a GET request at the path '/users' and returns a JSON array of user data.",
        "answer": "javascript\nconst express = require('express');\nconst app = express();\n\napp.get('/users', (req, res) => {\n  const users = [ { name: 'Alice', age: 30 }, { name: 'Bob', age: 25 } ];\n  res.json(users);\n});\n\napp.listen(3000, () => console.log('Server listening on port 3000'));\n",
        "level": "Intermediate"
    },
    {
        "type": "FreeText",
        "question": "Explain the role of middleware in Node.js web server development, and provide an example of how it can be used to authenticate requests.",
        "answer": [
            "Middleware in Node.js is a function that intercepts requests and responses before they reach the final route handler. It can be used to perform actions like authentication, logging, data validation, or modifying the request or response. For authentication, middleware can verify user credentials or tokens before allowing access to protected routes."
        ],
        "level": "Advanced"
    },
    {
        "type": "FreeText",
        "question": "Discuss the trade-offs between using Express.js and Koa.js for building high-performance Node.js web servers, considering factors like middleware implementation, error handling, and performance.",
        "answer": [
            "Express is a mature and widely used framework with a comprehensive ecosystem, while Koa focuses on a more minimalist approach, leveraging async/await and middleware composition for a streamlined and potentially more performant experience. The choice depends on specific project requirements, developer preferences, and the desired level of control over the web server's behavior."
        ],
        "level": "Expert"
    },
    {
        "type": "SingleChoice",
        "question": "Which of the following technologies is commonly used for real-time communication in Node.js applications?",
        "options": [
            "WebSockets",
            "Socket.IO",
            "HTTP",
            "Both WebSockets and Socket.IO"
        ],
        "answer": "Both WebSockets and Socket.IO",
        "level": "Novice"
    },
    {
        "type": "Code",
        "question": "Write a basic Node.js code snippet using Socket.IO to establish a connection between a client and a server and emit a simple message from the server to the client.",
        "answer": "javascript\nconst express = require('express');\nconst app = express();\nconst http = require('http').createServer(app);\nconst io = require('socket.io')(http);\n\nio.on('connection', socket => {\n  console.log('A user connected');\n  socket.emit('message', 'Hello from the server!');\n});\n\nhttp.listen(3000, () => console.log('Server listening on port 3000'));\n",
        "level": "Intermediate"
    },
    {
        "type": "FreeText",
        "question": "Describe a practical use case for real-time applications built with Node.js, highlighting the benefits of using technologies like WebSockets or Socket.IO.",
        "answer": [
            "Real-time collaborative editing tools, where multiple users can work on the same document simultaneously. WebSockets or Socket.IO enable instant updates and synchronization of changes across all connected users, creating a seamless and responsive collaborative experience."
        ],
        "level": "Advanced"
    },
    {
        "type": "FreeText",
        "question": "Discuss the challenges and best practices associated with building scalable and reliable real-time applications using Node.js, considering factors like handling a large number of concurrent connections and preventing data loss or inconsistencies.",
        "answer": [
            "Scalability and reliability are crucial for real-time applications.  Strategies include load balancing, using efficient data structures for managing connections, implementing robust error handling and recovery mechanisms, and potentially utilizing a message queue for buffering and managing high-volume events."
        ],
        "level": "Expert"
    },
    {
        "type": "MultipleChoice",
        "question": "Which of the following are common security vulnerabilities that Node.js developers need to be aware of and mitigate?",
        "options": [
            "Cross-Site Scripting (XSS)",
            "SQL Injection",
            "Authentication and Authorization Issues",
            "Insecure Data Handling",
            "All of the above"
        ],
        "answer": [
            "Cross-Site Scripting (XSS)",
            "SQL Injection",
            "Authentication and Authorization Issues",
            "Insecure Data Handling"
        ],
        "level": "Novice"
    },
    {
        "type": "FreeText",
        "question": "Explain how to implement basic authentication in a Node.js application to protect sensitive routes from unauthorized access.",
        "answer": [
            "Basic authentication involves sending username and password credentials in the HTTP request header. The server can verify these credentials against a database or other authentication mechanism. Middleware can be used to intercept requests and check for valid authentication before proceeding to the protected routes."
        ],
        "level": "Intermediate"
    },
    {
        "type": "Code",
        "question": "Write a Node.js code snippet using a library like `express-validator` to demonstrate how to implement input validation to prevent common vulnerabilities like SQL injection.",
        "answer": "javascript\nconst express = require('express');\nconst { body } = require('express-validator');\nconst app = express();\n\napp.post('/users', [\n  body('username').trim().escape(),\n  body('password').isLength({ min: 8 }),\n], (req, res) => {\n  const errors = validationResult(req);\n  if (!errors.isEmpty()) {\n    return res.status(400).json({ errors: errors.array() });\n  }\n  // Proceed with user creation or other actions\n});\n",
        "level": "Advanced"
    },
    {
        "type": "FreeText",
        "question": "Discuss the importance of secure coding practices and the use of security analysis tools in building secure Node.js applications. Provide specific examples of tools or techniques that can be employed to identify and address vulnerabilities.",
        "answer": [
            "Secure coding practices are paramount to prevent common vulnerabilities. Examples include input validation, output encoding, secure storage of sensitive data, and using secure libraries. Tools like security code scanners, penetration testing, and code analysis frameworks can help identify potential weaknesses and guide developers towards secure coding practices."
        ],
        "level": "Expert"
    },
    {
        "type": "SingleChoice",
        "question": "Which of the following is a technique commonly used to improve the performance of Node.js applications by reducing the time it takes to execute code?",
        "options": [
            "Caching",
            "Code Profiling",
            "Load Balancing",
            "All of the above"
        ],
        "answer": "All of the above",
        "level": "Novice"
    },
    {
        "type": "FreeText",
        "question": "Explain how code profiling can help identify performance bottlenecks in Node.js applications.",
        "answer": [
            "Code profiling involves analyzing the execution of code to identify areas that consume the most time or resources. By using profiling tools, developers can pinpoint specific functions or code sections that contribute to performance issues, allowing them to optimize those areas for better efficiency."
        ],
        "level": "Intermediate"
    },
    {
        "type": "Code",
        "question": "Write a Node.js code snippet demonstrating how to use the `cluster` module to create a cluster of worker processes, improving the application's scalability and performance.",
        "answer": "javascript\nconst cluster = require('cluster');\nconst numCPUs = require('os').cpus().length;\n\nif (cluster.isMaster) {\n  console.log(`Master ${process.pid} is running`);\n  for (let i = 0; i < numCPUs; i++) {\n    cluster.fork();\n  }\n\n  cluster.on('exit', (worker, code, signal) => {\n    console.log(`Worker ${worker.process.pid} died`);\n  });\n} else {\n  console.log(`Worker ${process.pid} started`);\n  // Worker code goes here\n}\n",
        "level": "Advanced"
    },
    {
        "type": "FreeText",
        "question": "Discuss the trade-offs involved in using different caching strategies (e.g., in-memory caching, database caching) for optimizing Node.js application performance, considering factors like memory usage, data consistency, and complexity.",
        "answer": [
            "In-memory caching offers fast access but can consume significant memory, especially for large datasets. Database caching provides more persistent storage but might have slower retrieval times. The choice depends on the nature of the data, the frequency of access, and the acceptable level of data staleness."
        ],
        "level": "Expert"
    },
    {
        "type": "MultipleChoice",
        "question": "Which of the following are popular libraries or frameworks commonly used in the Node.js ecosystem for specific purposes?",
        "options": [
            "Express.js (web framework)",
            "Mongoose (MongoDB ODM)",
            "Moment.js (date and time manipulation)",
            "Lodash (utility library)",
            "All of the above"
        ],
        "answer": [
            "Express.js (web framework)",
            "Mongoose (MongoDB ODM)",
            "Moment.js (date and time manipulation)",
            "Lodash (utility library)"
        ],
        "level": "Novice"
    },
    {
        "type": "FreeText",
        "question": "Describe the benefits of using a database object mapper (ODM) like Mongoose in Node.js applications when working with MongoDB.",
        "answer": [
            "An ODM like Mongoose provides an object-oriented interface for interacting with a MongoDB database, simplifying data modeling, validation, and querying. It allows developers to work with objects and schemas rather than directly dealing with raw MongoDB documents, leading to more structured and maintainable code."
        ],
        "level": "Intermediate"
    },
    {
        "type": "FreeText",
        "question": "Explain the role of build tools like Webpack or Parcel in modern Node.js development workflows, and how they contribute to optimizing application performance and maintainability.",
        "answer": [
            "Build tools like Webpack or Parcel automate the process of bundling and optimizing application code, assets (images, CSS), and dependencies. They optimize code for performance, handle dependencies, and streamline the development process by creating production-ready bundles."
        ],
        "level": "Advanced"
    },
    {
        "type": "FreeText",
        "question": "Discuss the evolution of the Node.js ecosystem, highlighting key trends and advancements, such as the rise of serverless computing, the adoption of TypeScript, and the increasing popularity of microservices architectures.",
        "answer": [
            "The Node.js ecosystem continues to evolve rapidly, driven by the increasing adoption of serverless computing, the rise of TypeScript as a preferred language for large-scale projects, and the growing trend towards microservices architectures. These advancements offer developers more flexibility, scalability, and efficiency in building modern applications."
        ],
        "level": "Expert"
    },
    {
        "type": "MultipleChoice",
        "question": "Which of the following are common types of testing practices employed for Node.js applications?",
        "options": [
            "Unit Testing",
            "Integration Testing",
            "End-to-End Testing",
            "All of the above"
        ],
        "answer": [
            "Unit Testing",
            "Integration Testing",
            "End-to-End Testing"
        ],
        "level": "Novice"
    },
    {
        "type": "Code",
        "question": "Write a simple unit test using a testing framework like Jest to assert the functionality of a function that calculates the factorial of a number.",
        "answer": "javascript\nconst { factorial } = require('./math');\n\ntest('factorial function works correctly', () => {\n  expect(factorial(5)).toBe(120);\n  expect(factorial(0)).toBe(1);\n});\n",
        "level": "Intermediate"
    },
    {
        "type": "FreeText",
        "question": "Explain the importance of setting up a comprehensive testing strategy for Node.js applications, encompassing various levels of testing like unit, integration, and end-to-end.",
        "answer": [
            "A comprehensive testing strategy is essential for ensuring the quality, reliability, and maintainability of Node.js applications. Unit testing focuses on testing individual functions or modules in isolation. Integration testing verifies the interaction between different components or modules. End-to-end testing simulates real user scenarios to ensure the application works as expected from start to finish."
        ],
        "level": "Advanced"
    },
    {
        "type": "FreeText",
        "question": "Discuss the best practices for effective debugging of Node.js applications, including the use of debugging tools, logging techniques, and strategies for isolating and resolving issues.",
        "answer": [
            "Effective debugging involves a combination of techniques. Debugging tools like the Node.js debugger provide interactive stepping and inspection capabilities. Logging can be used to capture execution flow and identify potential errors. Strategies for isolating issues include systematically removing or modifying code sections to identify the root cause."
        ],
        "level": "Expert"
    },
    {
        "type": "MultipleChoice",
        "question": "Which of the following are popular platforms or services commonly used for deploying and scaling Node.js applications?",
        "options": [
            "AWS (Amazon Web Services)",
            "Google Cloud Platform (GCP)",
            "Microsoft Azure",
            "Heroku",
            "All of the above"
        ],
        "answer": [
            "AWS (Amazon Web Services)",
            "Google Cloud Platform (GCP)",
            "Microsoft Azure",
            "Heroku"
        ],
        "level": "Novice"
    },
    {
        "type": "FreeText",
        "question": "Explain the benefits of using Docker for containerizing Node.js applications, and how it facilitates consistent deployment across different environments.",
        "answer": [
            "Docker provides a way to package Node.js applications along with their dependencies and runtime environment into self-contained containers. This ensures consistent deployment across development, testing, and production environments, eliminating potential issues related to environment differences or missing dependencies."
        ],
        "level": "Intermediate"
    },
    {
        "type": "FreeText",
        "question": "Describe how container orchestration tools like Kubernetes can help manage and scale Node.js applications in complex deployments, ensuring high availability and efficient resource utilization.",
        "answer": [
            "Kubernetes automates the deployment, scaling, and management of containerized applications like Node.js applications. It provides features like automated deployments, load balancing, self-healing, and rolling updates, simplifying the management of complex, multi-container deployments."
        ],
        "level": "Advanced"
    },
    {
        "type": "FreeText",
        "question": "Discuss the considerations and best practices for scaling Node.js applications on cloud platforms like AWS, GCP, or Azure, taking into account factors like horizontal scaling, load balancing, and resource optimization.",
        "answer": [
            "Scaling Node.js applications on cloud platforms involves strategies like horizontal scaling (adding more instances), load balancing (distributing traffic across instances), and efficient resource allocation. Strategies may include using serverless functions, optimizing database queries, and implementing caching mechanisms to optimize resource utilization."
        ],
        "level": "Expert"
    }
];
