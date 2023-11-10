import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Donate, Events, GwfBandung, Home, Involved, Resource, Team } from "./pages";
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/resourcehub" element={<Resource />} />
        <Route path="/dashboard/events" element={<EventsDashboard />} />
        <Route path="/dashboard/workshop" element={<WorkshopDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
