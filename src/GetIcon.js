function GetIcon(props) {
  if (props.weather.includes("clear")) {
    return <i className="wi wi-day-sunny"></i>;
  } else if (props.weather.includes("clouds" || "cloudy")) {
    return <i className="wi wi-cloudy"></i>;
  } else if (props.weather.includes("rain")) {
    return <i className="wi wi-raindrops"></i>;
  } else if (props.weather === "thunderstorm") {
    return <i className="wi wi-lightning"></i>;
  } else if (props.weather === "snow") {
    return <i className="wi wi-snowflake"></i>;
  } else if (props.weather === "mist") {
    return <i className="wi wi-fog"></i>;
  } else {
    return <i className="wi wi-cloudy"></i>;
  }
}

export default GetIcon;
