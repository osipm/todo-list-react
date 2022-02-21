import { useContext } from "react";
import MyButton from "../component/UI/button/MyButton";
import MyInput from "../component/UI/input/MyInput";
import { AuthContext } from "../context/context";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h1>Срорінка логіна</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введіть логін" />
        <MyInput type="password" placeholder="Введіть пароль" />
        <MyButton>Ввійти</MyButton>
      </form>
    </div>
  );
};

export default Login;
