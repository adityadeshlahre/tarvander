"use client";

import { useEffect, useState } from "react";

interface NTravellerProps {
  travellerCount: number;
}

export default function NTraveller({ travellerCount }: NTravellerProps) {
  const [travelerNames, setTravelerNames] = useState<string[]>(
    Array(travellerCount).fill("")
  );
  const [travelerAges, setTravelerAges] = useState<string[]>(
    Array(travellerCount).fill("")
  );

  useEffect(() => {
    setTravelerNames(Array(travellerCount).fill(""));
    setTravelerAges(Array(travellerCount).fill(""));
  }, [travellerCount]);

  useEffect(() => {
    sessionStorage.setItem("travelerNames", JSON.stringify(travelerNames));
    sessionStorage.setItem("travelerAges", JSON.stringify(travelerAges));
  }, [travelerNames, travelerAges]);

  return (
    <>
      {Array.from({ length: travellerCount }).map((_, index) => (
        <div key={index} className="text-slate-900">
          <div className="text-sm flex flex-col items-center">
            <span className="text-2xl">{index + 1} Traveller</span>
            <div className="flex space-x-4">
              <div>
                <div>Name</div>
                <div>
                  <input
                    value={travelerNames[index] || ""}
                    onChange={(e) => {
                      const newNames = [...travelerNames];
                      newNames[index] = e.target.value;
                      setTravelerNames(newNames);
                    }}
                    placeholder="Enter name"
                    className="border rounded p-1"
                  ></input>
                </div>
              </div>
              <div>
                <div>Age</div>
                <div>
                  <input
                    value={travelerAges[index] || ""}
                    onChange={(e) => {
                      const newAges = [...travelerAges];
                      newAges[index] = e.target.value;
                      setTravelerAges(newAges);
                    }}
                    placeholder="Enter age"
                    className="border rounded p-1"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
