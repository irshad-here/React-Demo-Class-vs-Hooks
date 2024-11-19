// Importing React and Component for creating a class-based component
import React, { Component } from 'react';

// Importing an external component and hook from 'InfoText.js'
import InfoTextComponent, { InfoTextHook } from './InfoText';

// Main App component (class-based)
class App extends Component {
  // Defining the initial state of the component
  state = {
    counter: 0 // A counter to track the number of button clicks
  };

  // Method to increment the counter value in the state
  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1 // Increment the counter by 1
    });
  };

  // Render method to display the UI
  render() {
    return (
      <div style={{ textAlign: 'center', backgroundColor: 'grey' }}>
        {/* Render the InfoTextComponent, which is imported from './InfoText' */}
        <InfoTextComponent />

        <br /> {/* Line break for spacing */}

        {/* Button to increment the counter on click, displaying the current counter value */}
        <button onClick={this.incrementCounter}>
          Clicked {this.state.counter} times
        </button>
      </div>
    );
  }
}

// Export the App component as the default export
export default App;
