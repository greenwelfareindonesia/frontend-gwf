import { useEffect } from "react";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import {
  About,
  Events,
  Home,
  Involved,
  Team,
  Workshop,
  Resource,
  Donate,
  Ecopedia,
  // Chapters,
  SingleEcopedia,
  DetailDonate,
  Study,
  DetailStudy,
  // Gallery,
  // Cart,
  // Merch,
  // Order,
  // Profile,
  // MerchDetail,
  // MerchDetailLogin,
} from "./pages";

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
  ArticleDashboard,
  PostEcopedia,
  PostEvents,
  PostGallery,
  PostWorkshop,
  PostArticle,
  WorkshopDashboard,
  FeedbackPage,
  Dashboard,
  EditDashboard,
  PostDashboard,
  StudyDashboard,
  EditStudy,
  PostStudy,
} from "./pages/dashboardPage";

import ProtectedAdmin from "./routes/ProtectedAdmin";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/involved" element={<Involved />} />
        <Route path="/team" element={<Team />} />
        {/* <Route path="/chapter" element={<Chapters />} /> */}
        <Route path="/event" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate-detail" element={<DetailDonate />} />
        <Route path="/workshop" element={<Workshop />} />

        <Route path="/ecopedia" element={<Ecopedia />} />
        <Route path="/ecopedia/:slug" element={<SingleEcopedia />} />
        {/* <Route path="/gallery" element={<Gallery />} /> */}
        <Route path="/resource" element={<Resource />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/report" element={<Study />} />
        <Route path="/report/detail/:slug" element={<DetailStudy />} />

        {/* <Route path="/merch" element={<Merch />} />
        <Route path="/merch/detail" element={<MerchDetail />} />
        <Route path="/merch/detail/login" element={<MerchDetailLogin />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/profile" element={<Profile />} /> */}

        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<AdminLogin />} />

        <Route element={<ProtectedAdmin />}>
          <Route path="/dashboards" element={<Dashboard />} />
          <Route path="/dashboards/post" element={<PostDashboard />} />
          <Route path="/dashboards/edit/:slug" element={<EditDashboard />} />

          <Route path="/dashboard/feedback" element={<FeedbackPage />} />

          <Route path="/dashboard/ecopedia" element={<EcopediaDashboard />} />
          <Route path="/dashboard/ecopedia/edit/:slug" element={<EditEcopedia />} />
          <Route path="/dashboard/ecopedia/post" element={<PostEcopedia />} />

          <Route path="/dashboard/report" element={<StudyDashboard />} />
          <Route path="/dashboard/report/edit/:slug" element={<EditStudy />} />
          <Route path="/dashboard/report/post" element={<PostStudy />} />

          <Route path="/dashboard/gallery" element={<GalleryDashboard />} />
          <Route path="/dashboard/gallery/edit/:slug" element={<EditGallery />} />
          <Route path="/dashboard/gallery/post" element={<PostGallery />} />

          <Route path="/dashboard/workshop" element={<WorkshopDashboard />} />
          <Route path="/dashboard/workshop/edit/:slug" element={<EditWorkshop />} />
          <Route path="/dashboard/workshop/post" element={<PostWorkshop />} />

          <Route path="/dashboard/event" element={<EventsDashboard />} />
          <Route path="/dashboard/event/edit/:slug" element={<EditEvents />} />
          <Route path="/dashboard/event/post" element={<PostEvents />} />

          <Route path="/dashboard/article" element={<ArticleDashboard />} />
          <Route path="/dashboard/article/post" element={<PostArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
