import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Events, Home, Involved, Team, Workshop, Resource, Donate, Ecopedia, Chapters, Cart, Merch, MerchDetail, Order, PaymentDonation, PaymentMerch, VaNumber } from "./pages";

import AdminLogin from "./pages/adminloginpage/AdminLogin";
import AdminRegister from "./pages/adminregisterpage/AdminRegisterPage";

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
  PostMerch,
  MerchDashboard,
  EditMerch,
  DonaturTransactionDashboard,
  EditDonaturTransaction,
  PostDonaturTransaction,
  UserTransactionDashboard,
  UserDonationHistoryDashboard,
  FormInputDonation
} from "./pages/dashboardPage";
import ProtectedAdmin from "./routes/ProtectedAdmin";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/about" element={<About />} />
        <Route path="/involved" element={<Involved />} />
        <Route path="/team" element={<Team />} />
        <Route path="/chapter" element={<Chapters />} />
        <Route path="/event" element={<Events />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/ecopedia" element={<Ecopedia />} />
        <Route path="/resource" element={<Resource />} />
   

        <Route path="/dashboard/gallery" element={<GalleryDashboard />} />
        <Route path="/dashboard/gallery/edit" element={<EditGallery />} />
        <Route path="/dashboard/gallery/post" element={<PostGallery />} />
        <Route path="/dashboard/event/edit" element={<EditEvents />} />
        <Route path="/dashboard/event/post" element={<PostEvents />} />
        <Route path="/dashboard/workshop" element={<WorkshopDashboard />} />
        <Route path="/dashboard/workshop/edit" element={<EditWorkshop />} />
        <Route path="/dashboard/workshop/post" element={<PostWorkshop />} />
        <Route path="/dashboard/donatur-transaction/edit" element={<EditDonaturTransaction />} />  
        <Route path="/dashboard/donatur-transaction/post" element={<PostDonaturTransaction />} />

        {/* skripsi */}

        <Route path="/dashboard-users/user-transaction" element={<UserTransactionDashboard />} />  {/* user transaksi */}
        <Route path="/dashboard-users/user-donation-history" element={<UserDonationHistoryDashboard />} />  {/* user donasi */}
        <Route path="/form-donation" element={<FormInputDonation />} />  {/* input donasi */}

        <Route path="/login" element={<AdminLogin />} />  {/* user login */}
        <Route path="/register" element={<AdminRegister />} />  {/* user register */}
        <Route path="/" element={<Home />} />  {/* hone page */}

        <Route path="/merch" element={<Merch />} />  {/* get all merch for user */}
        <Route path="/cart" element={<Cart />} />  {/* add cart */}
        <Route path="/order/:orderID" element={<Order />} />  {/* add order */}
        <Route path="/payment-donation/:makeDonationID" element={<PaymentDonation />} />  {/* pay donation */}
        <Route path="/payment-merch/:orderID" element={<PaymentMerch />} />  {/* pay merch */}
        <Route path="/pay" element={<VaNumber />} />  {/* get va number */}
        <Route path="*" element={<NotFound />} />  {/* not found */}
        <Route path="/merch/:id" element={<MerchDetail />} />



        <Route element={<ProtectedAdmin />}>
        <Route path="/dashboard/status-order" element={<EcopediaDashboard />} />  {/* get all status order for admin*/}
        <Route path="/dashboard/ecopedia/post/:paymentID/:userID" element={<PostEcopedia />} />  {/* add status order resi for user from admin */}
        <Route path="/dashboard/ecopedia/edit/:id" element={<EditEcopedia />} />

        <Route path="/dashboard/merch" element={<MerchDashboard />} />  {/* get all merch for admin */}
        <Route path="/dashboard/merch/edit/:id" element={<EditMerch />} />  {/* edit merch */}
        <Route path="/dashboard/merch/post" element={<PostMerch />} />  {/* post merch */}

        <Route path="/dashboard/donatur-transaction" element={<DonaturTransactionDashboard />} />  {/* user donation for user */}

        <Route path="/dashboard/event" element={<EventsDashboard />} />  {/* get all konsumen transaction and add resi for user navigate to  PostEcopedia*/}

        {/* skripsi */}
        </Route>







      </Routes>
    </BrowserRouter>
  );
};

export default App;
