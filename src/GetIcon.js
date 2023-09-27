function GetIcon(props) {
  if (props.weather === "clear sky") {
    return <i class="wi wi-day-sunny"></i>;
  } else if (props.weather.includes("clouds" || "cloudy")) {
    return <i class="wi wi-cloudy"></i>;
  } else if (props.weather.includes("rain")) {
    return <i class="wi wi-raindrops"></i>;
  } else if (props.weather === "thunderstorm") {
    return <i class="wi wi-lightning"></i>;
  } else if (props.weather === "snow") {
    return <i class="wi wi-snowflake"></i>;
  } else if (props.weather === "mist") {
    return <i class="wi wi-fog"></i>;
  } else {
    return <i class="wi wi-cloudy"></i>;
  }
}

export default GetIcon;
