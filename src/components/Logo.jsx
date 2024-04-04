import React from 'react';
import logo from './animatedCharacter.gif';
import styled from 'styled-components';


// Styled component for the logo container
const LogoContainer = styled.div`
    min-width: 15rem; /* Adjust max-width as needed */
    max-width: 27rem; /* Adjust max-width as needed */
    top:5rem;
    justify-content: center;
    @media (max-width: 768px) {
        min-width: 8rem;
        margin: 0 auto; /* Center the logo horizontally when viewport width is less than 768px */
    }
`;

// Styled component for the logo image
const LogoImage = styled.img`
  max-width: 100%; /* Ensure the image doesn't exceed its container */
  height: auto;
`;


// Functional Component for Logo
const Logo = () => {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="loading..." />
    </LogoContainer>
  );
}

export default Logo;
