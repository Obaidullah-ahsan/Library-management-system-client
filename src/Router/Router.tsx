import App from "@/App";
import Root from "@/Layouts/Root";
import ErrorPage from "@/Pages/ErrorPage/ErrorPage";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
]);

export default router;
