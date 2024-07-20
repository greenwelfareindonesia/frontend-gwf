import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import tumbler from "../../assets/merch-image/tumbler.png";
import CardOrder from "../../components/cards-order/index";

const OrderSummary = () => {
  const productTotal = 90000;
  const deliveryFee = 10000;
  const totalPrice = productTotal + deliveryFee;

  const orders = [
    {
      image: tumbler,
      title: "GWF Tumbler",
      price: 30000,
      quantity: 2,
      note: "Note: Please add bubble wrap...",
      details: ["650ml", "Black"]
    },
    {
      image: tumbler,
      title: "GWF Tumbler",
      price: 30000,
      quantity: 1,
      note: "Note: Please add bubble wrap...",
      details: ["650ml", "Black"]
    },
    // Add more orders as needed
  ];

  return (
    <>
      <Navbar />
      <div className="mx-4 md:mx-20 mb-10 mt-20">
        <h1 className="font-semibold text-2xl my-2">Order Summary</h1>
        {orders.map((order, index) => (
          <CardOrder
            key={index}
            image={order.image}
            title={order.title}
            quantity={order.quantity}
            price={order.price}
            note={order.note}
            details={order.details}
          />
        ))}
      </div>

      <div className="mx-4 md:mx-20">
        <div className="w-full flex justify-between mt-5 mb-2 text-sm md:text-base">
          <p>Product total</p>
          <p>Rp {productTotal.toLocaleString()}</p>
        </div>
        <hr className="border-t-1 border-gray-500 w-full" />
        <div className="w-full flex justify-between mt-5 mb-2 text-sm md:text-base">
          <p>Delivery Fee</p>
          <p>Rp {deliveryFee.toLocaleString()}</p>
        </div>
        <hr className="border-t-1 border-gray-500 w-full" />
        <div className="w-full flex justify-between mt-5 mb-2 font-semibold text-sm md:text-base">
          <p>Total Harga</p>
          <p>Rp {totalPrice.toLocaleString()}</p>
        </div>
        <hr className="border-t-1 border-gray-500 w-full mb-10" />

        <div className="bg-primary-2 bg-opacity-30 border-2 border-primary-2 p-4 md:p-8 mb-4 rounded-lg items-center flex justify-between flex-wrap">
          <div className="mb-4 md:mb-0 w-full md:w-auto text-center md:text-left text-sm md:text-base">
            <p className="text-lg font-semibold text-primary-2 pb-2">Total Harga</p>
            <p className="text-primary-2">Rp {totalPrice.toLocaleString()}</p>
          </div>
          <button className="text-base md:text-2xl text-light-1 p-2 md:p-3 px-10 md:px-20 rounded-xl bg-primary-1 w-full md:w-auto">Buy</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderSummary;
