import { FaEdit } from "react-icons/fa";
import { useUserData } from "../../../hooks/use-userData";
import { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateBasketItem({ pizza }) {
  
  const { userData } = useUserData();
  const { editProduct,deleteBasketItem } = userData;
  const { id, name, url, price, count } = pizza;

  const [PizzaCount,setPizzaCount]=useState(count)


  const handleChange=(e)=>{
    setPizzaCount(e.target.value)
  }

  const  handleClick= async ()=>{
    const res= await   editProduct({id,count:PizzaCount})
    if(res) toast.success("səbət redaktə edildi",{autoClose: 2000}); 
  }

  const handleDeleteClick=async (id)=>{
    const res=await deleteBasketItem(id)
  }

  
  return (
    <div className="my-4 flex items-center justify-center gap-4 rounded border bg-white p-4 shadow relative">
      <img
        className="h-[70px] w-[70px]"
        src={`./src/assets/${url}`}
        alt={name}
      />
      <div>
        <div className="mb-4 flex flex-col items-center justify-between  text-sm">
          <span>{name}</span>
          <span className="tracking-widest text-pizzaRed ">
            (${price}/x{count})
          </span>
        </div>

        <div className="flex items-center gap-3 ">
          <input
            type="number"
            className=" w-12 rounded-md border border-stone-600 px-2.5  py-2 focus:outline-none  sm:w-14"
            onChange={handleChange}
            value={PizzaCount}
          />
          <FaEdit onClick={handleClick} className="h-11 w-12 cursor-pointer rounded-md bg-stone-100 p-4 transition-all  duration-500 hover:bg-stone-900 hover:text-white" />
        </div>
      </div>
        <span onClick={()=>handleDeleteClick(id)}  className="absolute top-4 right-4 text-pizzaRed cursor-pointer">&#x2715;</span>
    </div>
  );
}

export default CreateBasketItem;
