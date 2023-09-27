import { useState } from "react";

function CurrentDropDown() {
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
        <div className="currentDropDown d-none d-md-block d-lg-none">
          <button className="drop-down-button" onClick={openDropDown}>
            <i className="fa-solid fa-circle-chevron-down"></i>
          </button>
        </div>
        <div className="currentInfo d-lg-block d-md-none">
          <div className="current-drop-down">
            <span className="weather-description"></span>
            <ul className="descriptors">
              <li className="feels-like">
                feels like: <span id="current-feels-like"></span>
              </li>
              <li className="humidity">
                humidity: <span id="current-humidity"></span>
              </li>
              <li className="wind-speed">
                wind speed: <span id="current-wind-speed"></span>
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
          <span className="weather-description"></span>
          <ul className="descriptors">
            <li className="feels-like">
              feels like: <span id="current-feels-like"></span>
            </li>
            <li className="humidity">
              humidity: <span id="current-humidity"></span>
            </li>
            <li className="wind-speed">
              wind speed: <span id="current-wind-speed"></span>
            </li>
          </ul>
          <button
            className="close-drop-down-button d-none d-md-block d-lg-none"
            onClick={closeDropDown}
          >
            <i className="fa-solid fa-circle-chevron-up"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default CurrentDropDown;
