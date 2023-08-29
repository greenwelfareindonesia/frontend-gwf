import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home, Involved } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/involved" element={<Involved />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
