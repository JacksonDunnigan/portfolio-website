import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: rgb(var(--primary-color));
  background-image: linear-gradient(rgba(var(--secondary-color), 0.1) 1px, transparent 1px),
    linear-gradient(to right, rgba(var(--secondary-color), 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  font-family: 'Jost', sans-serif;
  color: rgb(var(--background-color));
  padding: 20px;
  text-align: right;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Jackson Dunnigan. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
