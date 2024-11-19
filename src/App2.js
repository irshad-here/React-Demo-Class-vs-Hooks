// Importing the useState hook from React for managing state in functional components
import { useState } from "react";

// Importing the InfoTextHook component from the InfoText file
import { InfoTextHook } from "./InfoText";

// Defining a functional component named App2
function App2() {

    // Using useState to manage the counter state
    const [counter, setCounter] = useState(0); // Initial state of counter is set to 0

    // Function to increment the counter state
    const incrementCounter = () => {
        setCounter(counter + 1); // Updates the counter by incrementing it by 1
    };

    // Rendering the component's UI
    return (
        <div style={{ textAlign: 'center', backgroundColor: 'yellow' }}>
            {/* Render the InfoTextHook component */}
            <InfoTextHook /><br />

            {/* Button to increment the counter on click, displaying the current counter value */}
            <button onClick={incrementCounter}>Clicked {counter} times</button>
        </div>
    );
}

// Exporting the App2 component as the default export
export default App2;
