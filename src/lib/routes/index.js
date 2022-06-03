import { Navigate } from "react-router-dom";

// Auth pages
import { LoginPage } from "pages/auth";

// Dashboard pages
import { DashboardPage } from "pages/dashboard";

export const appRoutes = [
  {
    path: "/auth/login",
    component: <LoginPage />,
    requiresAuth: false,
    exact: true,
  },

  {
    path: "/",
    component: <Navigate to="/dashboard" />,
    requiresAuth: false,
    exact: true,
  },
  {
    path: "/dashboard",
    component: <DashboardPage />,
    requiresAuth: false,
    exact: true,
  },
];
