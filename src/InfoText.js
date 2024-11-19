// Importing React and Component for creating class-based components
import React, { Component } from 'react';

// Defining a class-based component and exporting it as the default export
export default class InfoTextComponent extends Component {
  // Render method to define the UI
  render() {
    return (
      <span>
        Button counter implemented using Component class
      </span>
    );
  }
}

// Defining another class-based component and exporting it
export class InfoTextHook extends Component {
  // Render method to define the UI
  render() {
    return (
      <span>
        Button counter implemented using React Hooks
      </span>
    );
  }
}
