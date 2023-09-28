import moment from "moment";

function Date(props) {
  function getTimezone() {
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    console.log(props.coordinates.latitude);
    const { find } = require("geo-tz");
    find({ latitude }, { longitude });
  }

  function getDay(day) {
    return (
      <span>{moment().tz(getTimezone).add(day, "days").format("dddd")}</span>
    );
  }
  function getDate(date) {
    return <span>{moment().add(date, "days").format("MMMM Do, YYYY")}</span>;
  }
  if (props.forecastDay > 0) {
    return getDay(props.forecastDay);
  } else if (props.forecastDate > 0) {
    return getDate(props.forecastDate);
  } else {
    return <span>{moment().format("dddd, MMMM Do hh:mm")}</span>;
  }
}
export default Date;
