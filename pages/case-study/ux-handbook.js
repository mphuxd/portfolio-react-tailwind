import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout, Slideshow, LinkOut, LinkScrollUp, List } from "@/components";

export default function UXHandbook() {
  return (
    <div>
      <Head>
        <title>UX Interview Handbook Case Study | Matthew Pham Portfolio</title>
      </Head>
      <Layout>
        <section className='bg-beige2 pt-36 md:pt-16 lg:pt-20 xl:pt-24'>
          <div className='cs-grid md:pr-0 pb-20 gap-y-0'>
            <div className='cs-hero--center-container'>
              <h5 className='cs-hero--center-category_mobile'>Case Study</h5>
              <div className='cs-hero--center-image-container'>
                <h1 className='cs-hero--center-title'>The UX Interview Handbook</h1>
                <div className='inline-block relative w-full mt-3 md:mt-2 lg:mt-4 2xl:mt-12'>
                  <h5 className='cs-hero--center-category_desktop'>Case Study</h5>
                  <div className='cs-hero-image min-w-full'>
                    <Image
                      src='/images/cs-ux-handbook/ux-interview-handbook-mockup-bg.png'
                      alt='Image of Poseidon statue in Berlin. Psi Chi Omega Mascot.'
                      width={3930}
                      height={2210}
                      layout='responsive'
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            <span
              id='cs-hero-caption'
              className='cs-hero--center-image-caption col-span-full md:col-start-2 xl:col-start-5 2xl:col-start-6 max:col-start-6 max:col-span-10'
            >
              UX Interview Handbook Homepage
            </span>
          </div>
        </section>

        <div id='preface' className='w-full'>
          <section className='cs-grid'>
            <section id='cs-aside' className='cs-aside--grid'>
              <div id='timeline' className='flex justify-between overflow-x-hidden'>
                <div className='font-accent article-date-accent-line relative inline-block pr-2'>
                  Start 05/2022
                </div>
                <div className='font-accent inline-block pl-2 bg-white z-10'>Present</div>
              </div>
              <div className='cs-sidebar-first'>
                <h5 className='text-sm font-bold'>Role</h5>
                <p className='mt-2'>Sole Creator</p>
                <p>Research</p>
                <p>Content & Strategy</p>
                <p>Design</p>
                <p>Development</p>
              </div>
              <div className='cs-sidebar-next'>
                <h5 className='text-sm font-bold'>Technology</h5>
                <p className='mt-2'>Figma</p>
                <p>HTML, CSS, JS, MDX</p>
                <p>React</p>
                <p>Docusaurus</p>
              </div>
              <div className='cs-sidebar-next'>
                <h5 className='text-sm font-bold mb-2'>Links</h5>
                <LinkOut text='Demo Website' href='https://psi-chi-omega.vercel.app/' />
                <LinkOut text='Github Repo' href='https://github.com/mphuxd/psi-chi-omega-react' />
              </div>
            </section>
            <section
              id='cs-intro'
              className='order-2 col-span-full mt-8 mb-24 md:col-span-11 lg:order-1 lg:col-span-9 lg:col-start-2 xl:col-span-8 xl:col-start-5 2xl:col-span-6 2xl:col-start-6'
            >
              <div className='2xl:mt-20'>
                <h2 className='cs-h3'>What is UX Interview Handbook?</h2>
                <p className='cs-paragraph--sans cs-paragraph-first enlarge-first'>
                  The UX Interview Handbook is a free collection of resources designed to help UX
                  professionals prepare for their interviews. Inspired by similar resources such as
                  the Front End Interview Handbook & The Tech Interview Handbook, this started as a
                  personal resource to help me study and prepare for UX interviews and decided to
                  make it open source to help others prepare for their interviews too.
                </p>
              </div>
              <div className='2xl:mt-20'>
                <h2 className='cs-h3'>The Problem</h2>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  Job searching is an extremely stressful period of uncertainty. UX as an industry
                  has become really popular, over-saturated, and highly competitive. It&apos;s
                  become a gold rush for people to get into the tech industry without the challenge
                  of learning how to code, and the UX industry has pushed back by increasing the
                  barriers to entry.
                </p>
                <p className='cs-paragraph--sans'>
                  College degrees are no longer enough, employers expect well-crafted portfolios
                  with well-written case studies, and years of experience to even be considered. If
                  you were able to get a relevant internship in college, you&apos;re probably set.
                  But if you didn&apos;t, if you struggled in college, or if you&apos;re trying to
                  make a career move from another field, getting your foot in the UX door is{" "}
                  <strong>hard</strong>. I know because I&apos;ve been there.
                </p>
                <p className='cs-paragraph--sans'>
                  For juniors, this means they have to do more to prove that they belong in the
                  industry. UX interviews have become more difficult, challenging and intensive.
                  Regardless of how you feel about whiteboard design challenges, portfolio
                  presentations, app reviews, the reality is that these are all increasingly common
                  in interviews, and thus interview preparation has become key into getting their
                  foot into the door.
                </p>
                <p className='cs-paragraph--sans'>
                  If UX juniors are able to get an interview, what can they do to increase their
                  chances of receiving an offer? How might we support juniors trying to prepare for
                  their UX interviews? UX Designers need to prepare for UX interviews but there
                  isn&apos;t a good definitive or convenient resource that they can rely on to guide
                  them through the preparation & interview process.
                </p>
              </div>
              <div className='2xl:mt-20'>
                <h2 className='cs-h3'>The Solution</h2>
                <p className='cs-paragraph--sans  cs-paragraph-first'>
                  The UX industry is rapidly growing faster than ever, but we also have a
                  responsibility to pave a path to help UX juniors follow along.
                </p>
                <p className='cs-paragraph--sans'>
                  When I was studying for front-end interviews, I came across so many comprehensive
                  interview studying guides such as front-end & tech handbook, etc. But for UX,
                  there were only medium articles or the standard blog post with the same questions
                  repeated over and over. Most of them didn’t even provide answers, so if users had
                  problems answering the question, they have to go and find the answer themselves.
                </p>
                <p className='cs-paragraph--sans'>
                  A more convenient approach is to have a single collection with questions and
                  answers immediately available with links to reliable sources so the user can learn
                  more. Without a reliable resource to prepare for UX interviews, I decided to
                  create my own.
                </p>
              </div>
            </section>
            <span className='cs-article--end-divider order-3' />
          </section>
        </div>

        <article id='user-research' className='cs-grid-wrapper mt-8 mb-24 w-full'>
          <div className='cs-grid'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>UX Research</h2>
              {/* <p className='mt-4 cs-paragraph--sans cs-paragraph-first'>
                This is one of those rare projects that didn't require much idea validation and
                here's why. There are already several other handbooks for tech and front-end
                development that are really popular and get a lot of traffic. Since UX is a rapidly
                growing field, there would be a large market and demand for this type of resource as
                well. If it would be valuable for myself, then others could certainly find it
                useful.
              </p>
              <p className='mt-4 cs-paragraph--sans'>
                When thinking about how I would go about creating this project, I realized it
                wouldn't take much effort development wise because there were already documentation
                frameworks that can be used to easily make this. If others could easily develop it,
                then being first to market would be the most important.
              </p>
              <p className='mt-4 cs-paragraph--sans'>
                My strategy generally was create it first and see if it gets any interest. If it
                does, then my idea gets market validation and is a sign to continue. Then iterate
                and make it better.
              </p> */}
            </div>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Why current resources aren&apos;t good enough</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                I keep mentioning the tech & front-end handbook as inspirations for this website. To
                see why they are so good, let&apos;s first take a look at the current top resources
                for UX interview questions on Google.
              </p>
            </section>
          </div>

          <div className='w-full bg-[#e5e5e5] mt-8 mb-6 xs:mb-3 lg:mt-10 lg:mb-6 2xl:mt-16 2xl:mb-16'>
            <div className='cs-grid'>
              <figure className='cs-figure mb-0 col-span-full '>
                <Image
                  className=''
                  src='/images/cs-ux-handbook/current-resources.png'
                  alt='User Persona'
                  width={1893}
                  height={862}
                  layout='responsive'
                />
              </figure>
            </div>
          </div>
          <div className='cs-grid'>
            <section className='cs-section--default-region'>
              <ul className='list-outside p-4 list-disc space-y-2 font-base'>
                <li>
                  These are only single page blog posts on broad content websites designed to bring
                  in web traffic to make money through ad revenue and by selling courses, products,
                  and services.
                </li>
                <li>
                  They mostly only ask behavioral questions. While these are important, it can be
                  misleading because technical questions are also commonly asked to screen
                  candidates.
                </li>
                <li>
                  The questions asked are similar to each other and not exactly relevant to UX.
                  Users who prepare using only the top three websites can get a false sense of
                  confidence and preparedness which can backfire in their interviews.
                </li>
                <li>
                  The article titles state &quot;Question and Answers&quot; but it doesn&apos;t
                  actually answer the questions. Instead, they give advice on how they would
                  approach the questions.
                </li>
                <li>
                  They don&apos;t link resources or cite their sources. If they don&apos;t answer
                  them, they should redirect the user to somewhere that does.
                </li>
                <li>
                  2 of 3 websites have poor UX. UX designers are sensitive to bad UX, which makes it
                  annoying to use.
                </li>
              </ul>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                These types of webpages are the top search results for other similar, related search
                phrases as well. There is no existing resource dedicated to just preparing UX
                designers for their interviews, except one, and its a product design book you have
                to buy.
              </p>
            </section>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>What makes the other guides so great?</h3>
              <figure className='cs-figure mb-0'>
                <Image
                  className=''
                  src='/images/cs-ux-handbook/front-end-handbook.png'
                  alt='User Persona'
                  width={1903}
                  height={937}
                  layout='responsive'
                />
              </figure>
            </section>
            <section className='cs-section--default-region'>
              <ul className='list-outside p-4 list-disc space-y-2 font-base'>
                <li>
                  These websites are comprehensive resources dedicated to preparing people for
                  interviews. It covers all the important aspects of interviewing and provides a
                  clear structure for the entire interview process.
                </li>
                <li>
                  They provide clear answers to questions and cite their sources for readers to go
                  more in depth.
                </li>
                <li>
                  Simple, clean, and non-intrusive design. Uses a good navigation structure to allow
                  users to navigate and find content easily.
                </li>
                <li>
                  Free to use and open source. No paywalls preventing users from accessing content,
                  while open-source means its been vetted by the community.{" "}
                </li>
              </ul>

              <p className='cs-paragraph--sans cs-paragraph-first'>
                SWE & Front-end have a big open-source culture so there are tons of free guides to
                help people interview. Despite existing competition, these Tech Handbook & Front-end
                Handbook have both become a popular resource. If we imagine a website like this
                except for UX, then we can see what a successful UX interview handbook looks like.
                However to tailor it to UX, we need to understand our potential users.
              </p>
            </section>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Who are our users?</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                Primary demographics will be young, new graduates preparing for their first UX
                interviews. They might have a variety of different degrees and backgrounds. Most
                will not have a comprehensive knowledge of all interdisciplinary fields that
                influence UX, so the resource should briefly cover the all of the basics to make
                them more well-rounded UX practitioners.
              </p>
              <List>
                <li>
                  <b>UX juniors.</b> College students, new graduates, people who are trying to get
                  into UX and are preparing for their job interview.
                </li>
                <li>
                  <b>UX professionals</b>. They might be preparing to interview again but are
                  unfamiliar with the current interviewing process, or need to brush up on the
                  basics. They could be using it as a general UX reference.
                </li>
                <li>
                  <b>UX interviewers.</b> As a interviewing resource or question bank to ask their
                  candidates.
                </li>
              </List>

              <div className='overflow-hidden'>
                <h4 className='cs-topic font-bold'>Context. Environment. Habits</h4>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  When are they studying? What kind of mindset are they in? What are they doing?
                  What are their habits? Some people really immerse themselves into the preparation
                  process, studying whenever they have the downtime to think-during bus rides, car
                  rides, etc. This means it needs to be accessible and responsive to support all
                  users and devices. Additionally, they could be at their desk, room, library, etc -
                  in deep flow state.
                </p>
                <p className='cs-paragraph--sans'>
                  Behavioral questions require a lot of reflection to answer honestly, so its
                  important that the website supports that by removing any distractions - no flashy
                  animations, no surprises or anything unexpected, annoying, or distracting. Dark
                  mode is essential here in case they study throughout the night to make it easier
                  on their eyes and gives them more control of their environment.
                </p>
                <p className='cs-paragraph--sans'>
                  Some people might use it as a quick refresher before going into the interview.
                  Search should be important here so users can easily discover and reference the
                  content.
                </p>
              </div>
              <div className='overflow-hidden'>
                <h4 className='cs-topic font-bold'>User Goals & Needs</h4>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  Users are here because they are looking to prepare for their interviews. Their
                  idea of preparation might be to get interview questions and answers, but its
                  important to remember that preparation goes beyond that in order more fully meet
                  their needs and goals. With this perspective, it makes sense to also include
                  sections to prepare users for design challenges and presentations.
                </p>
                <p className='cs-paragraph--sans'>
                  How do users know to trust the information on this website? Briggs, Simpson, and
                  De Angeli (2004) looked at trust in a different type of informational
                  website—advice websites and developed a model of how people determine whether or
                  not to trust the advice they receive from websites. The authors developed a
                  22-point scale designed to break down trust into a set of judgments that can be
                  measured.
                </p>
                <List>
                  <li>
                    whether the user perceives the information to be prepared by an expert or a
                    knowledgeable source
                  </li>
                  <li>whether comments from other users were available on the site</li>
                  <li>if the site was owned by a known and respected company</li>
                  <li>if they had to wait a long time on the site</li>
                  <li>if different options were suggested by the site</li>
                  <li>if the site was perceived as hard to use</li>
                  <li>
                    whether the user felt involved in how the site constructed the advice offered
                  </li>
                  <li>if the site was perceived to be interactive</li>
                  <li>if the advice was tailored to the user</li>
                  <li>if the reasoning was explained to the user</li>
                  <li>if there was an opportunity to contact a human</li>
                  <li>if the advice appeared to be impartial</li>
                  <li>if the advice was perceived to be good and the user trusted it</li>
                  <li>if the site behaved in a predictable way</li>
                </List>
                <p className='cs-paragraph--sans'>
                  With this list, there are a few ways to tackle these issue. The first is through
                  transparency. For each question, cite the resources used to answer them. Show how
                  the questions were sourced, from experiences, medium articles, UX professionals
                  who interview others, glassdoor, and from UX colleagues in their own interviews.
                  It&apos;s possible to add user testimonials in the future so users can read about
                  real outcomes.
                </p>
                <p className='cs-paragraph--sans'>
                  NN Group also suggests creating an about me that makes it easy for people to find
                  information about the website and its intentions, and offer ways for the
                </p>
                <p className='cs-paragraph--sans'>
                  Additionally, I can ask for feedback in order to show them that we&apos;re
                  constantly looking to improve, and provide a way for people to contact me
                  directly. Open-source so its thoroughly proofread.
                </p>
              </div>
              <div className='overflow-hidden'>
                <h4 className='cs-topic font-bold'>Use Cases</h4>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  For normal prep, users can explore the website however they want. For people who
                  are more busy or have an interview coming up soon, they might be more selective of
                  things to learn, so it could be important to indicate which questions they should
                  focus on. For interviewers, they might use it as a question bank.
                </p>
              </div>
            </section>
            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Business Strategy & Goals</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                The general business strategy is to create a MVP for market validation and feedback,
                so set a deadline and limit the development scope in order to meet the deadline.
              </p>
              <p className='cs-paragraph--sans'>
                Monetization through sponsors & advertising deals. This means the website needs to
                be professional, accurate, trustworthy, and have high user traffic. For open source
                projects, marketing by posting it on online communities is going to be the best way
                to get it out there.
              </p>
              <p className='cs-paragraph--sans'>
                The idea is easy to copy and isn&apos;t difficult to develop, so being the first to
                market is going to be key to capture the initial market and gain an advantage on
                potential competitors. Should be released soon in June so new grads can use it to
                study for their interviews.
              </p>
            </section>
            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Constraints</h3>
              <List>
                <li>
                  Time to market is critical, so development has to be fast. With a custom website,
                  there is more flexibility for design but requires more developmental investment,
                  whereas Docusaurus has a quicker development time but it may be difficult to make
                  big changes as it locks you in an existing framework. Since the design I had in
                  mind was relatively simple and time to launch was critical, I opted for
                  Docusaurus.
                </li>
                <li>
                  Limited developmental sources. Since I would have to do both the design,
                  development, and copywriting, I need to limit the scope of the project in order to
                  meet the deadlines. The plan was to focus on development and technical questions
                  first, then get the behavioral questions sorted and figure how to answer those
                  later.
                </li>
                <li>
                  To work within these constraints, design and development went hand in hand. I
                  basically prototyped and designed the website as I developed it. This was a huge
                  advantage as the traditional design and prototyping may have taken too much time.
                </li>
              </List>
            </section>

            <span className='cs-article--end-divider' />
          </div>
        </article>

        <article id='ux-design' className='cs-grid-wrapper mt-8 mb-24 w-full'>
          <div className='cs-grid'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>UX Design</h2>
              <p className='mt-4 cs-paragraph--sans cs-paragraph-first'></p>
            </div>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Design Principles</h3>
              <List>
                <li>
                  <b>Reliable. </b>This means easily accessible from all devices, for all
                  environments, time of day. No paywalls. Fast with minimal payloads so you can
                  study at any time, or during last minute prep. On the go, or in bed.
                </li>
                <li>
                  <b>Simple.</b> Keeping it simple helps users focus on whats important-the content.
                  No distractions, no reason to make things more complicated than it has to be.{" "}
                </li>
                <li>
                  <b>Helpful.</b> The entire point of this project is to help people. Any feature
                  must be implemented with the intention to help.
                </li>
              </List>
            </section>
            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Information Architecture</h3>

              <div className='overflow-hidden'>
                <h4 className='cs-topic font-bold'>User Flows</h4>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  The user flow in this was pretty simple. It would be a linear flow to cover the
                  entire UX interview process step-by-step. This structure would be reflected in the
                  sidebar.
                </p>
                <p className='cs-paragraph--sans'>
                  Ideally, a sequential flow would resemble the most representative form of the
                  interview process. Not all interviews follow a set sequence, but it&apos;s
                  important to frame it in a way that creates a structured flow to provide a
                  framework for juniors to follow.
                </p>
              </div>
              <div className='overflow-hidden'>
                <h4 className='cs-topic font-bold'>Content Strategy</h4>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  The copywriting needed to be easy to understand, yet at the same time demonstrate
                  an understanding of the vocabulary and knowledge of UX. For technical questions,
                  the approach was to start with a simple answer, and then elaborate with more
                  complexity. The answers need to be brief, concise, and should link to resources
                  where they can dive deeper into the topics.
                </p>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  The strategy for behavioral questions were a little different because these
                  questions are designed to assess personality traits and etc. These were more
                  challenging and thus more time consuming to answer, so I decided to defer this
                  content later until I had more time to write my own answers and determine good
                  approaches. To do so, I&apos;m currently reading a few books on how to answer
                  these types of questions.
                </p>
              </div>
            </section>
            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>UI Design</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                Docusaurus comes with a preset theme with a design system and UI library. There were
                3 major changes I made to the original design.
              </p>

              <div className='overflow-hidden'>
                <h4 className='cs-topic font-bold'>Homepage</h4>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  I removed the default homepage and changed it to a document page so it has a
                  visible sidebar. This way the user can immediately see the table of contents and
                  understand what this handbook offers.
                </p>
              </div>
            </section>
            <aside className='cs-section-offset-right-region'>
              <figure className='cs-figure inline-block w-full lg:w-1/2 outline outline-1'>
                <Image
                  src='/images/cs-ux-handbook/default-homepage.png'
                  alt=''
                  width={1920}
                  height={937}
                  layout='responsive'
                />
              </figure>
              <figure className='cs-figure inline-block w-full lg:w-1/2 outline outline-1'>
                <Image
                  src='/images/cs-ux-handbook/swizzled-homepage.png'
                  alt=''
                  width={1920}
                  height={937}
                  layout='responsive'
                />
              </figure>
            </aside>
            <section className='cs-section--default-region'>
              <div className='overflow-hidden'>
                <h4 className='cs-topic font-bold'>Navigation Bar</h4>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  The navbar doesn&apos;t provide any extra functionality so I mostly got rid of it.
                  This also has an advantage of providing more space for users to focus on the
                  content.
                </p>
              </div>
            </section>

            <section className='cs-section--default-region'>
              <div className='overflow-hidden'>
                <h4 className='cs-topic font-bold'>Footer</h4>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  I refactored the layout to include the footer inside the main document container
                  primarily for aesthetic reasons but also because UX designers who use design
                  systems are used to this type of format more. Also when you scroll down, the
                  footer pushes the sidebar out of view. With the footer inside the document page,
                  the sidebar remains in the same location.
                </p>
              </div>
            </section>
            <aside className='cs-section-offset-right-region'>
              <figure className='cs-figure inline-block w-full lg:w-1/2 outline outline-1'>
                <Image
                  src='/images/cs-ux-handbook/default-footer.png'
                  alt=''
                  width={1920}
                  height={937}
                  layout='responsive'
                />
              </figure>
              <figure className='cs-figure inline-block w-full lg:w-1/2 outline outline-1'>
                <Image
                  src='/images/cs-ux-handbook/swizzled-footer.png'
                  alt=''
                  width={1920}
                  height={937}
                  layout='responsive'
                />
              </figure>
            </aside>

            <section className='cs-section--default-region'>
              <h4 className='cs-topic font-bold'>Impact on SEO</h4>
              <p className='cs-paragraph--sans'>
                Some of these changes negatively impacted SEO. The navbar is important because it
                helps web crawlers understand the structure of the website. Without it, it could
                influence whether or not search engines show sitelinks. Additionally, not having a
                dedicated homepage made it difficult for the homepage to be indexed properly.
              </p>
            </section>
            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Branding</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'></p>

              <div className='overflow-hidden'>
                <h4 className='cs-topic font-bold'>Colors</h4>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  To determine what colors to use, I referenced websites that have designed for
                  designers. They commonly use red for their logo, so I used red as well. And
                  because blue is known as a trustworthy color, I used blue. These colors were run
                  through an accessibility checker to ensure proper contrast for light and dark
                  mode.
                </p>
              </div>
              <div className='overflow-hidden'>
                <h4 className='cs-topic font-bold'>Typography</h4>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  Designers love Helvetica. Designers also use Macs, so using Helvetica would be
                  very familiar to them. But since Helvetica isn&apos;t a free font, I had to choose
                  a font that was similar and free to use from google fonts. So I picked Arimo.
                  However, I noticed that design websites like to use a serif font, so I tried
                  finding a serif font to use for headlines but wasn&apos;t able to find one that I
                  liked yet.
                </p>
              </div>
              <div className='overflow-hidden'>
                <h4 className='cs-topic font-bold'>Logo Design</h4>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  I saw this diagram from a HCI textbook I was reading and thought it was fitting.
                  It&apos;s a diagram of how to draw the golden rectangle, which I thought was a
                  fitting metaphor for the handbook.
                </p>
              </div>
              <div className='overflow-hidden'>
                <h4 className='cs-topic font-bold'>Tone</h4>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  To increase trust from the user, the tone should be professional and convey
                  expertise in the subject knowledge. Anything less might have the user question the
                  credibility of the information and affect their trust in the website.
                </p>
              </div>
            </section>
            <span className='cs-article--end-divider order-3' />
          </div>
        </article>
        <article id='Prototype' className='cs-grid-wrapper mt-8 mb-24 w-full'>
          <div className='cs-grid'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>Prototyping</h2>
              <p className='mt-4 cs-paragraph--sans cs-paragraph-first'>
                Because this website was easy to develop, I decided to skip the traditional
                wireframing and prototyping process on Figma and went straight into design and
                prototyping with code.
              </p>
            </div>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Design Principles</h3>
              <List>
                <li>
                  <b>Reliable.</b>This means easily accessible from all devices, for all
                  environments, time of day. No paywalls. Fast with minimal payloads so you can
                  study at any time, or during last minute prep. On the go, or in bed.
                </li>
                <li>
                  <b>Simple.</b> Keeping it simple helps users focus on whats important-the content.
                  No distractions, no reason to make things more complicated than it has to be.{" "}
                </li>
                <li>
                  <b>Helpful.</b> The entire point of this project is to help people. Any feature
                  must be implemented with the intention to help.
                </li>
              </List>
            </section>
            <span className='cs-article--end-divider order-3' />
          </div>
        </article>
        <article id='evaluation' className='cs-grid-wrapper mt-8 mb-24 w-full'>
          <div className='cs-grid'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>Evaluation</h2>
              <p className='mt-4 cs-paragraph--sans cs-paragraph-first'>
                Because this website was easy to develop, I decided to skip the traditional
                wireframing and prototyping process on Figma and went straight into design and
                prototyping with code.
              </p>
            </div>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Expert Walk-through</h3>
            </section>
            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Heuristic Evaluation</h3>
            </section>
            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Selecting Key Metrics</h3>
            </section>
            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Analysis</h3>
              <p>
                While there might be too little data to make a clear conclusion about the bounce
                rate, the results did make me think a little more critically of the landing page. I
                had modeled the landing page from design systems like Spectrum and IBM, but those
                websites don't really care about SEO so maybe the design requirements were different
                than mine. I might've undervalued the homepage, so now I'm reconsidering re-adding
                it to market and sell the website better to new users.
              </p>
            </section>
            <span className='cs-article--end-divider order-3' />
          </div>
        </article>
        <article id='conclusion' className='mt-8 mb-24 cs-grid-wrapper w-full'>
          <div className='cs-grid'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>Looking Forward</h2>
              <p className='cs-paragraph--sans'>
                With this project on the back-burner, I&apos;m excited to take the new skills &
                knowledge I learned and apply them to my next project whatever that may be. It might
                not seem like much but this was a big milestone for me, so thank you for reading
                this and I hope at least you found this interesting. ✌️
              </p>
            </div>
            <LinkScrollUp />
          </div>
        </article>
      </Layout>
    </div>
  );
}
