#This repository demonstrates two implementations of a click counter button using React:
1. A class-based component approach.
2. A functional component using React Hooks.

The application renders two separate counters side by side, each showcasing a different React approach.

**Features**
A simple button that increments a counter on each click.
Two implementations:
1. Component Class: Traditional way of building React components.
2. React Hooks: Modern, functional approach using useState.


**File Structure**
.
├── App.js       // Class-based counter implementation

├── App2.js      // Functional component counter implementation using Hooks

├── InfoText.js  // Text components describing the implementation type

├── index.js     // Entry point rendering both counters into separate roots

└── README.md    // Documentation



**Components Overview**
1. Class-Based Component (App.js)
    -Implements a counter using React.Component.
    -Manages state via this.state and updates it using this.setState.
    -Associated InfoTextComponent displays a description.
2. Functional Component with Hooks (App2.js)
    -Implements the counter using the useState hook.
    -A more concise, modern approach compared to the class-based implementation.
    -Associated InfoTextHook displays a description.
3. Shared InfoText Components (InfoText.js)
    -InfoTextComponent: Displays "Button counter implemented using Component class".
    -InfoTextHook: Displays "Button counter implemented using React Hooks".



**How It Works**
Class-Based Implementation (App.js)
    1.The counter is stored in the state object of the component.
    2.Clicking the button triggers incrementCounter, which updates the state using this.setState.
    3.The counter value is re-rendered whenever the state changes.

Functional Implementation (App2.js)
    1.The counter is managed with the useState hook.
    2.Clicking the button triggers the incrementCounter function, which updates the counter state.
    3.The counter value updates automatically upon state changes.



**Usage:**
Prerequisites
Ensure you have the following installed:
    -Node.js (16.x or later)
    -npm (or yarn)

Installation
Clone the repository:
`git clone https://github.com/irshad-here/React-Demo-Class-vs-Hooks.git`

`cd 'your project directory'`

Install dependencies:
`npm install`

Running the Application
1.Start the development server:
 - `npm start`
2.Open your browser and navigate to http://localhost:3000.
