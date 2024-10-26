import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Root from "./routes/Root";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {  
          index: true,
          element: <Coins />,
        },
        {
          path: '/:coinId',
          element: <Coin/>,
        },
      ]
    },
  
  
  ]);

export default function App() {
  return <RouterProvider router={router} />;
}