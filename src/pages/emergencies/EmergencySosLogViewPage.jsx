import React from "react";
import { Card, Container, Spinner } from "react-bootstrap";

import { DashboardLayout } from "components/layouts";
import EmergencySosService from "lib/services/emergency-sos.service";

const _emergencySosService = new EmergencySosService();

const pageSEO = {
  title: "Page Title",
};

export const EmergencySosLogViewPage = () => {
  const [report, setReport] = React.useState(null);

  const getReportsList = async () => {
    await _emergencySosService
      .getAll()
      .then((response) => {
        setReport(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getReportsList();
  }, []);

  return (
    <DashboardLayout pageSEO={pageSEO}>
      <h4 className="text-info my-4">EMERGENCY SOS REPORTS LOG</h4>
      <Container fluid>
        <Card className="shadow-sm border-0">
          <Card.Body>
            {Boolean(report === null) && (
              <Spinner animation="border" size="lg" />
            )}
          </Card.Body>
        </Card>
      </Container>
    </DashboardLayout>
  );
};
