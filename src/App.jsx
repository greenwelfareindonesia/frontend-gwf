import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Donate,
  Events,
  GwfBandung,
  Home,
  Involved,
  Resource,
  Team,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/involved" element={<Involved />} />
        <Route path="/team" element={<Team />} />
        <Route path="/bdg" element={<GwfBandung />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resourcehub" element={<Resource />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
