import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

function Header(props) {
  return (
    <header className='header w-full 2max:pt-8'>
      <div className=' cs-grid my-auto w-full'>
        <div className='header-inner col-span-full max:col-start-2 max:col-span-14'>
          <Link href='/'>
            <a className='my-auto py-4'>
              <span className='header-text-logo'>MATTHEW PHAM</span>
            </a>
          </Link>
          <nav className='header-nav-bar'>
            <ul className='header-nav-container'>
              <li>
                <Link href='#work'>
                  <a className='header-nav-item header-nav-item--hover'>Work</a>
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
                  href='assets/files/resume.pdf'
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
