import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Events, Contact, Home, Involved, Team, Workshop, Resource, Donate, Ecopedia, Chapters, Merch } from "./pages";

import AdminLogin from "./pages/adminloginpage/AdminLogin";
import NotFound from "./pages/notFoundPage/NotFound";
import EcopediaPage from "./pages/dashboardPage/Ecopedia/index";
import GalleryPage from "./pages/dashboardPage/Gallery/index";
import EcopediaPageAdd from "./pages/dashboardPage/Ecopedia/add";
import EcopediaPageEdit from "./pages/dashboardPage/Ecopedia/edit";
import GalleryPageAdd from "./pages/dashboardPage/Gallery/add";
import GalleryPageEdit from "./pages/dashboardPage/Gallery/edit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/involved" element={<Involved />} />
        <Route path="/team" element={<Team />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/events" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/ecopedia" element={<Ecopedia />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/ecopediaDashboard/*" element={<EcopediaPage />} />
        <Route path="/addEcopedia" element={<EcopediaPageAdd />} />
        <Route path="/editEcopedia" element={<EcopediaPageEdit />} />
        <Route path="/galleryDashboard" element={<GalleryPage />} />
        <Route path="/addGallery" element={<GalleryPageAdd />} />
        <Route path="/editGallery" element={<GalleryPageEdit />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;