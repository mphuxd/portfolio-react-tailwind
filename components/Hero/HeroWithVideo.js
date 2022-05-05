import React from "react";
import PropTypes from "prop-types";

function HeroWithVideo({ name, title, src }) {
  return (
    <div className='h-screen min-h-[700px] max-h-[775px] md:max-h-[850px] lg:max-h-[none] 2max:max-h-[1800px]'>
      <video
        className='object-cover w-full h-full absolute z-0 border-none overflow-hidden outline-none '
        autoPlay
        muted
        loop
      >
        <source src='/videos/fluid_latest.mp4' />
      </video>
      <section className='cs-grid auto-rows-max pt-52 pb-20 xl:my-auto xl:py-48 lg:py-32 2xl:py-40 max:py-48 2max:pt-96 relative'>
        <div className='content-center h-fit my-auto z-10 col-start-1 col-span-16 sm:col-span-16 md:py-12 lg:py-20 md:col-span-12 md:col-start-3 lg:col-span-10 lg:col-start-4 xl:col-span-8 xl:col-start-5'>
          <h1 className='font-display text-4xl xs:text-5xl sm:text-5xl md:text-5xl md:justify-self-center lg:text-4xl xl:text-6xl 2xl:text-[64px] max:text-8xl relative text-center mx-auto lg:mx-0 lg:text-center 2max:font-medium 2max:text-9xl'>
            Matthew Pham
          </h1>
          <span className='hero--subtext block text-base font-accent uppercase tracking-tight md:text-xl text-center lg:text-center lg:text-xl'>
            UX/UI Designer & Developer
          </span>
        </div>
      </section>
    </div>
  );
}

HeroWithVideo.propTypes = {};

export default HeroWithVideo;
