import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import { ToastContainer } from "react-toastify";
import Loading from "./Components/Loading/Loading";
import { ThemeProvider } from "./Context/ThemeContext/ThemeContext";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "Loading",
          element: <Loading />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeButton={false}
        closeOnClick={true}
      />
    </ThemeProvider>
  );
}

export default App;
