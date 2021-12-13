import React, { Component } from 'react';
import Iframe from 'react-iframe';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
// FIXME: To future-proof, this should be an SVG.
// FIXME: must be in /src
import lha_logo from './lha-logo-square-light.png';
// Icon libraries
import { BiEnvelope, BiHelpCircle } from 'react-icons/bi';
import { IoIosImages } from 'react-icons/io';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
// React-bootstrap components
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Footer from './components/Footer';

// TODO: Navbar shows up AFTER scroll
// $(window).scroll(function () {
//   if ($(this).scrollTop() > 300) {
//     $('.navbar-fixed-top').addClassName('opaque');
//   } else {
//     $('.navbar-fixed-top').removeClassName('opaque');
//   }
// });

function App() {
  // TODO: use as /component/common SFC component
  const appointmentTooltip = (props) => (
    <Tooltip id='button-tooltip' {...props}>
      To schedule an appointment, click the 'contact-us' button.
    </Tooltip>
  );
  const apptProtocolTooltip = (props) => (
    // TODO: Include a link to the 'post tattoo care' sheet she gives after
    <Tooltip id='button-tooltip' {...props}>
      Appointment Protocol Committed to everyone’s safety and to ensure we have
      the most productive use of our time, please take not of the following
      protocols for your visit to Light Hand Arts. Arrive on time Masks are
      required for entire time in studio 1 Guest allowed No eating in studio —
      Please have a solid meal within the 2 hours before your Appointment If you
      have any questions concerning on these items, please contact us! If you
      have no questions, book today!
    </Tooltip>
  );

  return (
    // You CANNOT get rid of this otherwise React doesn't recognize the structure.

    <>
      <nav className='navbar navbar-dark bg-dark sticky-top'>
        <h4 className='ribbon'>DRAFT</h4>
        <div className='row align-items-center mx-auto'>
          <div className='col text-light text-center'>
            <a className='text-reset' href='#'>
              <IoIosImages className='fa-2x anim-wiggle' />
            </a>
          </div>
          {/* Central logo */}
          <div className='col-6 mx-3'>
            <a href='#'>
              <img
                src={lha_logo}
                className='main-logo'
                alt='Light Hand Arts Home Page'
              />
            </a>
          </div>
          <div className='col text-light text-center'>
            <OverlayTrigger
              placement='right'
              delay={{ show: 250, hide: 900 }}
              overlay={apptProtocolTooltip}
            >
              <a className='text-reset' href='#'>
                <BiEnvelope className='fa-2x anim-wiggle' />
              </a>
            </OverlayTrigger>
          </div>
        </div>
        {/* Collapible section where it says it's by APPOINTMENT ONLY (should also have a link to email/schedule) */}
        {/* <div className='accordion' id='accordionExample'> */}
        {/* <div class='accordion-item'> */}
        {/* </div> */}
        {/* </div> */}
      </nav>
      <nav className='navbar navbar-alert bg-teal justify-content-center mb-5'>
        {/* TODO: Add (?) button here which yields a pop up box on click and blurs background. */}
        {/* prettier-ignore */}
        Our studio is open by appointment only
        <OverlayTrigger
          placement='right'
          delay={{ show: 250, hide: 400 }}
          overlay={appointmentTooltip}
        >
          <a href='#'>
            <BiHelpCircle />
          </a>
        </OverlayTrigger>
      </nav>
      <div className='container'>
        <div className='row'>
          <div className='col-xs col-sm text-center'>
            <h1 className='lha-title lha-title-main'>Light Hand</h1>
            <h2 className='lha-title lha-title-sub-1'>Tattoo & Healing Arts</h2>
            <h3 className='lha-title lha-title-sub-loc mb-5'>Suite A1b</h3>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs col-sm-6 text-center mx-auto'>
            <p>
              Thanks for visiting Light Hand Arts. I opened up Light Hand as my
              private studio in August of 2019 and it’s been a crazy time as a
              small business owner. Thanks to your love & support this ship is
              still cruising, and I am blessed to be tattooing, again.
            </p>
          </div>
        </div>
        {/* Map styling options: https://mdbootstrap.com/docs/b4/jquery/javascript/google-maps/ */}
        <div className='row m-5'>
          <div className='col-xs-12 col-sm-12 justify-content-center'>
            <Iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57051.58300452991!2d-81.867815!3d26.65732!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x16d849ce99fa64ec!2sLight%20Hand%20Tattoo%20%26%20Healing%20Arts!5e0!3m2!1sen!2sus!4v1630526691914!5m2!1sen!2sus'
              width='100%'
              height='600'
              style='border:0;'
              allowfullscreen=''
              loading='lazy'
            ></Iframe>
          </div>
        </div>
      </div>
      {/* <footer>
        <div className='container-fluid mt-5 bg-teal'>
          <div className='row my-auto'>
            <div className='col-xs-6 col-sm text-muted text-center'>
              <a
                href='https://www.instagram.com/spiritualtattooer/'
                className='social-media-icons icons-ig'
              >
                <FaInstagram className='fa-1x' />
              </a>
            </div>
            <div className='col-xs-6 col-sm text-muted text-center'>
              <a
                href='https://www.facebook.com/lighthandarts/'
                className='social-media-icons icons-fb'
              >
                <FaFacebookSquare className='fa-1x' />
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='col text-muted text-center'>
              <p>© 2021 Copyright: Ananda War</p>
            </div>
          </div>
        </div>
      </footer> */}
      <Footer />
    </>
  );
}

export default App;
