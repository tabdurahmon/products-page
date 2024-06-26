import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "product/:id",
          element: <ProductDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
