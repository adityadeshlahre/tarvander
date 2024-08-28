"use client";
import React, { useState } from "react";
import { useNotification } from "../hooks/useNotification";
import { useNavigate } from "../hooks/useNavigate";

interface PaymentDetails {
  tripPricePerPerson: number;
  totalPersons: number;
  totalDiscount: number;
  paymentOptions?: { name: string; imgSrc: string }[];
}

const defaultPaymentOptions = [
  {
    name: "Razorpay",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg",
  },
  {
    name: "PhonePe",
    imgSrc:
      "https://logos-download.com/wp-content/uploads/2021/01/PhonePe_Logo_full.png",
  },
];

export default function Payment({
  tripPricePerPerson = 0,
  totalPersons = 1,
  totalDiscount = 0,
  paymentOptions = defaultPaymentOptions,
}: PaymentDetails) {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const totalPrice = totalPersons * tripPricePerPerson;
  const grandTotal = totalPrice - totalDiscount;

  const showNotification = useNotification({
    title: "Payment Successful!",
    text: `Your total amount ${grandTotal} has been recived!`,
  });

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  const handlePayment = () => {
    showNotification();
    navigate("/success");
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="text-lg font-semibold mb-4">Payment Details</div>
        <div className="space-y-2 text-gray-700">
          <div className="flex justify-between">
            <span>Trip price per person:</span>
            <span className="font-semibold">
              ${tripPricePerPerson?.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Total persons in booking:</span>
            <span className="font-semibold">{totalPersons}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total price:</span>
            <span>${totalPrice?.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Discount:</span>
            <span className="font-semibold">${totalDiscount?.toFixed(2)}</span>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-lg font-semibold mb-4">Payment Via</div>
          <div className="space-y-2">
            {paymentOptions.map((option) => (
              <label key={option.name} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5"
                  checked={selectedOption === option.name}
                  onChange={() => handleSelectOption(option.name)}
                />
                <img src={option.imgSrc} alt={option.name} className="h-5" />
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-6 font-semibold text-gray-900">
          <span>Grand Total:</span>
          <span>${grandTotal?.toFixed(2)}</span>
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-cyan-600 text-white py-2 rounded-full mt-6"
        >
          Book Now
        </button>

        <p className="text-xs text-gray-600 mt-4 text-center">
          By Clicking on Book Now you confirm that all the details provided by
          you are correct, and accepting our TnC & Cancellation Policy.
        </p>
      </div>
    </>
  );
}
