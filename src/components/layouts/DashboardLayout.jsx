import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { Container, Spinner } from "react-bootstrap";

import {
  FiHome,
  FiActivity,
  FiMessageSquare,
  FiHash,
  FiSettings,
} from "react-icons/fi";

import { SidebarNavigation } from "components/layouts/navigations";
import { DashboardContent } from "components/layouts/contents";

const sidebarLinks = [
  {
    label: "Dashboard",
    url: "/",
    icon: <FiHome />,
  },
  {
    label: "Emergency SOS Log",
    url: "/emergencies/logs",
    icon: <FiActivity />,
  },
  {
    label: "Emergency SMS Templates",
    url: "/emergencies/sms-templates",
    icon: <FiMessageSquare />,
  },
];

export const DashboardLayout = (props) => {
  const { children, pageSEO } = props;
  const navigate = useNavigate();

  const [pageLoading, setPageLoading] = React.useState(true);

  const PageLoadingOverlay = () => {
    return (
      <Container fluid className="page-loading-overlay">
        <Spinner animation="border" />
      </Container>
    );
  };

  const checkAuthToken = () => {
    let token = localStorage.getItem("authToken");

    if (token === null) {
      navigate("/auth/login");
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 500);
  }, []);

  React.useEffect(() => {
    checkAuthToken();
  }, []);

  return (
    <>
      <Helmet>
        <title>GO RESPONDE &mdash; {pageSEO.title}</title>
      </Helmet>

      <Container fluid className="dashboard-layout-container">
        <SidebarNavigation sidebarLinks={sidebarLinks} />

        {Boolean(pageLoading) && <PageLoadingOverlay />}

        {Boolean(!pageLoading) && <DashboardContent children={children} />}
      </Container>
    </>
  );
};

DashboardLayout.propTypes = {
  pageSEO: PropTypes.object.isRequired,
};
