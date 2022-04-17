import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

function FeaturedArticleReverse({
  title,
  copy,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageTagID,
  linkHref,
  linkAlt,

}) {
  let classNames = cx([]);
  return (
    <section className='article-section mt-6 md:mt-8 md:pt-8 lg:pt-0 lg:mt-0'>
      <Link href={linkHref} passHref>
        <div className='article-project-container lg:my-20 2xl:my-40'>
          <div className='mx-auto cs-grid p-0 lg:p-8 2xl:p-0'>
            <div className='col-start-1 col-span-16 xl:col-start-2 xl:col-span-14 article-project flex flex-col-reverse lg:flex-row hover:custom-shadow-tablet hover:cursor-pointer  max:max-w-screen-max'>
              <div className='block bg-none p-4 sm:p-8 xl:pr-20 w-full xl:w-1/2'>
                <div className='article-project-right--inner lg:float-right lg:text-right lg:items-end'>
                  <h2 className='article-project-title'>{title}</h2>
                  <span className='article-project-description'>{copy}</span>
                  <span className='article-link'>
                    <Image
                      className='article-link-icon'
                      src='/images/arrow.svg'
                      alt={linkAlt}
                      width={26}
                      height={14}
                    />
                    More About Me
                  </span>
                </div>
              </div>
              <div id={imageTagID} className='article-project-right pt-4 sm:p-8 2xl:p-20 bg-grey2'>
                <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

FeaturedArticleReverse.propTypes = {};

export default FeaturedArticleReverse;
