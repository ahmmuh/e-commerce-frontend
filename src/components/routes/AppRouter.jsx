import { Dashboard } from "@mui/icons-material";
import { createBrowserRouter } from "react-router-dom";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <NotFound />,
  },
  {
    path: "/electronics",
    children: [
      { path: "mobiles", element: <MobilePag /> },
      { path: "laptops", element: <LaptopPage /> },
      { path: "ipads", element: <IpadPage /> },
    ],
  },

  {
    path: "/vehicles",
    element: <Vehicles />,
    children: [
      { path: "cars", element: <Cars /> },
      { path: "tracks", element: <Tracks /> },
      { path: "mopeds", element: <Mopeds /> },
    ],
  },

  {
    path: "/clothes",
    element: <Clothes />,
    children: [
      {
        path: "adults",
        element: <Adults />,
        children: [
          { path: "men", element: <Men /> },
          { path: "women", element: <Women /> },
        ],
      },
      {
        path: "children",
        element: <ChildrenList />,
        children: [
          { path: "girls", element: <Girls /> },
          { path: "boys", element: <Boys /> },
        ],
      },
    ],
  },
]);
