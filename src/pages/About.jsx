import React from 'react';
import styled, { css } from 'styled-components';
import Background from '../components/Background';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { Header, SubHeading, Paragraph } from '../components/TextComponents';
import Spacer from '../components/Spacer';

// Styled components for Header and Paragraph
// (These styles were provided in your previous snippet)
export const List = styled.ul`
  list-style-type: disc;
  margin-left: 2rem;
`;

const FlexContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 2rem;
`;

const FlexItem = styled.div`
  margin-right: 1rem;
`;

const DownloadLink = styled.a`
  text-decoration: none;
  color: #007bff;
  &:hover {
    text-decoration: underline;
  }
`;

const ExperienceItem = styled.li`
  margin-bottom: 1rem;
`;

const JobTitle = styled.div`
  font-weight: bold;
`;

const DateRange = styled.div`
  font-style: italic;
`;

const Home = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Background />
      <Navbar />
      <Spacer />
      <Content align="left">
        <Header>About</Header>
        <Paragraph>
          I'm Jackson, a third-year student in Computation Arts at Concordia University, as well as a multidisciplinary artist, writer, and designer. My practice is a melting pot of computer science, fine arts, and literary education, offering a unique lens through which I approach my craft. A lens which combines the fierce experimentation, analytical precision, and media literacy of said fields to create complex, concise, yet wholly original works.
          My expertise spans a diverse range of disciplines including 3D modeling, web design, painting, writing, UI and UX, game design, music production, and AI–creating something I define as well mannered chaos. Something equally obsessive, absurd, and tongue and cheek, juxtaposing my love of music, painting, and literature, with my passion for mathematics, programming, and industrial design. Driven by an obsessive work ethic, I continually challenge myself while remaining open to the evolution of my practice alongside my personal growth.
          Although my work is highly emotional, I aim to not force any feelings or ideas upon the viewer as I believe it can take away from the art as a whole. Instead, I show the viewer what I feel, and give them the option to join me.
        </Paragraph>
      </Content>

      <Content align="right">
        <Header align="right">CV</Header>
        <Paragraph>
          <SubHeading>Professional Experience</SubHeading>
          <List>
            <ExperienceItem>
              <JobTitle>Graphics Editor: The Sophia Review Philosophy Journal</JobTitle>
              <DateRange>March 2024 - Present</DateRange>
              Responsible for creating striking vector graphics for print, while formatting the work of others to fit into one cohesive style.
            </ExperienceItem>
            <ExperienceItem>
              <JobTitle>Graphics Editor: The Encore Poetry Project</JobTitle>
              <DateRange>January 2024 - Present</DateRange>
              Responsible for creating intricate visuals for print and web in varying styles to complement written content. Works in tandem with the editorial team to ensure each issue maintains its distinctive aesthetic identity.
            </ExperienceItem>
            <ExperienceItem>
              <JobTitle>Freelance Writer</JobTitle>
              <DateRange>2020 - Present</DateRange>
              February 2022: Released his first art book, <i>Towers Give Me Meaning / Towers Give Me Life</i>
              January 2024: Released his first collection of poetry, <i>Lampshades Made of Plastic. </i> 
              Featured in many Montreal-based literature magazines including: Concordia University's The Link, Pixie Literary, Crab Apple Literary, The Purposeful Mayo, and The Encore Poetry Project.
            </ExperienceItem>
            {/* Add more professional experiences as needed */}
          </List>
          <FlexContainer>
            <FlexItem>
              <SubHeading>Professional Skills</SubHeading>
              <List>
                <li>3D modelling/Animation</li>
                <li>Front/Back End Web Development</li>
                <li>Graphic Design</li>
                <li>Sound Design</li>
                <li>UI and UX</li>
                <li>Creative Writing</li>
                <li>Oil Painting</li>
              </List>
            </FlexItem>
            <FlexItem>
              <SubHeading>Technical Skills</SubHeading>
              <List>
                <li>Adobe Suite</li>
                <li>HTML/CSS</li>
                <li>Javascript/Java</li>
                <li>Python</li>
                <li>Max/MSP</li>
                <li>Touch Designer</li>
                <li>Ableton Live</li>
                <li>Microsoft Suite</li>
              </List>
            </FlexItem>
          </FlexContainer>
          <Paragraph>
            <DownloadLink href="/JacksonDunnigan_CV.pdf" download>Download CV</DownloadLink>
          </Paragraph>
        </Paragraph>
      </Content>

      <Content align="left">
        <Header>Contact</Header>
        <Paragraph>
          contact@jacksondunnigan.ca <br />
          613-816-5680
        </Paragraph>
      </Content>
      <Footer />
    </div>
  );
};

export default Home;
