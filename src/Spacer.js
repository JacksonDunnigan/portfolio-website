import React from 'react';
import styled from 'styled-components';

// Styled component for the gallery container
const BlankSpacer = styled.div`
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  height: 400px; 
  background: rgb(var(--secondary-color));
`;

const Spacer = () => {
  return (
    <BlankSpacer>
      {/* Add content here if needed */}
    </BlankSpacer>
  );
};

export default Spacer;
