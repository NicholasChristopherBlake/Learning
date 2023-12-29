import React from "react";
import { privateRoutes, publicRoutes } from "../router";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  const isAuth = true;
  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => {
        return (
          <Route
            element={<route.element />}
            path={route.path}
            key={route.path}
          />
        );
      })}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route component={route.component} path={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;

// const privateRoutes = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: "/*", element: <Navigate to="/posts" replace={true} /> },
//       {
//         path: "posts",
//         element: <Posts />,
//       },
//       { path: "posts/:id", element: <PostIdPage /> },
//       {
//         path: "about",
//         element: <About />,
//       },
//     ],
//   },
// ]);

// const publicRoutes = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,

//     children: [
//       { path: "/*", element: <Navigate to="/login" replace={true} /> },
//       {
//         path: "login",
//         element: <Login />,
//       },
//     ],
//   },
// ]);
