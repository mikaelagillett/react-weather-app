function CurrentDropDown() {
  return (
    <div className="currentDropDown">
      <button className="drop-down-button" id="drop-down-button">
        <i className="fa-solid fa-circle-chevron-down"></i>
      </button>
      <div className="current-drop-down hidden" id="drop-down-section">
        <span className="weather-description" id="weather-description"></span>
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
        <button className="close-drop-down-button" id="close-drop-down-button">
          <i className="fa-solid fa-circle-chevron-up"></i>
        </button>
      </div>
    </div>
  );
}

export default CurrentDropDown;
