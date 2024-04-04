import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "../styles.css";

const NameContainer = styled.h1`
    position: fixed;
    top: 0;
    right: 0;
    padding: 20px;
    font-size: ${({ scrolled }) => (scrolled ? '3rem' : '4rem')};
    transition: font-size 0.3s ease;
    z-index: 999;
    text-justify: inter-word;
    -webkit-text-stroke: 1px rgb(var(--primary-color));
    text-stroke: 1px rgb(var(--primary-color));    
    
    font-family: 'Jost', sans-serif;
    color: rgba(0,0,0,0);
    font-weight: 500;
    transition: font-size 0.3s ease;
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

  return <NameContainer scrolled={scrolled}>Jackson Dunnigan</NameContainer>;
};

export default Name;
