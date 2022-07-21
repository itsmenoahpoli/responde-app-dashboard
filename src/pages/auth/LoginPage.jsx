import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Image, Form, Button, Alert, Spinner } from 'react-bootstrap';

import brandLogo from 'assets/images/brand-logo.jpg';
import { AuthLayout } from 'components/layouts';
import AuthService from 'lib/services/auth.service';

const _authService = new AuthService();

const pageSEO = {
  title: 'Log In',
};

export const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = React.useState({});
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    await _authService
      .userLogin(credentials)
      .then((response) => {
        localStorage.setItem('authToken', response.data.authToken);
        localStorage.setItem('user', JSON.stringify(response.data.user));

        navigate('/dashboard');
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  return (
    <AuthLayout pageSEO={pageSEO}>
      <Container fluid className="form-container">
        <Card className="col-xs-12 col-md-3 border-0 shadow-sm">
          <Card.Body>
            <Container fluid className="col-md-12 mx-auto bg-dark p-5 mb-3">
              <div className="text-center">
                <Image src={brandLogo} alt="Burauen-brand-logo" fluid />
              </div>
            </Container>

            {Boolean(error) && (
              <Alert variant="warning">
                <small>Invalid credentials provided, please try again</small>
              </Alert>
            )}
            <Form onSubmit={handleLogin}>
              <Form.Group className="form-group">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="yourname@domain.com"
                  onChange={(e) => {
                    setError(false);
                    setCredentials({ ...credentials, email: e.target.value });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="form-group mb-1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="********"
                  onChange={(e) => {
                    setError(false);
                    setCredentials({
                      ...credentials,
                      password: e.target.value,
                    });
                  }}
                  required
                />
              </Form.Group>

              <Container fluid className="d-none">
                <a href="/">
                  <small>Forgot your password?</small>
                </a>
              </Container>

              <Button type="submit" variant="primary" className="w-100 mt-2" disabled={loading}>
                {loading ? <Spinner animation="border" /> : 'Log In'}
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </AuthLayout>
  );
};
