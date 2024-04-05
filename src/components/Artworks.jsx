import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "../styles.css";

const OuterContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
`;

const Container = styled.div`
  overflow-x: hidden; /* Prevent horizontal scrolling */
`;

const ArtworksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* Adjust the gap between items */
`;

const ArtworkCard = styled.div`
  flex-basis: calc(33% - 1rem); /* Adjusted to ensure three columns with a 1rem gap */
  cursor: pointer;
  transition: all 0.3s ease; /* Add transition for smoother effect */
  overflow: hidden;
  margin-bottom: 1rem; /* Add some bottom margin to create space between rows */
  position: relative; /* Needed for absolutely positioned child elements */

  &:hover {
    transform: scale(1.05); /* Increase size on hover */
  }
`;

const ArtworkImage = styled.img`
  width: 100%; /* Ensure image fills the container */
  height: auto; /* Maintain aspect ratio */
`;

const ArtworkTitle = styled.h3`
  margin: 5px 0; /* Adjust the margin */
  font-size: 16px; /* Increase font size */
`;

const ArtworkYear = styled.p`
  margin: 0; /* Reset margin */
  font-size: 14px; /* Adjust font size */
  font-family: "eb-garamond", serif;
  font-style: italic;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 60vw; /* Adjusted maximum width */
  max-height: 80vh;
  overflow: auto;
`;

const ModalImage = styled.img`
  max-width: 100%; /* Limit image width to prevent overflow */
  height: auto; /* Limit image height to prevent overflow */
  display: block;
  margin: auto; /* Center the image */
`;

const VideoPlayer = styled.video`
  width: 100%; /* Ensure video fills the container */
  height: auto; /* Maintain aspect ratio */
`;

const FilterButtonsOuterContainer = styled.div`
  position: sticky;
  top: 0;
  margin-bottom: 2rem;
  z-index: 5;
`;

const FilterButtonsContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FilterButton = styled.button`
  font-size: 1rem;
  font-family: 'Jost', sans-serif;
  text-transform: uppercase;
  color: rgb(var(--primary-color));
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
  transition: background-color 0.1s ease;

  &:hover {
    background-color: rgb(var(--primary-color));
    color: rgb(var(--background-color));
  }

  &.active {
    text-decoration: underline;
  }
`;

const Artworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [originalArtworks, setOriginalArtworks] = useState([]);
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Fetch artworks data from JSON file
    fetch('./artworks.json')
      .then(response => response.json())
      .then(data => {
        setArtworks(data);
        setOriginalArtworks(data);
      })
      .catch(error => console.error('Error fetching artworks:', error));
  }, []);

  useEffect(() => {
    // Sort artworks alphabetically when category is set to 'All'
    if (selectedCategory === 'All') {
      const sortedArtworks = originalArtworks.slice().sort((a, b) => a.title.localeCompare(b.title));
      setArtworks(sortedArtworks);
    } else {
      // Filter artworks by category
      const filteredArtworks = originalArtworks.filter(artwork => artwork.category === selectedCategory);
      setArtworks(filteredArtworks);
    }
  }, [selectedCategory, originalArtworks]);

  const openModal = (artwork) => {
    setSelectedArtwork(artwork);
  };

  const closeModal = () => {
    setSelectedArtwork(null);
  };

  const sortByCategory = (category) => {
    setSelectedCategory(category);
    setSelectedArtwork(null); // Reset selected artwork when filtering categories
  };

  return (
    <OuterContainer>
      <FilterButtonsOuterContainer>
        <FilterButtonsContainer>
          <FilterButton onClick={() => sortByCategory('All')} className={selectedCategory === 'All' ? 'active' : ''}>All</FilterButton>
          <a>|</a>
          <FilterButton onClick={() => sortByCategory('paintings')} className={selectedCategory === 'paintings' ? 'active' : ''}>Paintings</FilterButton>
          <a>|</a>
          <FilterButton onClick={() => sortByCategory('3d modelling')} className={selectedCategory === '3d modelling' ? 'active' : ''}>3D Modelling</FilterButton>
          <a>|</a>
          <FilterButton onClick={() => sortByCategory('one-offs')} className={selectedCategory === 'one-offs' ? 'active' : ''}>One-Offs</FilterButton>
        </FilterButtonsContainer>
      </FilterButtonsOuterContainer>
      <Container>
        <ArtworksContainer>
          {artworks.map((artwork, index) => (
            <ArtworkCard
              key={index}
              onClick={() => openModal(artwork)}
              portrait={artwork.type === 'video' && artwork.aspectRatio <= 1}
            >
              {artwork.type === 'image' && <ArtworkImage src={`/images/${artwork.source}`} alt={artwork.title} />}
              {artwork.type === 'video' && <VideoPlayer controls autoPlay muted loop key={artwork.source}><source src={`/videos/${artwork.source}`} type="video/mp4" />Your browser does not support the video tag.</VideoPlayer>}
              <ArtworkTitle>{artwork.title}</ArtworkTitle>
              <ArtworkYear>{artwork.year}</ArtworkYear>
            </ArtworkCard>
          ))}
        </ArtworksContainer>

        {selectedArtwork && (
          <ModalBackground onClick={closeModal}>
            <ModalContent>
              {selectedArtwork.type === 'image' && (
                <ModalImage src={`/images/${selectedArtwork.source}`} alt={selectedArtwork.title} />
              )}
              {selectedArtwork.type === 'video' && (
                <VideoPlayer controls autoPlay muted loop>
                  <source src={`/videos/${selectedArtwork.source}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </VideoPlayer>
              )}
              <ArtworkTitle>{selectedArtwork.title}</ArtworkTitle>
              <ArtworkYear>{selectedArtwork.year}</ArtworkYear>
            </ModalContent>
          </ModalBackground>
        )}
      </Container>
    </OuterContainer>
  );
};

export default Artworks;
