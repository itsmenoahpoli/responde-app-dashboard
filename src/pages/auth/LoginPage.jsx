import React from "react";
import { Container } from "react-bootstrap";

import { AuthLayout } from "components/layouts";

const pageSEO = {
  title: "Log In",
};

export const LoginPage = () => {
  return (
    <AuthLayout pageSEO={pageSEO}>
      <Container fluid className="form-container"></Container>
    </AuthLayout>
  );
};
