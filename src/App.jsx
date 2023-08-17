import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/homepage/Home";
import About from "./pages/aboutpage/About";
import Team from "./pages/teampage/Team";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
