import "./App.css";
import "./weather-icons.css";

import Header from "./Header";
import SearchForm from "./SearchForm";
import Current from "./Current";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="app-background">
        <Header />
        <SearchForm />
        <Current />
        <hr />
        <Forecast day="Tuesday" date="September 19th, 2023" temp={12} />
        <Forecast day="Wednesday" date="September 20th, 2023" temp={15} />
        <Forecast day="Thursday" date="September 21st, 2023" temp={19} />
        <Forecast day="Friday" date="September 22nd, 2023" temp={23} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
