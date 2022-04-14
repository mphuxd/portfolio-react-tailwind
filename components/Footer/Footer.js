import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function Footer(props) {
  return (
    <footer className='footer'>
      <a href='#' className='z-50 footer-arrow-up h-fit-content w-fit-content max-h-12'>
        <svg
          width='24'
          height='45'
          viewBox='0 0 14 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M7 1V25.5M7 1L1 8.5M7 1L13 8.5' stroke='#CE5374' />
        </svg>
      </a>

      <section className='cs-grid'>
        <div className='footer--links-section'>
          <nav className=''>
            <ul className='flex flex-wrap justify-between font-accent gap-x-4 md:gap-x-3'>
              <li>
                <a className='footer--link' href='projects.html'>
                  Projects
                </a>
              </li>
              <li>
                <a className='footer--link' href='about.html'>
                  About
                </a>
              </li>
              <li>
                <a
                  className='footer--link'
                  href='assets/files/resume.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  className='footer--link'
                  href='https://github.com/mphuxd'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
          <div className='footer--socials'>
            <div className='flex flex-row gap-x-3 self-start md:self-end'>
              <a className='w-6 h-6' href=''>
                <Image className='h-full' src='/icons/fb.png' width={24} height={24} alt='' />
              </a>
              <a className='w-6 h-6'>
                <Image className='h-full' src='/icons/ig.png' width={24} height={24} alt='' />
              </a>
              <a className='h-6'>
                <Image className='h-full' src='/icons/linkedin.png' width={29} height={24} alt='' />
              </a>
            </div>
            <a
              className='text-white font-accent text-sm uppercase self-end sm:self-start md:self-end'
              href=''
            >
              mph@ucdavis.edu
            </a>
          </div>
        </div>

        <div className='footer--summary-section'>
          <h5 className='text-white font-accent text-sm'>MATTHEW PHAM</h5>
          <p className='text-white text-sm font-base max:text-base leading-normal tracking-wider mt-2 max:mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam in consequat, at
            adipiscing tristique amet sed vel. Molestie semper viverra et vulputate sit eu, varius.
          </p>
        </div>

        <span className='footer--divider-horizontal'></span>

        <div className='footer--legal'>
          <p className='font-accent text-xs text-grey'>Version 3.00</p>
          <p className='font-accent text-xs text-grey'>Updated 02.21.2022</p>
        </div>

        <div className='footer--logo'>
          <Image src='/icons/logo.png' width={64} height={64} alt='' />
        </div>
      </section>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
