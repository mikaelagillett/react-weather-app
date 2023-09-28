import "./App.css";
import "./weather-icons.css";
import { useState } from "react";

import Weather from "./Weather";

function App() {
  const [background, setBackground] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  function changeDesign(description) {
    if (description.includes("clear")) {
      setBackground("background-clear");
      setSecondaryColor("secondary-color-clear");
    } else if (description.includes("clouds" || "cloudy")) {
      setBackground("background-cloudy");
      setSecondaryColor("secondary-color-cloudy");
    } else if (description.includes("rain")) {
      setBackground("background-rain");
      setSecondaryColor("secondary-color-rain");
    } else if (description === "thunderstorm") {
      setBackground("background-thunderstorm");
      setSecondaryColor("secondary-color-thunderstorm");
    } else if (description === "snow") {
      setBackground("background-snow");
      setSecondaryColor("secondary-color-snow");
    } else {
      setBackground("background-mist");
      setSecondaryColor("secondary-color-mist");
    }
  }
  return (
    <div className="App">
      <div className={("app-background", background)}>
        <Weather changeDesign={changeDesign} secondaryColor={secondaryColor} />

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
