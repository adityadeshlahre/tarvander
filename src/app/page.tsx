import Payment from "./components/Payment";
import Spinner from "./components/Spiner";

export default function Home() {
  return (
    <>
      <div>
        <Spinner />
        <Payment tripPricePerPerson={0} totalPersons={1} totalDiscount={0} />
      </div>
    </>
  );
}
