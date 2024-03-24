import React from 'react';
import Background from './Background';
import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

import { Header, Paragraph } from './TextComponents';

const Home = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <Content>
        <Header>About</Header>
        <Paragraph>
        I'm Jackson, a third-year student in Computation Arts at Concordia University, as well as a multidisciplinary artist, writer, and designer. My practice is a melting pot of computer science, fine arts, and literary education, offering a unique lens through which I approach my craft. A lens which combines the fierce experimentation, analytical precision, and media literacy of said fields to create complex, concise, yet wholly original works.

My expertise spans a diverse range of disciplines including 3D modeling, web design, painting, writing, UI and UX, game design, music production, and AI–creating something I define as well mannered chaos. Something equally obsessive, absurd, and tongue and cheek, juxtaposing my love of music, painting, and literature, with my passion for mathematics, programming, and industrial design. Driven by an obsessive work ethic, I continually challenge myself while remaining open to the evolution of my practice alongside my personal growth.

Although my work is highly emotional, I aim to not force any feelings or ideas upon the viewer as I believe it can take away from the art as a whole. Instead, I show the viewer what I feel, and give them the option to join me.
        </Paragraph>
      </Content>

      <Content>
        <Header>About</Header>
        <Paragraph>
          Jackson Dunnigan an Ottawa born writer, painter, and multidisciplinary designer currently studying Computation Arts at Concordia University. In his sprawling practice, Jackson is committed to consciously condensing digestible glimpses of thought loops, obsessions, and daily uncertainties–melding maximalist abstraction with introspection and wit.
        </Paragraph>
      </Content>

      <Content>
        <Header>About</Header>
        <Paragraph>
          Jackson Dunnigan an Ottawa born writer, painter, and multidisciplinary designer currently studying Computation Arts at Concordia University. In his sprawling practice, Jackson is committed to consciously condensing digestible glimpses of thought loops, obsessions, and daily uncertainties–melding maximalist abstraction with introspection and wit.
        </Paragraph>
      </Content>
      <Footer />
    </div>
  );
};

export default Home;
