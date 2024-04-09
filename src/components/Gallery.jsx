import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Header, SubHeading, Paragraph } from '../components/TextComponents';

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* Adjust as per your requirement */
`;

const ArtworkItem = styled.div`
  margin: 10px;
  width: ${props => `calc(${props.width}% - 20px)`}; /* Subtract margin from width */
  flex-grow: 1; /* Allow items to grow equally */
  text-align: center; /* Center align content */
  position: relative; /* Relative position for description */
`;

const Video = styled.video`
  width: 100%;
  height: auto;
`;

const Title = styled.h3`
  margin: 5px 0;
  font-size: 16px;
`;

const Year = styled.p`
  margin: 0;
  font-size: 14px;
  font-family: "eb-garamond", serif;
  font-style: italic;
`;

const Description = styled.p`
  margin: 0;
  font-size: 16px;
  font-family: "eb-garamond", serif;
  position: absolute;
  bottom: 10px; /* Adjust as per your requirement */
  left: 0;
  right: 0;
`;

const Gallery = ({ items, oneWork = false }) => {
  const [artworks, setArtworks] = useState([]);
  const videoRef = useRef(null);
  const itemsPerRow = 3; // Number of items to display per row

  useEffect(() => {
    // Fetch artwork data based on filenames from JSON
    const fetchArtworkData = async () => {
      try {
        const response = await fetch('/artworks.json');
        if (!response.ok) {
          throw new Error('Failed to fetch artwork data');
        }
        const artworkData = await response.json();
        const fetchedArtworks = items.flatMap(filename => {
          const artwork = artworkData.find(art => art.source.includes(filename));
          return artwork ? { ...artwork, source: filename } : null;
        });
        setArtworks(fetchedArtworks);
      } catch (error) {
        console.error('Error fetching artwork data:', error);
      }
    };

    fetchArtworkData();
  }, [items]);

  useEffect(() => {
    // Set the video's initial playback position to 5 seconds
    if (videoRef.current) {
      videoRef.current.currentTime = 5;
    }
  }, [artworks]);

  // Calculate width of each ArtworkItem based on items per row
  const itemWidth = 100 / itemsPerRow;

  return (
    <GalleryContainer>
      {/* Render artworks here */}
      {artworks.map((artwork, index) => (
        <ArtworkItem 
          key={artwork.source} 
          width={itemWidth} 
        >
          {artwork.type === 'image' ? (
            <img src={`/images/${artwork.source}`} alt={artwork.title} style={{ width: '100%' }} />
          ) : artwork.type === 'video' ? (
            <Video ref={videoRef} controls autoPlay muted playsInline loop>
              <source src={`/videos/${artwork.source}`} type="video/mp4" />
              Your browser does not support the video tag.
            </Video>
          ) : null}
          {(!oneWork || index % itemsPerRow === 0) && <Title>{artwork.title}</Title>}
          {(!oneWork || index % itemsPerRow === 0) && <Year>{artwork.year}</Year>}
          {(!oneWork || index % itemsPerRow === 0) && <Description>{artwork.description}</Description>}
        </ArtworkItem>
      ))}
    </GalleryContainer>
  );
};

export default Gallery;
