import React from "react";

const CardOrder = ({ image, title, price}) => {

  return (
    <div className="max-w-sm rounded-lg overflow-hidden bg-filter-6 border-1 border-primary-1 relative p-3">
      <img className="w-32 h-32 object-cover mb-4" src={image} alt="Event" />
      <p className="text-lg">{title}</p>
      <p className="text-xl font-semibold">Rp {price.toLocaleString()}</p>
    </div>
  );
};

export default CardOrder;
