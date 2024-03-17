import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import logo from './animatedCharacter.gif';
import './styles.css';
import './App.css';

const Navstyle = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${props => props.navHeight};
  background-color: rgb(var(--primary-color));
  background-image: linear-gradient(rgba(var(--secondary-color), 0.1) 1px, transparent 1px),
    linear-gradient(to right, rgba(var(--secondary-color), 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
  z-index: 1; /* Ensure the navbar is on top of other content */
`;

const Hotbar = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const HotbarItem = styled.li`
  margin: ${props => props.hotbarMargin} 3%; /* Adjust the margin for smoother movement */
  width: rem; /* Set fixed width for each hotbar item */
  transition: margin 0.3s ease, color 0.3s ease; /* Add transition for smooth margin and color change */
  color: ${props => props.textColor};
`;

const HotbarLink = styled.a`
  display: block;
  color: inherit;
  text-align: center;
  font-weight: 500;
  text-decoration: none;
  z-index: 5; /* Ensure the hotbar is above other content */
  &:hover {
    text-decoration: underline;
    letter-spacing: 0.25rem; /* Adjust the amount of widening as needed */
  }
`;

const StyledH1 = styled.h1`
  text-align: left;
  line-height: 0.75;
  padding: 1rem;
  font-weight: 700;
  left: 15%;
  top: 15%;
  text-indent: ${props => props.indentSize};
  transition: font-size 0.3s ease, text-indent 0.3s ease; /* Add transition for smooth size and indent change */
`;

const AlternateFont = styled.span`
  font-family: 'Adorn Garland'; /* Apply a different font to select letters */
`;

const LogoContainer = styled.div`
  max-width: ${props => props.logoSize}; /* Adjust max-width as needed */
  top: 5rem;
  justify-content: center;
  transition: max-width 0.3s ease; /* Add transition for smooth size change */
  @media (max-width: 768px) {
    min-width: 8rem;
    margin: 0 auto; /* Center the logo horizontally when viewport width is less than 768px */
  }
`;

const LogoImage = styled.img`
  height: auto; /* Set height to auto to allow natural scaling */
  width: 100%; /* Ensure the image fills the container */
`;

const Navbar = () => {
  const [navHeight, setNavHeight] = useState('8rem');
  const [fontSize, setFontSize] = useState('5rem'); // Initial font size
  const [logoSize, setLogoSize] = useState('25rem'); // Initial logo size
  const [indentSize, setIndentSize] = useState('-12rem'); // Initial indent size
  const [hotbarHeight, setHotbarHeight] = useState(0); // Initial hotbar height
  const [hotbarMargin, setHotbarMargin] = useState('5rem'); // Initial hotbar margin
  const [hotbarTextColor, setHotbarTextColor] = useState('rgb(var(--primary-color))'); // Initial hotbar text color
  const hotbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const newNavHeight = scrollTop === 0 ? '8rem' : '5rem'; // Change the height based on scroll position
      setNavHeight(newNavHeight);

      // Adjust font size
      const newFontSize = scrollTop === 0 ? '5rem' : '2rem'; // Change the font size based on scroll position
      setFontSize(newFontSize);

      // Adjust logo size
      const newLogoSize = scrollTop === 0 ? '25rem' : '12.5rem'; // Change the logo size based on scroll position
      setLogoSize(newLogoSize);

      // Adjust indent size
      const newIndentSize = scrollTop === 0 ? '-12rem' : '6rem';
      setIndentSize(newIndentSize);

      // Update hotbar height
      if (hotbarRef.current) {
        setHotbarHeight(hotbarRef.current.clientHeight);
        // Adjust hotbar margin
        const newHotbarMargin = scrollTop === 0 ? '5rem' : '-4.25rem';
        setHotbarMargin(newHotbarMargin);
        // Change hotbar text color based on scroll position
        const newHotbarTextColor = scrollTop === 0 ? 'rgb(var(--primary-color))' : 'rgb(var(--background-color))';
        setHotbarTextColor(newHotbarTextColor);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navstyle navHeight={navHeight}>
      <StyledH1 indentSize={indentSize} style={{ fontSize }}>
        J<AlternateFont>a</AlternateFont>ckson<br />Dunn<AlternateFont>i</AlternateFont>gan
      </StyledH1>
      <Hotbar ref={hotbarRef}>
        <HotbarItem hotbarMargin={hotbarMargin} textColor={hotbarTextColor}>
          <HotbarLink href="#home">home</HotbarLink>
        </HotbarItem>
        <HotbarItem hotbarMargin={hotbarMargin} textColor={hotbarTextColor}>
          <HotbarLink href="#3d">3d</HotbarLink>
        </HotbarItem>
        <LogoContainer logoSize={logoSize}>
          <LogoImage src={logo} alt="loading..." />
        </LogoContainer>
        <HotbarItem hotbarMargin={hotbarMargin} textColor={hotbarTextColor}>
          <HotbarLink href="#paintings">paintings</HotbarLink>
        </HotbarItem>
        <HotbarItem hotbarMargin={hotbarMargin} textColor={hotbarTextColor}>
          <HotbarLink href="#events">events</HotbarLink>
        </HotbarItem>
      </Hotbar>
    </Navstyle>
  );
};

export default Navbar;
