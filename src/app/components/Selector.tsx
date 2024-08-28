"use client";
import { useState } from "react";

interface SelectorList {
  starting: { name: string; price: number; dateTime: string }[];
  ending: { name: string; price: number; dateTime: string }[];
}

const dummyList: SelectorList = {
  starting: [
    {
      name: "Sunset Cruise",
      price: 99.99,
      dateTime: "2024-09-15T18:00:00Z",
    },
    {
      name: "Mountain Hike",
      price: 129.5,
      dateTime: "2024-09-16T08:00:00Z",
    },
    {
      name: "City Tour",
      price: 79.0,
      dateTime: "2024-09-17T10:00:00Z",
    },
    {
      name: "Dinner at Sky Lounge",
      price: 149.99,
      dateTime: "2024-09-18T20:00:00Z",
    },
    {
      name: "Scuba Diving",
      price: 199.95,
      dateTime: "2024-09-19T07:00:00Z",
    },
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

export default function Selector() {
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

  return (
    <>
      <div className="flex flex-col md:flex-row items-center m-2 p-4">
        <div className="flex flex-col items-center text-slate-800 rounded-lg shadow-lg p-4 w-full md:w-3/5">
          <div className="flex flex-col md:flex-col justify-center items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
            <div className="flex flex-col w-full md:w-full">
              <div className="flex flex-row items-start space-y-2">
                <div className="mb-2 font-bold">Start Point:</div>
                <select
                  className="border rounded p-2 bg-inherit"
                  value={selectedStarting.name}
                  onChange={handleStartingChange}
                >
                  {dummyList.starting.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name} - ${item.price.toFixed(2)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="m-2">
                <div>
                  Date & Time:{" "}
                  {new Date(selectedStarting.dateTime).toLocaleString()}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-full">
              <div className="flex flex-row items-start space-y-2">
                <div className="mb-2 font-bold">End Point:</div>
                <select
                  className="border rounded p-2 bg-inherit"
                  value={selectedEnding.name}
                  onChange={handleEndingChange}
                >
                  {dummyList.ending.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name} - ${item.price.toFixed(2)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="m-2">
                <div>
                  Date & Time:{" "}
                  {new Date(selectedEnding.dateTime).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-neutral-800 space-x-2 text-center md:ml-4 mt-4 md:mt-0 w-full md:w-2/5">
          <span>#8394617</span>
          <span>Camchatak, Russia</span>
        </div>
      </div>
    </>
  );
}
