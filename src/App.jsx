import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home";
import About from "./pages/aboutpage/About";
import Team from "./pages/teampage/Team";
import GwfBandung from "./pages/gwfbandungpage/GwfBandung";
import Donate from "./pages/donatepage/Donate";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/bdg" element={<GwfBandung />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
