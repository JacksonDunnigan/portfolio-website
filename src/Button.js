import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotationDuration = '20s';
const hoverDuration = '0.3s';

const easeIn = 'cubic-bezier(0.32, 0, 0.67, 0)';
const easeOut = 'cubic-bezier(0.33, 1, 0.68, 1)';

const textColor = '#2B3338';
const bgColor = '#A6B8B1';
const accentColor = '#E8D6C1';

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const rotateReverse = keyframes`
  to {
    transform: rotate(-360deg);
  }
`;

const Link = styled.a`
  display: inline-block;
  text-decoration: none;
`;

const SVG = styled.svg`
  width: 200px;
  height: 200px;
`;

const Path = styled.path`
  stroke: none;
  fill: none;
`;

const Circle = styled.circle`
  stroke: none;
  fill: none;
`;

const Cloud = styled.path`
  fill: rgba(255, 255, 255, 0.15);
`;

const Arrow = styled.path`
  fill: none;
`;

const Face = styled.g`
  transition: transform ${hoverDuration} / 2 ${easeIn};

  ${Link}:hover & {
    transform: scale(1.1);
    transition: transform ${hoverDuration} ${easeOut};
  }
`;

const Text = styled.text`
  animation: ${rotateReverse} normal infinite ${rotationDuration} linear;
  font-size: 0.8rem;
  transform-origin: 50% 50%;

  ${Link}:hover & {
    animation-play-state: paused;
  }
`;

const RotatingLink = ({ href, title, desc, alt }) => {
  return (
    <Link href={href} className={alt ? 'link link--alt' : 'link'}>
      <SVG viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg' aria-labelledby="link1-title link1-desc">
        <title id="link1-title">{title}</title>
        <desc id="link1-desc">{desc}</desc>
        
        <Path id="link-circle" d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0" />
        
        <Circle cx="12" cy="12" r="8" className="link__face" />

        <Text x="50%" y="60%" className="link__text">
          <textPath href="#link-circle" stroke="none">
            {title}
          </textPath>
        </Text>
      </SVG>
    </Link>
  );
};

export default RotatingLink;
