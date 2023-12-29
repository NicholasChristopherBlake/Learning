import App from "../App";
import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/about", element: About },
  { path: "/posts", element: Posts },
  { path: "/posts/:id", element: PostIdPage },
  { path: "*", element: App },
];

export const publicRoutes = [{ path: "/login", element: Login }];
