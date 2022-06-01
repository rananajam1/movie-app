import logo from "./logo.svg";
import "./App.css";

function App() {
  const themes = {
    movieApp: {
      "--recommended": "#ffba00",
      "--recommended-secondary": "rgba(255, 195, 33, 0.16)",
      "--primary-1": "#FF8D4E",
      "--primary-2": "#A34D21",
      "--primary-3": "#8A4829",
      "--primary-4": "#402F27",
      "--text-primary-1": "#E0E0E0",
      "--text-primary-2": "#A0A0A0",
      "--text-primary-3": "#6C6C6C",
      "--text-secondary-1": "#121212",
      "--text-highlight-primary": "#FF8D4E",
      "--text-highlight-secondary": "#A34D21",
      "--text-negative-primary": "#EF5555",
      "--text-negative-secondary": "#402C2C",
      "--text-positive-primary": "#63B780",
      "--text-positive-secondary": "#29382E",
      "--bg-primary-1": "#121212",
      "--bg-primary-2": "#1D1D1D",
      "--bg-primary-3": "#242424",
      "--bg-primary-4": "#2C2C2C",
      "--bg-primary-5": "#333333",
      "--bg-primary-6": "#383838",
      "--bg-primary-7": "#454545",
      "--bg-highlight-primary": "#FF8D4E",
      "--bg-highlight-hover": "#A34D21",
      "--bg-highlight-disabled": "#8A4829",
      "--bg-highlight-secondary": "#402F27",
      "--bg-negative-primary": "#EF5555",
      "--bg-negative-secondary": "#402C2C",
      "--bg-positive-primary": "#63B780",
      "--bg-positive-secondary": "#29382E",
      "--stroke-primary-1": "#1D1D1D",
      "--stroke-primary-2": "#242424",
      "--stroke-primary-3": "#2C2C2C",
      "--stroke-primary-4": "#333333",
      "--stroke-primary-5": "#383838",
      "--stroke-primary-6": "#454545",
      "--stroke-primary-7": "#575757",
      "--stroke-secondary-1": "#6C6C6C",
      "--stroke-secondary-2": "#A0A0A0",
      "--stroke-highlight": "#FF8D4E",
      "--stroke-positive": "#63B780",
      "--stroke-negative": "#EF5555",
    },
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
