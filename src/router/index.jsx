import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import SingleProductPage from "../pages/SingleProductPage";
import ProductPage from "../pages/ShopPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/product/:slug",
        element: <SingleProductPage />,
      },
      {
        path: "/shop",
        element: <ProductPage />,
      },
    ],
  },
]);
