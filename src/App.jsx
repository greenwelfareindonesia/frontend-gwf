import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Events,
  Contact,
  GwfBandung,
  Home,
  Involved,
  Team,
  Workshop,
  Resource,
  Donate,
} from "./pages";
import Ecopedia from "./pages/ecopediapage/Ecopedia";
import VeganGuide from "./pages/veganguidepage/VeganGuide";
import AdminLogin from "./pages/adminloginpage/AdminLogin";
import EventsDashboard from "./layouts/dashboard_section/EventsDashboard";
import WorkshopDashboard from "./layouts/dashboard_section/WorkshopDashboard";
import UserDashboard from "./layouts/dashboard_section/UserDashboard";
import GalleryDashboard from "./layouts/dashboard_section/GalleryDashboard";
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
        <Route path="/plantbasedhub" element={<VeganGuide />} />
        <Route path="/dashboard/events" element={<EventsDashboard />} />
        <Route path="/dashboard/workshop" element={<WorkshopDashboard />} />
        <Route path="/dashboard/user" element={<UserDashboard />} />
        <Route path="/dashboard/gallery" element={<GalleryDashboard />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/vegandiet" element={<VeganDiet />} />
        <Route path="/foodstoavoid" element={<FoodsToAvoid />} />
        <Route path="/veganmenuforaweek" element={<VeganSampleMenu />} />
        <Route path="/foodstoeat" element={<FoodsToEat />} />
        <Route
          path="/environmentalbenefits"
          element={<EnvironmentalBenefits />}
        />
        <Route path="/toptipsforgoingvegan" element={<TopTipsForVegan />} />
        <Route path="/vegandishesinindo" element={<VeganDishesInIndo />} />
        <Route path="/veganbooks" element={<VeganBooks />} />
        <Route path="/veganmovies" element={<VeganMovies />} />
        <Route path="/healthbenefits" element={<HealthBenefits />} />
        <Route path="/animalagriculturefacts" element={<AnimalAgriculture />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
