import "./App.css";
import "./weather-icons.css";

import Current from "./Current";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="app-background">
        <header>
          <a href="/" className="active" id="celcius-link">
            °C
          </a>{" "}
          |
          <a href="/" className="inactive" id="farenheit-link">
            °F
          </a>
        </header>
        <form className="search-form" id="search-form">
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </button>
          <input type="text" className="city-search-bar" id="city-search-bar" />
        </form>

        <Current />
        <hr />
        <Forecast day="Tuesday" date="September 19th, 2023" temp={12} />
        <Forecast day="Wednesday" date="September 20th, 2023" temp={15} />
        <Forecast day="Thursday" date="September 21st, 2023" temp={19} />
        <Forecast day="Friday" date="September 22nd, 2023" temp={23} />
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
