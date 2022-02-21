import { BrowserRouter } from "react-router-dom";
import "./styles/App.css";
import Navbar from "./component/UI/navbar/Navbar";
import AppRouter from "./component/AppRouter";
import { AuthContext } from "./context/context";
import { useEffect, useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
      setLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
