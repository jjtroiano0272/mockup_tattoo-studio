import React, { useState, useEffect } from 'react';
import Iframe from 'react-iframe';

export default function Main() {
  return (
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
      <div className='row my-5'>
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
  );
}
