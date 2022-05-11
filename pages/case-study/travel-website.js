import Head from "next/head";
import Image from "next/image";
import { Layout, Slideshow, LinkOut, LinkScrollUp } from "@/components";

export default function TravelWebsiteTest() {
  return (
    <div>
      <Head>
        <title>Case Study - Travel Website</title>
      </Head>

      <Layout>
        <section className='bg-beige2 pt-36 md:pt-16 lg:pt-20 xl:pt-24'>
          <div className='cs-grid md:pr-0 pb-20 gap-y-0 mt-3 md:mt-2 lg:mt-4 2xl:mt-12'>
            <h1 className='font-display text-2xl font-bold inline-block col-span-full md:col-start-1 lg:col-start-2 xl:text-3xl max:col-start-6 max:col-span-7'>
              Case Study
            </h1>

            <h2 className='font-display inline-block text-4xl leading-tight mt-4 col-span-full md:col-start-1 lg:col-start-2 max:col-start-6 max:col-span-7 xs:text-5xl sm:text-6xl md:mt-0 md:text-6xl lg:text-6xl lg:self-start 2xl:text-7xl'>
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
              <p>jQuery</p>
            </div>
          </section>
          <section className='order-2 col-span-full mt-8 mb-24 md:col-span-11 lg:order-1 lg:col-span-9 lg:col-start-2 xl:col-span-8 xl:col-start-5 2xl:col-span-6 2xl:col-start-6 2xl:mt-20 max:mt-0 '>
            <div className=''>
              <h2 className='cs-h3'>What is Clear View Escapes?</h2>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                Clear view escapes is a fictional company that was created as part of a web
                development course. They partner with travel companies to provide vacation packages,
                flights, cruises, hotels and activities directly to consumers.
              </p>
              <p className='cs-paragraph--sans'>
                Travel agencies make money by charging commission fees from service providers like
                hotels, airlines, cruise ships, and tour guides whenever a customer books an item
                from their company. Depending on the agency or the type of service provided, they
                can also charge the customer a service fee, either in the package price or in a
                separate charge. The website will focus on selling vacation packages, but will also
                allow customers to search and book hotels, flights, cruises, and activities.
              </p>
            </div>
            <div>
              <h2 className='cs-h3'>The Problem</h2>
              <p className='cs-paragraph--sans cs-paragraph--first'>
                Traveling should be a fun and rewarding experience but can often get overshadowed by
                the stress of planning a vacation. Travel agencies can make it easier by helping
                users find and plan their vacation by guiding them through the process or by
                conveniently bundling flights, hotels, activities into a vacation package.
              </p>
              <p className='cs-paragraph--sans'>
                The way the website is currently constructed suggests it&apos;s a traditional travel
                agency where users must work directly with a travel agent to plan their vacation
                together. Instead, Clear View Escapes can allow customers to book their vacation
                online without a travel agent, saving the company both time and money.
              </p>
            </div>
            <div>
              <h2 className='cs-h3'>Objective</h2>
              <p className='cs-paragraph--sans cs-paragraph--first'>
                Redesign the homepage to help users find and book vacation packages.
              </p>

              <figure className='cs-figure inline-block 2xl:mt-40 w-full'>
                <Image
                  className=''
                  src='/images/cs-travel-website/travel-website-full.png'
                  alt=''
                  width={1903}
                  height={3824}
                />
              </figure>
            </div>
          </section>
          <span className='cs-article--end-divider order-3 mx-auto' />
        </div>

        <article id='user-research' className='cs-grid-wrapper mt-8 mb-24 w-full'>
          <div className='cs-grid'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>User Research</h2>
              <p className='mt-4 cs-paragraph--sans cs-paragraph-first'>
                User research is based on real data from{" "}
                <LinkOut
                  text='Expedia Group Media Solutions'
                  href='https://advertising.expedia.com/'
                />
                .
              </p>
            </div>
            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Who are our users?</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                As a fictional company, Clear View Escapes doesn&apos;t have any users. Instead,
                we&apos;ll be looking at the US travel market demographics. The research isn&apos;t
                clear in which of these demographics travel the most; however, in general, Gen Z &
                Millennials are the fastest growing travel demographic with Millennials on average
                spending 35 days traveling, followed by Gen Z with 29 days, boomers 27 days, and Gen
                X 26 days.
              </p>
              <p className='cs-paragraph--sans'>
                Of people who traveled in 2016, 24% were solo travelers, 47% were adults, and 29%
                were adults with children. Research found that solo, group, and multigenerational
                travel travel is increasing, while family leisure travel with children is
                decreasing.
              </p>

              <h3 className='cs-h3'>Why are they traveling?</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                There are three categories of travel, business, leisure, and bleisure (extending
                business trips for leisure). Leisure trips vary by generation, with Millennials
                taking the most leisure trips (42%) followed by Gen Z (38%) and Gen X (30%).
              </p>
              <p className='cs-paragraph--sans'>
                Of these leisure trips, 77% of the US market travel for rejuvenative purposes -
                change of scenery, weather, to visit friends and family, or to witness an event,
                sightseeing, health & relaxation. Younger generations are more likely to take a trip
                for health and wellness as well as personal fulfillment, while older generations are
                looking to visit family and friends.
              </p>

              <h3 className='cs-h3'>Where are they going?</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                Most US travel is domestic, with 18% having traveled internationally. The most
                popular domestic destinations are Florida, Virgin Islands, Hawaii. The most popular
                international destinations are Riviera Maya, Rome, Bali, London, and Paris.
              </p>
              <p className='cs-paragraph--sans'>
                Top Cruises Caribbean Cruise (34.7%), Cancun (28.3%), Cruise – Europe (River)
                (23.1%), Cruise – Europe (Mediterranean) (17.4%), Punta Cana, Dominican Republic
                (17.2%), Rome (16%), London (15.5%), Amsterdam and Montego Bay, Jamaica (12.6%),
                Playa del Carmen/Riviera Maya, Mexico (11.4%), and Paris (11.1%)
              </p>
              <p className='cs-paragraph--sans'>
                21% of families have taken their children to an all-inclusive resort for vacation,
                68% on a family road trip, and 68% on a beach vacation.
              </p>

              <h3 className='cs-h3'>How do they decide?</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                Before booking a vacation, users are already extensively researching and consuming
                travel related content weeks ahead with online travel agencies (OTA) being the most
                engaged content. 65% have only 1 destination in mind while 35% have more than 1 in
                mind.
              </p>
              <p className='cs-paragraph--sans'>
                All generations are increasingly turning to travel sources for trip planning and
                recommendations, preferring sources with professional and informative tones.
              </p>
              <p className='cs-paragraph--sans'>
                Gen Alpha, which refers to those born after 2010, is showing more signs of
                influencing family travel decisions and planning.
              </p>
              <p className='cs-paragraph--sans'>
                According to users, the top influences in determing where to travel are value,
                deals, social media, imagery, blogs & articles, activities, experiences, family,
                culture, and the sense of adventure & discovery “off the beaten path”.
              </p>
              <h3 className='cs-h3'>What&apos;s important?</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                For family travelers, 95% said their priority was keeping their families entertained
                and happy, while deals and value (89%), outdoor activities (85%) and planning travel
                around school holidays (85%) or near major attractions or theme parts (85%) were the
                most importance.
              </p>
              <p className='cs-paragraph--sans'>
                Travel confidence influences the likeliness to travel. Research shows that travel
                confidence is negatively correlated with age. That is, younger generations feel more
                confident while older generations are less so. Other factors that influence
                confidence are travel flexibility, which can be increased by allowing users to
                cancel or make changes to their plans, and health and safety regulations.
              </p>
              <p className='cs-paragraph--sans'>
                Research shows that many people (52%) want to see a range of prices and options for
                a specific type of experience and the ability to book accommodations and
                transportation all in one transaction (38%).
              </p>
              <p className='cs-paragraph--sans'>
                For online bookings, many value a site that provides the right price for the type of
                travel experience they want (57%). Other important considerations include a site
                that is easy to navigate (49%), a quick booking process (45%), customer support
                (38%), a high number of listings (32%), and a variety of travel methods (27%).
              </p>
            </section>
            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>User Persona</h3>
            </section>
            <section className='cs-section-offset-right-region 2xl:col-start-6 2xl:col-span-7 lg:flex-col'>
              <figure className='cs-figure w-full mb-0'>
                <Image
                  className=''
                  src='/images/cs-travel-website/up-kate.png'
                  alt='User Persona'
                  width={2528}
                  height={680}
                />
                <figcaption className='cs-figure-caption'></figcaption>
              </figure>
              <figure className='cs-figure w-full mb-0'>
                <Image
                  className=''
                  src='/images/cs-travel-website/up-kevin.png'
                  alt='User Persona'
                  width={2528}
                  height={600}
                />
                <figcaption className='cs-figure-caption'></figcaption>
              </figure>
              <figure className='cs-figure w-full mb-0'>
                <Image
                  className=''
                  src='/images/cs-travel-website/up-karen.png'
                  alt='User Persona'
                  width={2528}
                  height={640}
                />
                <figcaption className='cs-figure-caption'></figcaption>
              </figure>
              <figure className='cs-figure w-full mb-0'>
                <Image
                  className=''
                  src='/images/cs-travel-website/up-ken.png'
                  alt='User Persona'
                  width={2528}
                  height={680}
                />
                <figcaption className='cs-figure-caption'></figcaption>
              </figure>
            </section>
            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>User Journey</h3>
            </section>
            <section className='cs-section-offset-right-region 2xl:col-start-5'>
              <figure className='cs-figure w-full mb-0'>
                <Image
                  className=''
                  src='/images/cs-travel-website/uj.png'
                  alt='User Persona'
                  width={3038}
                  height={3132}
                />
                <figcaption className='cs-figure-caption'></figcaption>
              </figure>
            </section>
            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Additional Actionable Insights</h3>

              <p className='cs-paragraph--sans'>
                Avoid overwhelming the user with choices. Reduce density by deferring details to
                other webpages and present the user with broad categories
              </p>
              <p className='cs-paragraph--sans'>
                Avoid using high saturation images with high amount of details. Using images with
                high saturation can be visually overstimulating especially in image dense content
                areas. Only use HD images if displayed large and one at a time. Desaturate images if
                necessary to direct the attention to appropriate areas. Images should have a clear
                focal point.
              </p>
              <p className='cs-paragraph--sans'>
                Most users already have a location in mind to research. Make searching fast by
                reducing the required fields and set a default value for each field. Let users add
                specifics afterwards - they are looking to explore their options and not necessarily
                booking their package.
              </p>
              <p className='cs-paragraph--sans'>
                Design and brand for younger generations while keeping in touch with the older
                demographics. Use curves to soothe the user and mimic the relaxation you get from
                travel. Suits the travel aesthetic.
              </p>
              <p className='cs-paragraph--sans'>
                Target users through inspirational messaging such as personal fulfillment,
                development, and enrichment to motivate users to travel.
              </p>
              <p className='cs-paragraph--sans'>
                Make space for featured content to inspire users and support them with interesting
                information scent. Invite them to learn by routing to the travel blog, resort
                information, or vacation package.
              </p>
              <p className='cs-paragraph--sans'>
                Use bullet points, icons to break up the text and make it easy for the user to scan.
              </p>
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
              <h3 className='cs-h3'>User Flow</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                I begin with user flow to inform the information architecture by establishing
                relationships between web pages and determining what content needs to be displayed
                for the user to move towards their goal.
              </p>
              <p className='cs-paragraph--sans'>
                In this case, there are two main user flows that diverge from the homepage: those
                who use the search module, and those don’t. For those who use the search, I route
                them directly to the results page.
              </p>
              <p className='cs-paragraph--sans'>
                For those who don’t, the path is a little more complex. For example, they might
                choose a category, in this case a continent such as Europe, then choose a country, a
                region, and finally a vacation package. Each of these steps might be a web page,
                which we could potentially route to from the homepage, or via navigation.
              </p>
              <h3 className='cs-h3'>Information Architecture</h3>

              <h4 className='cs-topic'>Categorizing Packages</h4>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                There are two main ways to categorize packages. By environment and by continent.{" "}
              </p>
              <p className='cs-paragraph--sans'>
                Grouping packages by environment can be advantageous in helping users to explore
                multiple regions while offering the same climate and setting that they might be
                looking for. However, this can be more difficult to group and has a higher category
                number which can clutter navigation.
              </p>
              <p className='cs-paragraph--sans'>
                Grouping by continents is more simple and straightforward, but also introduces
                another step because we need to group further into countries, and possibly
                sub-regions. It also makes it easier to provide additional content specific to that
                continent, country, or region.
              </p>
              <p className='cs-paragraph--sans'>
                To keep it simple, I decided the main way to categorize packages is by continents.
                In the future, we can create featured webpages that explores vacation packages by
                environments such as beaches.
              </p>
              <h4 className='cs-topic'>Homepage</h4>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                For the homepage, the primary goal is to help users find and plan their vacation by
                redirecting the user to the appropriate destination web page. The general pattern as
                the user scrolls down the homepage is to present them with sections that help the
                user specify what they&apos;re looking for. Any input from the user helps narrow the
                selection to determine their desired destination.
              </p>
              <p className='cs-paragraph--sans'>
                Since most users already have a destination in mind, they will most likely use
                search to go directly to the product page which in that case we have achieved the
                goal of redirecting the user so we are done. This is the most common use case, so
                the search module should be among the first to appear.
              </p>
              <p className='cs-paragraph--sans'>
                If the user has more than one destination in mind, doesn’t have a destination yet,
                or needs inspiration, or just indecisive, they can scroll below where they will be
                presented with options that can help specify what they’re looking for. Any input
                from the user helps narrow the selection to determine their desired destination.
              </p>
              <p className='cs-paragraph--sans'>
                As the user moves further away from the homepage to other webpages, the results and
                contents should become less general and more specific, deferring details and
                specifics to deeper web pages.
              </p>
              <h3 className='cs-h3'>Navigation</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                The top level navigation should include our main products: cruises, packages,
                hotels, & activities. It should also have an about us section to provide information
                about the company, a support page, and an option to sign in to your account where
                the booking deals, order history, itinerary, etc will be accessible.
              </p>
              <p className='cs-paragraph--sans'>
                A utility bar can also be considered to provide quick and easy access to critical or
                important functions such as support, language options, or account access, or to
                provide contact information such as a phone number.
              </p>
            </section>
            <span className='cs-article--end-divider' />
          </div>
        </article>

        <article id='user-research' className='cs-grid-wrapper mt-8 mb-24 w-full'>
          <div className='cs-grid'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>Wireframe</h2>
              <p className='mt-4 cs-paragraph--sans cs-paragraph-first'></p>
            </div>
          </div>

          <section className='w-full 2xl:py-32 bg-[#E5E5E5] mt-8 mb-6 xs:mb-3 lg:mt-10 lg:mb-6 2xl:mt-16 2xl:mb-16'>
            <div className='cs-grid'>
              <section className='cs-section--default-region'>
                <h3 className='cs-h3'></h3>
                <p className='cs-paragraph--sans cs-paragraph-first'></p>
                <figure className='cs-figure w-full mb-0'>
                  <Image
                    className=''
                    src='/images/cs-travel-website/travel-wireframe-short.png'
                    alt='User Persona'
                    width={3840}
                    height={11400}
                  />
                  <figcaption className='cs-figure-caption'></figcaption>
                </figure>
              </section>
            </div>
          </section>
          <div className='cs-grid'>
            <span className='cs-article--end-divider' />
          </div>
        </article>

        <article id='user-research' className='cs-grid-wrapper mt-8 mb-24 w-full'>
          <div className='cs-grid relative'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>Takeaway</h2>
              <p className='mt-4 cs-paragraph--sans cs-paragraph-first'>
                I developed valuable skills and insights that helped me understand the web
                development process better. In particular, I became familiarized with Gulp and its
                plugins to create tasks and build scripts to automate and streamline development. I
                learned semantic HTML, the CSS Box model, BEM, various CSS tricks, and Javascript. I
                also learned the ideas behind mobile first development, responsive design, CSS
                flexbox and grid, and methods to optimize website performance.
              </p>
            </div>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'></h3>
              <p className='cs-paragraph--sans cs-paragraph-first'></p>
              <figure className='cs-figure w-3/4 mb-0'>
                <figcaption className='cs-figure-caption'></figcaption>
              </figure>
            </section>
            <LinkScrollUp />
          </div>
        </article>
      </Layout>
    </div>
  );
}
