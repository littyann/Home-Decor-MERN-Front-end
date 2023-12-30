import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
 <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://thedecorkart.com/cdn/shop/files/location-banner_1400x.jpg?v=1697720151" alt="First slide" />

      <div className='centered'>
          <div className=" text-center" style={{color: 'white',backgroundColor:'#746B61DB',width:"500px",height:"100px",paddingTop:"20px",fontSize:"40px"}}>
            <span >Our Story</span>
          </div>
        
         
          </div>

    </div>
    
  </div>
</div>

<div className="row contactus mt-5 ">
        <div className="col-md-6 ">
          <img
            src="https://thedecorkart.com/cdn/shop/files/009A0697_ca199510-879f-4576-9f16-ade394c7989d_800x.jpg?v=1697720199"
            alt="contactus"
           height={'300vh'}
         width={'100%'}
          />
        </div>
        <div style={{backgroundColor:'#746B61DB'}} className="col-md-4 w-50">
          <h1 className="text-center text-light">OUR STORY</h1>
          <p className="text-center mt-2">
          With a strong innate design sense, Natasha has been collaborating with top architects and interior stylists from all over the country, since the past 10 years, for their requirements for projects in the residential, commercial and the hospitality arenas. Brij has been a pioneer in the wholesale segment , supplying furniture, wall art, home décor and accessories and expertise to many top business groups.
          </p>
          <p className="text-center mt-4">
          With years of experience shared between them and an inborn entrepreneurial fire, the duo started The Décor Kart with a belief – To make The Décor Kart an expression of a cultivated and sophisticated lifestyle, where creativity and innovation amalgamate with luxury and fine taste
          </p>
        </div>
      </div>

    </Layout>
  );
};

export default About;