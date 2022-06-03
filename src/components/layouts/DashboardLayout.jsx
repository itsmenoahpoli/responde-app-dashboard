import React from "react";
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
    url: "/sos-logs",
    icon: <FiActivity />,
  },
  {
    label: "Emergency SMS Templates",
    url: "/sos-logs",
    icon: <FiMessageSquare />,
  },
  {
    label: "Emergency Hotlines",
    url: "/sos-logs",
    icon: <FiHash />,
  },
  {
    label: "Settings",
    url: "/settings",
    icon: <FiSettings />,
  },
];

export const DashboardLayout = (props) => {
  const { children, pageSEO } = props;

  const [pageLoading, setPageLoading] = React.useState(true);

  const PageLoadingOverlay = () => {
    return (
      <Container fluid className="page-loading-overlay">
        <Spinner animation="border" />
      </Container>
    );
  };

  React.useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Helmet>
        <title>Inventory Dashboard &mdash; {pageSEO.title}</title>
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
