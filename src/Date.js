import moment from "moment";

function Date() {
  return <span>{moment().format("dddd, MMMM Do hh:mm")}</span>;
}

export default Date;
