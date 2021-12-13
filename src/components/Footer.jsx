import React, { useState } from 'react';
import { CaretDoubleUp, InstagramLogo, FacebookLogo } from 'phosphor-react';

export default function Footer(props) {
  return (
    <div className='container'>
      <footer className='pt-4 pt-md-5 border-top bg-teal'>
        <div className='container-fluid mt-5 '>
          <div className='row my-auto'>
            <div className='col-xs-6 col-sm text-muted text-center'>
              <a
                href='https://www.instagram.com/spiritualtattooer/'
                className='social-media-icons icons-ig'
              >
                <InstagramLogo size='2rem' />
              </a>
            </div>
            <div className='col-xs-6 col-sm text-muted text-center'>
              <a
                href='https://www.facebook.com/lighthandarts/'
                className='social-media-icons icons-fb'
              >
                <FacebookLogo size='2rem' />
              </a>
            </div>
          </div>
          <div className='row'>
            <div className='col text-muted text-center'>
              <p>© 2021 Copyright: Ananda War</p>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-6 text-end ms-auto'>
            <p className='text-muted'>Created by Jonathan J. Troiano</p>
            <a
              href='https://portfolio-page-vite-6r4.pages.dev/'
              className='pointer'
            >
              View Profile
            </a>
          </div>
        </div>

        <div className='row'>
          <div className='row text-center'>
            <a href='#' className='mb-4 pointer'>
              <CaretDoubleUp style={{ size: '2rem' }} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
