import { useUserData } from "../../../hooks/use-userData";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Forms from "./Forms";

function Register() {
  const { userData } = useUserData();
  const { insertNewUser } = userData;

  const registerInputs = [
    { name: "name", placeholder: "enter your name", type: "text" },
    { name: "email", placeholder: "enter your email", type: "email" },
    { name: "password", placeholder: "enter your password", type: "password" },
    {
      name: "confirmation",
      placeholder: "confirm your password",
      type: "password",
    },
  ];

  async function handleSubmit(newUser) {
   const isSuccess= await insertNewUser(newUser);
   if (isSuccess) {
    toast.success("register uğurlu alındı!",{autoClose: 2300}); 
  } else {
    toast.error("register olunmadı .",{autoClose: 2600}); 
  }
  }

  return (
    <>
      <Forms
        title="Register now"
        inputs={registerInputs}
        buttonText="Register Now"
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default Register;
