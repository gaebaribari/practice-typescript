import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '',
          index:true,
          element: <Coins />,
        },
        {
          path: '/:coinId',
          element: <Coin />,
        },
      ],
    },
  ]);

export default router;