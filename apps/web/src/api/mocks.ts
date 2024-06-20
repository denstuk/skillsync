export const MOCK_TASKS = [
  {
    type: "SingleChoice",
    question:
      "Which of the following is NOT a core component of the Node.js Event Loop?",
    options: [
      "Timer Queue",
      "Pending Callbacks Queue",
      "HTTP Request Queue",
      "Poll Queue",
    ],
    answer: "HTTP Request Queue",
    level: "Novice",
  },
  {
    type: "FreeText",
    question:
      "Explain the concept of the Node.js Event Loop and how it handles asynchronous operations.",
    answer: [
      "The Node.js Event Loop is a single-threaded process that manages asynchronous operations. It constantly checks for new events and executes callbacks from the event queues. When an operation is initiated, it's added to a queue, and the Event Loop continues to process other tasks. Once the operation completes, its callback is moved to the appropriate queue to be executed later.",
    ],
    level: "Intermediate",
  },
  {
    type: "Code",
    question:
      "Write a Node.js code snippet that demonstrates how to use the `setTimeout()` function to simulate an asynchronous operation and handle its callback.",
    answer:
      "javascript\nsetTimeout(() => {\n  console.log('This message will be displayed after 2 seconds.');\n}, 2000);\n",
    level: "Advanced",
  },
  {
    type: "Diagram",
    question:
      "Draw a diagram illustrating a reliable system architecture for a web application. Include components like load balancers, redundancy, and failover mechanisms to ensure high availability and fault tolerance.",
  },
  {
    type: "FreeText",
    question:
      "Describe a real-world scenario where understanding Node.js Event Loop optimization is crucial for building a high-performance application.",
    answer: [
      "A real-time chat application heavily reliant on handling user messages and notifications. If the Event Loop is not optimized, long-running tasks or blocking operations could slow down the response time for real-time updates, leading to a poor user experience.",
    ],
    level: "Expert",
  },
  {
    type: "SingleChoice",
    question:
      "Which of the following is a core benefit of using promises in asynchronous JavaScript?",
    options: [
      "Improved readability and code organization",
      "Enhanced error handling capabilities",
      "Simplified handling of multiple asynchronous operations",
      "All of the above",
    ],
    answer: "All of the above",
    level: "Novice",
  },
  {
    type: "Code",
    question:
      "Write a Node.js code snippet that demonstrates how to chain promises to perform two asynchronous operations sequentially, handling any errors that might occur.",
    answer:
      "javascript\nconst fs = require('fs');\n\nfunction readFile(filename) {\n  return new Promise((resolve, reject) => {\n    fs.readFile(filename, 'utf8', (err, data) => {\n      if (err) {\n        reject(err);\n      } else {\n        resolve(data);\n      }\n    });\n  });\n}\n\nreadFile('file1.txt')\n  .then(data1 => {\n    console.log('File 1 contents:', data1);\n    return readFile('file2.txt');\n  })\n  .then(data2 => {\n    console.log('File 2 contents:', data2);\n  })\n  .catch(err => {\n    console.error('Error:', err);\n  });\n",
    level: "Intermediate",
  },
  {
    type: "MultipleChoice",
    question:
      "Which of the following are valid ways to handle asynchronous operations in Node.js?",
    options: [
      "Callbacks",
      "Promises",
      "Async/Await",
      "Event Emitters",
      "All of the above",
    ],
    answer: ["Callbacks", "Promises", "Async/Await", "Event Emitters"],
    level: "Advanced",
  },
  {
    type: "FreeText",
    question:
      "Discuss the pros and cons of using async/await compared to traditional callback-based asynchronous programming in Node.js.",
    answer: [
      "Async/await provides a more synchronous-like syntax, making code more readable and easier to understand, especially for complex asynchronous flows. However, it relies on Promises internally, so understanding Promises is still essential. Callback-based programming can be more verbose but offers more flexibility in handling asynchronous operations.",
    ],
    level: "Expert",
  },
  {
    type: "SingleChoice",
    question:
      "Which of the following is a popular package manager used for managing Node.js project dependencies?",
    options: ["npm", "yarn", "bower", "Both npm and yarn"],
    answer: "Both npm and yarn",
    level: "Novice",
  },
  {
    type: "FreeText",
    question:
      "Explain the difference between a Node.js module and a package, and how they relate to package management tools like npm.",
    answer: [
      "A module is a single JavaScript file containing reusable code, while a package is a collection of modules and associated resources that can be published and shared. Package managers like npm help install, manage, and update packages within Node.js projects, providing efficient dependency management and reusability.",
    ],
    level: "Intermediate",
  },
  {
    type: "Code",
    question:
      "Write a Node.js code snippet that creates a simple module and exports a function that calculates the sum of two numbers. Then, demonstrate how to import and use this module in another file.",
    answer:
      "javascript\n// module.js\nfunction sum(a, b) {\n  return a + b;\n}\n\nmodule.exports = { sum };\n\n// main.js\nconst myModule = require('./module');\n\nconst result = myModule.sum(5, 3);\nconsole.log(result); // Output: 8\n",
    level: "Advanced",
  },
  {
    type: "FreeText",
    question:
      "Describe a scenario where you would use a Node.js package manager to streamline your development process and enhance collaboration among team members.",
    answer: [
      "A large-scale Node.js project with multiple developers working on different components. Using a package manager like npm or yarn allows developers to easily share reusable code modules, manage dependencies consistently across the project, and ensure everyone is using the same versions of libraries and tools, fostering seamless collaboration.",
    ],
    level: "Expert",
  },
  {
    type: "SingleChoice",
    question:
      "Which of the following is a popular Node.js framework commonly used for building web servers?",
    options: ["Express", "Koa", "NestJS", "All of the above"],
    answer: "All of the above",
    level: "Novice",
  },
  {
    type: "Code",
    question:
      "Write a simple Express.js route handler that responds to a GET request at the path '/users' and returns a JSON array of user data.",
    answer:
      "javascript\nconst express = require('express');\nconst app = express();\n\napp.get('/users', (req, res) => {\n  const users = [ { name: 'Alice', age: 30 }, { name: 'Bob', age: 25 } ];\n  res.json(users);\n});\n\napp.listen(3000, () => console.log('Server listening on port 3000'));\n",
    level: "Intermediate",
  },
  {
    type: "FreeText",
    question:
      "Explain the role of middleware in Node.js web server development, and provide an example of how it can be used to authenticate requests.",
    answer: [
      "Middleware in Node.js is a function that intercepts requests and responses before they reach the final route handler. It can be used to perform actions like authentication, logging, data validation, or modifying the request or response. For authentication, middleware can verify user credentials or tokens before allowing access to protected routes.",
    ],
    level: "Advanced",
  },
  {
    type: "FreeText",
    question:
      "Discuss the trade-offs between using Express.js and Koa.js for building high-performance Node.js web servers, considering factors like middleware implementation, error handling, and performance.",
    answer: [
      "Express is a mature and widely used framework with a comprehensive ecosystem, while Koa focuses on a more minimalist approach, leveraging async/await and middleware composition for a streamlined and potentially more performant experience. The choice depends on specific project requirements, developer preferences, and the desired level of control over the web server's behavior.",
    ],
    level: "Expert",
  },
  {
    type: "SingleChoice",
    question:
      "Which of the following technologies is commonly used for real-time communication in Node.js applications?",
    options: [
      "WebSockets",
      "Socket.IO",
      "HTTP",
      "Both WebSockets and Socket.IO",
    ],
    answer: "Both WebSockets and Socket.IO",
    level: "Novice",
  },
  {
    type: "Code",
    question:
      "Write a basic Node.js code snippet using Socket.IO to establish a connection between a client and a server and emit a simple message from the server to the client.",
    answer:
      "javascript\nconst express = require('express');\nconst app = express();\nconst http = require('http').createServer(app);\nconst io = require('socket.io')(http);\n\nio.on('connection', socket => {\n  console.log('A user connected');\n  socket.emit('message', 'Hello from the server!');\n});\n\nhttp.listen(3000, () => console.log('Server listening on port 3000'));\n",
    level: "Intermediate",
  },
  {
    type: "FreeText",
    question:
      "Describe a practical use case for real-time applications built with Node.js, highlighting the benefits of using technologies like WebSockets or Socket.IO.",
    answer: [
      "Real-time collaborative editing tools, where multiple users can work on the same document simultaneously. WebSockets or Socket.IO enable instant updates and synchronization of changes across all connected users, creating a seamless and responsive collaborative experience.",
    ],
    level: "Advanced",
  },
  {
    type: "FreeText",
    question:
      "Discuss the challenges and best practices associated with building scalable and reliable real-time applications using Node.js, considering factors like handling a large number of concurrent connections and preventing data loss or inconsistencies.",
    answer: [
      "Scalability and reliability are crucial for real-time applications.  Strategies include load balancing, using efficient data structures for managing connections, implementing robust error handling and recovery mechanisms, and potentially utilizing a message queue for buffering and managing high-volume events.",
    ],
    level: "Expert",
  },
  {
    type: "MultipleChoice",
    question:
      "Which of the following are common security vulnerabilities that Node.js developers need to be aware of and mitigate?",
    options: [
      "Cross-Site Scripting (XSS)",
      "SQL Injection",
      "Authentication and Authorization Issues",
      "Insecure Data Handling",
      "All of the above",
    ],
    answer: [
      "Cross-Site Scripting (XSS)",
      "SQL Injection",
      "Authentication and Authorization Issues",
      "Insecure Data Handling",
    ],
    level: "Novice",
  },
  {
    type: "FreeText",
    question:
      "Explain how to implement basic authentication in a Node.js application to protect sensitive routes from unauthorized access.",
    answer: [
      "Basic authentication involves sending username and password credentials in the HTTP request header. The server can verify these credentials against a database or other authentication mechanism. Middleware can be used to intercept requests and check for valid authentication before proceeding to the protected routes.",
    ],
    level: "Intermediate",
  },
  {
    type: "Code",
    question:
      "Write a Node.js code snippet using a library like `express-validator` to demonstrate how to implement input validation to prevent common vulnerabilities like SQL injection.",
    answer:
      "javascript\nconst express = require('express');\nconst { body } = require('express-validator');\nconst app = express();\n\napp.post('/users', [\n  body('username').trim().escape(),\n  body('password').isLength({ min: 8 }),\n], (req, res) => {\n  const errors = validationResult(req);\n  if (!errors.isEmpty()) {\n    return res.status(400).json({ errors: errors.array() });\n  }\n  // Proceed with user creation or other actions\n});\n",
    level: "Advanced",
  },
  {
    type: "FreeText",
    question:
      "Discuss the importance of secure coding practices and the use of security analysis tools in building secure Node.js applications. Provide specific examples of tools or techniques that can be employed to identify and address vulnerabilities.",
    answer: [
      "Secure coding practices are paramount to prevent common vulnerabilities. Examples include input validation, output encoding, secure storage of sensitive data, and using secure libraries. Tools like security code scanners, penetration testing, and code analysis frameworks can help identify potential weaknesses and guide developers towards secure coding practices.",
    ],
    level: "Expert",
  },
  {
    type: "SingleChoice",
    question:
      "Which of the following is a technique commonly used to improve the performance of Node.js applications by reducing the time it takes to execute code?",
    options: [
      "Caching",
      "Code Profiling",
      "Load Balancing",
      "All of the above",
    ],
    answer: "All of the above",
    level: "Novice",
  },
  {
    type: "FreeText",
    question:
      "Explain how code profiling can help identify performance bottlenecks in Node.js applications.",
    answer: [
      "Code profiling involves analyzing the execution of code to identify areas that consume the most time or resources. By using profiling tools, developers can pinpoint specific functions or code sections that contribute to performance issues, allowing them to optimize those areas for better efficiency.",
    ],
    level: "Intermediate",
  },
  {
    type: "Code",
    question:
      "Write a Node.js code snippet demonstrating how to use the `cluster` module to create a cluster of worker processes, improving the application's scalability and performance.",
    answer:
      "javascript\nconst cluster = require('cluster');\nconst numCPUs = require('os').cpus().length;\n\nif (cluster.isMaster) {\n  console.log(`Master ${process.pid} is running`);\n  for (let i = 0; i < numCPUs; i++) {\n    cluster.fork();\n  }\n\n  cluster.on('exit', (worker, code, signal) => {\n    console.log(`Worker ${worker.process.pid} died`);\n  });\n} else {\n  console.log(`Worker ${process.pid} started`);\n  // Worker code goes here\n}\n",
    level: "Advanced",
  },
  {
    type: "FreeText",
    question:
      "Discuss the trade-offs involved in using different caching strategies (e.g., in-memory caching, database caching) for optimizing Node.js application performance, considering factors like memory usage, data consistency, and complexity.",
    answer: [
      "In-memory caching offers fast access but can consume significant memory, especially for large datasets. Database caching provides more persistent storage but might have slower retrieval times. The choice depends on the nature of the data, the frequency of access, and the acceptable level of data staleness.",
    ],
    level: "Expert",
  },
  {
    type: "MultipleChoice",
    question:
      "Which of the following are popular libraries or frameworks commonly used in the Node.js ecosystem for specific purposes?",
    options: [
      "Express.js (web framework)",
      "Mongoose (MongoDB ODM)",
      "Moment.js (date and time manipulation)",
      "Lodash (utility library)",
      "All of the above",
    ],
    answer: [
      "Express.js (web framework)",
      "Mongoose (MongoDB ODM)",
      "Moment.js (date and time manipulation)",
      "Lodash (utility library)",
    ],
    level: "Novice",
  },
  {
    type: "FreeText",
    question:
      "Describe the benefits of using a database object mapper (ODM) like Mongoose in Node.js applications when working with MongoDB.",
    answer: [
      "An ODM like Mongoose provides an object-oriented interface for interacting with a MongoDB database, simplifying data modeling, validation, and querying. It allows developers to work with objects and schemas rather than directly dealing with raw MongoDB documents, leading to more structured and maintainable code.",
    ],
    level: "Intermediate",
  },
  {
    type: "FreeText",
    question:
      "Explain the role of build tools like Webpack or Parcel in modern Node.js development workflows, and how they contribute to optimizing application performance and maintainability.",
    answer: [
      "Build tools like Webpack or Parcel automate the process of bundling and optimizing application code, assets (images, CSS), and dependencies. They optimize code for performance, handle dependencies, and streamline the development process by creating production-ready bundles.",
    ],
    level: "Advanced",
  },
  {
    type: "FreeText",
    question:
      "Discuss the evolution of the Node.js ecosystem, highlighting key trends and advancements, such as the rise of serverless computing, the adoption of TypeScript, and the increasing popularity of microservices architectures.",
    answer: [
      "The Node.js ecosystem continues to evolve rapidly, driven by the increasing adoption of serverless computing, the rise of TypeScript as a preferred language for large-scale projects, and the growing trend towards microservices architectures. These advancements offer developers more flexibility, scalability, and efficiency in building modern applications.",
    ],
    level: "Expert",
  },
  {
    type: "MultipleChoice",
    question:
      "Which of the following are common types of testing practices employed for Node.js applications?",
    options: [
      "Unit Testing",
      "Integration Testing",
      "End-to-End Testing",
      "All of the above",
    ],
    answer: ["Unit Testing", "Integration Testing", "End-to-End Testing"],
    level: "Novice",
  },
  {
    type: "Code",
    question:
      "Write a simple unit test using a testing framework like Jest to assert the functionality of a function that calculates the factorial of a number.",
    answer:
      "javascript\nconst { factorial } = require('./math');\n\ntest('factorial function works correctly', () => {\n  expect(factorial(5)).toBe(120);\n  expect(factorial(0)).toBe(1);\n});\n",
    level: "Intermediate",
  },
  {
    type: "FreeText",
    question:
      "Explain the importance of setting up a comprehensive testing strategy for Node.js applications, encompassing various levels of testing like unit, integration, and end-to-end.",
    answer: [
      "A comprehensive testing strategy is essential for ensuring the quality, reliability, and maintainability of Node.js applications. Unit testing focuses on testing individual functions or modules in isolation. Integration testing verifies the interaction between different components or modules. End-to-end testing simulates real user scenarios to ensure the application works as expected from start to finish.",
    ],
    level: "Advanced",
  },
  {
    type: "FreeText",
    question:
      "Discuss the best practices for effective debugging of Node.js applications, including the use of debugging tools, logging techniques, and strategies for isolating and resolving issues.",
    answer: [
      "Effective debugging involves a combination of techniques. Debugging tools like the Node.js debugger provide interactive stepping and inspection capabilities. Logging can be used to capture execution flow and identify potential errors. Strategies for isolating issues include systematically removing or modifying code sections to identify the root cause.",
    ],
    level: "Expert",
  },
  {
    type: "MultipleChoice",
    question:
      "Which of the following are popular platforms or services commonly used for deploying and scaling Node.js applications?",
    options: [
      "AWS (Amazon Web Services)",
      "Google Cloud Platform (GCP)",
      "Microsoft Azure",
      "Heroku",
      "All of the above",
    ],
    answer: [
      "AWS (Amazon Web Services)",
      "Google Cloud Platform (GCP)",
      "Microsoft Azure",
      "Heroku",
    ],
    level: "Novice",
  },
  {
    type: "FreeText",
    question:
      "Explain the benefits of using Docker for containerizing Node.js applications, and how it facilitates consistent deployment across different environments.",
    answer: [
      "Docker provides a way to package Node.js applications along with their dependencies and runtime environment into self-contained containers. This ensures consistent deployment across development, testing, and production environments, eliminating potential issues related to environment differences or missing dependencies.",
    ],
    level: "Intermediate",
  },
  {
    type: "FreeText",
    question:
      "Describe how container orchestration tools like Kubernetes can help manage and scale Node.js applications in complex deployments, ensuring high availability and efficient resource utilization.",
    answer: [
      "Kubernetes automates the deployment, scaling, and management of containerized applications like Node.js applications. It provides features like automated deployments, load balancing, self-healing, and rolling updates, simplifying the management of complex, multi-container deployments.",
    ],
    level: "Advanced",
  },
  {
    type: "FreeText",
    question:
      "Discuss the considerations and best practices for scaling Node.js applications on cloud platforms like AWS, GCP, or Azure, taking into account factors like horizontal scaling, load balancing, and resource optimization.",
    answer: [
      "Scaling Node.js applications on cloud platforms involves strategies like horizontal scaling (adding more instances), load balancing (distributing traffic across instances), and efficient resource allocation. Strategies may include using serverless functions, optimizing database queries, and implementing caching mechanisms to optimize resource utilization.",
    ],
    level: "Expert",
  },
];

export const MOCK_FINISHED_QUIZ = {
  tasks: [
    {
      type: "SingleChoice",
      question:
        "Which React hook is best suited for optimizing a computationally expensive calculation that depends on multiple props?",
      options: ["useMemo", "useCallback", "useLayoutEffect", "useRef"],
    },
    {
      type: "MultipleChoice",
      question:
        "Which techniques are effective for improving React application performance?",
      options: [
        "React.memo",
        "Memoization",
        "Code Splitting",
        "Lazy Loading",
        "Using the `useLayoutEffect` hook",
      ],
    },
    {
      type: "Open",
      question:
        "Describe how to create a custom React hook for fetching data from an API and caching the results.",
    },
    {
      type: "Code",
      question:
        "Implement a custom hook that takes a function as an argument and returns a memoized version of that function, ensuring it only re-renders when the dependencies change.",
    },
    {
      type: "SingleChoice",
      question:
        "Which of these state management libraries is known for its simplicity and direct manipulation of state?",
      options: ["Redux", "MobX", "Zustand", "Recoil"],
    },
    {
      type: "MultipleChoice",
      question:
        "What are the advantages of using a state management library like Redux?",
      options: [
        "Centralized state management",
        "Improved predictability and debugging",
        "Time travel debugging",
        "Enhanced code organization",
        "Direct state manipulation",
      ],
    },
    {
      type: "Code",
      question:
        "Create a Redux reducer function to handle the following actions: 'ADD_ITEM', 'REMOVE_ITEM', and 'UPDATE_ITEM' for a list of items.",
    },
    {
      type: "FixCode",
      question:
        "Identify and correct the issue in the following React Router configuration that prevents proper rendering of nested routes:",
      content:
        "import { BrowserRouter, Routes, Route } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path='/' element={<Home />} />\n        <Route path='/products' element={<Products />} />\n        <Route path='/products/:id' element={<ProductDetails />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}",
    },
    {
      type: "SingleChoice",
      question:
        "Which testing library is commonly used for testing user interactions and component behavior in React?",
      options: ["Jest", "Enzyme", "React Testing Library"],
    },
    {
      type: "Code",
      question:
        "Write a Jest test for a function component that receives props and renders a button with the correct text.",
    },
    {
      type: "Open",
      question:
        "Explain the advantages and disadvantages of Server-Side Rendering (SSR) and Static Site Generation (SSG) for React applications.",
    },
    {
      type: "SingleChoice",
      question:
        "Which approach is best for rendering a React application that requires real-time updates from a server?",
      options: ["SSR", "SSG", "Client-Side Rendering", "Hybrid rendering"],
    },
    {
      type: "Code",
      question:
        "Create a simple React Native component that displays a platform-specific alert message (e.g., different messages for iOS and Android).",
    },
    {
      type: "SingleChoice",
      question:
        "Which CSS-in-JS solution allows for dynamic styling based on component props?",
      options: ["CSS Modules", "Styled Components", "Emotion"],
    },
    {
      type: "Code",
      question:
        "Implement a custom React component for a reusable 'Card' component that can be styled using Styled Components.",
    },
    {
      type: "MultipleChoice",
      question:
        "Which of these libraries is well-suited for creating interactive charts in React applications?",
      options: ["Chart.js", "D3.js", "Leaflet"],
    },
    {
      type: "FixCode",
      question:
        "Identify and fix the accessibility issue in the following code that makes it difficult for screen readers to understand the purpose of the button:",
      content: "<button>Submit</button>",
    },
    {
      type: "MultipleChoice",
      question:
        "Which of these platforms are commonly used for deploying React applications?",
      options: ["Netlify", "Vercel", "AWS", "Heroku", "GitHub Pages"],
    },
    {
      type: "Open",
      question:
        "Describe the process of integrating TypeScript into an existing React project and explain the benefits of using TypeScript.",
    },
    {
      type: "SingleChoice",
      question:
        "Which React pattern involves passing functions as props to enable controlled behavior and data flow?",
      options: ["Render Props", "Higher-Order Components", "Hooks"],
    },
  ],
  answers: [
    "useCallback",
    "React.memo,Memoization,Code Splitting,Lazy Loading,Using the `useLayoutEffect` hook",
    "i would write useEffect with dependencies against which it should be cached and inside useEffect just fetch the data and store it in state",
    "const useMemoFunc = (func,...deps) => {\n return useCallback(() => {func}, deps)\n}",
    "Redux",
    "Centralized state management,Improved predictability and debugging",
    "code",
    "import { BrowserRouter, Routes, Route } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path='/' element={<Home />} />\n        <Route path='/products' element={<Products />} />\n        <Route path='/products/:id' element={<ProductDetails />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}",
    "React Testing Library",
    "",
    "bla bla bla",
    "Client-Side Rendering",
    "nothing to code",
    "Emotion",
    "",
    "D3.js",
    "",
    "Vercel,AWS",
    "",
    "Higher-Order Components",
  ],
};

export const MOCK_FEEDBACK = {
  totalScore: 21,
  score: 14,
  recommendations:
    "## Overall Recommendations\n\nYou have a strong foundation in React fundamentals, particularly in performance optimization and state management. However, there's room for improvement in specific areas, such as coding with Redux and accessibility best practices.\n\n- **General knowledge on topic:** 10/15. Consider revisiting concepts related to testing libraries and SSR/SSG to strengthen your understanding.  \n- **Coding skills on topic:** 3/5. Your code structure and implementation show potential, but you'll benefit from further practice in creating reusable components, particularly in areas like Redux reducers and React Native. Focus on understanding component lifecycles and React Router configurations.\n\n### Additional Recommendations\n\n- Practice writing more complex custom hooks and explore advanced testing techniques for React components. \n- Pay close attention to accessibility issues in your code. Use tools and best practices to ensure your components are inclusive and usable for everyone.\n- Develop your ability to articulate the benefits and drawbacks of different approaches in React development, especially when comparing SSR, SSG, and client-side rendering.",
  results: [
    {
      task: {
        type: "SingleChoice",
        question:
          "Which React hook is best suited for optimizing a computationally expensive calculation that depends on multiple props?",
        options: ["useMemo", "useCallback", "useLayoutEffect", "useRef"],
      },
      answer: "useCallback",
      message:
        "While `useCallback` can be helpful in certain scenarios, `useMemo` is the more appropriate choice for optimizing expensive calculations that depend on props. `useMemo` memoizes the result of the calculation, preventing unnecessary re-computations.",
      correct: false,
      solution: "useMemo",
    },
    {
      task: {
        type: "MultipleChoice",
        question:
          "Which techniques are effective for improving React application performance?",
        options: [
          "React.memo",
          "Memoization",
          "Code Splitting",
          "Lazy Loading",
          "Using the `useLayoutEffect` hook",
        ],
      },
      answer:
        "React.memo,Memoization,Code Splitting,Lazy Loading,Using the `useLayoutEffect` hook",
      message:
        "Excellent! You've identified all the key techniques for optimizing React application performance. Using `React.memo`, memoization, code splitting, lazy loading, and strategic use of `useLayoutEffect` can significantly enhance responsiveness and efficiency.",
      correct: true,
    },
    {
      task: {
        type: "Open",
        question:
          "Describe how to create a custom React hook for fetching data from an API and caching the results.",
      },
      answer:
        "i would write useEffect with dependencies against which it should be cached and inside useEffect just fetch the data and store it in state",
      message:
        "You're on the right track!  A common approach is to use `useEffect` with dependencies to fetch data and store it in state. You can cache the results by checking if the data is already available in state and only making the API call if necessary.",
      correct: true,
    },
    {
      task: {
        type: "Code",
        question:
          "Implement a custom hook that takes a function as an argument and returns a memoized version of that function, ensuring it only re-renders when the dependencies change.",
      },
      answer:
        "const useMemoFunc = (func,...deps) => {\n return useCallback(() => {func}, deps)\n}",
      message:
        "While the intention is good, the code has a slight issue. `useCallback` memoizes the function itself, but not the result of its execution. To memoize the result, you need to use `useMemo`.",
      correct: false,
      solution:
        "const useMemoFunc = (func, ...deps) => {\n  return useMemo(() => func(...deps), deps);\n}",
    },
    {
      task: {
        type: "SingleChoice",
        question:
          "Which of these state management libraries is known for its simplicity and direct manipulation of state?",
        options: ["Redux", "MobX", "Zustand", "Recoil"],
      },
      answer: "Redux",
      message:
        "While Redux is a popular state management library, it's not known for its simplicity and direct manipulation of state. Libraries like Zustand and MobX emphasize direct state manipulation and a simpler API.",
      correct: false,
      solution: "Zustand",
    },
    {
      task: {
        type: "MultipleChoice",
        question:
          "What are the advantages of using a state management library like Redux?",
        options: [
          "Centralized state management",
          "Improved predictability and debugging",
          "Time travel debugging",
          "Enhanced code organization",
          "Direct state manipulation",
        ],
      },
      answer:
        "Centralized state management,Improved predictability and debugging",
      message:
        "You've identified two of the key advantages of Redux.  Centralized state management and improved predictability and debugging are significant benefits that Redux provides.",
      correct: true,
    },
    {
      task: {
        type: "Code",
        question:
          "Create a Redux reducer function to handle the following actions: 'ADD_ITEM', 'REMOVE_ITEM', and 'UPDATE_ITEM' for a list of items.",
      },
      answer: "code",
      message:
        "You've recognized the need for a Redux reducer function.  Remember that a reducer takes the current state and an action, and returns a new state based on the action type.  You'll need to define how the state changes for each action: 'ADD_ITEM', 'REMOVE_ITEM', and 'UPDATE_ITEM'.",
      correct: false,
      solution:
        "const initialState = [];\n\nconst itemReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'ADD_ITEM':\n      return [...state, action.payload];\n    case 'REMOVE_ITEM':\n      return state.filter((item, index) => index !== action.payload);\n    case 'UPDATE_ITEM':\n      return state.map((item, index) => (index === action.payload.index ? action.payload.item : item));\n    default:\n      return state;\n  }\n};",
    },
    {
      task: {
        type: "FixCode",
        question:
          "Identify and correct the issue in the following React Router configuration that prevents proper rendering of nested routes:",
        content:
          "import { BrowserRouter, Routes, Route } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path='/' element={<Home />} />\n        <Route path='/products' element={<Products />} />\n        <Route path='/products/:id' element={<ProductDetails />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}",
      },
      answer:
        "import { BrowserRouter, Routes, Route } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path='/' element={<Home />} />\n        <Route path='/products' element={<Products />} />\n        <Route path='/products/:id' element={<ProductDetails />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}",
      message:
        "The code snippet you provided is already correct for rendering nested routes. It seems there's no issue with the React Router configuration. You might be missing additional code or context within the actual component files (`Home`, `Products`, `ProductDetails`) that might be causing the rendering problem.",
      correct: true,
    },
    {
      task: {
        type: "SingleChoice",
        question:
          "Which testing library is commonly used for testing user interactions and component behavior in React?",
        options: ["Jest", "Enzyme", "React Testing Library"],
      },
      answer: "React Testing Library",
      message:
        "You're right! React Testing Library is a popular choice for testing user interactions and component behavior in React, emphasizing testing components from a user's perspective.",
      correct: true,
    },
    {
      task: {
        type: "Code",
        question:
          "Write a Jest test for a function component that receives props and renders a button with the correct text.",
      },
      answer: "",
      message:
        "You've recognized the need for a Jest test.  Remember to import necessary modules, create a test suite, and use methods like `render` and `screen` to interact with the component and verify the button text.",
      correct: false,
      solution:
        "import { render, screen } from '@testing-library/react';\nimport MyComponent from './MyComponent';\n\ntest('renders a button with the correct text', () => {\n  render(<MyComponent text='Click Me' />);\n  const buttonElement = screen.getByText('Click Me');\n  expect(buttonElement).toBeInTheDocument();\n});",
    },
    {
      task: {
        type: "Open",
        question:
          "Explain the advantages and disadvantages of Server-Side Rendering (SSR) and Static Site Generation (SSG) for React applications.",
      },
      answer: "bla bla bla",
      message:
        "SSR and SSG are valuable rendering techniques. SSR can improve SEO and initial loading time by delivering pre-rendered HTML, but it can be resource-intensive. SSG generates static HTML at build time, which is beneficial for performance and SEO, but it lacks the dynamic updates of SSR.",
      correct: true,
    },
    {
      task: {
        type: "SingleChoice",
        question:
          "Which approach is best for rendering a React application that requires real-time updates from a server?",
        options: ["SSR", "SSG", "Client-Side Rendering", "Hybrid rendering"],
      },
      answer: "Client-Side Rendering",
      message:
        "Client-side rendering is the best choice for applications that require real-time updates from a server. It allows for dynamic data fetching and updates after the initial page load, providing a more interactive experience.",
      correct: true,
    },
    {
      task: {
        type: "Code",
        question:
          "Create a simple React Native component that displays a platform-specific alert message (e.g., different messages for iOS and Android).",
      },
      answer: "nothing to code",
      message:
        "You've recognized the need for a platform-specific alert message in React Native.  Remember to use the `Platform` module to determine the device platform and conditionally display the appropriate message using `Alert.alert`.",
      correct: false,
      solution:
        "import React from 'react';\nimport { Platform, Alert } from 'react-native';\n\nconst MyComponent = () => {\n  const message = Platform.OS === 'ios' ? 'This is an iOS alert!' : 'This is an Android alert!';\n  Alert.alert('Platform Alert', message);\n  return null;\n};\n\nexport default MyComponent;",
    },
    {
      task: {
        type: "SingleChoice",
        question:
          "Which CSS-in-JS solution allows for dynamic styling based on component props?",
        options: ["CSS Modules", "Styled Components", "Emotion"],
      },
      answer: "Emotion",
      message:
        "While Styled Components and Emotion both offer dynamic styling based on props,  Emotion is specifically known for its ability to create styles based on component props using the `css` function.",
      correct: true,
    },
    {
      task: {
        type: "Code",
        question:
          "Implement a custom React component for a reusable 'Card' component that can be styled using Styled Components.",
      },
      answer: "",
      message:
        "You've recognized the need to implement a reusable 'Card' component using Styled Components. Remember to import the `styled` function from `styled-components`, create a styled component, and define the styles using CSS syntax.",
      correct: false,
      solution:
        "import React from 'react';\nimport styled from 'styled-components';\n\nconst CardContainer = styled.div`\n  border: 1px solid #ccc;\n  padding: 20px;\n  border-radius: 5px;\n`;\n\nconst Card = ({ children }) => {\n  return (\n    <CardContainer>{children}</CardContainer>\n  );\n};\n\nexport default Card;",
    },
    {
      task: {
        type: "MultipleChoice",
        question:
          "Which of these libraries is well-suited for creating interactive charts in React applications?",
        options: ["Chart.js", "D3.js", "Leaflet"],
      },
      answer: "D3.js",
      message:
        "You've correctly identified D3.js as a library suitable for creating interactive charts in React applications. While Chart.js is also popular, D3.js provides more flexibility and control over chart customization and interactivity.",
      correct: true,
    },
    {
      task: {
        type: "FixCode",
        question:
          "Identify and fix the accessibility issue in the following code that makes it difficult for screen readers to understand the purpose of the button:",
        content: "<button>Submit</button>",
      },
      answer: "",
      message:
        "The accessibility issue is that the button lacks descriptive text.  To improve accessibility, you should provide a meaningful `aria-label` or `title` attribute to communicate the button's purpose to screen readers.",
      correct: false,
      solution: '<button aria-label="Submit form">Submit</button>',
    },
    {
      task: {
        type: "MultipleChoice",
        question:
          "Which of these platforms are commonly used for deploying React applications?",
        options: ["Netlify", "Vercel", "AWS", "Heroku", "GitHub Pages"],
      },
      answer: "Vercel,AWS",
      message:
        "You've accurately identified Vercel and AWS as popular platforms for deploying React applications. Netlify, Heroku, and GitHub Pages are also common choices for hosting React projects.",
      correct: true,
    },
    {
      task: {
        type: "Open",
        question:
          "Describe the process of integrating TypeScript into an existing React project and explain the benefits of using TypeScript.",
      },
      answer: "",
      message:
        "Integrating TypeScript into an existing React project involves installing TypeScript and its dependencies, configuring the compiler, and gradually converting JavaScript files to TypeScript. TypeScript brings benefits like static type checking, better code organization, and improved code maintainability.",
      correct: true,
    },
    {
      task: {
        type: "SingleChoice",
        question:
          "Which React pattern involves passing functions as props to enable controlled behavior and data flow?",
        options: ["Render Props", "Higher-Order Components", "Hooks"],
      },
      answer: "Higher-Order Components",
      message:
        "While Higher-Order Components can pass functions as props, the pattern most strongly associated with passing functions as props for controlled behavior and data flow is  Render Props. This pattern allows components to dynamically provide functionality.",
      correct: false,
      solution: "Render Props",
    },
  ],
};
