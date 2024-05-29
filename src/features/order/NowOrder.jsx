import Section from "../../components/Section";
import MyOrderItems from "./MyOrderItems";
import OrderForm from "./OrderForm";

function NowOrder() {
  return (
    <Section id="order" >
      <h3 className="mb-5 text-center text-4xl font-bold uppercase text-stone-800">
        ORDER NOW
      </h3>

      <div className="rounded-md bg-white  p-5 shadow">
        <MyOrderItems />

        <OrderForm />
      </div>

      
    </Section>
  );
}

export default NowOrder;
