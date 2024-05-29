import Button from "../../../components/Button";
import { useUserData } from "../../../hooks/use-userData";
import CreateBasketItem from "./CreateBasketItem";

function UserBasket({ isBasketMenu, setIsBasketMenu }) {
  const { userData } = useUserData();
  const { basket } = userData.state;

  return (
    <div
      className={`fixed bottom-0 top-0 z-[99] h-full w-screen  max-w-[330px] bg-stone-100 overflow-y-scroll   border-l border-stone-500 p-5 transition-all duration-300 ${
        isBasketMenu ? "right-0 " : "right-[-100%]"
      }`}
    >
      <div className="flex flex-col ">
        <Button type="close" onClick={setIsBasketMenu}>
          close
        </Button>

        <ul>
          {basket.length > 0 ? (
            basket.map((pizza) => (
              <CreateBasketItem pizza={pizza} key={pizza.id} />
            ))
          ) : (
            <p> Hal Hazırda səbət boşdur ☹️</p>
          )}
        </ul>
        <Button href="#menu" type="rota" onClick={()=>setIsBasketMenu(false)}>Order New</Button>
      </div>
    </div>
  );
}

export default UserBasket;
