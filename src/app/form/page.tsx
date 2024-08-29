"use client";

import { useEffect, useState } from "react";
import CardH from "../components/CardH";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Payment from "../components/Payment";
import Selector from "../components/Selector";
import Traveller from "../components/Traveller";
import { useNavigate } from "../hooks/useNavigate";
import { useNotification } from "../hooks/useNotification";

interface SelectorList {
  starting: { name: string; price: number; dateTime: string }[];
  ending: { name: string; price: number; dateTime: string }[];
}

const dummyList = {
  starting: [
    { name: "Sunset Cruise", price: 99.99, dateTime: "2024-09-15T18:00:00Z" },
    { name: "Mountain Hike", price: 129.5, dateTime: "2024-09-16T08:00:00Z" },
    { name: "City Tour", price: 79.0, dateTime: "2024-09-17T10:00:00Z" },
    {
      name: "Dinner at Sky Lounge",
      price: 149.99,
      dateTime: "2024-09-18T20:00:00Z",
    },
    { name: "Scuba Diving", price: 199.95, dateTime: "2024-09-19T07:00:00Z" },
  ],
  ending: [
    {
      name: "Farewell Dinner",
      price: 119.99,
      dateTime: "2024-09-20T19:00:00Z",
    },
    {
      name: "Departure Transfer",
      price: 89.0,
      dateTime: "2024-09-21T05:00:00Z",
    },
    {
      name: "Post-Trip Relaxation Spa",
      price: 159.95,
      dateTime: "2024-09-21T14:00:00Z",
    },
    {
      name: "Souvenir Shopping",
      price: 75.0,
      dateTime: "2024-09-20T16:00:00Z",
    },
    {
      name: "Airport Lounge Access",
      price: 50.0,
      dateTime: "2024-09-21T06:00:00Z",
    },
  ],
};

export default function Form() {
  // <Spinner />

  const [selectedStarting, setSelectedStarting] = useState(
    dummyList.starting[0]
  );
  const [selectedEnding, setSelectedEnding] = useState(dummyList.ending[0]);

  const handleStartingChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedOption = dummyList.starting.find(
      (item) => item.name === event.target.value
    );
    setSelectedStarting(selectedOption || dummyList.starting[0]);
  };

  const handleEndingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = dummyList.ending.find(
      (item) => item.name === event.target.value
    );
    setSelectedEnding(selectedOption || dummyList.ending[0]);
  };

  const [noOfTraveller, setNoOfTraveller] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const navigate = useNavigate();
  const showNotification = useNotification({
    title: "Payment Successful!",
    text: `Your total amount has been recived!`,
  });

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  const handlePayment = () => {
    showNotification();
    navigate("/success");
  };

  useEffect(() => {
    sessionStorage.setItem(
      "selectedStarting",
      JSON.stringify(selectedStarting)
    );
    sessionStorage.setItem("selectedEnding", JSON.stringify(selectedEnding));
    sessionStorage.setItem("noOfTraveller", noOfTraveller.toString());
    sessionStorage.setItem(
      "selectedOption",
      selectedOption !== null ? selectedOption : "null"
    );
  }, [noOfTraveller, selectedEnding, selectedStarting, selectedOption]);

  return (
    <>
      <Header appName="Login" text="Login" notiTitle="Login Success!"></Header>
      <br />
      <CardH
        img={
          "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
        }
        main={"main"}
        desc={"desc"}
        date={"22/22/22"}
        by={"by taravender"}
        timeLine={"3d/3n"}
        price={"200"}
      />
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="mx-16">
            <Selector
              startingOptions={dummyList.starting}
              endingOptions={dummyList.ending}
              selectedStarting={selectedStarting}
              selectedEnding={selectedEnding}
              onStartingChange={handleStartingChange}
              onEndingChange={handleEndingChange}
            />
          </div>
          <br />
          <Traveller
            groupSize={3}
            noOfTraveller={noOfTraveller}
            setNoOfTraveller={setNoOfTraveller}
          />
        </div>
        <div className="lg:col-span-1">
          <Payment
            tripPricePerPerson={0}
            totalPersons={1}
            totalDiscount={0}
            selectedOption={selectedOption}
            onOptionSelect={handleSelectOption}
            onPayment={handlePayment}
          />
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}
