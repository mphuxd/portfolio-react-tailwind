import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout,LinkOut } from "@/components";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>About | Matthew Pham Portfolio</title>
      </Head>

      <Layout>
        <section className='p-3 pt-36 sm:p-8 sm:pt-36 mb-24 lg:w-5/6 lg:float-right xl:w-3/4 2xl:pt-24 max-w-screen-max 2max:ml-[33%] 2max:mr-auto 2max:float-none'>
          <section>
            <h1 className='font-display text-2xl font-bold xl:text-3xl'>About</h1>
            <div className='flex flex-col lg:mt-4 md:flex-row-reverse w-full justify-end'>
              <div className='font-display md:w-2/3'>
                <h1 className='text-4xl xs:text-5xl sm:text-6xl md:text-6xl 2xl:text-7xl'>
                  Matthew Pham
                </h1>
                <h2 className='text-lg  font-accent tracking-tight font-medium uppercase'>
                  UX/UI Designer & Developer
                </h2>
              </div>
            </div>
          </section>
          <div className='w-screen md:clear-both'></div>
          <div id='inner' className='2xl:flex 2xl:flex-row-reverse 2xl:justify-end 2xl:mt-4'>
            <section
              id='sidebar'
              className='mt-10 md:mt-8 md:w-1/3 md:float-left lg:float-right 2xl:w-1/4 2xl:mt-8 max:w-1/4'
            >
              <div className='font-accent border border-grey2 p-5'>
                <h5 className='text-sm font-bold'>Contact</h5>
                <a href='mailto:mph@ucdavis.edu' className='mt-2 hover:underline'>
                  mph@ucdavis.edu
                </a>
                <p>408-833-8967</p>
              </div>
              <div className='font-accent border border-t-0 border-grey2 p-5'>
                <h5 className='text-sm font-bold'>Skills</h5>
                <p className='mt-2'>UX/UI Design</p>
                <p>Front-end Development</p>
                <a
                  className='relative inline-block sidebar-external-link-arrow pl-3 underline'
                  href='assets/files/resume.pdf'
                >
                  Resume
                </a>
              </div>
            </section>
            <section className='mt-8 md:w-2/3 md:float-right md:pl-6 lg:float-left lg:pl-0 lg:pr-8 2xl:pr-0 2xl:w-7/12 2xl:mr-20 2xl:max-w-[700px]'>
              <article className='font-base leading-relaxed text-base space-y-4 xs:space-y-6 2xl:space-y-4 max:space-y-6 2xl:max-w-3xl'>
                <p className=''>
                I’m Matthew, a UX designer and front-end developer who helps bridge the gap between design and development. I’m a UX generalist who loves to wear multiple hats and get involved in all aspects of project development from ideation to implementation.
                </p>
                <p className=''>
                I’m also the author and maintainer of <LinkOut inline text="The UX Interview Handbook" href="https://uxinterviewhandbook.com/"/>—a free, open-source website that helps UXers prepare for their interviews. Aside from UX, I enjoy film and digital photography, DJing, outdoor adventures, and immersing myself in new environments.
                </p>                  
                <p className=''>
                  If you think I would make a valuable asset to your company, please feel free to contact me at <a href='mailto:mph@ucdavis.edu' className='underline text-blue visited:text-ruby'>
                  mph@ucdavis.edu
                </a>. Or, you can check out my <a
                className="underline text-blue visited:text-ruby"
                  href='/files/Pham_Matthew_Resume-6-30-22.pdf'
                  target='_blank'
                  rel='noreferrer'
                >
                  resume
                </a> and take a look at my <Link href='/#work'>
                  <a className='underline text-blue visited:text-ruby'>case studies</a>
                </Link>.
                </p>

                <figure className='cs-figure mx-auto w-full 2xl:w-3/5 pt-8 max:pt-20'>
                  <Image
                    src='/images/about/cs_hexagon.svg'
                    alt=''
                    width='513'
                    height='436'
                    layout='responsive'
                  />
                  <figcaption className='cs-figure-caption mx-auto'>
                    Cognitive Science Hexagon
                  </figcaption>
                </figure>
              </article>
            </section>
          </div>
        </section>
        <div className='w-screen md:clear-both'></div>
      </Layout>
    </div>
  );
}
