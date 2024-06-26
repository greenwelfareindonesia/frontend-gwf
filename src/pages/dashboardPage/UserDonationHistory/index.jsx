import { useEffect, useState } from "react";
import DashboardSection from "../../../layouts/dashboard_user/Template";
import API from "../../../libs/api";

const DonaturTransactionDashboard = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await API.get("/payments/", {
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

    fetchPayments();
  }, []);

  return (
    <DashboardSection titleField="Donation History">
      <table className="w-full text-left ">
        <thead>
          <tr className="border-b-2 border-primary-2">
            <th className="p-4 w-80">Name</th>
            <th className="p-4 w-80 ">Amount</th>
            <th className="p-4 w-80">Message</th>
            <th className="p-4 w-80">Status Payment</th>
          </tr>
        </thead>
        <tbody>
        {payments.map((payment) => (
            <tr key={payment.ID} className="border-b-1 border-primary-2">
              <td className="p-4">
                 {payment.user.Username}
                    
              </td>
              <td className="p-4">
               
                       {payment.make_donation.amount.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                    
              </td>
              <td className="text-sm font-bold text-primary-1 p-4">
                {payment.make_donation.message}
              </td>
              <td className="text-sm font-bold text-primary-1 p-4">
                {payment.status_payment}
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardSection>
  );
};

export default DonaturTransactionDashboard;
