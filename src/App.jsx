import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Events, Contact, Home, Involved, Team, Workshop, Resource, Donate, Ecopedia, Chapters} from "./pages";

import AdminLogin from "./pages/adminloginpage/AdminLogin";
import NotFound from "./pages/notFoundPage/NotFound";

import Indexx from "./pages/dashboardPage/workshop/workshopIndexx";
import Post from "./pages/dashboardPage/workshop/post";
import Edit from "./pages/dashboardPage/workshop/edit";
import Add from "./pages/dashboardPage/workshop/add";
import Delete from "./pages/dashboardPage/workshop/delete";

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
        <Route path="*" element={<NotFound />} />
        <Route path="/workshopIndexx" element={<Indexx />} />
        <Route path="/post" element={<Post />} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/delete" element={<Delete/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
