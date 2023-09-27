import "./App.css";
import "./weather-icons.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="app-background">
        <Weather />

        <footer>
          <a
            href="https://github.com/mikaelagillett/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-source coded
          </a>
          by mikaela gillett
        </footer>
      </div>
    </div>
  );
}

export default App;
