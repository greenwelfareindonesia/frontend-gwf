import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import map from "../../assets/merch-image/map.png";
import { useState, useEffect } from "react";
import axios from "axios"; // Assuming axios is being used

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    callNumber: "",
    address: "",
    province: "",
    city: "",
    postalCode: "",
    delivery: "",
    package: ""
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("API_PROFILE_DATA"); // Replace with your actual API endpoint
        setProfileData(response.data);
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setIsLoggedIn(false);
      }
    };

    fetchProfileData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col xl:mx-20 md:mx-10 lg:mx-15 xs:mx-3">
        <div className="xl:mx-20 md:mx-10 lg:mx-15 xs:mx-3 mx-3 flex items-center justify-center gap-20">
          <div className="hidden md:block">
            {isLoggedIn ? (
              <>
                <h1 className="font-bold text-3xl mb-7">Edit Your Profile</h1>
                <img src={map} className="h-96" />
              </>
            ) : (
              <>
                <h1 className="font-bold text-3xl mb-7">Your Profile</h1>
                <img src={map} className="h-96" />
              </>
            )}
          </div>
          <div className="mt-20 mb-10">
            <h1 className="font-bold text-3xl mb-7 block md:hidden">Profile</h1>
            <label className="text-xl font-semibold text-primary-2">Full Name</label>
            <input
              className="border-1 w-full p-2 rounded-md my-3 border-filter-5"
              placeholder="Ex: Alexander Setiawan"
              type="text"
              value={profileData.fullName}
              onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
            />
            <div className="grid grid-cols-2">
              <label className="text-xl font-semibold text-primary-2">Email</label>
              <label className="text-xl font-semibold text-primary-2">Call Number</label>
              <input
                className="border-1 mr-2 rounded-md my-2 p-2 border-filter-5"
                placeholder="Ex: gwfindonesia@gmail.com"
                type="text"
                value={profileData.email}
                onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
              />
              <input
                className="border-1 rounded-md my-2 p-2 border-filter-5"
                placeholder="Ex: 089534896468"
                type="text"
                value={profileData.callNumber}
                onChange={(e) => setProfileData({ ...profileData, callNumber: e.target.value })}
              />
            </div>
            <label className="text-xl font-semibold text-primary-2">Address</label>
            <input
              className="border-1 w-full p-2 rounded-md my-3 border-filter-5"
              placeholder="Ex: Bunga Widara Street No 6A"
              type="text"
              value={profileData.address}
              onChange={(e) => setProfileData({ ...profileData, address: e.target.value })}
            />
            <div className="grid grid-cols-3">
              <label className="text-xl font-semibold text-primary-2">Province</label>
              <label className="text-xl font-semibold text-primary-2">City</label>
              <label className="text-xl font-semibold text-primary-2">Postal Code</label>
              <select
                className="border-1 mr-2 rounded-md my-2 p-2 border-filter-5"
                value={profileData.province}
                onChange={(e) => setProfileData({ ...profileData, province: e.target.value })}
              >
                <option value="Maluku">Maluku</option>
                <option value="Kalimantan Timur">Kalimantan Timur</option>
                <option value="Aceh">Aceh</option>
                <option value="Lampung">Lampung</option>
              </select>
              <select
                className="border-1 mr-2 rounded-md my-2 p-2 border-filter-5"
                value={profileData.city}
                onChange={(e) => setProfileData({ ...profileData, city: e.target.value })}
              >
                <option value="Ambon">Ambon</option>
                <option value="Balikpapan">Balikpapan</option>
                <option value="Banda Aceh">Banda Aceh</option>
                <option value="Bandar Lampung">Bandar Lampung</option>
              </select>
              <select
                className="border-1 rounded-md my-2 p-2 border-filter-5"
                value={profileData.postalCode}
                onChange={(e) => setProfileData({ ...profileData, postalCode: e.target.value })}
              >
                <option value="123949">123949</option>
                <option value="123950">123950</option>
                <option value="123951">123951</option>
                <option value="123952">123952</option>
              </select>
            </div>
            <div className="grid grid-cols-2">
              <label className="text-xl font-semibold text-primary-2">Delivery</label>
              <label className="text-xl font-semibold text-primary-2">Package</label>
              <select
                className="border-1 mr-2 rounded-md my-2 p-2 border-filter-5"
                value={profileData.delivery}
                onChange={(e) => setProfileData({ ...profileData, delivery: e.target.value })}
              >
                <option value="JNE">JNE</option>
                <option value="JNT">JNT</option>
                <option value="...">...</option>
                <option value="...">...</option>
              </select>
              <select
                className="border-1 rounded-md my-2 p-2 border-filter-5"
                value={profileData.package}
                onChange={(e) => setProfileData({ ...profileData, package: e.target.value })}
              >
                <option value="Gold">Gold</option>
                <option value="...">...</option>
                <option value="...">...</option>
                <option value="...">...</option>
              </select>
            </div>
            <img src={map} className="h-96 block md:hidden mx-2 mt-7" />
          </div>
        </div>
        {isLoggedIn ? (
          <div className="flex xl:mx-40 lg:mx-24 md:mx-20 xs:mx-10 gap-2">
            <button className="flex-1 border-primary-1 border-2 h-10 rounded-md text-primary-1 w-full">Cancel</button>
            <button className="flex-1 bg-primary-1 h-10 rounded-md text-light-1 w-full">Save</button>
          </div>
        ) : (
          <button className="bg-primary-1 h-10 rounded-md xl:mx-40 lg:mx-24 md:mx-20 xs:mx-10 text-light-1">Save</button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Profile;
