import CreateOrderInput from "./CreateOrderInput";
import { OrderFormInput } from "./orderData";
import Button from "../../components/Button";

function OrderForm() {
  return (
    <form className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2" onSubmit={(e)=> e.preventDefault()}>
      {OrderFormInput.map((formdata) => (
        <CreateOrderInput formdata={formdata} key={formdata.id} />
      ))}
      <div className="sm:col-span-2">
        <Button>Order New</Button>
        <div className="text-center mt-2 text-sm font-bold">Bu hisseni arxa terefe ötürmədim real proyect deyil diye</div>
      </div>
    </form>
  );
}

export default OrderForm;
