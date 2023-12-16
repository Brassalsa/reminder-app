import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home";
import LoginSignup from "../page/login-signup";
import ErrorPage from "../page/error-page";
import AddReminderPage from "../page/add-reminder";
import EditReminder from "../page/edit-reminder";
import Layout from "../components/Layout";
import ViewReminderPage from "../page/view-reminder";
import routes from "./routes";

const router = createBrowserRouter([
  {
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        path: routes.home,
        element: <Home />,
      },
      {
        path: routes.login,
        element: <LoginSignup />,
      },
      {
        path: routes.addReminder,
        element: <AddReminderPage />,
      },
      {
        path: routes.editReminder + ":reminderId",
        element: <EditReminder />,
      },
      {
        path: routes.viewReminder + ":reminderId",
        element: <ViewReminderPage />,
      },
    ],
  },
]);

export default router;
