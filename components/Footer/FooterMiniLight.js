import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

function FooterMiniLight(props) {
  return (
    <footer className='relative mt-7 pt-12 pb-6 md:pt-20 md:mt-10 lg:pt-24 lg:py-20 2xl:mt-0 2xl:pt-32 2xl:pb-28 max:py-40;'>
      <span className='footer--divider-horizontal-light'></span>
      <section className='cs-grid'>
        <Link href='/' passHref>
          <div className='col-start-13 col-span-4 justify-self-end max:justify-self-end max:mt-6 2xl:col-start-15 2xl:col-span-1 hover:cursor-pointer'>
            <Image src='/icons/logo-black.png' width={64} height={64} alt='' />
          </div>
        </Link>
        <div className='footer--legal'>
          <p className='font-accent text-xs text-black 2xl:text-sm'>©MPH 05.20.2022 V3.01</p>
          <a
            href='mailto:mph@ucdavis.edu'
            className='font-accent text-xs 2xl:text-sm text-black uppercase hover:underline'
          >
            mph@ucdavis.edu
          </a>
        </div>
      </section>
    </footer>
  );
}

FooterMiniLight.propTypes = {};

export default FooterMiniLight;
