import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import moment from "moment";

import { DashboardLayout } from "components/layouts";
import EmergencySmsTemplatesService from "lib/services/emergency-sms-templates.service";

const _emergencySmsTemplatesService = new EmergencySmsTemplatesService();

const pageSEO = {
  title: "Page Title",
};

const headers = [
  {
    name: "CODE",
    selector: (row) => row.code,
  },
  {
    name: "EMERGENCY TYPE",
    selector: (row) => row.emergency_type,
    format: (row) => `${row.emergency_type.code}-${row.emergency_type.name}`,
  },
  {
    name: "NAME",
    grow: 2,
    selector: (row) => row.name,
  },
  {
    name: "SMS MESSAGE",
    selector: (row) => row.message,
  },
];

export const EmergencySmsTemplatePage = () => {
  const [rows, setRows] = React.useState([]);

  const getData = async () => {
    await _emergencySmsTemplatesService
      .getAll()
      .then((response) => {
        console.log(response.data);
        setRows(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <DashboardLayout pageSEO={pageSEO}>
      <h4 className="text-info my-4">EMERGENCY SMS TEMPLATES</h4>
      <Container fluid>
        <Card className="border-0 shadow-sm col-md-10">
          <Card.Body className="p-0">
            <DataTable
              pagination
              persistTableHead
              highlightOnHover
              striped
              columns={headers}
              data={rows}
            />
          </Card.Body>
        </Card>
      </Container>
    </DashboardLayout>
  );
};
