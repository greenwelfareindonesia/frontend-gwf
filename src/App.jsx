import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Events, Home, Involved, Team, Workshop, Resource, Donate, Ecopedia, Chapters, Cart, Merch } from "./pages";

import AdminLogin from "./pages/adminloginpage/AdminLogin";
import NotFound from "./pages/notFoundPage/NotFound";

import {
  EcopediaDashboard,
  EditEcopedia,
  EditEvents,
  EditGallery,
  EditWorkshop,
  EventsDashboard,
  GalleryDashboard,
  PostEcopedia,
  PostEvents,
  PostGallery,
  PostWorkshop,
  WorkshopDashboard,
} from "./pages/dashboardPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/involved" element={<Involved />} />
        <Route path="/team" element={<Team />} />
        <Route path="/chapter" element={<Chapters />} />
        <Route path="/event" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/ecopedia" element={<Ecopedia />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<AdminLogin />} />

        <Route path="/dashboard/ecopedia" element={<EcopediaDashboard />} />
        <Route path="/dashboard/ecopedia/edit" element={<EditEcopedia />} />
        <Route path="/dashboard/ecopedia/post" element={<PostEcopedia />} />

        <Route path="/dashboard/gallery" element={<GalleryDashboard />} />
        <Route path="/dashboard/gallery/edit" element={<EditGallery />} />
        <Route path="/dashboard/gallery/post" element={<PostGallery />} />

        <Route path="/dashboard/workshop" element={<WorkshopDashboard />} />
        <Route path="/dashboard/workshop/edit" element={<EditWorkshop />} />
        <Route path="/dashboard/workshop/post" element={<PostWorkshop />} />

        <Route path="/dashboard/event" element={<EventsDashboard />} />
        <Route path="/dashboard/event/edit" element={<EditEvents />} />
        <Route path="/dashboard/event/post" element={<PostEvents />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
