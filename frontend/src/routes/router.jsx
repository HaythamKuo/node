import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";
import SurveyRoot from "../pages/SurveyRoot";
import LandingPage from "../pages/LandingPage";
import DashboardPage from "../pages/DashboardPage";
import SurveyNewPage from "../pages/SurveyNewPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "surveys",
        element: <SurveyRoot />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
          {
            path: "new",
            element: <SurveyNewPage />,
          },
        ],
      },
    ],
  },
]);

export { router };
