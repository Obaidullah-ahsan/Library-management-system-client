import Root from "@/Layouts/Root";
import AddBooks from "@/Pages/AddBooks/AddBooks";
import AllBook from "@/Pages/AllBooks/AllBook";
import BorrowSummary from "@/Pages/BorrowSummary/BorrowSummary";
import ErrorPage from "@/Pages/ErrorPage/ErrorPage";
import Home from "@/Pages/Home/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <AllBook />,
      },
      {
        path: "/add-books",
        element: <AddBooks />,
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary />,
      },
    ],
  },
]);

export default router;
