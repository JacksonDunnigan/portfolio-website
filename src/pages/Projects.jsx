import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Background from '../components/Background';
import Content from '../components/Content';
import Artworks from "../components/Artworks"
import Spacer from "../components/Spacer"
import Name from "../components/Name"
const Modelling = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <Name />
      <Spacer />
      <Content align="center" > 
        <Artworks />
      </Content>
      <Footer />

    </div>
  );
};

export default Modelling;
