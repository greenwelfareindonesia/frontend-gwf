import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Events, GwfBandung, Home, Involved, Team } from "./pages";

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
