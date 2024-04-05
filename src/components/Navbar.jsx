import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import "../styles.css";

const SidebarStyle = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: ${({ navWidth }) => navWidth};
  transition: width 0.3s ease;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const NavbarBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 10%;
  background-color: rgb(var(--primary-color));
`;

const Hotbar = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const HotbarItem = styled.li`
  color: white;
  font-weight: 450;
  font-size: ${({ fontSize }) => fontSize};
  margin-top: ${({ marginTop }) => marginTop};
  writing-mode: vertical-rl; /* Rotate text sideways */
  transform: rotate(180deg); /* Rotate text in opposite direction */
  transition: font-size 0.3s ease;
  width: 3rem; /* Fixed width to prevent movement */
`;

const HotbarLink = styled(NavLink)`
  display: block;
  color: inherit;
  text-decoration: none;
  transition: letter-spacing 0.3s ease; /* Add transition for letter-spacing */

  &:hover {
    letter-spacing: .1rem; /* Adjust letter-spacing on hover */
  }

  &.active {
    letter-spacing: .1rem; /* Adjust letter-spacing for active link */
    text-decoration: underline; /* Add underline to active link */
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  left: .75rem;
  top: -.75rem;
  max-width: 14rem;
  transition: max-width 0.3s ease;
  z-index: 999;
  pointer-events: none;
`;

const LogoImage = styled.img`
  height: auto;
  width: 100%;
`;

const TextContainer = styled.div`
  position: absolute;
  left: -.9rem;
  padding: .35rem;
  bottom: 2rem; /* Aligning text to the bottom */
  display: flex;
  flex-direction: column;
  z-index: 3; /* Ensure text is on top */
`;

const Navbar = () => {
  const [navWidth, setNavWidth] = useState('14rem');
  const [fontSize, setFontSize] = useState('.9rem');
  const [marginTop, setMarginTop] = useState('1rem');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const newNavWidth = scrollTop === 0 ? '14rem' : '9rem';
      setNavWidth(newNavWidth);

      const newFontSize = scrollTop === 0 ? '.9rem' : '0.75rem';
      setFontSize(newFontSize);

      const newMarginTop = scrollTop === 0 ? '1rem' : '0.5rem';
      setMarginTop(newMarginTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SidebarStyle navWidth={navWidth}>
      <NavbarBackground />
      <LogoContainer>
        <LogoImage src="/images/animatedCharacter.gif" alt="loading..." />
      </LogoContainer>
      <TextContainer>
        <Hotbar>
          <HotbarItem marginTop={marginTop} fontSize={fontSize}>
            <HotbarLink to="/projects">Projects</HotbarLink>
          </HotbarItem>
          <HotbarItem marginTop={marginTop} fontSize={fontSize}>
            <HotbarLink to="/exhibitions">Exhibitions</HotbarLink>
          </HotbarItem>
          <HotbarItem marginTop={marginTop} fontSize={fontSize}>
            <HotbarLink to="/about" className="alt-hover">About</HotbarLink>
          </HotbarItem>
        </Hotbar>
      </TextContainer>
    </SidebarStyle>
  );
};

export default Navbar;
