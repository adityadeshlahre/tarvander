"use client";

import { useEffect, useState } from "react";
import Spinner from "../components/Spiner";
import Swal from "sweetalert2";

export default function Success() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const selectedLocation = sessionStorage.getItem("selectedLocation") || "";
      const selectedName = sessionStorage.getItem("selectedName") || "";
      const selectedDate = new Date(
        sessionStorage.getItem("selectedDate") || ""
      );
      const grandTotal = sessionStorage.getItem("grandTotal") || "0.00";
      const leaderName = sessionStorage.getItem("leaderName") || "";
      const leaderAge = sessionStorage.getItem("leaderAge") || "";
      const leaderContact = sessionStorage.getItem("leaderContact") || "";
      const leaderEmail = sessionStorage.getItem("leaderEmail") || "";
      const noOfTraveller = sessionStorage.getItem("noOfTraveller") || "0";
      const selectedStarting = sessionStorage.getItem("selectedStarting");
      const selectedEnding = sessionStorage.getItem("selectedEnding");
      const selectedOption = sessionStorage.getItem("selectedOption");
      const travelerNames = JSON.parse(
        sessionStorage.getItem("travelerNames") || "[]"
      );
      const travelerAges = JSON.parse(
        sessionStorage.getItem("travelerAges") || "[]"
      );

      Swal.fire({
        title: "Payment Successful!",
        // text: `Location: ${selectedLocation}, Name: ${selectedName}, Date: ${selectedDate.toLocaleString()}`,
        html: `
          <strong>Location:</strong> ${selectedLocation}<br>
          <strong>Name:</strong> ${selectedName}<br>
          <strong>Date:</strong> ${selectedDate.toLocaleString()}<br>
          <strong>Starting Activity:</strong> ${
            selectedStarting ? JSON.parse(selectedStarting).name : "N/A"
          }<br>
          <strong>Ending Activity:</strong> ${
            selectedEnding ? JSON.parse(selectedEnding).name : "N/A"
          }<br>
          <strong>Selected Payment Option:</strong> ${
            selectedOption ? JSON.parse(selectedOption).name : "N/A"
          }<br>
          <strong>Number of Travellers:</strong> ${noOfTraveller}<br>
          <strong>Leader Details:</strong><br>
          Name: ${leaderName}<br>
          Age: ${leaderAge}<br>
          Contact: ${leaderContact}<br>
          Email: ${leaderEmail}<br>
          <strong>Traveller Details:</strong><br>
          ${travelerNames
            .map(
              (name: string, index: number) =>
                `<div>Traveller ${index + 1}: Name: ${name}, Age: ${
                  travelerAges[index] || "N/A"
                }</div>`
            )
            .join("")}
          <br>
          <strong>Grand Total:</strong> $${grandTotal}
        `,
        icon: "success",
        timer: 4000,
        showConfirmButton: true,
      });
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Spinner time={2} />
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-center min-h-screen">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">Payment Successful</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
