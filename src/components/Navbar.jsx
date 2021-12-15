import React, { useState, useRef } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { IoIosImages } from 'react-icons/io';
import { Image } from 'phosphor-react';
import { BiEnvelope, BiHelpCircle } from 'react-icons/bi';
import { FaInstagram, FaFacebookSquare } from 'react-icons/fa';
import { GrLocation } from 'react-icons/gr';
import lha_logo from '../image/lha-logo-square-light.png';

export default function Navbar({ user, darkMode, toggleDarkMode }) {
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

  const inputRef = useRef(null);

  // Switch theme
  useHotkeys('CTRL+\\, CMD+\\', () => {
    console.log('Switch theme');
    toggleDarkMode();
  });

  // Focus on search box
  useHotkeys('CTRL+/, CMD+/', () => {
    inputRef.current.focus();
    console.log('search box focused');
  });

  {
    /* 
    <nav className='navbar navbar-expand-lg nav-bg sb-1'>
    <div className='container'>
      <a className='navbar-brand' href='#'>
        <img src={logo} alt='Website logo' />
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
           <li className='nav-item active'>
            <a className='nav-link' href='#'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li> 
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Link
            </a>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='#'
              id='navbarDropdown'
              role='button'
              data-bs-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Dropdown
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <a className='dropdown-item' href='#'>
                Action
              </a>
              <a className='dropdown-item' href='#'>
                Another action
              </a>
              <div className='dropdown-divider'></div>
              <a className='dropdown-item' href='#'>
                Something else here
              </a>
            </div>
          </li>
          <li className='nav-item'>
            <a className='nav-link disabled' href='#'>
              Disabled
            </a>
          </li>
        </ul>

        <form className='form-inline my-2 my-lg-0 ms-auto'>
          <span className='d-inline-block float-left'>
            <DarkModeSwitch
              className='react-darkMode-switch'
              checked={darkMode}
              onClick={toggleDarkMode}
              size={'1.8rem'}
            />
             </span> 

          </span>
          <span className='d-inline-block'>
            <input
              className='form-control search-query mr-sm-2'
              type='search'
              ref={inputRef}
              placeholder='Search'
              aria-label='Search'
            />
          </span>

        </form>
      </div>
    </div>
  </nav> 
  */
  }
  return (
    <>
      <nav className='navbar navbar-dark bg-dark sticky-top'>
        <h4 className='ribbon'>DRAFT</h4>
        <div className='row align-items-center mx-auto'>
          <div className='col text-light text-center'>
            <a className='text-reset' href='#'>
              {/* <Image size={{ size: '2rem' }} className='fa-2x anim-wiggle' /> */}
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
    </>
  );
}
