import { useState } from "react";
import { useUserData } from "../../../hooks/use-userData";
import Forms from "./Forms";
import Loader from "../../../components/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({ onClose }) {
  const [loading, setLoading] = useState(false);

  const { userData } = useUserData();
  const { checkUserLogin } = userData;

  const loginInput = [
    { name: "email", placeholder: "enter your email", type: "email" },
    { name: "password", placeholder: "enter your password", type: "password" },
  ];

  async function handleSubmit(formValues) {
    setLoading(true);
    const { email, password } = formValues;
    const res = await checkUserLogin(email, password);

    if (res) {
      onClose();
      toast.success("istifadəci girişi uğurlu",{autoClose: 2300}); 
    } else {
      toast.error("İstifadəci tapılmadı",{autoClose: 3000});
    }
    setLoading(false);
  }

  return (
    <div className="relative">
      {loading && <Loader />}
      <Forms
        title="Login now"
        inputs={loginInput}
        buttonText="Login Now"
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Login;
