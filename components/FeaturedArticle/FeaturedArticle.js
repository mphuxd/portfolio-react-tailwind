import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { LinkArrow } from "@/components";

function FeaturedArticle({
  title,
  copy,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  linkHref,
  linkAlt,
  imageBgColor,
  hoverImageBGColor,
}) {
  let classNames = cx([]);
  let imageClassNames = cx("article-project-left bg-grey2 h-full block");
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
      <div className='mx-auto cs-grid p-0 lg:p-8 2xl:p-0 w-full'>
        <div
          className='col-start-1 col-span-16 xl:col-start-2 xl:col-span-14 2xl:max:col-start-2 max:col-span-14 article-project hover:custom-shadow-tablet hover:cursor-pointer max:max-w-screen-max '
          href={linkHref}
          onClick={redirectClick}
        >
          <div id='featured-image' className={imageClassNames}>
            <Image
              layout='responsive'
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              priority
            />
          </div>
          <div className='article-project-right'>
            <div className='article-project-right--inner'>
              <Link href={linkHref}>
                <a>
                  <h2 className='article-project-title'>{title}</h2>
                </a>
              </Link>
              <p className='article-project-description'>{copy}</p>
              <Link href={linkHref}>
                <a ref={mainLink} onClick={handleClick} className='article-link'>
                  <LinkArrow linkAlt={linkAlt} />
                  View Case Study
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturedArticle.propTypes = {};

export default FeaturedArticle;
