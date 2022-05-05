import Head from "next/head";
import {
  Layout,
  HeroWithVideo,
  FeaturedArticle,
  FeaturedArticleReverse,
  FeaturedAboutMe,
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
          src='/videos/fluid_latest.mp4'
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

          <FeaturedAboutMe
            title='About Me'
            copy='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam in consequat, at adipiscing tristique amet sed vel. Molestie semper viverra et vulputate sit eu, varius. Massa magna enim enim gravida convallis turpis porta. Eget non gravida a mauris ultrices consectetur.'
            linkHref='/about'
            linkAlt='Go to About Me'
            linkLabel='More About Me'
            geometry={
              <Canvas className='aspect-video'>
                <GeometryOrbitControl />
                <ambientLight/>
                {/* <pointLight position={[0, 100, 0]} />
                <pointLight position={[100, 200, 100]} />
                <pointLight position={[-100, -200, -100]} /> */}
                <Geometry />
              </Canvas>
            }
          />
        </article>
      </Layout>
    </div>
  );
}
