import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import "../styles.css";

const OuterContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 9999;
`;

const Container = styled.div`
  overflow-x: hidden;
`;

const ArtworksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ArtworkCard = styled.div`
  flex-basis: calc(33% - 1rem);
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  margin-bottom: 1rem;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
`;

const ArtworkImage = styled.img`
  width: 100%;
  height: auto;
`;

const ArtworkTitle = styled.h3`
  margin: 5px 0;
  font-size: 16px;
`;

const ArtworkYear = styled.p`
  margin: 0;
  font-size: 14px;
  font-family: "eb-garamond", serif;
  font-style: italic;
`;

const ArtworkDescription = styled.p`
  margin: 0;
  font-size: 16px;
  font-family: "eb-garamond", serif;

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
  z-index: 99999;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 50%;
  max-height: 85%;
  overflow: auto;
  z-index: 100000;
  position: relative;
`;

const ModalImage = styled.img`
  max-width: ${({ portrait }) => (portrait ? 'auto' : '50%')};
  max-height: ${({ portrait }) => (portrait ? '50%' : '75%')};
  display: block;
  margin: auto;
`;

const ImageNavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: black;
  z-index: 10;
  transition: color 0.3s ease;

  &:hover {
    color: gray;
  }
`;

const BackButton = styled(ImageNavigationButton)`
  left: 0;
`;

const NextButton = styled(ImageNavigationButton)`
  right: 0;
`;

const VideoPlayer = styled.video`
  width: 100%;
  height: auto;
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
  const [selectedImageIndex, setSelectedImageIndex] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Fetch artworks data from JSON file
    fetch('./artworks.json')
      .then(response => response.json())
      .then(data => {
        setArtworks(data);
        setOriginalArtworks(data);
        // Initialize selected image index for each artwork
        const initialSelectedImageIndex = {};
        data.forEach(artwork => {
          initialSelectedImageIndex[artwork.id] = 0;
        });
        setSelectedImageIndex(initialSelectedImageIndex);
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

  const nextImage = () => {
    setSelectedImageIndex(prevIndex => ({
      ...prevIndex,
      [selectedArtwork.id]: (prevIndex[selectedArtwork.id] + 1) % selectedArtwork.source.length
    }));
  };

  const prevImage = () => {
    setSelectedImageIndex(prevIndex => ({
      ...prevIndex,
      [selectedArtwork.id]: prevIndex[selectedArtwork.id] === 0 ? selectedArtwork.source.length - 1 : prevIndex[selectedArtwork.id] - 1
    }));
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <OuterContainer>
      <FilterButtonsOuterContainer>
        <FilterButtonsContainer>
          <FilterButton onClick={() => sortByCategory('All')} className={selectedCategory === 'All' ? 'active' : ''}>All</FilterButton>
          <a>|</a>
          <FilterButton onClick={() => sortByCategory('3d modelling')} className={selectedCategory === '3d modelling' ? 'active' : ''}>3D Modelling</FilterButton>
          <a>|</a>
          <FilterButton onClick={() => sortByCategory('paintings')} className={selectedCategory === 'paintings' ? 'active' : ''}>Paintings</FilterButton>
          <a>|</a>
          <FilterButton onClick={() => sortByCategory('one-offs')} className={selectedCategory === 'one-offs' ? 'active' : ''}>One-Offs</FilterButton>
        </FilterButtonsContainer>
      </FilterButtonsOuterContainer>
      <Container>
      <ArtworksContainer>
        {artworks.map((artwork) => (
          <ArtworkCard
            key={artwork.title}
            onClick={() => openModal(artwork)}
          >
            {artwork.type === 'image' && <ArtworkImage src={`/images/${artwork.source[0]}`} alt={artwork.title} />}
            {artwork.type === 'video' && <VideoPlayer controls autoPlay loop muted><source src={`/videos/${artwork.source}`} type="video/mp4" />Your browser does not support the video tag.</VideoPlayer>}
            <ArtworkTitle>{artwork.title}</ArtworkTitle>
            <ArtworkDescription>{artwork.description}</ArtworkDescription>
            <ArtworkYear>{artwork.year}</ArtworkYear>
          </ArtworkCard>
        ))}
      </ArtworksContainer>



        {selectedArtwork && (
          <ModalBackground onClick={closeModal}>
            <ModalContent onClick={stopPropagation}>
              {selectedArtwork.source.length > 1 && (
                <BackButton onClick={prevImage}>{'<'}</BackButton>
              )}
              <ModalImage src={`/images/${selectedArtwork.source[selectedImageIndex[selectedArtwork.id]]}`} alt={selectedArtwork.title} portrait={selectedArtwork.aspectRatio <= 1} onClick={nextImage} />
              {selectedArtwork.source.length > 1 && (
                <NextButton onClick={nextImage}>{'>'}</NextButton>
              )}
              {selectedArtwork.type === 'video' && (
                <VideoPlayer controls autoPlay loop muted>
                  {Array.isArray(selectedArtwork.source) ? (
                    selectedArtwork.source.map((src, index) => (
                      <source key={index} src={`/videos/${src}`} type="video/mp4" />
                    ))
                  ) : (
                    <source src={`/videos/${selectedArtwork.source}`} type="video/mp4" />
                  )}
                  Your browser does not support the video tag.
                </VideoPlayer>
              )}
              <ArtworkTitle>{selectedArtwork.title}</ArtworkTitle>
              <ArtworkDescription>{selectedArtwork.description}</ArtworkDescription>
              <ArtworkYear>{selectedArtwork.year}</ArtworkYear>
            </ModalContent>
          </ModalBackground>
        )}
      </Container>
    </OuterContainer>
  );
};

export default Artworks;
