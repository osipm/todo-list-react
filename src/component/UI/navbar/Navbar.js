import { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context/context";
const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="navbar">
      <MyButton onClick={logout}>Вийти</MyButton>
      <div className="navbar_links">
        <Link to="/about" style={{ marginRight: 20 }}>
          Про додаток
        </Link>
        <Link to="/posts">Пости</Link>
      </div>
    </div>
  );
};

export default Navbar;
