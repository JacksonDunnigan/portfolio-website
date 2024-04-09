import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import Name from '../components/Name';
import Spacer from '../components/Spacer';
import Content from '../components/Content';
import Gallery from '../components/Gallery';
import { Header } from '../components/TextComponents';
import RotatingButton from '../components/Button';
const Featured = () => {
  return (
    <div>
      <Navbar />
      <Background />
      <Navbar />
      <Name />
      <Spacer />
      <Content align="center">
        {/* Pass file names as an array to the Gallery component */}
        <Gallery items={["LMoP.mp4"]} />
        <Gallery items={["TitB1.png", "TitB2.png","TitB3.png"]} oneWork={true} />
        <Gallery items={["EC.mp4"]} />
        <Gallery items={["INYLS.mp4"]} />
        <Gallery items={["FoMoaH.jpg"]} />
        <Gallery items={["ABaoaS.jpg","LBN.jpg"]} />
        <Gallery items={["EC.mp4"]} />
        <Gallery items={["OAiYBD.jpg","CL.jpg"]} />
        <RotatingButton 
          title="View All View All View All View All View All View All View All " 
          desc="Show the complete archive of creative works" 
          alt={true} 
          additionalProp="This is an additional prop"
        />
      </Content>
      <Footer />
    </div>
  );
};

export default Featured;
