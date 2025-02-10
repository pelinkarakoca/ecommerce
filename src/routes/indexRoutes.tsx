import { lazy } from "react";
import { RouteObject } from "react-router-dom";
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ShopPage = lazy(() => import("../pages/ShopPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
export const indexRoutes: RouteObject[] = [
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
