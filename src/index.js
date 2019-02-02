// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// function getButtonText() {
//   return "Click on me!";
// }

// Create a React component
// const App = () => <div>Hello there!</div>;
const App = () => {
  // const buttonText = "Click me!";
  const buttonText = { text: "Click me!!!" };

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {/* Submit */}
        {/* {buttonText} */}
        {/* {getButtonText()} */}
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
