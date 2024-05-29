import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserDataProvider } from "./contexts/userDataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <UserDataProvider>
      <App />
    </UserDataProvider>
);
