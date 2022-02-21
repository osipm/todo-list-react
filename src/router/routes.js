import About from "../pages/About";
import Login from "../pages/login";
import PostIdPage from "../pages/PostIdPages";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/about", component: About, exact: true },
  { path: "/posts", component: Posts, exact: true },
  { path: "/posts/:id", component: PostIdPage, exact: true },
];

export const pablicRoutes = [{ path: "/login", component: Login, exact: true }];
