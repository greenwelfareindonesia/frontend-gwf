import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Events,
  Contact,
  GwfBandung,
  Home,
  Involved,
  Team,
  Workshop,
  Resource,
} from "./pages";
import Ecopedia from "./pages/ecopediapage/Ecopedia";
import Donate from "./pages/donatepage/Donate";
import AdminLogin from "./pages/adminloginpage/AdminLogin";

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
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/ecopedia" element={<Ecopedia />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
