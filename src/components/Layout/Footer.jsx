import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px',backgroundColor:"rgb(128, 109, 128"}} className='d-flex flex-column justify-content-center align-items-center  text-light mt-2'>
        <div className='footer-div d-flex justify-content-evenly w-100 flex-wrap'>
          <div className="footer" style={{width:'400px'}}>

          <h4 className='mb-3'>T H E D E C O R K A R T</h4>
          <Link to="/contact">CONTACT US</Link> <br />
          <Link to="/about">ABOUT</Link>
          
          </div>
          <div className="links d-flex flex-column ">
            <h4 >QUICK LINKS</h4>
            <Link to={'/'} style={{ textDecoration:'none', color:'white' }}>HOME</Link>
            <Link to={'/cart'} style={{ textDecoration:'none', color:'white' }}>CART</Link>
            <Link to={'/categories'} style={{ textDecoration:'none', color:'white' }}>PRODUCTS</Link>
          </div>
          <div className=" guides d-flex flex-column ">
          <h4 className='mb-3'>GET IN TOUCH</h4>
          <h6><i class="fa-solid fa-phone"></i> 9811536888 </h6>
          <h6><i class="fa-solid fa-envelope"></i> info@thedecorkart.com</h6>
          <Link to={'/about'} style={{ textDecoration:'none', color:'white' }} ><i class="fa-solid fa-house-laptop"></i> OUR STORY</Link>
        
          </div>
          <div className="contact">
            <h4 className='mb-3'>FOLLOW US</h4>
           
            <div className="icons fs-4 d-flex justify-content-around mt-3 w-50">
            <Link to={'www.gmail.com'} style={{ textDecoration:'none', color:'white' }}><i className="fa-solid fa-envelope"></i></Link>&nbsp;&nbsp;&nbsp;
            <Link  to={'https://twitter.com/i/flow/login'}  style={{ textDecoration:'none', color:'white' }}><i className="fa-brands fa-twitter"></i></Link>&nbsp;&nbsp;&nbsp;
            <Link to={'https://www.linkedin.com/'} style={{ textDecoration:'none', color:'white' }}><i className="fa-brands fa-linkedin"></i></Link>&nbsp;&nbsp;&nbsp;
            <Link to={'https://www.instagram.com/'} style={{ textDecoration:'none', color:'white' }}><i className="fa-brands fa-instagram"></i></Link>&nbsp;&nbsp;&nbsp;
            <Link to={'http://www.github.com/'} style={{ textDecoration:'none', color:'white' }}><i className="fa-brands fa-github"></i></Link>&nbsp;&nbsp;&nbsp;
            <Link to={'https://www.facebook.com/'} style={{ textDecoration:'none', color:'white' }}><i className="fa-brands fa-facebook"></i></Link>

            </div>
          </div>
        </div>
        <p className='mt-5'> Copyright © 2023 T H E D E C O R K A R T </p>

    </div>
  )
}

export default Footer