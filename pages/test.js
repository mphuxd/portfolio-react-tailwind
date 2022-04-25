import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout, HeroGeometry, FeaturedArticle, FeaturedArticleReverse } from "@/components";

export default function Test() {
  return (
    <div className=''>
      <Head>
        <title>Matthew Pham Portfolio</title>
      </Head>

      <Layout>
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
              <span className='hero--subtext block text-base font-display md:text-xl text-center lg:text-center lg:text-xl max:text-[28px]'>
                UX Engineer with a degree in Computational Cognitive Science
              </span>
            </div>
          </section>
        </div>

        <article id='work' className='article-section'>
          <FeaturedArticle
            title='Psi Chi Omega Fraternity Website'
            copy='Corporate style website for an Asian-American interest fraternity to help member recruitment. Involves validation, user research, UX strategy, and branding with custom design system & UI designed in Figma. Developed with JAMstack, deployed on Heroku & Vercel. Independent project from start to finish.'
            imageSrc='/images/pxo-website-image-nobg.png'
            imageAlt='Mockup of Psi Chi Omega fraternity website on macbook laptop'
            imageWidth={2577}
            imageHeight={1611}
            imageBgColor='bg-[#111111]'
            linkHref='/case-study/psi-chi-omega'
            linkAlt=''
          />

          <FeaturedArticleReverse
            title='Clear View Escapes Travel Website'
            copy='Travel company website developed as part of an online web development course. Redesigned the website homepage for UX practice.'
            imageSrc='/images/cs-travel-website/travel-website.png'
            imageAlt='Clear View Escapes Homepage'
            imageTagID='featured-image-blue'
            imageWidth={2577}
            imageHeight={1611}
            imageBGColor='bg-[#2f5572]'
            linkHref='/case-study/travel-website'
            linkAlt='Read More'
            linkLabel='View Case Study'
          />

          <FeaturedArticle
            title='Portfolio Website'
            copy='First independent website. Initially created as a static website in HTML/CSS/JS, then migrated to Next.js. With four major redesigns.'
            imageSrc='/images/pxo-website-image-nobg.png'
            imageAlt='Mockup of Psi Chi Omega fraternity website on macbook laptop'
            imageWidth={2577}
            imageHeight={1611}
            linkHref='/about'
            linkAlt=''
          />

          <FeaturedArticleReverse
            title='About Me'
            copy=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam in consequat, at adipiscing tristique amet sed vel. Molestie semper viverra et vulputate sit eu, varius. Massa magna enim enim gravida convallis turpis porta. Eget non gravida a mauris ultrices consectetur.'
            imageSrc='/images/pxo-website-image-nobg.png'
            imageAlt='About Me'
            imageTagID='about-image'
            imageWidth={2577}
            imageHeight={1611}
            imageBGColor='bg-[#0062A9]'
            linkHref='/about'
            linkAlt='More About Me'
            linkLabel='More About Me'
          />

          {/* <section className='article-section mt-6 md:mt-8 md:pt-8 lg:pt-0 lg:mt-0'>
            <Link href='/about' passHref>
              <div className='article-project-container lg:my-32 2xl:my-40'>
                <div className='mx-auto cs-grid p-0 lg:p-8 2xl:p-0'>
                  <div className='col-start-1 col-span-16 xl:col-start-2 xl:col-span-14 article-project flex flex-col-reverse lg:flex-row hover:custom-shadow-tablet hover:cursor-pointer  max:max-w-screen-max'>
                    <div className='block bg-none p-4 sm:p-8 xl:pr-20 w-full xl:w-1/2'>
                      <div className='article-project-right--inner lg:float-right lg:text-right lg:items-end'>
                        <h2 className='article-project-title'>About Me</h2>
                        <span className='article-project-description'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam in
                          consequat, at adipiscing tristique amet sed vel. Molestie semper viverra
                          et vulputate sit eu, varius. Massa magna enim enim gravida convallis
                          turpis porta. Eget non gravida a mauris ultrices consectetur.
                        </span>
                        <span className='article-link'>
                          <Image
                            className='article-link-icon'
                            src='/images/arrow.svg'
                            alt=''
                            width={26}
                            height={14}
                          />
                          More About Me
                        </span>
                      </div>
                    </div>
                    <div className='article-project-right pt-4 sm:p-8 2xl:p-20 bg-grey2'>
                      <Image
                        src='/images/pxo-website-image-nobg.png'
                        alt=''
                        width={2577}
                        height={1611}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </section> */}
        </article>
      </Layout>
    </div>
  );
}
