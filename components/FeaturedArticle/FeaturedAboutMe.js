import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";

function FeaturedAboutMe({ title, copy, imageBGColor, linkHref, linkAlt, linkLabel, geometry }) {
  let router = useRouter();
  const mainLink = useRef(null);

  function redirectClick(e) {
    e.stopPropagation();
    const isTextSelected = window.getSelection().toString();
    if (!isTextSelected) {
      mainLink.current.click();
    }
  }

  function handleClick(e) {
    e.stopPropagation();
    if (e.type === "click") {
      router.push(linkHref);
    }
  }
  return (
    <section className='article-project-container lg:my-20 2xl:my-40 max:mt-42'>
      <div className='mx-auto cs-grid p-0 lg:p-8 2xl:p-0 w-full'>
        <div
          className='col-start-1 col-span-16 xl:col-start-2 xl:col-span-14 article-project flex flex-col-reverse lg:flex-row hover:custom-shadow-tablet hover:cursor-pointer max:max-w-screen-max'
          onClick={redirectClick}
          href='/about'
        >
          <div className='block bg-none p-4 sm:p-8 xl:pr-20 w-full xl:w-1/2'>
            <div className='article-project-right--inner lg:float-right lg:text-right lg:items-end'>
              <Link href='/about'>
                <a>
                  <h2 className='article-project-title'>{title}</h2>
                </a>
              </Link>
              <span className='article-project-description'>{copy}</span>
              <Link href='/about'>
                <a ref={mainLink} onClick={handleClick} className='article-link'>
                  <Image src='/icons/arrow_thin.png' width={20} height={12} alt={linkAlt} />
                  {linkLabel}
                </a>
              </Link>
            </div>
          </div>
          <div
            id='about-geometry'
            className='bg-grey2 w-full h-full block p-4 sm:p-8 lg:w-1/2 2xl:pl-20 pt-4 2xl:p-20'
          >
            {geometry}
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturedAboutMe.propTypes = {};

export default FeaturedAboutMe;
