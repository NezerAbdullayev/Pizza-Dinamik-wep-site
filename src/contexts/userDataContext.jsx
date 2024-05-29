import { createContext, useCallback, useReducer } from "react";
import axios from "axios";

const UserDataContext = createContext();

const apiUrl = "http://localhost:3005";

//eslint-disable-next-line
function reducer(state, action) {
  switch (action.type) {
    case "account":
      return { ...state, ...action.payload };

    case "deleteBasketItem":
      return {
        ...state,
        basket: state.basket.filter((pizza) => pizza.id !== action.payload),
      };

    case "insertProductCount":
      const updateBasket = state.basket.map((pizza) =>
        pizza.id === action.payload.id
          ? { ...pizza, count: pizza.count + action.payload.count }
          : pizza,
      );
      return { ...state, basket: updateBasket };

    case "insertProduct":
      return { ...state, basket: [...state.basket, action.payload] };

    case "editProduct":
      return { ...state, basket: action.payload };

    case "output":
      return initialState

    case "error":
      return { ...state, error: action.payload };

    default:
      return state;
  }
}

const initialState = {
  id: "",
  userEmail: "",
  password: "",
  basket: [],
  loading: false,
  error: "",
};




function UserDataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const USER_ID = state.id;

  // user ve datasini elde etmek ucun.
  const checkUserLogin=useCallback(async (email, password)=> {
    try {
      const res = await axios.get(
        `${apiUrl}/users?userEmail=${email}&password=${password}`,
      );

      if(res.data.length===0){
        dispatch({
          type: "error",
          payload: "Daxil etdiyiniz şifrə və ya email yalnışdır!",
        });
        return false;
      }

      const user = res.data[0];

      if (user.password !== password) {
        dispatch({
          type: "error",
          payload: "Daxil etdiyiniz şifrə və ya email yalnışdır!",
        });
        return false;
      }

      dispatch({ type: "account", payload: user });
      return true;
    } catch (error) {
      dispatch({
        type: "error",
        payload: "Bir xəta baş verdi zəhmət olmasa yenidən cəhd edin!",
      });
      return false;
    }
  },[dispatch])

  //səbətə product elave etmek ucun. Əgər səbətdə varsa sayını artırır. JSON serverde nested problemi var bir yerden sonra derine gede bilmirsen (3 gunumu aldi o problem)
  const insertProduct=useCallback( async (newPizza)=> {
    if(!state.id) return false 
    try {
      //sebetde olub-olmadiqini yoclayiriq
      const checkProduct = state.basket.some(
        (pizza) => pizza.id === newPizza.id,
      );
      //
      const updatedBasket = checkProduct
        ? state.basket.map((pizza) =>
            pizza.id === newPizza.id
              ? { ...pizza, count: pizza.count + newPizza.count }
              : pizza,
          )
        : [...state.basket, { ...newPizza }];

      const res = await axios.patch(`${apiUrl}/users/${USER_ID}`, {
        basket: updatedBasket,
      });

      if (res.status === 200) {
        //sebette varsa sayını artır
        if (checkProduct) {
          dispatch({ type: "insertProductCount", payload: newPizza });
        } else {
          dispatch({ type: "insertProduct", payload: newPizza });
        }
        return true
      }
    } catch (error) {
      dispatch({
        type: "error",
        payload:
          "məhsulu səbətə əlavə edərkən problem yaşandı.Zəhmət olmasa yenidən cəhd edin",
      });
    }
  },[USER_ID, state.basket, dispatch])

  //Səbətdəki məhsulu redaktə etmək üçün
  const editProduct=useCallback(async( newPizzaProduct)=> {
    // debugger;
    const updateBasket = state.basket.map((pizza) =>
      pizza.id === newPizzaProduct.id ? {...pizza,count:Number(newPizzaProduct.count)} : pizza,
    );

    try {
      const res = await axios.patch(`${apiUrl}/users/${USER_ID}`, {
        basket: updateBasket,
      });

      if (res.status === 200) {
        dispatch({ type: "editProduct", payload: updateBasket });
        return true;
      }
    } catch (error) {
      dispatch({ type: "error", payload: "bir xəta baş verdi " });
      return false;
    }
  },[USER_ID, state.basket, dispatch])

  //Səbətdəki məhsulu silmək üçün
  const deleteBasketItem=useCallback( async (deleteId)=> {
    try {
      const updateBasket = state.basket.filter(
        (pizza) => pizza.id !== deleteId,
      );
      const res = await axios.patch(`${apiUrl}/users/${USER_ID}`, {
        basket: updateBasket,
      });

      if (res.status === 200) {
        dispatch({ type: "deleteBasketItem", payload: deleteId });
      }
      return true;
    } catch (error) {
      console.error("ləğv  edilmə zamanı bir xəta baş verdi!:", error);
      return false;
    }
  },[USER_ID, state.basket, dispatch])


  //yeni user elave etmek ucun 
  const insertNewUser=useCallback( async ({ name, email, password, confirmation })=> {
    if (password !== confirmation) return false

    const res = await axios.get(`${apiUrl}/users`);

    if (res.status === 200) {
      const checkUser = res.data.some((pizza) => pizza.userEmail === email);

      if (!checkUser) {
        const NEW_ID = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        const newUserData = {
          id: NEW_ID,
          name,
          userEmail: email,
          password,
          basket: [],
        };

        try {
          const res = await axios.post(`${apiUrl}/users`, newUserData);

          if (res.status === 201) {
            return true;
          }
        } catch (error) {
          console.error(error);
          return false;
        }
      }
    }
  },[dispatch])

  //profilden cixis
  const outputProfil = useCallback(() => {
    dispatch({ type: "output" });
  }, [dispatch]);

  const userData = {
    insertNewUser,
    checkUserLogin,
    insertProduct,
    editProduct,
    deleteBasketItem,
    outputProfil,
    dispatch,
    state,
  };

  return (
    <UserDataContext.Provider value={{ userData }}>
      {children}
    </UserDataContext.Provider>
  );
}

export { UserDataProvider };
export default UserDataContext;
