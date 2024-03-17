import React from 'react';
import styled from 'styled-components';
import './styles.css';

const Container = styled.div`
  margin-top: var(--navbar-height);
  width: 35%;
  margin-left: 10rem;
`;

const StyledH2 = styled.h2``;

const StyledP = styled.p`
  font-size: 1.5rem; /* Adjust font size */
  font-family: "eb-garamond", serif;
  font-weight: 400;
  font-style: normal;
  text-align: justify;
  text-justify: inter-word;

`


class Content extends React.Component {
  render() {
    return (
      <Container>
        <StyledH2>About</StyledH2>
        <StyledP>Jackson Dunnigan an Ottawa born writer, painter, and multidisciplinary designer currently studying Computation Arts at Concordia University. In his sprawling practice, Jackson is committed to consciously condensing digestible glimpses of thought loops, obsessions, and daily uncertainties–melding maximalist abstraction with introspection and witt.

While still early in his career, Jackson is already heavily experienced in the industry pipelines of 3D modeling, front/back end web design, graphic design, and programming as a whole. Also proficient in many mediums outside the digital realm, Jackson is a passionate poet, novelist, painter, and musician, having found methods to harness said experience to make his work truly flourish, while never sacrificing cohesion.

Jackson has a leg in various art communities, notably the Montreal literary and art scenes, where he has made various literary and illustrative contributions to magazines; including Concordia's The Link, Pixie Literary, Crab Apple Literary, The Purposeful Mayo, and The Encore Poetry Project. His illustrative work won the MASC award for emerging artists in Ontario, and his paintings and video works have been featured in several art exhibitions. Jackson has self published 2 books, the chapbook Towers Give Me Life, and the poetry collection Lampshades Made of Plastic. 

Looking forward, Jackson plans to let his wide array of skills flourish by combining intricate visuals and prose to multimedia works with an unmatched attention to detail. Jackson prides himself in innovation, striving to never reside in one style for too long to where it may become stale. It's impossible to know where his drive will slant next, but regardless of direction, it will be wholly him. 
 </StyledP>
      </Container>

    );
  }
}

export default Content;
