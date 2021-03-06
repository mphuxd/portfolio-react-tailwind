import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Layout, Slideshow, LinkOut, LinkScrollUp, UpNext } from "@/components";

export default function TravelWebsite() {
  return (
    <div>
      <Head>
        <title>Clear View Escapes Case Study | Matthew Pham Portfolio</title>
      </Head>

      <Layout>
        <section className='bg-beige2 pt-36 md:pt-16 lg:pt-20 xl:pt-24'>
          <div className='cs-grid md:pr-0 pb-20 gap-y-0 mt-3 md:mt-2 lg:mt-4 2xl:mt-12'>
            <h1 className='font-display text-2xl font-bold inline-block col-span-full md:col-start-1 lg:col-start-2 xl:col-start-5 2xl:col-start-6 xl:text-3xl max:col-start-6 max:col-span-7'>
              Case Study
            </h1>

            <h2 className='font-display inline-block text-4xl leading-tight mt-4 col-span-full md:col-start-1 lg:col-start-2 max:col-start-6 max:col-span-7 xs:text-5xl sm:text-6xl md:mt-0 md:text-6xl lg:text-6xl lg:self-start xl:col-start-5 2xl:col-start-6 2xl:text-7xl'>
              Clear View Escapes <br />
              Travel Website
            </h2>
            <div className='inline-block mt-3 col-span-full md:col-start-1 lg:col-start-2 max:col-start-4 max:col-span-13 2max:col-start-2 2max:col-span-14 xl:mt-4 md:mt-2 lg:mt-4 2xl:mt-12'>
              <Image
                src='/images/cs-travel-website/mockup_imac_travel-site-bg.png'
                width={5760}
                height={3900}
                alt='Original travel website homepage on iMac mockup.'
                layout='responsive'
                priority
              />
            </div>

            <p className='mt-3 font-accent leading-tight relative inline-block col-span-full md:col-start-1 lg:col-start-2 xl:col-start-5 2xl:col-start-6 max:col-start-6 max:col-span-8'>
              Original Travel Website home screen.
            </p>
          </div>
        </section>

        <div className='cs-grid'>
          <section id='cs-aside' className='cs-aside--grid'>
            <div id='timeline' className='flex justify-between overflow-x-hidden'>
              <div className='font-accent article-date-accent-line relative inline-block pr-2'>
                Start 02/2019
              </div>
              <div className='font-accent inline-block pl-2 bg-white z-10'>End 05/2019</div>
            </div>
            <div id='timeline' className='flex justify-between overflow-x-hidden'>
              <div className='font-accent article-date-accent-line relative inline-block pr-2'>
                Revised 05/2022
              </div>
              <div className='font-accent inline-block pl-2 bg-white z-10'>05/2022</div>
            </div>
            <div className='cs-sidebar-first'>
              <h5 className='text-sm font-bold'>Role</h5>
              <p className='mt-2'>Research</p>
              <p>Design</p>
              <p>Development</p>
            </div>
            <div className='cs-sidebar-next'>
              <h5 className='text-sm font-bold'>Technology</h5>
              <p className='mt-2'>Figma</p>
              <p>HTML, CSS, JS</p>
              <p>jQuery</p>
            </div>
            <div className='cs-sidebar-next'>
              <h5 className='text-sm font-bold'>Links</h5>
              <LinkOut text='Travel Website' href='https://mphuxd.github.io/travel-site/' />
              <LinkOut
                text='Redesign Wireframe'
                href='https://www.figma.com/proto/bGcxhWxKVQgUoJZyC3lxHA/Clear-View-Escapes-Prototype?page-id=498%3A1078&node-id=560%3A1401&viewport=274%2C458%2C0.11&scaling=min-zoom'
              />
            </div>
          </section>
          <section className='order-2 col-span-full mt-8 mb-24 md:col-span-11 lg:order-1 lg:col-span-9 lg:col-start-2 xl:col-span-8 xl:col-start-5 2xl:col-span-6 2xl:col-start-6 2xl:mt-20 max:mt-0 '>
            <div className=''>
              <h2 className='cs-h3'>What is Clear View Escapes?</h2>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                Clear view escapes is a fictional company that was created as part of a web
                development course. As a travel agency, they partner with travel companies to
                provide vacation packages, flights, cruises, hotels and activities directly to
                consumers.
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
                together. Instead, Clear View Escapes should allow customers to book their vacation
                online without a travel agent, saving the company both time and money.
              </p>
            </div>
            <div>
              <h2 className='cs-h3'>Objective</h2>
              <p className='cs-paragraph--sans cs-paragraph--first'>
                Clear View Escapes is transitioning from a traditional travel agency to an online
                travel agency. Redesign the homepage to help users find and book vacation packages.
              </p>

              <figure className='cs-figure inline-block 2xl:mt-40 w-full'>
                <Image
                  className=''
                  src='/images/cs-travel-website/travel-website-full.png'
                  alt='Full screenshot of original travel website design.'
                  width={1903}
                  height={3824}
                  layout='responsive'
                />
                <figcaption className='cs-figure-caption'>
                  Original travel website homepage design before redesign.
                </figcaption>
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
                  inline={true}
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
                we&apos;ll be looking at the US travel market demographics. In general, Gen Z &
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
                Of these leisure trips, 77% of the US market travel for rejuvenative purposes ???
                change of scenery, weather, to visit friends and family, experience events, to go
                sightseeing, or generally to focus on health & relaxation. Younger generations are
                more likely to take a trip for health & wellness as well as personal fulfillment,
                while older generations are mostly visiting family and friends.
              </p>

              <h3 className='cs-h3'>Where are they going?</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                Most US travel is domestic, with 18% having traveled internationally. The most
                popular domestic destinations are Florida, Virgin Islands, Hawaii. The most popular
                international destinations are Riviera Maya, Rome, Bali, London, and Paris.
              </p>
              <p className='cs-paragraph--sans'>
                For cruises, the top cruises are: Caribbean Cruise (34.7%), Cancun (28.3%), Cruise ???
                Europe (River) (23.1%), Cruise ??? Europe (Mediterranean) (17.4%), Punta Cana,
                Dominican Republic (17.2%), Rome (16%), London (15.5%), Amsterdam and Montego Bay,
                Jamaica (12.6%), Playa del Carmen/Riviera Maya, Mexico (11.4%), and Paris (11.1%).
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
                According to users, the top influences in determining where to travel are value,
                deals, social media, imagery, blogs & articles, activities, experiences, family,
                culture, and the sense of adventure & discovery ???off the beaten path???, in that
                order.
              </p>
              <h3 className='cs-h3'>What&apos;s important?</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                For family travelers, 95% said their priority was keeping their families entertained
                and happy, while deals and value (89%), outdoor activities (85%) and planning travel
                around school holidays (85%) or near major attractions or theme parts (85%) were the
                most importance.
              </p>
              <p className='cs-paragraph--sans'>
                Travel confidence influences the likelihood to travel. Research shows that travel
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
                For online bookings, users value a site that provides the right price for the type
                of travel experience they want (57%). Other important considerations include a site
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
                  alt='User Persona for Kate'
                  width={2528}
                  height={680}
                  layout='responsive'
                />
                <figcaption className='cs-figure-caption'></figcaption>
              </figure>
              <figure className='cs-figure w-full mb-0'>
                <Image
                  className=''
                  src='/images/cs-travel-website/up-kevin.png'
                  alt='User Persona for Kevin'
                  width={2528}
                  height={600}
                  layout='responsive'
                />
                <figcaption className='cs-figure-caption'></figcaption>
              </figure>
              <figure className='cs-figure w-full mb-0'>
                <Image
                  className=''
                  src='/images/cs-travel-website/up-karen.png'
                  alt='User Persona for Karen'
                  width={2528}
                  height={640}
                  layout='responsive'
                />
                <figcaption className='cs-figure-caption'></figcaption>
              </figure>
              <figure className='cs-figure w-full mb-0'>
                <Image
                  className=''
                  src='/images/cs-travel-website/up-ken.png'
                  alt='User Persona for Ken'
                  width={2528}
                  height={680}
                  layout='responsive'
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
                  alt='User Journey'
                  width={3038}
                  height={3132}
                  layout='responsive'
                />
                <figcaption className='cs-figure-caption'></figcaption>
              </figure>
            </section>
            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Additional Actionable Insights</h3>

              <p className='cs-paragraph--sans'>
                Avoid overwhelming the user with choices. Reduce density by deferring details to
                other webpages, present the user with broad categories, and use whitespace to create
                space in high density areas.
              </p>
              <p className='cs-paragraph--sans'>
                Avoid using too many high saturation images with lots of details. Using images with
                high saturation can be visually overstimulating especially in image dense content
                areas. Use HD images if displayed large and one at a time with whitespace for room
                to breathe. Desaturate images if necessary to direct the attention to appropriate
                areas. Images should have a clear focal point.
              </p>
              <p className='cs-paragraph--sans'>
                Most users already have a location in mind to research. Make searching fast by
                reducing the required fields and setting default values for some fields. Let users
                add specifics afterwards - sometimes they are looking to explore their options and
                not necessarily booking their package.
              </p>
              <p className='cs-paragraph--sans'>
                Target users through inspirational messaging such as personal fulfillment,
                development, and enrichment to motivate users to travel.
              </p>
              <p className='cs-paragraph--sans'>
                Make space for featured content to inspire users and encourage them to explore.
                Invite them to learn by routing users to the travel blog, resort information, or
                vacation package. Featured content should dynamically populate with travel trends.
              </p>
            </section>
            <span className='cs-article--end-divider' />
          </div>
        </article>

        <article id='ux-design' className='cs-grid-wrapper mt-8 mb-24 w-full'>
          <div className='cs-grid'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>UX Design</h2>
            </div>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>User Flow</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                I begin with user flow to determine the steps the user takes to move towards their
                goal. These steps inform the information architecture by establishing relationships
                between web pages and helps determine what content needs to be displayed for each
                web page.
              </p>
              <p className='cs-paragraph--sans'>
                In this case, there are two main user flows that diverge from the homepage: those
                who use the search module, and those don???t. For those who use the search, I route
                them directly to the results page.
              </p>
              <p className='cs-paragraph--sans'>
                For those who don???t, the path is a little more complex. For example, they might
                choose a category, in this case a continent such as Europe, then choose a country, a
                region, and finally a vacation package. Each of these steps might be a web page,
                which we could potentially route to from the homepage, or via navigation.
              </p>
            </section>

            <section className='cs-section-offset-right-region 2xl:col-start-5'>
              <figure className='cs-figure w-full'>
                <Image
                  className=''
                  src='/images/cs-travel-website/example-flow.png'
                  alt='Example flow'
                  width={1899}
                  height={894}
                  layout='responsive'
                />
                <figcaption className='cs-figure-caption'>
                  Website flow might look something like this.
                </figcaption>
              </figure>
            </section>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Information Architecture</h3>

              <h4 className='cs-topic'>Categorizing Packages</h4>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                There are two main ways to categorize packages. By environment and by continent.{" "}
              </p>
              <p className='cs-paragraph--sans'>
                Grouping packages by environment can be advantageous in helping users to explore
                multiple regions that fits the same climate, setting and general experience that
                they might be looking for. However, this can be more difficult to group and has a
                higher category number which can clutter navigation.
              </p>
              <figure className='cs-figure w-full'>
                <Image
                  className=''
                  src='/images/cs-travel-website/group-environment.png'
                  alt='Example flow'
                  width={2088}
                  height={644}
                  layout='responsive'
                />
              </figure>
              <p className='cs-paragraph--sans'>
                Grouping by continents is more simple and straightforward, but also introduces
                another step because we need to group further into countries, and possibly
                sub-regions. It also makes it easier to provide additional content specific to that
                continent, country, or region.
              </p>
              <figure className='cs-figure w-full'>
                <Image
                  className=''
                  src='/images/cs-travel-website/group-continent.png'
                  alt='Example flow'
                  width={2089}
                  height={341}
                  layout='responsive'
                />
              </figure>
              <p className='cs-paragraph--sans'>
                Ideally, the best way to group them should be according to the users&apos; mental
                model, which could even be a combination of the two. Without the research supporting
                one way or another, I decided to keep it simple and categorize packages by
                continents. In the future, we can create additional web pages that explore vacation
                packages by environments such as beaches, safari, tropical, etc.
              </p>
              <figure className='cs-figure w-full'>
                <Image
                  className=''
                  src='/images/cs-travel-website/group-both.png'
                  alt='Example flow'
                  width={2088}
                  height={341}
                  layout='responsive'
                />
              </figure>
              <h4 className='cs-topic'>Homepage</h4>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                For the homepage, the primary goal is to help users find and plan their vacation by
                redirecting the user to the appropriate destination web page. The general pattern as
                the user scrolls down the homepage is to present them with sections that help the
                user specify what they&apos;re looking for. Any input from the user helps narrow the
                selection to determine their desired destination.
              </p>
              <p className='cs-paragraph--sans'>
                Since most users already have a destination in mind, I expect most to use search to
                go directly to the product page which in that case we have achieved the goal of
                redirecting the user so we are done. This is the most common use case, so the search
                module should be among the first to appear.
              </p>
              <p className='cs-paragraph--sans'>
                If the user has more than one destination in mind, doesn???t have a destination yet,
                or needs inspiration, or just indecisive, they can scroll below where they will be
                presented with options that can help specify what they???re looking for. Any input
                from the user helps narrow the selection to determine their desired destination. To
                determine what content to populate below, I reference the research to see what the
                users value.
              </p>
              <p className='cs-paragraph--sans'>
                As the user moves further away from the homepage to other webpages, the results and
                contents should become less general and more specific, following the design pattern
                of deferring details and specifics to deeper web pages.
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
              <section className='col-span-full md:col-start-1 md:col-span-16 lg:col-span-16 lg:col-start-1 xl:col-span-14 xl:col-start-2 2xl:col-span-14 2xl:col-start-2'>
                <div className='flex flex-row gap-x-4 xl:gap-x-8'>
                  <figure className='cs-figure w-full max:w-1/2 mb-0'>
                    <Image
                      className=''
                      src='/images/cs-travel-website/travel-website-full.png'
                      alt='Original Website Design'
                      width={1903}
                      height={3824}
                      layout='responsive'
                    />
                    <figcaption className='cs-figure-caption'></figcaption>
                  </figure>
                  <figure className='cs-figure w-full max:w-1/2 mb-0'>
                    <Image
                      className=''
                      src='/images/cs-travel-website/travel-wireframe-short.png'
                      alt='Redesigned Travel Website'
                      width={3840}
                      height={11400}
                      layout='responsive'
                    />
                    <figcaption className='cs-figure-caption'></figcaption>
                  </figure>
                </div>
              </section>
            </div>
          </section>
          <div className='cs-grid'>
            <p className='cs-section--default-region cs-paragraph--sans'>
              You can view the interactive prototype on Figma{" "}
              <LinkOut
                inline
                text='here'
                href='https://www.figma.com/proto/bGcxhWxKVQgUoJZyC3lxHA/Clear-View-Escapes-Prototype?page-id=498%3A1078&node-id=560%3A1401&viewport=274%2C458%2C0.11&scaling=min-zoom'
              />{" "}
              and the original demo website{" "}
              <LinkOut inline text='here' href='https://mphuxd.github.io/travel-site/' />.
            </p>
            <span className='cs-article--end-divider' />
          </div>
        </article>

        <article id='user-research' className='cs-grid-wrapper mt-8 mb-24 w-full'>
          <div className='cs-grid relative'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>Takeaways</h2>
              <p className='mt-4 cs-paragraph--sans cs-paragraph-first'>
                While a little outdated, this course introduced me to important web development
                fundamentals such as semantic HTML, the CSS Box model, BEM, various CSS tricks, and
                Javascript. I also learned about mobile-first development, responsive design, CSS
                flexbox and grid, and methods to optimize website performance.
              </p>
              <p className='cs-paragraph--sans'>
                From the redesign, I learned that while the overall design process remains the same,
                some methods can be more important in different projects and use cases. For example,
                redesigns are much easier for me than creating a design from scratch because
                there&apos;s already a clear starting point in which you can iterate over. For this
                project, the most involved process were user flows because there was a clear goal
                and action to funnel users towards whereas in corporate websites the user goal and
                actions may be a little more ambiguous.
              </p>
              <p className='cs-paragraph--sans'>
                Additionally, with existing designs it&apos;s important to be aware of any
                implications, effects, and interactions changes might have on the system. While
                redesigning the homepage may seem like a straightforward task, it can be non-trivial
                especially if you&apos;re introducing new features or changing the information
                architecture. In real projects, suggesting what seems like a simple change then
                realizing its complexity can be a real problem and can easily lose you credibility
                within your team. So, as obvious as it sounds, be aware of the implications of any
                redesigns, changes, new features and remember to make slow, thoughtful changes until
                you&apos;re familiar with the product.
              </p>
            </div>

            {/* <LinkScrollUp /> */}
            <span className='cs-article--end-divider order-3' />
          </div>
        </article>
        <UpNext href='/about' text='Up Next - About Me' alt='Go to About Me' />
      </Layout>
    </div>
  );
}
