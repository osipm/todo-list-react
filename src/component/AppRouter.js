import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { AuthContext } from "../context/context";
import { privateRoutes, pablicRoutes } from "../router/routes";
import Loader from "./UI/Loader/Loader";
const AppRouter = () => {
  const { isAuth, isLouding } = useContext(AuthContext);
  if (isLouding) {
    return <Loader />;
  }
  return isAuth ? (
    <Switch>
      {privateRoutes.map((rout) => (
        <Route
          path={rout.path}
          component={rout.component}
          exact={rout.exact}
          key={rout.path}
        />
      ))}
      <Redirect to="/posts" />
    </Switch>
  ) : (
    <Switch>
      {pablicRoutes.map((rout) => (
        <Route
          path={rout.path}
          component={rout.component}
          exact={rout.exact}
          key={rout.path}
        />
      ))}

      <Redirect to="/login" />
    </Switch>
  );
};

export default AppRouter;
