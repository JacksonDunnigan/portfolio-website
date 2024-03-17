import React from 'react';
import styled from 'styled-components';
import './styles.css';

// Sample images
import image1 from './art1.jpg';
import image2 from './art1.jpg';
import image3 from './art1.jpg';

// Styled component for the gallery container
const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
`;

// Styled component for each image
const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Spacer = () => {
  // Array of images
  const images = [image1, image2, image3];

  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <Image key={index} src={image} alt={`Image ${index + 1}`} />
      ))}
    </GalleryContainer>
  );
};

export default Spacer;
