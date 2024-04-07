import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Events, Contact, GwfBandung, Home, Involved, Team, Workshop, Resource, Donate, Ecopedia } from "./pages";

import AdminLogin from "./pages/adminloginpage/AdminLogin";

import NotFound from "./pages/notFoundPage/NotFound";
import Test from "./pages/dashboard/Test";

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
        <Route path="/test" element={<Test />} />

        <Route path="/login" element={<AdminLogin />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
