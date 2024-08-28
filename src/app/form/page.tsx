import Button from "../components/Button";
import Card from "../components/Card";
import CardH from "../components/CardH";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Select from "../components/Select";
import Selector from "../components/Selector";

export default function Form() {
  return (
    <>
      <Header appName="Login" text="Login"></Header>
      <br />
      <Select />
      <br />
      <div>Hi Form</div>
      <br />
      <Card
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
      <Selector />
      <br />
      <Footer />
    </>
  );
}
