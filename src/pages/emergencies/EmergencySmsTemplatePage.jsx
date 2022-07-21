import React from 'react';
import { Container, Card, Badge, Button } from 'react-bootstrap';
// import moment from 'moment';

import { DashboardLayout } from 'components/layouts';
import EmergencySmsTemplatesService from 'lib/services/emergency-sms-templates.service';

const _emergencySmsTemplatesService = new EmergencySmsTemplatesService();

const pageSEO = {
  title: 'Emergency SMS Templates',
};

// const headers = [
//   {
//     name: 'CODE',
//     grow: 0.5,
//     selector: (row) => row.code,
//   },
//   {
//     name: 'EMERGENCY TYPE',
//     grow: 0.5,
//     selector: (row) => row.emergency_type,
//     format: (row) => `${row.emergency_type.code}-${row.emergency_type.name}`,
//   },
//   {
//     name: 'NAME',
//     grow: 0.5,
//     selector: (row) => row.name,
//   },
//   {
//     name: 'SMS MESSAGE',
//     grow: 2,
//     selector: (row) => row.message,
//   },
// ];

export const EmergencySmsTemplatePage = () => {
  const [rows, setRows] = React.useState([]);

  const getData = async () => {
    await _emergencySmsTemplatesService
      .getAll()
      .then((response) => {
        setRows(response.data);
      })
      .catch((err) => {
        alert('SERVER ERROR: Failed to load data. Please contact IT system administrator');
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <DashboardLayout pageSEO={pageSEO}>
      <h4 className="text-info my-4">EMERGENCY SMS TEMPLATES</h4>
      <Container fluid>
        <Card className="border-0 shadow-sm col-md-12">
          <Card.Body className="p-3">
            <div className="search-filter col-md-4 my-4">
              <input className="form-control" placeholder="SEARCH" />
              <small className="text-muted">*ONLY BY CODE</small>
            </div>

            <div className="row">
              {rows.length &&
                rows.map((row) => (
                  <div className="col-sm-12 col-md-6 pb-4" key={row.code}>
                    <Card className="border-0 shadow-sm sms-template-info">
                      <Card.Header>
                        <div className="d-flex justify-content-between align-items-baseline w-100">
                          <small>{row.code}</small>

                          <Button
                            variant={row.emergency_type.is_enabled ? 'danger' : 'secondary'}
                            size="sm"
                            className="text-white text-uppercase px-1 py-0"
                          >
                            <small>{row.emergency_type.is_enabled ? 'Disable' : 'Enable'}</small>
                          </Button>
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <div className="mb-2">
                          <small className="text-muted text-uppercase">Template Information</small>

                          <div className="px-2 mt-2">
                            <div className="row rounded border p-2">
                              <div className="col-3">
                                <small>
                                  Status:{' '}
                                  {row.emergency_type.is_enabled ? (
                                    <Badge variant="success">Enabled</Badge>
                                  ) : (
                                    <Badge variant="danger">Disabled</Badge>
                                  )}
                                </small>
                              </div>
                              <div className="col-3">
                                <small>Code: {row.emergency_type.code}</small>
                              </div>
                              <div className="col-6">
                                <small>Name: {row.emergency_type.name}</small>
                              </div>
                            </div>
                          </div>

                          <div className="px-2 mt-2">
                            <div className="row rounded border p-2">
                              <div className="col">
                                <small>Name: {row.name}</small>
                              </div>
                            </div>
                          </div>

                          <div className="px-2 mt-2">
                            <div className="row rounded border p-2">
                              <div className="col">
                                <small>Message Content (SMS):</small>

                                <hr />

                                <small>{row.message}</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
            </div>
            {/* <DataTable
              pagination
              persistTableHead
              highlightOnHover
              striped
              columns={headers}
              data={rows}
            /> */}
          </Card.Body>
        </Card>
      </Container>
    </DashboardLayout>
  );
};
