import moment from "moment";
import "moment-timezone";

function Date() {
  return <span>{moment().format("dddd, MMMM Do hh:mm")}</span>;
}

export default Date;
