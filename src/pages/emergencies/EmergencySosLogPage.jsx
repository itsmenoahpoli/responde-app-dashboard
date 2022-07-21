import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import moment from 'moment';

import { DashboardLayout } from 'components/layouts';
import EmergencySosService from 'lib/services/emergency-sos.service';

const _emergencySosService = new EmergencySosService();

const pageSEO = {
  title: 'Emergency SOS Logs',
};

const headers = [
  {
    name: 'USER',
    selector: (row) => row.user,
    format: (row) => `${row.user.first_name} ${row.user.middle_name} ${row.user.last_name}`,
  },
  {
    name: 'CONTACT NO.',
    selector: (row) => row.user.contact_number,
  },
  {
    name: 'EMERGENCY TYPE',
    grow: 2,
    selector: (row) => row.emergency_type.name,
  },
  {
    name: 'STATUS',
    selector: (row) => row.status,
  },
  {
    name: 'RAW LOCATION',
    grow: 5,
    selector: (row) => row.location,
  },
  {
    name: 'DATETIME REPORTED',
    grow: 2,
    selector: (row) => row.created_at,
    format: (row) => moment(row.created_at).format('MMMM d, YYYY h:m A'),
  },
  {
    name: 'ACTION',
    selector: (row) => row.id,
    cell: (row) => (
      <Button variant="primary" className="py-2" size="sm">
        <small>VIEW LOG</small>
      </Button>
    ),
  },
];

export const EmergencySosLogPage = () => {
  const [reports, setReports] = React.useState([]);

  const getReportsList = async () => {
    await _emergencySosService
      .getAll()
      .then((response) => {
        setReports(response.data);
      })
      .catch((err) => {
        alert('SERVER ERROR: Failed to load data. Please contact IT system administrator');
      });
  };

  React.useEffect(() => {
    getReportsList();
  }, []);

  return (
    <DashboardLayout pageSEO={pageSEO}>
      <h4 className="text-info my-4">EMERGENCY SOS REPORTS LOG</h4>
      <Container fluid>
        <Card className="border-0 shadow-sm">
          <Card.Body className="p-0">
            <DataTable
              pagination
              persistTableHead
              highlightOnHover
              striped
              responsive
              columns={headers}
              data={reports}
            />
          </Card.Body>
        </Card>
      </Container>
    </DashboardLayout>
  );
};
