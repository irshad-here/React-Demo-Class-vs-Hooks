// Importing React and ReactDOM for rendering components into the DOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing two main application components
import App from './App'; // First application component
import App2 from './App2'; // Second application component

// Creating the root for the first application and rendering the App component
const root1 = ReactDOM.createRoot(document.getElementById('root1')); // Root container for the first app
root1.render(
  <App /> // Render the App component inside the root1 container
);

// Creating the root for the second application and rendering the App2 component
const root2 = ReactDOM.createRoot(document.getElementById('root2')); // Root container for the second app
root2.render(
  <App2 /> // Render the App2 component inside the root2 container
);
