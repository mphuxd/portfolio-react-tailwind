import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function FooterMiniLight(props) {
  return (
    <footer className='relative mt-7 pt-12 pb-6 md:pt-20 md:mt-10 lg:pt-24 lg:py-20 2xl:mt-0 2xl:pt-32 2xl:pb-28 max:py-40;'>
      {/* <a href='#' className='z-50 footer-arrow-up h-fit-content w-fit-content max-h-12'>
        <svg
          width='24'
          height='45'
          viewBox='0 0 14 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M7 1V25.5M7 1L1 8.5M7 1L13 8.5' stroke='#CE5374' />
        </svg>
      </a> */}
      <span className='footer--divider-horizontal-light'></span>
      <section className='cs-grid'>
        
        <div className='order-2 col-span-full gap-y-8 mt-8 2xl:col-span-3 2xl:col-start-13 2xl:order-2 flex flex-col md:col-span-6 md:items-end md:col-start-11 2xl:items-end 2xl:gap-y-6'>
          {/* <nav className=''>
            <ul className='flex flex-wrap justify-between font-accent gap-x-4 md:gap-x-3'>
              <li>
                <a className='footer--link-light' href='projects.html'>
                  Projects
                </a>
              </li>
              <li>
                <a className='footer--link-light' href='about.html'>
                  About
                </a>
              </li>
              <li>
                <a
                  className='footer--link-light'
                  href='assets/files/resume.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  className='footer--link-light'
                  href='https://github.com/mphuxd'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
              </li>
            </ul>
          </nav> */}
          <div className='footer--socials'>
            {/* <div className='flex flex-row gap-x-3 self-start md:self-end'>
              <a className='w-6 h-6' href=''>
                <Image
                  className='h-full'
                  src='/icons/fb-og.png'
                  width={128}
                  height={128}
                  alt=''
                  layout='responsive'
                />
              </a>
              <a className='w-6 h-6'>
                <Image className='h-full' src='/icons/ig-black.png' width={24} height={24} alt='' />
              </a>
              <a className='h-6 w-6'>
                <Image
                  className='h-full'
                  src='/icons/linkedin-og.png'
                  width={128}
                  height={128}
                  alt=''
                  layout='responsive'
                />
              </a>
            </div> */}
            {/* <a
              className='text-black font-accent text-sm self-end sm:self-start md:self-end'
              href=''
            >
              mph@ucdavis.edu
            </a> */}
          </div>
        </div>

        <div className='col-start-13 col-span-4 justify-self-end max:justify-self-end max:mt-6 2xl:col-start-15 2xl:col-span-1'>
          <Image src='/icons/logo-black.png' width={64} height={64} alt='' />
        </div>

        <div className='footer--legal'>
          <p className='font-accent text-xs text-grey'>Version 3.00</p>
          <p className='font-accent text-xs text-grey'>Updated 02.21.2022</p>
        </div>

        {/* <div className='footer--logo'>
          <Image src='/icons/logo-black.png' width={64} height={64} alt='' />
        </div> */}
      </section>
    </footer>
  );
}

FooterMiniLight.propTypes = {};

export default FooterMiniLight;
