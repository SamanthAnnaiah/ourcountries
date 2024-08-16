import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Mainpage } from "./Mainpage";
import { Population } from "./population/Population";
import { Area } from "./area/Area";
import { Countryload } from "./countryload/Countryload";
import { SelectCountryload } from "./countryload/SelectCountryload";
import { About } from "./About";

function App() {
  return (
    <div className="text-black text-3xl font-extrabold bg-wallpaper">
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />}>
            <Route index element={<Countryload />} />
            <Route path="/:countryid" element={<SelectCountryload />} />
            <Route path="population" element={<Population />} />
            <Route path="area" element={<Area />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
