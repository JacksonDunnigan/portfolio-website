import styled, { css } from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  
  ${({ align }) => align === 'left' && css`
    margin-left: 7.5%;
    margin-right: auto; /* Center the container */
    width: 50%; /* Minimum width to ensure content visibility */

  `}
  ${({ align }) => align === 'right' && css`
    margin-left: auto; 
    margin-right: 5%; 
    align-content: right;
    width: 50%;
  `}

  ${({ align }) => align === 'center' && css`
    display:block;
    margin-left: auto;
    margin-right: auto; /* Center the container */
    width: 80%; /* Minimum width to ensure content visibility */

  `}

  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 0;
    width: 100%; /* Full width on small screens */
  }
`;

const Content = ({ children, align }) => {
  return <Container align={align}>{children}</Container>;
};

export default Content;
