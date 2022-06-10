import React from "react";
import { Container } from "react-bootstrap";

import { DashboardLayout } from "components/layouts";

const pageSEO = {
  title: "Page Title",
};

export const EmergencyHotlinesPage = () => {
  return (
    <DashboardLayout pageSEO={pageSEO}>
      <Container fluid>Template Page</Container>
    </DashboardLayout>
  );
};
