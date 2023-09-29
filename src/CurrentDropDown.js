import { useState } from "react";
import "./CurrentDropDown.css";

function CurrentDropDown(props) {
  const [dropDown, setDropDown] = useState("closed");
  function openDropDown() {
    setDropDown("open");
  }

  function closeDropDown() {
    setDropDown("closed");
  }

  if (dropDown === "closed") {
    return (
      <div>
        <div className="currentDropDown ">
          <button className="drop-down-button" onClick={openDropDown}>
            <i className="fa-solid fa-circle-chevron-down"></i>
          </button>
        </div>
        <div className="currentInfo">
          <div className="current-drop-down">
            <span className="weather-description">{props.description}</span>
            <ul className="descriptors">
              <li className="feels-like">
                feels like: <span>{props.feelsLike}</span>
              </li>
              <li className="humidity">
                humidity: <span>{props.humidity}</span>
              </li>
              <li className="wind-speed">
                wind speed: <span>{props.wind}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else if (dropDown === "open") {
    return (
      <div className="currentDropDown">
        <div className="current-drop-down">
          <span className="weather-description">{props.description}</span>
          <ul className="descriptors">
            <li className="feels-like">
              feels like: <span>{props.feelsLike}</span>
            </li>
            <li className="humidity">
              humidity: <span>{props.humidity}</span>
            </li>
            <li className="wind-speed">
              wind speed: <span>{props.wind}</span>
            </li>
          </ul>
          <button className="close-drop-down-button" onClick={closeDropDown}>
            <i className="fa-solid fa-circle-chevron-up"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default CurrentDropDown;
