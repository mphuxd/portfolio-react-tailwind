import Head from "next/head";
import {
  Layout,
  HeroWithVideo,
  FeaturedArticle,
  FeaturedArticleReverse,
  FeaturedAboutMe,
  FeaturedAboutMeReverse,
  Meta,
  Geometry,
  GeometryOrbitControl,
} from "@/components";
import { Canvas } from "@react-three/fiber";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <Meta />
        <title>Matthew Pham Portfolio</title>
      </Head>

      <Layout>
        <HeroWithVideo
          name='Matthew Pham'
          title='UX/UI Designer & Developer'
          src='https://res.cloudinary.com/dozdscl51/video/upload/v1652486077/fluid_optimized_aaaz0y.mp4'
        />

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
            copy='Travel company website developed as part of an online web development course. I later redesigned the website homepage for UX practice.'
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

          <FeaturedAboutMeReverse
            title='About Me'
            copy='San Jose native. UC Davis graduate. Just trying my best to do good things with the skills I have. Currently a UX/UI designer & front-end developer aspiring to become a UX engineer.'
            linkHref='/about'
            linkAlt='Go to About Me'
            linkLabel='More About Me'
            geometry={
              <Canvas className='aspect-video'>
                <GeometryOrbitControl />
                <spotLight color={"white"} position={[1000, 1000, 1000]} castShadow />
                <Geometry />
              </Canvas>
            }
          />
        </article>
      </Layout>
    </div>
  );
}
