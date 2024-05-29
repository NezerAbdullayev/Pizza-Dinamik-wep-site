import { useState } from "react";

import Header from "./features/header/Header";

import Main from "./components/Main";
import Home from "./features/home/Home";
import Navbar from "./features/header/navbar/Navbar";
import UserAccount from "./features/header/Account/UserAccount";
import About from "./features/about/About";
import Menu from "./features/menu/Menu";
import NowOrder from "./features/order/NowOrder";
import Faq from "./features/faq/Faq";
import Footer from "./features/footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserBasket from "./features/header/basket/UserBasket";


function App() {
  const [isAccount, setIsAccount] = useState(false);
  const [isBasketMenu,setIsBasketMenu]=useState(false)
  return (
    <div id="app" className="relative z-[1] overflow-x-hidden">
      <Header>
        <Navbar onIsAccount={setIsAccount} onOpenBasket={setIsBasketMenu} />
        <UserAccount onIsAccount={setIsAccount} isAccount={isAccount} />
        <UserBasket isBasketMenu={isBasketMenu} setIsBasketMenu={setIsBasketMenu} />
      </Header>

      <Main>
        <Home />
        <About />
        <Menu />
        <NowOrder />
        <Faq />
      </Main>

      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
