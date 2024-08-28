import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Select from "../components/Select";

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
        main={""}
        desc={""}
        date={""}
        by={""}
        timeLine={""}
        price={""}
      />
      <br />
      <Footer />
    </>
  );
}
