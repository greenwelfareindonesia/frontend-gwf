import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

import SearchIcon from '../../assets/ecopedia-image/search.png';
import Twitter from '../../assets/ecopedia-image/twitter.png';
import Facebook from '../../assets/ecopedia-image/facebook.png';
import Linkedin from '../../assets/ecopedia-image/linkedin.png';
import Share from '../../assets/ecopedia-image/share.png';
import Like from '../../assets/ecopedia-image/like.png';
import Post from './Post2';

import { Link } from 'react-router-dom';

export default function Ecopedia() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchVisible, setSearchVisible] = useState(false);

  const handleSearchBar = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleSearchSubmit = () => {
    console.log("Search term:", searchTerm);
    // Add your search logic here
  };

  return (
    <>
      <Navbar />
      <div className="border-1 border-primary-1 text-primary-1 mx-52 my-10 p-5 flex flex-col items-center">
        <div className="grid grid-cols-2 w-full p-4">
          <Link to="/ecopedia">
            <p>All Posts</p>
          </Link>
          <div className="flex justify-end">
            <div className="relative">
              {isSearchVisible && (
                <input
                  type="text"
                  placeholder="Search"
                  className="border rounded p-2"
                  value={searchTerm}
                  onChange={handleSearchBar}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearchSubmit();
                    }
                  }}
                />
              )}
              <button className="ml-2" onClick={handleSearchClick}>
                <img src={SearchIcon} alt="search button" className="w-16" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 w-full max-w-4xl">
          <p className="text-sm text-gray-500 mb-4">
            nifa rahma • Aug 8 • 2 min read
          </p>
          <h2 className="text-3xl font-bold mb-2 my-2">
            Menuju Adopsi Massal Motor Listrik: Melawan Polusi Udara dengan Transportasi yang Berkelanjutan
          </h2>
          <h3 className='my-6'>PENDAHULUAN</h3>
          <h3 className='my-6'>Latar Belakang</h3>
          <p className="text-lg mb-4">
            Perubahan iklim yang terjadi akhir-akhir ini kian meradang seiring dengan semakin masifnya emisi gas rumah kaca (GRK) yang dihasilkan oleh berbagai sektor. Bahkan, menurut Global Carbon Project (2023), tahun 2023 ditetapkan sebagai tahun dengan rekor emisi GRK tertinggi dari pembakaran bahan bakar fosil, yaitu mencapai 36,8 miliar ton CO2. Dalam laporan tersebut juga menunjukan bahwa Indonesia menjadi salah satu negara dari sepuluh besar penghasil tertinggi di seluruh dunia. Jumlah emisi GRK di Indonesia meningkat sebesar 18,3% pada tahun 2022, salah satu yang paling signifikan dibanding negara-negara lainnya. 
          </p>
          <hr className="w-full border-gray-300 my-5" />
          <div className='flex space-x-7'>
            <button><img src={Facebook} alt="Facebook" className="w-4" /></button>
            <button><img src={Twitter} alt="Twitter" className="w-4" /></button>
            <button><img src={Linkedin} alt="LinkedIn" className="w-4" /></button>
            <button><img src={Share} alt="Share" className="w-4" /></button>
          </div>
          <hr className="w-full border-gray-300 my-5" />
          <div className='flex relative space-x-5'>
            <p>6 views</p>
            <p>0 comments</p>
            <img src={Like} className='right-4 absolute'/>
          </div>
        </div>
      </div>
      <div className='mx-52 relative'>
        <div className='flex'>
          <h2>Recent Posts</h2>
          <Link to="/ecopedia">
            <p className='right-4 absolute'>See All</p>
          </Link>
        </div>
        <div className='mx-10 my-5'>
          <div className='grid grid-cols-2 gap-20'>
            <Post/>
            <Post/>
          </div>
        </div>
      </div>
      <div className='mx-52 p-10 border-1 border-primary-1'>
        <p>Comments</p>
        <hr className="w-full border-gray-300 my-5" />
        <input
         type="text"
         placeholder="Write a comment..."
         className="border-1 border-primary-1 p-3 w-full"
        />
      </div>
      <Footer />
    </>
  );
}
