import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { LinkArrow } from "@/components";

function FeaturedArticleReverse({
  title,
  copy,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  imageTagID,
  imageBGColor,
  linkHref,
  linkAlt,
  linkLabel,
}) {
  let imageClassNames = cx("article-project-right pt-4 sm:p-8 2xl:p-20 bg-grey2");

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
    <section className='article-project-container mt-16 md:mt-16 lg:mt-20 2xl:mt-40 max:mt-42'>
      <div className='mx-auto cs-grid p-0 lg:p-8 2xl:p-0'>
        <div
          className='col-start-1 col-span-16 xl:col-start-2 xl:col-span-14 article-project flex flex-col-reverse lg:flex-row hover:custom-shadow-tablet hover:cursor-pointer max:max-w-screen-max'
          href={linkHref}
          onClick={redirectClick}
        >
          <div className='block bg-none p-4 sm:p-8 xl:pr-20 w-full lg:w-1/2'>
            <div className='article-project-right--inner lg:float-right lg:text-right lg:items-end'>
              <Link href={linkHref}>
                <a>
                  <h2 className='article-project-title'>{title}</h2>
                </a>
              </Link>
              <span className='article-project-description'>{copy}</span>
              <Link href={linkHref}>
                <a ref={mainLink} onClick={handleClick} className='article-link'>
                  <LinkArrow linkAlt={linkAlt} />
                  {linkLabel}
                </a>
              </Link>
            </div>
          </div>
          <div id={imageTagID} className={imageClassNames}>
            <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} priority />
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturedArticleReverse.propTypes = {};

export default FeaturedArticleReverse;
