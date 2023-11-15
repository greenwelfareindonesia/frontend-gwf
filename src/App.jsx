import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Events, Contact, GwfBandung, Home, Involved, Team, Workshop, Resource, Donate } from "./pages";
import Ecopedia from "./pages/ecopediapage/Ecopedia";
import AdminLogin from "./pages/adminloginpage/AdminLogin";
import EventsDashboard from "./layouts/dashboard_section/EventsDashboard";
import WorkshopDashboard from "./layouts/dashboard_section/WorkshopDashboard";

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
        <Route path="/dashboard/events" element={<EventsDashboard />} />
        <Route path="/dashboard/workshop" element={<WorkshopDashboard />} />
        <Route path="/admin" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
