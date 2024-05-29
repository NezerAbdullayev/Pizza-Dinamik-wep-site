import { useState } from "react";
import Button from "../../components/Button";
import Cart from "../../components/Cart";
import { useUserData } from "../../hooks/use-userData";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateMenuItem({ pizza }) {
  const {userData}=useUserData()
  const {insertProduct}=userData
  const [count, setCount] = useState(1);
  const { id, name, url, price,} = pizza;

  const handleChange = (e) => {
    
    setCount(e.target.value<1 ? 1 : e.target.value);
  };

  async function handleClick(){
    const newPizza={
      id,name, url, price,count:Number(count)
    }
     const check= await insertProduct(newPizza)
     if(check) toast.success("Səbətə əlavə edildi",{autoClose: 2000})
      else toast.error("zəhmət olmasa kabitenizə daxil olun və ya qeydiyyatdan keçin",{autoClose: 2900});
   
  }

  return (
      <Cart>
        <div className="relative">
          <img src={`./src/assets/${url}`} alt={name} />

          <span className="absolute left-[-10px] top-[-10px] mb-2.5 box-border w-16 rounded bg-pizzaBlack px-3 py-3 text-sm text-stone-100 ">
            ${Number(price).toFixed(2, 0)}
          </span>
        </div>

        <h4 className="my-1 text-xl  ">{name}</h4>

        <form
          className=" grid grid-cols-12   items-center justify-between gap-x-2"
          action=""
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="col-start-1 col-end-4  mt-2.5 rounded-md border border-stone-600  px-3 py-2.5 focus:outline-none"
            type="number"
            name="menuSize"
            value={count}
            onChange={handleChange}
          />
          <div className=" col-start-4  col-end-13">
            <Button onClick={handleClick} type="button">Add To Cart</Button>
          </div>
        </form>
      </Cart>
  );
}
export default CreateMenuItem;
