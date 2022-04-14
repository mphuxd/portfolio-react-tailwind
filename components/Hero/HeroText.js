import React from "react";
import PropTypes from "prop-types";

function HeroText(props) {
  return (
    <div className='col-start-1 col-span-16 sm:col-span-16 md:col-span-12 md:col-start-3 lg:col-start-1 lg:col-span-8 xl:col-start-2 md:py-20 xl:col-span-7 content-center h-fit my-auto max:col-start-2'>
      <h1 className='font-display text-4xl xs:text-5xl sm:text-5xl md:text-5xl md:justify-self-center lg:text-4xl xl:text-6xl 2xl:text-[64px] max:text-6xl relative text-center mx-auto lg:mx-0 lg:text-left'>
        Hey, I&apos;m Matt
      </h1>
      <span className='hero--subtext block font-base text-base md:text-xl text-center lg:text-left lg:text-xl max:text-[20px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id viverra aliquet nullam eget
        scelerisque varius mattis integer sit. Diam cum viverra volutpat rhon.
      </span>
    </div>
  );
}

HeroText.propTypes = {};

export default HeroText;
