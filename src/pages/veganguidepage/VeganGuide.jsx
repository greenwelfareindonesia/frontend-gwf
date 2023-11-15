import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Header from "../../assets/veganguide-image/header.png";

function VeganGuide() {
  return (
    <div>
      <Navbar />
      {/* Header */}
      <div
        className="h-[31rem] bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${Header})` }}
      >
        vegan guide
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default VeganGuide;
