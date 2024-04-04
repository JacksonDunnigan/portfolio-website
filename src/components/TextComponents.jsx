import styled, { css } from 'styled-components';

export const Header = styled.h2`
  margin-bottom: 1rem;
  transition: font-size 0.3s ease;
  
  ${({ align }) => align === 'left' && css`
    text-align: left;
  `}

  ${({ align }) => align === 'center' && css`
    text-align: center;
  `}

  ${({ align }) => align === 'right' && css`
    text-align: right;
  `}
`;
export const SubHeading = styled.h3`

  font-family: 'Jost', sans-serif;
  text-transform: uppercase;
  color: var(--primary-color);
  font-size: 1.rem; /* Adjust font size */  
  font-weight: 500;
  font-style: normal;
  text-justify: inter-word;
  letter-spacing: .1rem;
}


  ${({ align }) => align === 'left' && css`
    text-align: left;
  `}

  ${({ align }) => align === 'center' && css`
    text-align: center;
  `}

  ${({ align }) => align === 'right' && css`
    text-align: right;
  `}
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  font-family: "eb-garamond", serif;
  font-weight: 400;
  font-style: normal;
  text-align: justify;
  text-justify: inter-word;
  transition: max-width 0.3s ease;
`;


export const Ancher = styled.a`
  font-size: 1rem;
  font-family: "eb-garamond", serif;
  font-weight: 400;
  font-style: normal;
  text-align: centre;
  font-style: italic;

`;
