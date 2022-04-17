import Head from "next/head";
import Image from "next/image";
import { Layout, Slideshow } from "@/components";

export default function TravelWebsiteTest() {
  return (
    <div>
      <Head>
        <title>Case Study - Travel Website</title>
      </Head>

      <Layout>
        <section className='bg-beige2 pt-36 md:pt-16 lg:pt-20 xl:pt-24'>
          <div className='cs-grid md:pr-0 pb-20 gap-y-0 mt-3 md:mt-2 lg:mt-4 2xl:mt-12'>
            <h1 className='font-display text-2xl font-bold inline-block col-span-full md:col-start-1 lg:col-start-2 xl:text-3xl max:col-start-6 max:col-span-6'>
              Case Study
            </h1>

            <h2 className='font-display inline-block text-4xl leading-tight mt-4 col-span-full md:col-start-1 lg:col-start-2 max:col-start-6 max:col-span-6 xs:text-5xl sm:text-6xl md:mt-0 md:text-6xl lg:text-6xl lg:self-start 2xl:text-7xl'>
              Clear View Escapes Travel Website
            </h2>
            <div className='inline-block mt-3 col-span-full md:col-start-1 lg:col-start-2 max:col-start-4 max:col-span-13 2max:col-start-2 2max:col-span-14 xl:mt-4 md:mt-2 lg:mt-4 2xl:mt-12'>
              <Image
                src='/images/cs-travel-website/mockup_imac_travel-site-bg.png'
                width={5760}
                height={3900}
                alt=''
              />
            </div>

            <p className='mt-3 font-accent leading-tight relative inline-block col-span-full md:col-start-1 lg:col-start-2 max:col-start-6 max:col-span-8'>
              Travel Website home screen.
            </p>
          </div>
        </section>
        <div className='cs-grid'>
          <section id='cs-aside' className='cs-aside--grid'>
            <div id='timeline' className='flex justify-between overflow-x-hidden'>
              <div className='font-accent article-date-accent-line relative inline-block pr-2'>
                Start 06/2019
              </div>
              <div className='font-accent inline-block pl-2 bg-white z-10'>End 02/2022</div>
            </div>
            <div className='cs-sidebar-first'>
              <h5 className='text-sm font-bold'>Role</h5>
              <p className='mt-2'>Research</p>
              <p>Strategy</p>
              <p>Design</p>
              <p>Development</p>
            </div>
            <div className='cs-sidebar-next'>
              <h5 className='text-sm font-bold'>Technology</h5>
              <p className='mt-2'>Figma</p>
              <p>HTML, CSS, JS</p>
              <p>Next.js, React</p>
              <p>TailwindCSS</p>
            </div>
          </section>
          <section className='order-2 col-span-full mt-8 mb-24 md:col-span-11 lg:order-1 lg:col-span-9 lg:col-start-2 xl:col-span-8 xl:col-start-5 2xl:col-span-6 2xl:col-start-6 2xl:mt-20'>
            <article className='cs-paragraph--sans cs-paragraph--first'>
              <p>
                This website was created as part of a Udacity course that teaches the fundamentals
                of modern web development. As simple as the design was, creating this website helped
                me develop valuable skills and insights to understand the web development process
                better. In particular, I became familiarized with Gulp and its plugins to create
                tasks and build scripts to automate and streamline development. I learned semantic
                HTML, the CSS Box model, BEM, various CSS tricks, and Javascript. I also learned the
                ideas behind mobile first development, responsive design, CSS flexbox and grid, and
                methods to optimize website performance.
              </p>

              <div className='gallery flex flex-wrap mt-8 lg:mt-20'>
                <Image
                  className=''
                  src='/images/cs-travel-website/travel-website-full.png'
                  alt=''
                  width={1903}
                  height={3824}
                />
              </div>
            </article>
          </section>
        </div>
      </Layout>
    </div>
  );
}
