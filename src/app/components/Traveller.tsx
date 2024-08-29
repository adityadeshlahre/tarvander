"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import NTraveller from "./NTraveller";

interface TravellerProp {
  groupSize: number;
  noOfTraveller: number;
  setNoOfTraveller: Dispatch<SetStateAction<number>>;
}

export default function Traveller({
  groupSize,
  noOfTraveller,
  setNoOfTraveller,
}: TravellerProp) {
  const [leaderName, setLeaderName] = useState("");
  const [leaderAge, setLeaderAge] = useState("");
  const [leaderContact, setLeaderContact] = useState("");
  const [leaderEmail, setLeaderEmail] = useState("");

  useEffect(() => {
    // sessionStorage.setItem("noOfTraveller", noOfTraveller.toString());
    sessionStorage.setItem("leaderName", leaderName);
    sessionStorage.setItem("leaderAge", leaderAge);
    sessionStorage.setItem("leaderContact", leaderContact);
    sessionStorage.setItem("leaderEmail", leaderEmail);
  }, [leaderName, leaderAge, leaderContact, leaderEmail]);

  return (
    <>
      <div className="text-slate-900">
        <div className="text-4xl flex justify-center items-center">
          Group Size: {groupSize} Traveller
        </div>
        <div className="text-lg flex justify-center items-center space-x-2">
          <span>Number of Traveller</span>
          <span>
            <button
              onClick={() => {
                setNoOfTraveller((prev) => prev + 1);
              }}
              type="button"
            >
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
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </span>
          <span>{noOfTraveller}</span>
          <span>
            <button
              onClick={() => {
                setNoOfTraveller((prev) => Math.max(prev - 1, 1));
              }}
              type="button"
            >
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
                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </span>
        </div>
        <div className="text-sm flex flex-col items-center">
          <span className="text-2xl">Leader Traveller</span>
          <div className="flex space-x-4">
            <div>
              <div>Name</div>
              <div>
                <input
                  value={leaderName}
                  onChange={(e) => setLeaderName(e.target.value)}
                  placeholder="Enter name"
                  className="border rounded p-1"
                ></input>
              </div>
            </div>
            <div>
              <div>Age</div>
              <div>
                <input
                  value={leaderAge}
                  onChange={(e) => setLeaderAge(e.target.value)}
                  placeholder="Enter age"
                  className="border rounded p-1"
                ></input>
              </div>
            </div>
          </div>
          <br />
          <div className="flex space-x-4">
            <div>
              <div>Contact</div>
              <div>
                <input
                  value={leaderContact}
                  onChange={(e) => setLeaderContact(e.target.value)}
                  placeholder="Enter contact"
                  className="border rounded p-1"
                ></input>
              </div>
            </div>
            <div>
              <div>Email</div>
              <div>
                <input
                  value={leaderEmail}
                  onChange={(e) => setLeaderEmail(e.target.value)}
                  placeholder="Enter email"
                  className="border rounded p-1"
                ></input>
              </div>
            </div>
          </div>
          <br />
          <NTraveller travellerCount={noOfTraveller} />
          <br />
        </div>
      </div>
    </>
  );
}
