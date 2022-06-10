import { Navigate } from "react-router-dom";

// Auth pages
import { LoginPage } from "pages/auth";

// Dashboard pages
import { DashboardPage } from "pages/dashboard";

// Emergency pages
import {
  EmergencySosLogPage,
  EmergencySosLogViewPage,
  EmergencySmsTemplatePage,
  EmergencyHotlinesPage,
} from "pages/emergencies";

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
  {
    path: "/emergencies/logs",
    component: <EmergencySosLogPage />,
    requiresAuth: false,
    exact: true,
  },
  {
    path: "/emergencies/logs/:id",
    component: <EmergencySosLogViewPage />,
    requiresAuth: false,
    exact: true,
  },
  {
    path: "/emergencies/sms-templates",
    component: <EmergencySmsTemplatePage />,
    requiresAuth: false,
    exact: true,
  },
  {
    path: "/emergencies/hotlines",
    component: <EmergencyHotlinesPage />,
    requiresAuth: false,
    exact: true,
  },
];
