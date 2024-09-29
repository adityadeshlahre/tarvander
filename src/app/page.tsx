"use client";

import { useEffect, useState } from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Select from "./components/Select";
import { useRouter } from "next/navigation";
import axios from "axios";

const limit: number = 8;

const date = new Date().toLocaleDateString();

const cardData = Array.from({ length: limit }, (_, index) => ({
  img: "https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318",
  main: `Main Title ${index + 1}`,
  desc: "Description",
  date: `${date.toString()}`,
  by: `By Author ${index + 1}`,
  timeLine: "4d/3n",
  price: `${300 + index * 10}`,
}));

async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedName, setSelectedName] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const router = useRouter();
  const handleNavigate = () => {
    router.push("/form");
  };

  const res = getUserDetails();

  useEffect(() => {
    sessionStorage.setItem("selectedLocation", selectedLocation);
    sessionStorage.setItem("selectedName", selectedName);
    sessionStorage.setItem("selectedDate", selectedDate?.toISOString() || "");
  }, [selectedDate, selectedLocation, selectedName]);

  return (
    <>
      <div>
        <Header appName="Login" text="Login" notiTitle="Login Success!" />
        <Select
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          selectedName={selectedName}
          setSelectedName={setSelectedName}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          handleNavigate={handleNavigate}
        />
        <br />
        <div className="flex justify-center">
          <div className=" w-[1400px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cardData.map((card, index) => (
              <Card
                key={index}
                img={card.img}
                main={card.main}
                desc={card.desc}
                date={card.date}
                by={card.by}
                timeLine={card.timeLine}
                price={card.price}
              />
            ))}
          </div>
        </div>
        <br />
        <Footer />
      </div>
    </>
  );
}
