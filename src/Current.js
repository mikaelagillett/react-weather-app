import CurrentDropDown from "./CurrentDropDown";
import Date from "./Date";
import GetIcon from "./GetIcon";
import "./Current.css";

function Current(props) {
  function getGeoLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(props.callGeoApi);
  }

  return (
    <div className="current">
      <span className="description">
        <span className={props.secondaryColor}>
          Today's Forecast Conditions
        </span>
      </span>
      <button className="current-location-icon" onClick={getGeoLocation}>
        <i className="fa-regular fa-compass"></i>
      </button>
      <br />
      <span className="current-city" id="current-city">
        {props.data.city},
      </span>
      <br />
      <span className="current-country" id="current-country">
        {props.data.country}
      </span>
      <br />
      <span className="current-date" id="current-date">
        <Date />
      </span>
      <div className="current-weather">
        <GetIcon weather={props.data.description} />
        <span className="current-temp" id="current-temp">
          {Math.round(props.data.temperature.current)}°
        </span>
      </div>
      <CurrentDropDown
        feelsLike={Math.round(props.data.temperature.feels_like)}
        humidity={props.data.temperature.humidity}
        wind={Math.round(props.data.wind)}
        description={props.data.description}
      />
    </div>
  );
}

export default Current;
