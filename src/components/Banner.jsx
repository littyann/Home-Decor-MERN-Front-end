import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'
function Banner() {
  return (
    <div  id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
       <div  className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
  
  </div>
    <div  className="carousel-inner">
      
     
          <div className="container-fluid carousel-item active">
            <img src="https://thedecorkart.com/cdn/shop/files/NEW-DESKTOP1_de70fb62-a43d-474a-b43e-cf55674be4e3.jpg?v=1701510425" className="d-block w-100" alt="no image" />
           
           
           
     
     <div className='centered'>
          {/* <div className=" text-center" style={{color: '#1a0452'}}>NEW ARRIVALS</div> */}
          <h3 style={{color: '#1a0452',fontFamily:"Embassy BT"}}><em>Charming Chinoiserie</em></h3> 
          <p className='details' style={{color: '#1a0452'}}>Exploring the elegance of chinoiserie</p> 
          <Link to={"/categories"}  className='btn' style={{background: '#1a0452',color:"white",marginLeft:"50px"}}>SHOP NOW</Link> 
          </div>
     </div>



      <div className="container-fluid carousel-item">
        <img src="https://thedecorkart.com/cdn/shop/files/NEW-DESKTOP3_59c88c2d-ed05-4037-845d-182704737f5b.jpg?v=1702448472" className="d-block w-100" alt="..." />

        <div className='top-left'>
        {/* <div className="text-center" style={{color: "#6a1f38"}}>NEW ARRIVALS</div> */}

          <h3 style={{color: "#6a1f38",fontFamily:"Embassy BT"}}>Things of Beauty</h3> 
          <p className='details' style={{color: "#6a1f38"}}>Ethereal by day, magical by night</p> 
          <Link  to={"/categories"} className='btn' style={{background: "#6a1f38", color: '#fff9dd',width:"150px"}}>SHOP NOW</Link> 
          </div>
          {/* https://res.cloudinary.com/makerinc/c_fill,g_auto,f_auto,q_auto:best,fl_preserve_transparency,dpr_1,w_1024,h_348/maker-live/uploads/d4d11d709cc7980894bd9c05f12a2d03/164af7b95970dee596b61f07d0d37da1/hp_banner.jpg */}
      </div>

      <div className="container-fluid carousel-item">
        <img src=" https://thedecorkart.com/cdn/shop/files/NEW-DESKTOP4_be2b452c-f389-4813-9a48-b5def5cd2bec.jpg?v=1702533244" className="d-block w-100" alt="..." />
        
        <div className='centered'>
          {/* <div className=" text-center" style={{color: '#793724'}}>NEW ARRIVALS</div> */}
          <h3 style={{color: '#793724',fontFamily:"Embassy BT"}}><em>Charming Chinoiserie</em></h3> 
          <p className='details' style={{color: '#793724'}}>Exploring the elegance of chinoiserie</p> 
          <Link to={"/categories"}  className='btn' style={{background: '#793724',color:"white",marginLeft:"50px"}}>SHOP NOW</Link> 
          </div>
        </div>
      
      
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-arrow" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Banner