import React, { useState } from 'react';
import { CaretDoubleUp, InstagramLogo, FacebookLogo } from 'phosphor-react';

export default function Footer(props) {
  return (
    <footer className='bg-teal pt-4'>
      {/* Top row that shows social links */}
      {/* <div className='d-flex justify-content-around align-items-center my-4'> */}
      <div className='row my-2 align-items-center'>
        <div className='col-xs-6 col-sm-6 text-center'>
          <a href='https://www.instagram.com/spiritualtattooer/'>
            <InstagramLogo className='social-media-icons icons-ig' />
          </a>
          <p className='text-muted small '>© 2021 Copyright: Ananda War</p>
        </div>
        <div className='col-xs-6 col-sm-6 text-center'>
          <a href='https://www.facebook.com/lighthandarts/'>
            <FacebookLogo className='social-media-icons icons-fb' />
          </a>
          <p className='text-muted small'>
            Created by{' '}
            <a
              href='https://portfolio-page-vite-6r4.pages.dev/'
              className='pointer'
            >
              <strong>Jonathan J. Troiano</strong>
            </a>
          </p>
        </div>
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
