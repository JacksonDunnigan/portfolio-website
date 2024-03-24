import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from './animatedCharacter.gif';

const SidebarStyle = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ navWidth }) => navWidth};
  background-color: rgb(var(--primary-color));
  z-index: 1;
  overflow-y: auto;
  transition: width 0.3s ease;
  display: flex;
  flex-direction: column;
`;

const Hotbar = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  flex-grow: 1;
`;

const HotbarItem = styled.li`
  margin: 0.5rem 0;
  transition: margin 0.3s ease, color 0.3s ease;
  color: white;
`;

const HotbarLink = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    letter-spacing: 0.25rem;
  }
`;

const LogoContainer = styled.div`
  max-width: 14rem;
  transition: max-width 0.3s ease;
`;

const LogoImage = styled.img`
  height: auto;
  width: 100%;
`;

const Navbar = () => {
  const [navWidth, setNavWidth] = useState('14rem');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const newNavWidth = scrollTop === 0 ? '14rem' : '8rem';
      setNavWidth(newNavWidth);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SidebarStyle navWidth={navWidth}>
      <LogoContainer>
        <LogoImage src={logo} alt="loading..." />
      </LogoContainer>
      <Hotbar>
        <HotbarItem>
          <HotbarLink href="#home">Home</HotbarLink>
        </HotbarItem>
        <HotbarItem>
          <HotbarLink href="#3d">3D</HotbarLink>
        </HotbarItem>
        <HotbarItem>
          <HotbarLink href="#paintings">Paintings</HotbarLink>
        </HotbarItem>
        <HotbarItem>
          <HotbarLink href="#events">Events</HotbarLink>
        </HotbarItem>
      </Hotbar>
    </SidebarStyle>
  );
};

export default Navbar;
