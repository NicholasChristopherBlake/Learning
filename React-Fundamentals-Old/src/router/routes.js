import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";
import Login from "../pages/Login";

export const privateRoutes = [
  {path: '/about', element: <About/>},
  {path: '/posts', element: <Posts/>},
  {path: '/posts/:id', element: <PostIdPage/>},
  {path: '/error', element: <Error/>}
]

export const publicRoutes = [
  {path: '/login', element: <Login/>},
]

// <Route element={<About/>} path="/about"/>
// <Route element={<Posts/>} path="/posts"/>
// <Route element={<PostIdPage/>} path="/posts/:id"/>
// <Route element={<Error/>} path="/error"/>
