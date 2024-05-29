import { AiFillShopping } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Nav from "./Nav";
import { useUserData } from "../../../hooks/use-userData";

const menu = ["home", "about", "menu", "order", "faq"];

function Navbar({onIsAccount,onOpenBasket}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userData } = useUserData();
  const { state } = userData;

  const  myBasketCount=state.basket.length

  //menu state

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navbar = "cursor-pointer transition-all hover:text-red-400 ";

  return (
    <div className=" relative z-20 bg-white ">
      <nav className="container mx-auto   flex  flex-wrap justify-between bg-white p-5">
        <a href="#" className="logo cursor-pointer text-[24px]">
          Pizza
        </a>
        <ul
          //clip-path-custom-passiv  ve  clip-path-custom-active  tailwind-config icindeki  pluginsdedir
          className={`duration-400 absolute left-0 top-[100%] z-10 w-full gap-x-[1.7rem] border bg-white transition-all md:static md:flex md:w-auto md:border-0 
          ${isMenuOpen ? "clip-path-custom-active" : "clip-path-custom-passiv"} 
          ${isMenuOpen || "md:clip-path-custom-active"}`}
        >
          {menu.map((menu) => (
            <Nav name={menu} key={menu} />
          ))}
        </ul>

        <div className="flex items-center gap-x-2 text-gray-600">
          <AiOutlineMenu
            className="flex cursor-pointer    text-3xl md:hidden "
            onClick={() => handleMenuToggle()}
          />
          <BiSolidUser className={`  text-3xl ${navbar} `} onClick={()=>onIsAccount(true)} />
          <AiFillShopping className={` text-3xl ${navbar} `} />

          <div className={`flex  items-end  ${navbar} `} onClick={()=>onOpenBasket(true)}>
            <FaCartShopping className="text-3xl "  />
            <span className="text-xs lg:text-sm ">({myBasketCount})</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
