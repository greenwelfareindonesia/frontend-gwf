import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import map from "../../assets/merch-image/map.png";
import tumbler from "../../assets/merch-image/tumbler.png";
import Cards from "../../components/cards-order/index";

const OrderSummary = () => {
  const productTotal = 100000;
  const deliveryFee = 10000;
  const totalPrice = productTotal + deliveryFee;

  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-20">
      <div className="my-10 mx-20 flex items-center">
        <div className="">
          <h1 className="font-bold text-3xl my-7">Order Summary</h1>
          <img src={map} className="h-72"/>
        </div>
        <div className="my-10 ml-20">
          <label className="text-xl font-semibold text-primary-2">Nama pembeli</label>
          <input className="border-1 w-full p-2 rounded-md my-3 border-filter-5" placeholder="Isi nama pembeli" type="text"></input>
          <label className="text-xl font-semibold text-primary-2">Alamat</label>
          <input className="border-1 w-full p-2 rounded-md my-3 border-filter-5" placeholder="Isi nama jalan" type="text"></input>
          <div className="grid grid-cols-3">
            <label className="text-xl font-semibold text-primary-2">Kota</label>
            <label className="text-xl font-semibold text-primary-2">Provinsi</label>
            <label className="text-xl font-semibold text-primary-2">Kode Pos</label>
            <select className="border-1 mr-2 rounded-md my-2 p-2 border-filter-5">
              <option value="Ambon">Ambon</option>
              <option value="Balikpapan">Balikpapan</option>
              <option value="Banda Aceh">Banda Aceh</option>
              <option value="Bandar Lampung">Bandar Lampung</option>
            </select>
            <select className="border-1 mr-2 rounded-md my-2 p-2 border-filter-5">
              <option value="Maluku">Maluku</option>
              <option value="Kalimantan Timur">Kalimantan Timur</option>
              <option value="Aceh">Aceh</option>
              <option value="Lampung">Lampung</option>
            </select>
            <select className="border-1 mr-2 rounded-md my-2 p-2 border-filter-5">
              <option value="11111">11111</option>
              <option value="22222">22222</option>
              <option value="33333">33333</option>
              <option value="44444">44444</option>
            </select>
          </div>
          <label className="text-xl font-semibold text-primary-2">Catatan Kurir</label>
          <input className="border-1 w-full my-2 p-2 rounded-md border-filter-5" placeholder="Patokan jalan atau rumah" type="text"></input>
        </div>
      </div>

      <div className="flex gap-5 mx-20 mb-10 ">
        <Cards
          image = {tumbler}
          title = "Tumbler"
          price = "30000"
        />
        <Cards
          image = {tumbler}
          title = "Tumbler"
          price = "30000"
        />
        <Cards
          image = {tumbler}
          title = "Tumbler"
          price = "30000"
        />
        <Cards
          image = {tumbler}
          title = "Tumbler"
          price = "30000"
        />
        <Cards
          image = {tumbler}
          title = "Tumbler"
          price = "30000"
        />
        <Cards
          image = {tumbler}
          title = "Tumbler"
          price = "30000"
        />
      </div>


      <div className="mx-20">
        <div className="w-full flex justify-between mt-5 mb-2">
          <p>Product total</p>
          <p>Rp {productTotal.toLocaleString()}</p>
        </div>
        <hr className="border-t-1 border-gray-500 w-full"/>
        <div className="w-full flex justify-between mt-5 mb-2">
          <p>Delivery Fee</p>
          <p>Rp {deliveryFee.toLocaleString()}</p>
        </div>
        <hr className="border-t-1 border-gray-500 w-full"/>
        <div className="w-full flex justify-between mt-5 mb-2 font-semibold">
          <p>Total Harga</p>
          <p>Rp {totalPrice.toLocaleString()}</p>
        </div>
        <hr className="border-t-1 border-gray-500 w-full mb-10"/>

        <div className='bg-primary-2 bg-opacity-30 border-2 border-primary-2 p-8 mb-4 rounded-lg items-center flex justify-between'>
          <div>
            <p className="text-2xl font-semibold text-primary-2 pb-2">Total Harga</p>
            <p className="text-primary-2">Rp {totalPrice.toLocaleString()}</p>
          </div>
          <button className='text-3xl text-light-1 p-3 px-20 rounded-xl bg-primary-1'>Beli</button>
        </div>

      </div>
    </div>
    <Footer />
    </>
  );
};

export default OrderSummary;
