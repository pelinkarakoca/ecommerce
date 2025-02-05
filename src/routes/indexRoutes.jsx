import { lazy } from "react";

const MainLayout = lazy(() => import("../layouts/MainLayout"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ShopPage = lazy(() => import("../pages/ShopPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
export const indexRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/shop", element: <ShopPage /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
];
