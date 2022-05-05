import Head from "next/head";
import Image from "next/image";
import { Layout } from "@/components";

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
              <div className='font-display md:w-2/3 md:pl-6 lg:pl-8 2xl:pl-12'>
                <h1 className='text-4xl xs:text-5xl sm:text-6xl md:text-6xl 2xl:text-7xl'>
                  Matthew Pham
                </h1>
                <h2 className='text-lg xs:text-xl font-accent tracking-tight font-medium'>
                  UX/UI Designer & Developer
                </h2>
              </div>
              <div className='mt-3 md:mt-0 md:w-1/3 2xl:w-1/4'>
                <Image
                  src='/images/profile-image.png'
                  alt='Photo of Matthew Pham'
                  height={450}
                  width={399}
                />
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
                <p className='mt-2'>mph@ucdavis.edu</p>
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
                  CV
                </a>
              </div>
            </section>
            <section className='mt-8 md:w-2/3 md:float-right md:pl-6 lg:float-left lg:pl-0 lg:pr-8 2xl:pr-0 2xl:w-7/12 2xl:mr-20 2xl:max-w-[700px]'>
              <article className='font-base leading-relaxed text-base space-y-4 xs:space-y-6 2xl:space-y-4 max:space-y-6 2xl:max-w-3xl'>
                <p className=''>
                  From a young age, I learned people experience the world differently, and that
                  these experiences shape the way people perceive and interact with the world.
                </p>
                <p className=''>
                  Born and raised in San Jose, I come from a refugee family of the Vietnam War.
                  Growing up with a grandmother with dementia and a permanently disabled father, I
                  spent most of my time as their caregiver. As a result, I learned to be empathetic,
                  observant, and aware as I tried to understand my environment and the people in it.
                </p>
                <p className=''>
                  For most of my childhood, my keen sense of awareness highlighted how different I
                  was from my peers. Not feeling like I belonged, I found an escape and passion in
                  technology and computers.
                </p>
                <p className=''>
                  In high school, I spent two years in photography developing an eye for design.
                  Some of my most fond experiences from high school were the hours I spent inside
                  the darkroom developing film.
                </p>
                <p className=''>
                  In college, I learned to channel my empathy into compassion. This call to service
                  became especially clear to me when I devoted most of my time trying to make a
                  change in my fraternity, sacrificing my own academics in the process. In 2018, I
                  graduated from UC Davis with a B.S degree in Computational Cognitive Science, an
                  interdisciplinary field that allowed me to study both of my childhood passions:
                  computer science and psychology.
                </p>
                <p className=''>
                  Since then, I&apos;ve been studying, learning, refining my eye for design to
                  become a skilled UX designer and developer. After a few years of hard work, I
                  finally feel ready for full time opportunities to begin the next chapter in my
                  career. As a UX generalist, I&apos;m able to play a flexible support role,
                  adapting to the needs of the team.
                </p>
                <p className=''>
                  I&apos;m a curious person that&apos;s always striving to learn more. I&apos;m a
                  generalist with a strong desire for mastery and excellence. Outside of work, I
                  enjoy film and digital photography, pretending I’m a DJ, spending time out in
                  nature, and immersing myself in different cultures. I&apos;m also an avid Formula
                  1 fan and PC gamer.
                </p>

                <figure className='cs-figure mx-auto w-full 2xl:w-3/5 pt-8 max:pt-20'>
                  <Image
                    src='/images/about/cs_hexagon.svg'
                    alt=''
                    width='513'
                    height='436'
                  />
                  <figcaption className='cs-figure-caption mx-auto'>Cognitive Science Hexagon</figcaption>
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
