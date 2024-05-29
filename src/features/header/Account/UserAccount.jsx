// import OrderItem from "../MyOrderItems";
import Button from "../../../components/Button";
import { useUserData } from "../../../hooks/use-userData";
import OrderItem from "../../order/MyOrderItems";
import Login from "./Login";
import Register from "./Register";

function UserAccount({ isAccount, onIsAccount }) {
  const { userData } = useUserData();
  const { state, outputProfil } = userData;

  const checkUser = state.id === "";

  return (
    <div
      className={`fixed  z-30  overflow-y-scroll bg-white transition-all duration-300 ${isAccount ? "inset-0" : "left-[100%]"}`}
    >
      <div className=" mx-auto max-w-7xl overflow-y-scroll   p-5  ">
        <div className="flex flex-col">

          <Button type="close" onClick={onIsAccount}>close</Button>

          <div className="rounded-lg bg-stone-100 p-4 text-center text-xl text-pizzaRed">
            you are not logged in now!
          </div>

          <div className="py-5">
            <OrderItem />
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:flex-nowrap">
            {checkUser ? (
              <>
                <Login onClose={() => onIsAccount(false)} /> 
                <Register />
              </>
            ) : (
              <Button onClick={outputProfil} type="outputProfil" onClose={() => onIsAccount(false)}>
                Profildən çıxış et
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
