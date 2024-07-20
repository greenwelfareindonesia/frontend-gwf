const CardOrder = ({ image, title, price, quantity, note, details }) => {
  return (

    <div className="w-full mt-2">
      <div className="bg-opacity-20 border-2 border-primary-2 p-4 md:p-6 mb-4 rounded-lg flex items-center">
        <img src={image} alt={title} className="w-16 h-16 md:w-24 md:h-24 mr-4 md:mr-6 rounded-md border-1" />
        <div className="flex-grow text-primary-2 text-sm md:text-base">
          <div className="flex items-center flex-wrap">
            <h2 className="font-semibold text-base md:text-xl mr-2">{title}</h2>
            {details.map((detail, index) => (
              <span key={index} className="border-1 bg-primary-2 text-light-1 rounded-md px-2 py-1 mr-2 text-xxs md:text-xs mt-1 md:mt-0">
                {detail}
              </span>
            ))}
          </div>
          <p className="text-xxs md:text-xs text-gray-600 mt-2 md:mt-0">{note}</p>
          <h2 className="font-semibold text-sm md:text-lg mt-2 md:mt-0">{price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</h2>
        </div>
        <div className="ml-auto text-sm md:text-lg">
          <span>x{quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default CardOrder;
