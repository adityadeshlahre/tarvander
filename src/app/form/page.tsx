"use client";
import Button from "../components/Button";
import Card from "../components/Card";
import CardH from "../components/CardH";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Payment from "../components/Payment";
import Select from "../components/Select";
import Selector from "../components/Selector";
import Spinner from "../components/Spiner";
import Traveller from "../components/Traveller";

export default function Form() {
  // <Spinner />

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
        price={"203920"}
      />
      <br />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="mx-16">
            <Selector />
          </div>
          <br />
          <Traveller groupSize={3} noOfTraveller={3} />
        </div>
        <div className="lg:col-span-1">
          <Payment tripPricePerPerson={0} totalPersons={1} totalDiscount={0} />
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}
