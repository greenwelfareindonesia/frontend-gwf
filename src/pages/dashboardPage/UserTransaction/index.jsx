import { useEffect, useState } from "react";
import DashboardSection from "../../../layouts/dashboard_user/Template";
import API from "../../../libs/api";
import { MdCircle } from "react-icons/md";

const DonaturTransactionDashboard = () => {
  const [payments, setPayments] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await API.get("/status-ekspedisi/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("API Response:", response);
        console.log("Response Data ekspedisi:", response.data);

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

    fetchPayments();
  }, []);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await API.get("/payment/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("API Response:", response);
        console.log("Response Data pay:", response.data);

        if (response.data && Array.isArray(response.data.data)) {
          setHistory(response.data.data);
        } else {
          console.error("Unexpected response data format:", response.data);
          setHistory([]);
        }
      } catch (error) {
        console.error("Error fetching payments:", error);
        setHistory([]); // Ensure payments is set to an empty array on error
      }
    };

    fetchHistory();
  }, []);

  return (
    <DashboardSection titleField="Transaction History">
      <table className="w-full text-left ">
        <thead>
          <tr className="border-b-2 border-primary-2">
            <th className="p-4 w-80">Product Name</th>
            <th className="p-4 w-80 ">Quantity</th>
            <th className="p-4 w-80">Total Price</th>
            <th className="p-4 w-80">Address</th>
            <th className="p-4 w-80">Courier</th>
            <th className="p-4 w-80">Status Payment</th>
            <th className="p-4 w-80">Tracking Info</th>
          </tr>
        </thead>
        <tbody>
          {history.map((payment) => (
            <tr key={payment.ID} className="border-b-1 border-primary-2">
              <td className="p-4">
                {payment.order.items.map((item) => (
                  <div key={item.ID} className="overflow-hidden flex items-center gap-2">
                    <MdCircle className="text-[8px]" />
                    <p className="text-sm font-semibold align-text-top">
                      {item.product.name}
                    </p>
                  </div>
                ))}
              </td>
              <td className="p-4">
                {payment.order.items.map((item) => (
                  <div key={item.ID} className="overflow-hidden">
                    <p className="text-sm font-semibold align-text-top">
                      {item.quantity}
                    </p>
                  </div>
                ))}
              </td>
              <td className="text-sm font-bold text-primary-1 p-4">
                {payment.order.total_price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </td>
              <td className="text-sm font-bold text-primary-1 p-4">
                {payments.find(p => p.order.id === payment.order.id)?.ongkir.home_address || "not updated yet from admin"}
              </td>
              <td className="text-sm font-bold text-primary-1 p-4">
                {payments.find(p => p.order.id === payment.order.id)?.ongkir.courier || "not updated yet from admin"}
              </td>
              
              <td className="text-sm font-bold text-primary-1 p-4" key={payment.ID}>
                {payment.status_payment}
              </td>
              <td className="text-sm font-bold text-primary-1 p-4">
                {payments.find(p => p.order.id === payment.order.id)?.resi_info || "tracking info not input yet"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardSection>
  );
};

export default DonaturTransactionDashboard;
