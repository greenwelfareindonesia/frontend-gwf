import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home";
import About from "./pages/aboutpage/About";
import Team from "./pages/teampage/Team";
import GwfBandung from "./pages/gwfbandungpage/GwfBandung";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/bdg" element={<GwfBandung />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
