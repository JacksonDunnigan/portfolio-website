import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top:25%;
  margin-left: 20rem; /* Assuming the initial width of the navbar is 14rem */
  paddding-left: 2rem:
`;

const Content = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Content;
