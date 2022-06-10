import React from "react";
import { Container, Card, Row, Col, Alert } from "react-bootstrap";

import { DashboardLayout } from "components/layouts/DashboardLayout";

const pageSEO = {
  title: "Dashboard",
};

const googleMapURL =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62671.91415823849!2d124.83465303420326!3d10.963777023129913!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307e9ff4f341ded%3A0x6e4936bf2e181113!2sBurauen%2C%20Leyte!5e0!3m2!1sen!2sph!4v1654478769139!5m2!1sen!2sph";

export const DashboardPage = () => {
  const [reports, setReports] = React.useState([]);

  const ReportsList = () => {
    if (reports.length === 0) {
      return (
        <Alert variant="primary" className="text-center py-1">
          <small>NO REPORTS FOUND</small>
        </Alert>
      );
    }

    return (
      <Card className="mb-2">
        <Card.Body>Type: BUILDING COLLAPSE ACCIDENT</Card.Body>
      </Card>
    );
  };

  return (
    <DashboardLayout pageSEO={pageSEO}>
      <Container fluid>
        <Row>
          <Col md={3}>
            <Card className="shadow-sm">
              <Card.Header>Latest Emergency Report &mdash;</Card.Header>
              <Card.Body style={{ height: "75vh", overflowY: "scroll" }}>
                <ReportsList />
              </Card.Body>
            </Card>
          </Col>

          {/* <Col md={9}>
            <Card className="shadow-sm p-0">
              <Card.Header>Map Overview</Card.Header>
              <Card.Body className="p-0 m-0">
                <iframe
                  title="google-map-overview"
                  src={googleMapURL}
                  style={{
                    height: "75vh",
                    width: "100%",
                    border: 0,
                    margin: 0,
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </DashboardLayout>
  );
};
