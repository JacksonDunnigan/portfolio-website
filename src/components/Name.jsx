import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "../styles.css";

const NameContainer = styled.a`
    position: fixed;
    top: -1rem;
    right: -1rem;
    padding: 20px;
    font-size: ${({ scrolled }) => (scrolled ? '.8rem' : '1.25rem')};
    transition: font-size 0.3s ease;
    z-index: 999;
    text-justify: inter-word;
    font-family: 'Jost', sans-serif;
    color: rgb(var(--primary-color));
    font-weight: 500;
    transition: font-size 0.3s ease;
`;

const Subheading = styled.h2`
    font-size: ${({ scrolled }) => (scrolled ? '1.5rem' : '2rem')};
    transition: font-size 0.3s ease;
    margin-top: 1rem; /* Add some margin at the top */
    position: fixed;
    top: 3rem;
    right: 0;
    padding: 20px;
`;

const Name = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <NameContainer scrolled={scrolled}>Jackson Dunnigan | Multimedia Artist</NameContainer>
    </>
  );
};

export default Name;
