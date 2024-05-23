import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Events, Contact, Home, Involved, Team, Workshop, Resource, Donate, Ecopedia, Chapters, Cart} from "./pages";

import AdminLogin from "./pages/adminloginpage/AdminLogin";
import NotFound from "./pages/notFoundPage/NotFound";

import Index from "./pages/dashboardPage/workshop/index";
import Post from "./pages/dashboardPage/workshop/post";
import Edit from "./pages/dashboardPage/workshop/edit";
import Add from "./pages/dashboardPage/workshop/add";
import Delete from "./pages/dashboardPage/workshop/delete";
import Index2 from "./pages/dashboardPage/events/index";
import Post2 from "./pages/dashboardPage/events/post";
import Edit2 from "./pages/dashboardPage/events/edit";
import Add2 from "./pages/dashboardPage/events/add";
import Delete2 from "./pages/dashboardPage/events/delete";

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
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resource" element={<Resource />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/index" element={<Index />} />
        <Route path="/post" element={<Post />} />
        <Route path="/edit" element={<Edit/>} />
        <Route path="/add" element={<Add/>} />
        <Route path="/delete" element={<Delete/>} />
        <Route path="/index2" element={<Index2 />} />
        <Route path="/post2" element={<Post2 />} />
        <Route path="/edit2" element={<Edit2/>} />
        <Route path="/add2" element={<Add2/>} />
        <Route path="/delete2" element={<Delete2/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
