import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Events, Contact, GwfBandung, Home, Involved, Team, Workshop, Resource, Donate, Ecopedia } from "./pages";
import {
  DashboardPage,
  ArticlePage,
  ContactPage,
  EcopediaPage,
  EventsPage,
  FeedbackPage,
  GalleryPage,
  VeganguidePage,
  WorkshopPage,
} from "./pages/dashboardPage";

import AdminLogin from "./pages/adminloginpage/AdminLogin";

import ProtectedAdmin from "./routes/ProtectedAdmin";
import NotFound from "./pages/notFoundPage/NotFound";

import VeganGuide from "./pages/veganguidepage/VeganGuide";
import VeganDiet from "./pages/veganguidepage/VeganDiet";
import FoodsToAvoid from "./pages/veganguidepage/FoodsToAvoid";
import VeganSampleMenu from "./pages/veganguidepage/VeganSampleMenu";
import FoodsToEat from "./pages/veganguidepage/FoodsToEat";
import EnvironmentalBenefits from "./pages/veganguidepage/EnvironmentalBenefits";
import TopTipsForVegan from "./pages/veganguidepage/TopTipsForVegan";
import VeganDishesInIndo from "./pages/veganguidepage/VeganDishesInIndo";
import VeganBooks from "./pages/veganguidepage/VeganBooks";
import VeganMovies from "./pages/veganguidepage/VeganMovies";
import HealthBenefits from "./pages/veganguidepage/HealthBenefits";
import AnimalAgriculture from "./pages/veganguidepage/AnimalAgriculture";

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

        <Route element={<ProtectedAdmin />}>
          <Route path="/dashboard/article" element={<ArticlePage />} />
          <Route path="/dashboard/contact" element={<ContactPage />} />
          <Route path="/dashboard/ecopedia" element={<EcopediaPage />} />
          <Route path="/dashboard/event" element={<EventsPage />} />
          <Route path="/dashboard/feedback" element={<FeedbackPage />} />
          <Route path="/dashboard/gallery" element={<GalleryPage />} />
          <Route path="/dashboard/veganguide" element={<VeganguidePage />} />
          <Route path="/dashboard/workshop" element={<WorkshopPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>

        <Route path="/login" element={<AdminLogin />} />

        <Route path="/plantbasedhub" element={<VeganGuide />} />
        <Route path="/vegandiet" element={<VeganDiet />} />
        <Route path="/foodstoavoid" element={<FoodsToAvoid />} />
        <Route path="/veganmenuforaweek" element={<VeganSampleMenu />} />
        <Route path="/foodstoeat" element={<FoodsToEat />} />
        <Route path="/environmentalbenefits" element={<EnvironmentalBenefits />} />
        <Route path="/toptipsforgoingvegan" element={<TopTipsForVegan />} />
        <Route path="/vegandishesinindo" element={<VeganDishesInIndo />} />
        <Route path="/veganbooks" element={<VeganBooks />} />
        <Route path="/veganmovies" element={<VeganMovies />} />
        <Route path="/healthbenefits" element={<HealthBenefits />} />
        <Route path="/animalagriculturefacts" element={<AnimalAgriculture />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
