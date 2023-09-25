import CurrentDropDown from "./CurrentDropDown";
import "./Current.css";

function Current() {
  return (
    <div className="current">
      <span className="description" id="description">
        Today's Forecast Conditions
      </span>
      <button className="current-location-icon" id="current-location-button">
        <i className="fa-regular fa-compass"></i>
      </button>
      <br />
      <span className="current-city" id="current-city">
        Englehart,
      </span>
      <br />
      <span className="current-country" id="current-country">
        Canada
      </span>
      <br />
      <span className="current-date" id="current-date">
        Monday, September 18th 10:02
      </span>
      <div className="current-weather">
        <i className="wi wi-cloudy" id="main-icon"></i>
        <span className="current-temp" id="current-temp">
          9°
        </span>
      </div>
      <CurrentDropDown />
    </div>
  );
}

export default Current;
