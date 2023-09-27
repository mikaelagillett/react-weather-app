import Forecast from "./Forecast";

function ForecastSection() {
  return (
    <div>
      <hr />
      <Forecast day="Tuesday" date="September 19th, 2023" temp={12} />
      <Forecast day="Wednesday" date="September 20th, 2023" temp={15} />
      <Forecast day="Thursday" date="September 21st, 2023" temp={19} />
      <Forecast day="Friday" date="September 22nd, 2023" temp={23} />
    </div>
  );
}

export default ForecastSection;
