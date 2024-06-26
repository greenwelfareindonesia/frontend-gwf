import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../../layouts/dashboard_section/Template";
import { edit_icon, delete_icon } from "../../../assets/icons";
import Delete from "./delete";
import API from "../../../libs/api";

const OrderStatus = () => {
  const [showDeletePopOut, setShowDeletePopOut] = useState(false);
  const [payments, setPayments] = useState([]);
  const [expeditions, setExpeditions] = useState([]); // Inisialisasi sebagai array
  const [selectedPayment, setSelectedPayment] = useState(null); // State for selected payment
  const navigate = useNavigate(); // Use useNavigate hook

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await API.get("/payment/payments", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("API Response:", response);
        console.log("Response Data:", response.data);

        if (response.data && Array.isArray(response.data.data)) {
          setPayments(response.data.data);
        } else {
          console.error("Unexpected response data format:", response.data);
          setPayments([]);
        }
      } catch (error) {
        console.error("Error fetching payments:", error);
        setPayments([]); // Ensure payments is set to an empty array on error
      }
    };

    const fetchExpeditions = async () => {
      try {
        const response = await API.get("/status-ekspedisi/ekspedisis", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("Expeditions Response:", response.data);
    
        // Check if response status is 200 and data is an array
        if (response.status === 200 && Array.isArray(response.data.data)) {
          setExpeditions(response.data.data);
        } else {
          console.error("Unexpected expeditions data format:", response.data);
          setExpeditions([]);
        }
      } catch (error) {
        console.error("Error fetching expeditions:", error);
        setExpeditions([]); // Ensure expeditions is set to an empty array on error
      }
    };
    

    fetchOrder();
    fetchExpeditions();
  }, []);

  const handleAddResi = async (paymentID, userID) => {
    try {
      const response = await API.post(
        `/api/status-ekspedisi/${paymentID}/${userID}`,
        {
          resi_info: resiInfo,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("Status Ekspedisi created:", response.data);
      // Optionally update the state to reflect the new status ekspedisi
      setResiInfo(""); // Clear the input field
      setSelectedPayment(null); // Clear the selected payment
    } catch (error) {
      console.error("Error creating status ekspedisi:", error);
    }
  };

  // Check if payment already has an expedition status
  const hasExpedition = (paymentID) => {
    console.log("Expeditions:", expeditions);

    return expeditions.some((expedition) => expedition.payment_id === paymentID);
  };

  return (
    <Sidebar titleField={"Konsumen Transaction"}>
      <div className="absolute flex items-center justify-between mb-4 top-24 right-9">
        <Link to="/dashboard/event/post">
          {/* <button className="font-semibold bg-primary-2 w-36 h-9 rounded-3xl text-light-1">
            Post Events
          </button> */}
        </Link>
      </div>
      <table className="w-full text-left table-fixed text-primary-2">
        <thead>
          <tr className="border-b-1 border-t-1 border-primary-2">
            <th className="p-4 w-80">Product Name</th>
            <th className="p-4">Konsumen Name</th>
            <th className="p-4">Total Price</th>
            <th className="p-4">Status Payment</th>
            <th className="p-4">Add Resi</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.ID} className="border-b-1 border-primary-2">
              <td className="p-4">
                {payment.order.items.map((item) => (
                  <div key={item.ID} className="overflow-hidden">
                    <p className="text-sm font-semibold align-text-top">
                      {"-"} {item.product.name}
                    </p>
                  </div>
                ))}
              </td>

              <td className="p-4">
                <div className="text-sm font-semibold">
                  {payment.user.Username}
                </div>
              </td>
              <td className="p-4">
                <div className="text-sm font-semibold">
                  {payment.order.total_price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </div>
              </td>
              <td className="p-4">
                <div className="text-sm font-semibold">
                  {payment.status_payment}
                </div>
              </td>
              <td className="p-4">
                <div className="container flex gap-2 overflow-hidden">
                {hasExpedition(payment.id) ? (
          <span className="text-sm font-semibold">Already added</span>
        ) : (
          <Link to={`/dashboard/ecopedia/post/${payment.id}/${payment.user_id}`}>
            <img src={edit_icon} alt="Edit" />
          </Link>
        )}
                  
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Delete visible={showDeletePopOut} setVisible={setShowDeletePopOut} />
    </Sidebar>
  );
};

export default OrderStatus;
