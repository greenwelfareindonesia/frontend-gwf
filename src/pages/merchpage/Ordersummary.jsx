import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import map from "../../assets/merch-image/map.png";
import React, { useEffect, useState } from "react";
import API from "../../libs/api";
import { useParams, useNavigate  } from "react-router-dom";

const OrderSummary = () => {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [postalCode, setPostalCode] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedCityId, setSelectedCityId] = useState("");
  const [selectedCourier, setSelectedCourier] = useState("");
  const { orderID } = useParams();
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [productTotal, setProductTotal] = useState(0);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();


  // Fetch provinces
  useEffect(() => {
    fetch("https://servicegwf-production.up.railway.app/api/raja-ongkir/provinces")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setProvinces(data.data || []);
        }
      })
      .catch((error) => console.error("Error fetching provinces:", error));
  }, []);

  // Fetch cities based on selected province
  const handleProvinceChange = (event) => {
    const provinceId = event.target.value;
    fetch(`https://servicegwf-production.up.railway.app/api/raja-ongkir/city/${provinceId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          setCities(data.data || []);
          const cityOptions = data.data.map((city) => (
            <option key={city.city_id} value={city.city_id}>
              {city.city_name}
            </option>
          ));
          setCityOptions(cityOptions);
        }
      })
      .catch((error) => console.error("Error fetching cities:", error));
  };

  const renderCityOptions = () => {
    return cities ? (
      cities.map((city) => (
        <option key={city.city_id} value={city.city_id}>
          {city.city_name}
        </option>
      ))
    ) : (
      <option value="">Pilih Kota</option>
    );
  };

  // Fetch postal code based on selected city
  const handleCityChange = (event) => {
    const cityId = event.target.value;
    const selectedCity = cities.find((city) => city.city_id === cityId);
    setPostalCode(selectedCity ? selectedCity.postal_code : "");
    setSelectedCityId(cityId);
  };

  // Handle courier change
  const handleCourierChange = (event) => {
    const courier = event.target.value;
    setSelectedCourier(courier);

    // Calculate shipping fee based on selected city and courier
    fetch(`https://servicegwf-production.up.railway.app/api/raja-ongkir/calculate-shipping-fee`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ destination: selectedCityId, courier: courier }),
    })
      .then((response) => response.json())
      .then((data) => setPackages(data.data))
      .catch((error) => console.error("Error fetching packages:", error));
  };

  const handleButton = async (e) => {
    e.preventDefault();
    const body = {
      destination: selectedCityId,
      courier: selectedCourier,
      shipping_package: selectedPackage,
      home_address: homeAddress,
    };
    try {
      const response = await API.post(`/order/${orderID}`, body);
      console.log("ini" + response);
      navigate(`/payment-merch/${orderID}`);
    } catch (error) {
      console.log(error);
    }
  };

  const renderOptions = () => {
    if (!provinces) {
      return <option value="">Pilih Provinsi</option>;
    }

    return provinces.map((province) => (
      <option key={province.province_id} value={province.province_id}>
        {province.province}
      </option>
    ));
  };

  const fetchProducts = async () => {
    try {
      const response = await API.get(`order/${orderID}`);
      const data = response.data.data;
      setProducts(data.items);
      setProductTotal(data.total_price);
      setTotalPrice(data.total_price + deliveryFee); // Inisialisasi dengan delivery fee saat ini
      console.log("Fetched Products:", data.items);
    } catch (error) {
      console.error("Failed to fetch products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    // Update total price when delivery fee or product total changes
    setTotalPrice(productTotal + deliveryFee);
  }, [productTotal, deliveryFee]);

  const handlePackageChange = (e) => {
    const selectedPkg = packages.find((pkg) => pkg.service === e.target.value);
    if (selectedPkg) {
      setDeliveryFee(selectedPkg.fee);
      setSelectedPackage(selectedPkg.service);
    }
  };

  

  return (
    <>
      <Navbar />
      <div className="flex flex-col mx-20">
        <div className="my-10 mx-20 flex items-center">
          <div>
            <h1 className="font-bold text-3xl my-7">Order Summary</h1>
            <img src={map} className="h-72" alt="Map" />
          </div>
          <div className="my-10 ml-20">
            <label className="text-xl font-semibold text-primary-2">
              Alamat
            </label>
            <input
              onChange={(e) => setHomeAddress(e.target.value)}
              className="border-1 w-full p-2 rounded-md my-3 border-filter-5"
              placeholder="Isi nama jalan"
              type="text"
            />
            <div className="grid grid-cols-3 gap-1">
              <label className="text-xl font-semibold text-primary-2">
                Provinsi
              </label>
              <label className="text-xl font-semibold text-primary-2">
                Kota
              </label>
              <label className="text-xl font-semibold text-primary-2">
                Kode Pos
              </label>
              <select
                onChange={handleProvinceChange}
                className="border-1 rounded-md my-3 border-filter-5 p-2"
              >
                <option value="">Pilih Provinsi</option>
                {renderOptions()}
              </select>
              <select
                onChange={handleCityChange}
                className="border-1 rounded-md my-3 border-filter-5 p-2"
              >
                <option value="">Pilih Kota</option>
                {renderCityOptions()}
              </select>
              <input
                type="text"
                value={postalCode}
                readOnly
                className="border-1 rounded-md my-3 border-filter-5 p-2"
              />
            </div>
            <div>
              <div className="flex justify-between gap-2">
                <div className="w-[50%] flex flex-col">
                  <label className="text-xl font-semibold text-primary-2">
                    Pilih Kurir
                  </label>
                  <select
                    id="courier"
                    onChange={handleCourierChange}
                    className="border-1 rounded-md my-3 border-filter-5 p-2"
                  >
                    <option value="">Pilih Kurir</option>
                    <option value="jne">JNE</option>
                    <option value="pos">POS</option>
                    <option value="tiki">TIKI</option>
                  </select>
                </div>
                <div className="w-[50%]">
                  <div className="text-xl font-semibold text-primary-2">
                    Paket
                  </div>
                  <select
                    onChange={handlePackageChange}
                    className="border-1 rounded-md my-3 border-filter-5 p-2 w-full"
                  >
                    <option value="">Pilih Paket</option>
                    {packages.map((pkg) => (
                      <option key={pkg.service} value={pkg.service}>
                        {pkg.service} - Rp {pkg.fee.toLocaleString()}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mx-20 mb-2 justify-between">
          {products.map((item, index) => (
            <div key={index} className="font-semibold">
              <span>{item.product.Name} </span> X <span>{item.quantity}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-5 mx-20 mb-10 justify-between">
          <div>Price Produk</div>

          {products.map((item, index) => (
            <div key={index} className="font-semibold">
              {item.product.Price}
            </div>
          ))}
        </div>
        <div className="my-2 mx-20 flex justify-between">
          <div>
            <span className="font-semibold">Total Harga Produk</span>
          </div>
          <div>
            <span className="font-semibold">
              Rp {productTotal.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="my-2 mx-20 flex justify-between">
          <div>
            <span className="font-semibold">Total Ongkos Kirim</span>
          </div>
          <div>
            <span className="font-semibold">
              Rp {deliveryFee.toLocaleString()}
            </span>
          </div>
          
        </div>

        <div className="my-2 mx-20 flex justify-between">
          <div>
            <span className="font-semibold">Total Harga</span>
          </div>
          <div>
            <span className="font-semibold">
              Rp {totalPrice.toLocaleString()}
            </span>
            
          </div>
          
        </div>
        <button
          className="mx-20 mb-20 bg-primary-2 hover:bg-primary-3 transition-all p-2 px-10 text-white rounded-lg"
          onClick={handleButton}
        >
          Bayar
        </button>
      </div>
      <Footer />
    </>
  );
};

export default OrderSummary;
