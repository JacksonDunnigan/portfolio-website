import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import '../styles.css';

const BackgroundStyle = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(var(--background-color));
  background-image: linear-gradient(rgba(var(--primary-color), 0.1) 1px, transparent 1px),
                    linear-gradient(to right, rgba(var(--primary-color), 0.1) 1px, transparent 1px);
  background-size: ${({ gridSize }) => gridSize}; /* Use dynamic gridSize */
  z-index: -1;

`;

const Background = () => {
  const [gridSize, setGridSize] = useState('2rem 2rem');

  useEffect(() => {
    const handleScroll = () => {
      // Calculate background size based on scroll position
      const newSize = `${2 + window.scrollY / 100}rem ${2 + window.scrollY / 100}rem`;
      setGridSize(newSize);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  return <BackgroundStyle gridSize={gridSize} />;
};

export default Background;
