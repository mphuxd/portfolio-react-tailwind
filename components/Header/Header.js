import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function Header(props) {
  return (
    <header className='header w-full 2max:pt-8'>
      <div className=' cs-grid my-auto w-full 2xl:px-4'>
        <div className='header-inner col-span-full 2xl:col-start-2 2xl:col-span-14'>
          <Link href='/'>
            <a className='my-auto py-4'>
              <span className='header-text-logo'>MATTHEW PHAM</span>
            </a>
          </Link>
          <nav className='header-nav-bar'>
            <ul className='header-nav-container'>
              <li>
                <Link href='/#work'>
                  <a className='header-nav-item scroll-smooth'>Work</a>
                </Link>
              </li>
              <li>
                <Link href='/about'>
                  <a className='header-nav-item'>About</a>
                </Link>
              </li>
              <li>
                <a
                  className='header-nav-item'
                  href='/files/resume.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  className='header-nav-item'
                  href='https://github.com/mphuxd'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {};

export default Header;
