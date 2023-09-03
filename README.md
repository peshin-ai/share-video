# Funny Movie Project - Ung Ta Hoang Tuan

## General Information:
The Funny Movie Project is a web-based platform or mobile app that allows users to share and rate funny movie content. Users can submit links to humorous movies or videos they find online and rate them based on their personal preferences. It provides a community-driven space for users to discover, like, and dislike funny movies, fostering a sense of humor-sharing and interaction among its users. This platform aims to create a fun and engaging environment for users to explore and enjoy comedic content from various sources while also helping them connect with others who share their comedic tastes.

## Techinical Information:
- **ReactJS + TS**: ReactJS with TypeScript (ReactJS + TS) is a powerful combination for building modern, scalable, and maintainable web applications. ReactJS is a JavaScript library for building user interfaces, while TypeScript is a statically-typed superset of JavaScript. When used together, they offer several advantages. TypeScript adds type checking, enabling developers to catch errors early in the development process, making code more robust and easier to maintain. React's component-based architecture allows for reusable and modular UI development, while TypeScript enhances this with type safety. This combination fosters collaboration in large teams, improves code quality, and facilitates code refactoring. Overall, ReactJS + TS is an excellent choice for creating robust and efficient web applications.
- **Vite**: Vite is a fast, lightweight build tool for JavaScript applications. It leverages ES modules for rapid development and offers instant, on-the-fly code compilation, resulting in quicker development cycles. Vite optimizes for speed and efficiency, making it an ideal choice for building web applications.
- **Vitest**: Vitest, on the other hand, is a testing framework designed explicitly for Vite projects. It provides a seamless testing experience with fast test execution and zero-config setup. Vitest empowers developers to write unit and integration tests for their Vite-based applications effortlessly, ensuring code reliability and maintainability.
- **Material UI library**: Material-UI is a popular open-source React UI library that provides a set of pre-designed, customizable components and styles following Google's Material Design guidelines. With Material-UI, developers can quickly create visually appealing, responsive, and consistent user interfaces. It offers a vast array of components, including buttons, inputs, navigation bars, and more, all designed to facilitate a cohesive and modern look and feel.
- **Axios**: Axios is a popular JavaScript library for making HTTP requests from web applications. It simplifies the process of sending asynchronous requests to servers and handling responses. Axios is commonly used in both browser-based and Node.js environments, offering a consistent and user-friendly API for fetching data.
- **Redux-toolkit + Redux-thunk**: Redux Toolkit and Redux Thunk are crucial Redux libraries for managing state and handling async operations in React apps. Redux Toolkit simplifies setup with utility functions like createSlice and configureStore, reducing boilerplate code. Redux Thunk middleware allows async actions, enabling tasks like API calls before dispatching actions. Together, they enhance development by simplifying state management and handling async logic efficiently, making them popular for robust React apps.
- **React-router-dom**: React Router DOM is a fundamental library in the React ecosystem, designed for handling routing and navigation within web applications. It provides developers with a powerful toolset for creating dynamic, single-page applications with multiple views and URLs. React Router DOM leverages the component-based nature of React, allowing developers to define routes as components, making it intuitive and flexible.
- **i18next**: i18next enables developers to organize translations efficiently, manage language resources, and switch between languages dynamically. It supports interpolation, pluralization, and context-specific translations, making it adaptable for diverse localization needs. With its robust ecosystem and a rich set of plugins, i18next empowers developers to create globally accessible applications, ensuring that content and user interfaces are easily adaptable to different languages and regions.
- **Docker**: Docker is a powerful platform for developing, shipping, and running applications in lightweight, isolated containers. These containers encapsulate everything an application needs to run, including code, libraries, and dependencies, making it easy to ensure consistency across different environments. Docker simplifies the development process by allowing developers to create, test, and deploy applications consistently across various systems, from local development environments to production servers.
- **ESLint**: ESLint is a widely-used static code analysis tool for JavaScript and TypeScript, designed to help developers maintain consistent coding styles and catch potential errors early in the development process. It enforces coding standards and best practices defined in configuration files, offering a highly customizable and extensible system. ESLint can identify issues like syntax errors, code complexity, and style violations, making codebases more readable and maintainable.
- **Yarn**: Yarn is a popular package manager for JavaScript and Node.js applications. It was developed by Facebook to address some limitations of npm. Yarn offers faster and more reliable package installations by caching packages, parallelizing downloads, and ensuring consistent dependency resolution. It simplifies project management with features like workspaces, which enable monorepo setups.

## Require environment:
NodeJS: ^18.15.0
NPX/NPM: ^6.14.8
Yarn: ^1.22.19

## How to start project?
1. Clone the project to your VSCode
2. Direct to the project and run Yarn command
```
yarn install
```
3. After all dependencies installed run Yarn command to start
```
yarn dev
```

## How to test project?
1. Clone the project to your VSCode
2. Direct to the project and run Yarn command
```
yarn install
```
3. After all dependencies installed run Yarn command to test
   3.1 Test coverage
   > run in root folder
   ```
   yarn test:coverage
   ```
   3.2 Test specify file
   <br/>
   3.2.1 Copy Relative Path of test file. E.g: Component.test.tsx
   <br/>
   3.2.2 run Yarn command to test
   ```
   yarn test:coverage YOUR_TEST_FILE_PATH
   ```

## How to deploy project? 
> Assume you have project and do some changes

**For the first time:**
``` 
docker-compose up --build --no-recreate
```

**Next time:**
```
docker-compose up --build --no-recreate
```

**After deploy**
```
docker-run -p 3000:8080 -d YOUR_IMG_TAG
```
