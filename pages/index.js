import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout, HeroGeometry } from "@/components";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Matthew Pham Portfolio</title>
      </Head>

      <Layout>
        <section className='cs-grid auto-rows-max pt-40 pb-20 xl:my-auto xl:py-48 lg:py-32 2xl:py-40 max:py-48 2max:pt-72 relative'>
          {/* <div className='hero--image-bg hero--image'></div> */}
          <div className='col-start-1 col-span-16 sm:col-span-16 md:py-12  lg:py-20 md:col-span-12 md:col-start-3 lg:col-span-10 lg:col-start-4 xl:col-span-8 xl:col-start-5 content-center h-fit my-auto'>
            <h1 className='font-display text-4xl xs:text-5xl sm:text-5xl md:text-5xl md:justify-self-center lg:text-4xl xl:text-6xl 2xl:text-[64px] max:text-8xl relative text-center mx-auto lg:mx-0 lg:text-center'>
              Hey, I&apos;m Matt
            </h1>
            <span className='hero--subtext block font-base text-base md:text-xl text-center lg:text-center lg:text-xl max:text-[28px]'>
              Trying my best to do good things by making great products. Aspiring UX Engineer with a
              background in Computational Cognitive Science.
            </span>
          </div>
          <HeroGeometry
            classNames={
              "max-h-[320px] min-h-[280px] col-span-16 w-full my-auto h-full sm:min-h-[400px] lg:col-span-10 lg:col-start-4 xl:col-span-8 xl:col-start-5 lg:justify-self-center lg:absolute lg:translate-y-[20%] xl:translate-y-[36%] xl:min-h-500 2xl:min-h-[400px] 2xl:translate-y-[30%] max:translate-y-[20%] max:min-h-[600px] 2max:translate-y-[35%] z-0"
            }
          />
        </section>

        <article id='work' className='article-section'>
          <section className='article-project-container lg:my-32 2xl:my-40 max:mt-42'>
            <Link href='/case-study/psi-chi-omega'>
              <a className='mx-auto cs-grid p-0 lg:p-8 2xl:p-0'>
                <div className='col-start-1 col-span-16 xl:col-start-2 xl:col-span-14 2xl:max:col-start-2 max:col-span-14 article-project hover:custom-shadow-tablet max:max-w-screen-max'>
                  <div className='article-project-left bg-grey2'>
                    <Image
                      className=''
                      src='/images/pxo-website-image-nobg.png'
                      alt='Mockup of Psi Chi Omega fraternity website on macbook laptop'
                      width={2577}
                      height={1611}
                    />
                  </div>
                  <div className='article-project-right'>
                    <div className='article-project-right--inner'>
                      <h2 className='article-project-title'>Psi Chi Omega Fraternity Website</h2>
                      <p className='article-project-description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam in
                        consequat, at adipiscing tristique amet sed vel. Molestie semper viverra et
                        vulputate sit eu, varius. Massa magna enim enim gravida convallis turpis
                        porta. Eget non gravida a mauris ultrices consectetur.
                      </p>
                      <span className='article-link'>
                        <Image
                          className='article-link-icon'
                          src='/images/arrow.svg'
                          width={26}
                          height={14}
                          alt=''
                        />
                        View Case Study
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </section>

          <section className='article-section mt-6 md:mt-8 md:pt-8 lg:pt-0 lg:mt-0'>
            <Link href='/about'>
              <a className='article-project-container lg:my-32 2xl:my-40'>
                <div className='mx-auto cs-grid p-0 lg:p-8 2xl:p-0'>
                  <div className='col-start-1 col-span-16 xl:col-start-2 xl:col-span-14 article-project flex flex-col-reverse lg:flex-row hover:custom-shadow-tablet max:max-w-screen-max'>
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
              </a>
            </Link>
          </section>
        </article>
      </Layout>
    </div>
  );
}
