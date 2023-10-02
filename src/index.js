import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

<App />;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




///////********LESSON NOTES********/////

//- npm start to start up developmemt server.
//- npx create-react-app@5 "name of App"

//- A component is a piece of user interface.
//- Each component has its own data, logic and appearance.
//- Componenets can be reused.

//////Creating components:
//- components are functions (written as functions)
//- The first letter of a Component MUST be in UPPERCASE
//- The function needs to return a Markup to make it a component.

//- jsx is an extension of js that allows the combination of html, css and javascript
//- JSX is a declarative syntax that we use to describe the appearance of a component.
//-

// two ways to render componenets in React is with the '&& operator and OR operator and : (Ternary operator)'
// STATE in React: is the data that a componenet can hold over time.
// 'use' as a prefix in React is always a hook eg useState
// react tools - cypress, jest
// state variables guidelines: 
//1. when a value that changes over time (eg toggle button)
//2. changing component appearance when an event happens (eg clicking on close button) -
