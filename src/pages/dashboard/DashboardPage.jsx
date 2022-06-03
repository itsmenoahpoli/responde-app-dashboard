import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

import { DashboardLayout } from "components/layouts/DashboardLayout";

const pageSEO = {
  title: "Dashboard",
};

export const DashboardPage = () => {
  return (
    <DashboardLayout pageSEO={pageSEO}>
      <Container fluid>
        <Row>
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Header>Latest Emergency Report &mdash;</Card.Header>
              <Card.Body style={{ height: "75vh", overflowY: "scroll" }}>
                <div className="text-center p-3">
                  <p>No reports found</p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={8}>
            <Card className="shadow-sm">
              <Card.Header>Map Overview</Card.Header>
              <Card.Body>
                <iframe
                  title="google-map-overview"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125348.11539525112!2d124.82229114072835!3d10.95365668331226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307e9ff4f341ded%3A0x6e4936bf2e181113!2sBurauen%2C%20Leyte!5e0!3m2!1sen!2sph!4v1654222121929!5m2!1sen!2sph"
                  style={{ height: "70vh", width: "100%", border: 0 }}
                  allowFullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </DashboardLayout>
  );
};
