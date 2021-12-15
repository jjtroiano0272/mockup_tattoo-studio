import React, { useState } from 'react';
import { CaretDoubleUp, InstagramLogo, FacebookLogo } from 'phosphor-react';

export default function Footer(props) {
  return (
    <footer className='bg-teal pt-4'>
      {/* Top row that shows social links */}
      <div className='d-flex justify-content-around align-items-center my-4'>
        <div className='col-xs-6 col-sm-6'>
          <a href='https://www.instagram.com/spiritualtattooer/'>
            <InstagramLogo className='social-media-icons icons-ig' />
          </a>
        </div>
        <div className='col-xs-6 col-sm-6'>
          <a href='https://www.facebook.com/lighthandarts/'>
            <FacebookLogo className='social-media-icons icons-fb' />
          </a>
        </div>
      </div>
      {/* Next row displays credits */}
      <div className='d-flex justify-content-end px-3'>
        <p className='text-muted small '>© 2021 Copyright: Ananda War</p>
        <p className='text-muted small text-end'>
          Created by Jonathan J. Troiano
        </p>
      </div>
      {/* Flush right, under my name */}
      <div className='d-flex justify-content-end px-3'>
        <a
          href='https://portfolio-page-vite-6r4.pages.dev/'
          className='pointer text-muted'
        >
          View Profile
        </a>
      </div>

      <div className='row'>
        <div className='row text-center'>
          <a href='#' className='mb-4 pointer'>
            <CaretDoubleUp className='return-to-top' />
          </a>
        </div>
      </div>
    </footer>
  );
}
