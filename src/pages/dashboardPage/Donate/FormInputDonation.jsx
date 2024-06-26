import React from 'react';
import { useForm } from 'react-hook-form';
import Input from "../../../components/input";
import Button from "../../../components/button";
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';

export const FormInputDonation = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const body = {
      ...data,
      amount: parseInt(data.amount)
    };

    try {
      const token = localStorage.getItem("token");
      const response = await fetch('http://localhost:8080/api/make-donation/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Donation successful:', result);
        const makeDonationID = result.data?.ID; // Adjusted path to ID
        if (makeDonationID) {
          navigate(`/payment-donation/${makeDonationID}`);
        } else {
          console.error('No ID returned from API:', result);
        }
      } else {
        console.error('Error during donation:', response.statusText);
      }
    } catch (error) {
      console.error('Error during donation:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center bg-white">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] m-6 p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-left mb-10">Make a Donation</h2>
          <Input
            required
            register={register}
            name="name"
            title="Name"
            placeholder="Enter your name"
            type="text"
          />
          <Input
            required
            register={register}
            name="amount"
            title="Amount"
            placeholder="Enter the amount"
            type="number"
          />
          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
            <textarea
              required
              {...register("message")}
              id="message"
              placeholder="Enter your message"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-primary-300"
              rows="4"
            />
          </div>
          <Button type="submit" className="w-[20%] rounded-lg">Pay</Button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default FormInputDonation;
