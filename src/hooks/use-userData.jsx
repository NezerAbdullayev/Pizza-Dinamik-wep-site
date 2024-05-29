import { useContext } from "react";
import UserDataContext from "../contexts/userDataContext";

function useUserData() {
  const data = useContext(UserDataContext);
  return data;
}
export { useUserData };
