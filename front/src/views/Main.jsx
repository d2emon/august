import React from 'react';
import { Container } from 'react-bootstrap';

function Main({ children }) {
  return (
    <>
      <Container>
        { children }
      </Container>
    </>
  );
}

export default Main; 
