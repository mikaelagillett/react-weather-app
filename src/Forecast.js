import GetIcon from "./GetIcon";

function Forecast(props) {
  return (
    <div className="forecast row" id="forecast">
      <div className="col-5">
        <span className="forecast-day" id="forecast-day">
          {props.day}
          <br />
          <span className="forecast-date" id="forecast-date">
            {props.date}
          </span>
        </span>
      </div>
      <div className="col-4"></div>
      <div className="forecast-weather col-3">
        <span className="forecast-temp" id="forecast-temp">
          {props.temp}°
        </span>
        <GetIcon />
      </div>
      <hr />
    </div>
  );
}

export default Forecast;
