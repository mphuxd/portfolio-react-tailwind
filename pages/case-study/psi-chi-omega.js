import Head from "next/head";
import Image from "next/image";
import { Layout, Slideshow } from "@/components";

export default function PsiChiOmega() {
  return (
    <div className=''>
      <Head>
        <title>Psi Chi Omega | Matthew Pham Portfolio</title>
      </Head>

      <Layout>
        <section className='bg-beige2 pt-36 md:pt-16 lg:pt-20 xl:pt-24'>
          <div className='cs-grid md:pr-0 pb-20'>
            <div className='cs-hero--center-container'>
              <h5 className='cs-hero--center-category_mobile'>Case Study</h5>
              <div className='cs-hero--center-image-container'>
                <h1 className='cs-hero--center-title'>
                  Psi Chi Omega
                  <br />
                  Fraternity Website
                </h1>
                <div className='inline-block relative w-full mt-3 md:mt-2 lg:mt-4 2xl:mt-12'>
                  <h5 className='cs-hero--center-category_desktop'>Case Study</h5>
                  <div className='cs-hero-image min-w-full'>
                    <Image
                      src='/images/cs-pxo/hero_mockup_black.png'
                      alt='Image of Poseidon statue in Berlin. Psi Chi Omega Mascot.'
                      width={2881}
                      height={1620}
                    />
                  </div>
                </div>
              </div>
              <span id='cs-hero-caption' className='cs-hero--center-image-caption'>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa.
              </span>
            </div>
          </div>
        </section>

        <div id='preface' className='w-full'>
          <section className='cs-grid'>
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
                <p>Strapi</p>
              </div>
            </section>
            <section
              id='cs-intro'
              className='order-2 col-span-full mt-8 mb-24 md:col-span-11 lg:order-1 lg:col-span-9 lg:col-start-2 xl:col-span-8 xl:col-start-5 2xl:col-span-6 2xl:col-start-6'
            >
              <div className='2xl:mt-20'>
                <h2 className='cs-h3'>What is Psi Chi Omega?</h2>
                <p className='cs-paragraph--sans cs-paragraph-first enlarge-first'>
                  Psi Chi Omega is an Asian-American social fraternity with several chapters
                  throughout California. Fraternities afford college students a dynamic social
                  environment with opportunities to develop personally and professionally.
                  Asian-American fraternities are unique because they cater towards Asian-American
                  communities who often struggle with identity issues and other race-related issues.
                  During my time at UC Davis, I was an active member for four years and held several
                  leadership positions.
                </p>
              </div>
              <div className='2xl:mt-20'>
                <h2 className='cs-h3'>The Problem</h2>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  The average active membership at our UC Davis chapter is slowly decreasing
                  compared to previous years. Possible reasons for this are:
                </p>
                <ol className='list-inside list-decimal mt-6'>
                  <li className='ml-2'>An outdated & ineffective recruitment process.</li>
                  <li className='ml-2 mt-2'>
                    Lack of online resources to help students see the value in our fraternity.
                  </li>
                  <li className='ml-2 mt-2'>
                    Negative stigma associated with social fraternities.
                  </li>
                  <li className='ml-2 mt-2'>
                    General interest in fraternities is shifting in favor of business and
                    professional organizations.
                  </li>
                </ol>
              </div>
              <div className='2xl:mt-20'>
                <h2 className='cs-h3'>The Solution</h2>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  Create a fraternity website with the following business requirements:
                </p>

                <ol className='list-inside list-decimal mt-6'>
                  <li className='ml-2'>
                    Help members recruit students by integrating it in our recruitment process and
                    social media campaigns.
                  </li>
                  <li className='ml-2 mt-2'>
                    Act as an accessible, online resource to help students discover and learn about
                    our fraternity.
                  </li>
                  <li className='ml-2 mt-2'>
                    Represent and shape the UC Davis fraternity chapter and its&apos; brand identity,
                    image, and culture.
                  </li>
                </ol>

                <figure className='cs-figure inline-block 2xl:mt-40 w-full'>
                  <Image src='/images/cs-pxo/mockup_mb.png' alt='test' width={1413} height={816} />
                </figure>
              </div>
            </section>
            <span className='cs-article--end-divider order-3' />
          </section>
        </div>

        <article id='user-research' className='cs-grid-wrapper mt-8 mb-24 w-full'>
          <div className='cs-grid'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>User Research</h2>
              <p className='mt-4 cs-paragraph--sans cs-paragraph-first'>
                We begin by discovering and defining our archetypal user to understand their
                motives, needs, and pain-points. As a starting point, I leveraged my previous
                experience as a fraternity member to create user personas, empathy maps, and user
                journeys to map the complex social dynamics behind Asian-American fraternities.
              </p>
              <p className='mt-4 cs-paragraph--sans'>
                To validate and support my findings, I review scientific literature that examine
                Asian-American issues in college, the role of Asian-American fraternities, and the
                psychology of college students.
              </p>
              <p className='mt-4 cs-paragraph--sans'>
                In addition, I conducted a competitive analysis to compare competing organizations.
                These findings define our UX strategy and help develop empathy among stakeholders.
              </p>
            </div>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Who are our users?</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                To answer this question, I describe their demographics, socioeconomic factors and
                issues, and psychological profile to identify, understand and explain their motives,
                needs, and behavior in the context of Asian-American students in college
                institutions and organizations. My methods involve empirical research and
                observations from years of active participation as a member, user personas, and
                findings from peer-reviewed research articles.
              </p>
              <figure className='cs-figure w-3/4 mb-0'>
                <Image
                  className=''
                  src='/images/cs-pxo/up.png'
                  alt='User Persona'
                  width={1200}
                  height={1337}
                />
                <figcaption className='cs-figure-caption'></figcaption>
              </figure>

              <div className='overflow-hidden'>
                <h4 className='cs-topic font-bold'>Demographics</h4>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  Our primary users are male Asian-American undergraduate students between the ages
                  of 18-21. They are 1st-3rd year students, generally middle-class or above, and are
                  socially and academically motivated. Chinese-Americans and Vietnamese-Americans
                  make up roughly 60% while the remaining identify as Taiwanese, Filipino,
                  Cambodian, Asian Indian, Thai, Hmong, and Korean, or other.
                </p>
              </div>

              <div className='overflow-hidden'>
                <h4 className='cs-topic max:mt-24'>Asian American Issues</h4>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  Different ethnic groups face separate challenges and issues. New wave immigrants
                  such as Vietnamese, Cambodian, and Hmong groups are historically refugees of war
                  who face significant issues at domestic, community, and sociocultural levels that
                  make them more academically at risk (Yeh, 2002). As a result, Southeast
                  Asian-Americans (SEAA) face the most significant racial and ethnic disparities in
                  higher education out of all Asian-American subgroups. (Museus et al., 2016).
                </p>

                <p className='cs-paragraph--sans'>
                  According to an intercultural framework, the cultural distance between a student’s
                  home and campus culture is positively related to cultural dissonance. Because
                  cultural dissonance is also inversely related to success in higher education, SEAA
                  are more likely to find academic success if the campus cultural environment aligns
                  with their own cultural identity (Museus et al., 2016).
                </p>
                <p className='cs-paragraph--sans'>
                  Several studies also provide evidence that ethnic student organizations provide
                  spaces in which SEAAs and other students of color can connect with peers from
                  their own cultural communities and that these connections can increase success
                  (Guiffrida, 2003; Murgia et al., 1991; Museus, 2008, 2011,2013a, 2014; Museus &
                  Quaye, 2009).{" "}
                  <em>
                    These findings highlight the importance of the need for cultural identity,
                    spaces, and communities for SEAA students in academic environments.
                  </em>
                </p>
                <p className='cs-paragraph--sans'>
                  Asian Americans are also subject to racism. Shek (2006) states Asian American men
                  tend to report more acute awareness of racism than their female counterparts
                  because much of the racism enacted toward Asian Americans has historically
                  targeted men. The internalization of marginalized status leads some Asian American
                  men to intentionally seek out affinity groups, such as fraternities and clubs that
                  offer them unique opportunities to escape isolation and to express alternative
                  forms of masculinity (Tran & Chang, 2019). Asian student organizations and
                  fraternities serve as microclimates that enable students to reflect and negotiate
                  masculinity while exploring the intersections between their gender, racial, and
                  ethnic identities (Chan, 2017).{" "}
                  <em>
                    Thus, experiences in racism, loneliness, identity conflicts, and masculinity are
                    important motives for our users.
                  </em>
                </p>

                <p className='cs-paragraph--sans'>
                  Sense of belonging at academic institutions is highly correlated with academic
                  success (Samura, 2016). Many of our members experienced intense feelings of
                  alienation and isolation when they first entered college. They attributed those
                  feelings to difficulties associated with college transition both in terms of
                  adjusting to a new social life and living in a new, unfamiliar area.{" "}
                  <em>
                    During member application interviews, students reported that a high sense of
                    belonging within the community was one of the primary reasons for joining.
                  </em>
                </p>
              </div>

              <div className='overflow-hidden'>
                <h5 className='cs-topic max:mt-24'>Psychological Profile</h5>

                <p className='cs-paragraph--sans cs-paragraph-first'>
                  College marks a difficult, stressful transitional period for emerging adults where
                  they start to ask difficult questions about their{" "}
                  <em>identity, purpose and meaning in life</em>. This transition can be described
                  as Emerging adulthood — an unstable, “inbetween,” self-focused, developmental
                  period where one starts to explore identities and career possibilities (Arnett,
                  2004). Emerging adults experience higher rates of vocational, financial, and
                  interpersonal stress than at any other developmental period (Kessler et al.,
                  2005).
                </p>
                <p className='cs-paragraph--sans'>
                  An <strong>existential crisis</strong> typically emerges first during the
                  transition from adolescence to adulthood (Kehr, 2010). For normal age college
                  students, they experience this during college. Halama and Strizenec (2004) argued
                  that the development of meaning is necessary to eliminate existential anxiety, and
                  therefore, “<em>an existential problem is always one of meaning</em>”. Frankl
                  (1984) suggested that an “existential vacuum” can emerge when an individual is
                  lacking meaning. Meaning is developed through personal accomplishments, encounters
                  with others, or encounters with art and nature.
                </p>
                <p className='cs-paragraph--sans'>
                  When students were asked the reason for joining a fraternity, the most common
                  answers were thematically related to existentialism. For example — students want
                  to “become part of something larger than themselves”, to “push themselves out of
                  their comfort zone”, “make the most out of their college experience”, and form
                  meaningful relationships with people. This suggests{" "}
                  <em>
                    students are joining fraternities to cope with existential anxiety because they
                    offer students an avenue to develop their identity and discover meaning and
                    purpose in life
                  </em>
                  .
                </p>
                <p className='cs-paragraph--sans'>
                  In addition, students view fraternities as an outlet to cope with psychological
                  stressors. By offering an environment for students to get together to connect and
                  have fun, students are afforded opportunities for community, romantic
                  relationships, social events, and more.
                </p>
              </div>
            </section>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>How will the website be used?</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                Now that we understand the users needs and motives, we can begin to narrow the
                research scope to the user needs in relation to the website. To do so, I draw on
                user journeys to contextually map the user in their environment. An empathy map was
                used to explore user emotions and how they might influence thought and behavior.
                These methods provide insights towards use cases, UX strategy, website
                specifications, and direction in which to structure the product.
              </p>
              <div className='flex flex-row content-start'>
                <figure className='cs-figure'>
                  <Image
                    className=''
                    src='/images/cs-pxo/uj1.png'
                    alt='Current User Journey'
                    width={928}
                    height={996}
                  />
                  <figcaption className='cs-figure-caption'></figcaption>
                </figure>
                <figure className='cs-figure'>
                  <Image
                    className=''
                    src='/images/cs-pxo/uj2.png'
                    alt='Future User Journey'
                    width={928}
                    height={1452}
                  />
                  <figcaption className='cs-figure-caption'></figcaption>
                </figure>
              </div>
              <figure className='cs-figure'>
                <Image
                  className=''
                  src='/images/cs-pxo/empathymap2.png'
                  alt=''
                  width={1200}
                  height={641}
                />
                <figcaption className='cs-figure-caption'></figcaption>
              </figure>
            </section>

            <aside className='cs-section-offset-right-region'>
              <figure className='cs-figure'>
                <Image
                  className=''
                  src='/images/cs-pxo/userjourneydiagram.png'
                  alt=''
                  width={3038}
                  height={3267}
                />
                <figcaption className='cs-figure-caption'></figcaption>
              </figure>
            </aside>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Who are our competitors?</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                Among the Asian-American network at UC Davis, there are three fraternities students
                tend to join: Psi Chi Omega, Delta Epsilon Mu, and Alpha Kappa Psi. To document
                differences in our organization, I started with creating a list of metrics and
                compiled my findings in a spreadsheet.
              </p>
              <figure className='cs-figure'>
                <Image
                  className=''
                  src='/images/cs-pxo/companalysis.png'
                  alt=''
                  width={1443}
                  height={782}
                />
                <figcaption className='cs-figure-caption'></figcaption>
              </figure>

              <p className='cs-paragraph--sans cs-paragraph-first'>
                Analyzing our competitors and their websites helped identify differences in
                organization attitudes, appeal, interests, and content strategy. It provided me with
                possible website features, identified possible opportunities to differentiate our
                website, and revealed design weaknesses and flaws to avoid.
              </p>
            </section>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>User Research Summary</h3>

              <div className='overflow-hidden mt-16'>
                <h4 className='cs-topic mt-8 font-bold'>Who are our users?</h4>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  Our users are male Asian American students who face complex socio-economic issues
                  that motivate them to join a fraternity.
                </p>
                <ul className='cs-ul'>
                  <li className='cs-li'>
                    The internalization of marginalized status leads some Asian American men to
                    intentionally seek out affinity groups, such as fraternities and clubs that
                    offer them unique opportunities to escape isolation and to express alternative
                    forms of masculinity.
                  </li>
                  <li className='cs-li'>
                    Fraternities allow Asian American students to challenge mainstream stereotypes,
                    redefine their identity, empower themselves, experience personal growth that
                    aren’t accessible by traditional mainstream methods.
                  </li>
                  <li className='cs-li'>
                    Academically at risk Asian-American subgroups need cultural spaces and
                    communities in academic environments to increase academic persistence and
                    success.
                  </li>
                </ul>

                <div className='mt-16'>
                  <p className='cs-paragraph--sans'>
                    College marks a difficult, stressful transitional period for emerging adults
                    where they start to ask difficult questions about their identity, purpose and
                    meaning in life. Students need:
                  </p>
                  <ul className='cs-ul'>
                    <li className='cs-li'>
                      Direction and avenues to explore their purpose, meaning, and identity.
                    </li>
                    <li className='cs-li'>
                      Opportunities to establish meaningful relationships including romantic
                      relationships.
                    </li>
                    <li className='cs-li'>
                      Personal accomplishments, encounters with others, or encounters with art and
                      nature.
                    </li>
                    <li className='cs-li'>
                      Environment for learning social skills, norms, and etiquette
                    </li>
                  </ul>
                </div>

                {/* <!-- <div className="mt-16">
                <p className="cs-paragraph--sans">Additional considerations & Barriers to entry</p>
                <ul className="cs-ul">
                  <li className="cs-li-first">Reputation & Trustworthiness</li>
                  <li className="cs-li">Social or professional fraternity</li>
                  <li className="cs-li">Difficulty of Joining process</li>
                  <li className="cs-li">Impact on academics</li>
                  <li className="cs-li">
                    High Number of competitors cause uncertainty & inability to decide which
                    fraternity to join
                  </li>
                  <li className="cs-li">Lack of accessible information on the fraternity</li>
                  <li className="cs-li">Stigma and rumors associated with fraternities</li>
                </ul>
              </div> --> */}

                <div className='mt-16'>
                  <p className='cs-paragraph--sans'>
                    Additional considerations and barriers to entry are: reputation &
                    trustworthiness; social or professional fraternity; joining process difficulty;
                    impact on academics; high number of competitors cause uncertainty & inability to
                    decide which fraternity to join; lack of accessible information on the
                    fraternity; stigma, rumors, and stereotypes associated with fraternities.
                  </p>
                </div>
              </div>

              <div className='overflow-hidden mt-16'>
                <h4 className='cs-topic mt-8 font-bold'>How will they use the website?</h4>
                <ul className='cs-ul'>
                  <li className='cs-li'>Primary use case is to learn about the fraternity.</li>
                  <li className='cs-li'>
                    Optimize for mobile performance. Research suggests web traffic would mostly come
                    from mobile devices followed by laptops.
                  </li>
                  <li className='cs-li'>
                    First impressions and fast loading times are crucial. Students are busy and may
                    only have a few minutes to explore the website before moving on.
                  </li>
                  <li className='cs-li'>
                    Minimize friction between initial contact and attending our rush events. People
                    are hesitant to attend an event based on a brief interaction. Linking the
                    website on our flyers can nudge users into visiting the website where they can
                    begin to develop trust and confidence in the organization.
                  </li>
                  <li className='cs-li'>
                    Students are likely to be recruited by multiple organizations. Given the choice
                    between several organizations, students may join the more prestigious, reputable
                    organizations.
                  </li>
                </ul>
              </div>

              {/* <!-- <div className="mt-16">
                <p className="mt-8 text-base font-base">Context & Environmental Factors</p>
                <ul className="list-inside list-disc mt-3 font-base">
                  <li className="mt-2">Primary use case is to learn about the fraternity.</li>
                  <li className="mt-2">
                    Most web traffic would come from mobile devices followed by laptops. High mobile
                    traffic suggests mobile-first design. Optimize for mobile performance.
                  </li>
                  <li className="mt-2">
                    Students are busy and may have a few minute window to navigate through the website
                    before moving on. First impressions and fast loading times are crucial.
                  </li>
                  <li className="mt-2">
                    People are hesitant to attend an event based on a brief interaction. Linking the
                    website on our flyers can nudge users into visiting the website, minimizing
                    friction between initial contact and attending our rush events.
                  </li>
                  <li className="mt-2">
                    Users need confidence and trust in the organization so they feel comfortable
                    attending the events.
                  </li>
                  <li className="mt-2">Students are likely to be recruited by multiple organizations.</li>
                  <li className="mt-2">
                    Given the choice between several organizations, students may join the more
                    prestigious, reputable organizations.
                  </li>
                </ul>
              </div> --> */}

              <div className='mt-16'>
                <p className='cs-topic mt-8 font-bold'>Competitive Analysis</p>
                <ul className='cs-ul'>
                  <li className='cs-li'>
                    More users are joining professional fraternities than social fraternities. They
                    have more than 2x members than Psi Chi Omega.
                  </li>
                  <li className='cs-li'>
                    Our competitors content strategy focuses on their members and their achievements
                    rather than the organization.
                  </li>
                  <li className='cs-li'>
                    Opportunity - If we shift towards a more professional culture, we can position
                    ourselves as a balanced social fraternity that takes professional development as
                    seriously as our competitors.
                  </li>
                  <li className='cs-li'>
                    Using a custom, well-built website can differentiate our website from theirs.
                    AKPsi uses a digitial application which could be something we implement in the
                    future.
                  </li>
                </ul>
              </div>

              <section className='overflow-hidden'>
                <h4 className='cs-topic article-accent-line max:mt-24'>References</h4>
                <ul className='list-inside list-none mt-3 max:mt-5 font-accent text-sm'>
                  <li className='cs-li'>
                    Hune, Shirley. (2002). Demographics and Diversity of Asian American College
                    Students. New Directions for Student Services. 2002. 11 - 20. 10.1002/ss.35.
                  </li>
                  <li className='cs-li'>
                    LeSueur, Ian, An Investigation of Existential and Positive Psychological
                    Resources in College Students (2019). Seton Hall University Dissertations and
                    Theses (ETDs). 2669. https://scholarship.shu.edu/dissertations/2669
                  </li>
                  <li className='cs-li'>
                    Museus, Samuel D. and Julie J. Park. &quotThe Continuing Significance of Racism
                    in the Lives of Asian American College Students.&quot; Journal of College
                    Student Development, vol. 56 no. 6, 2015, p. 551-569. Project MUSE,
                    doi:10.1353/csd.2015.0059.
                  </li>
                  <li className='cs-li'>
                    Museus, S.D., Shiroma, K., & Dizon, J.P. (2016). Cultural Community Connections
                    and College Success: An Examination of Southeast Asian American College
                    Students. Journal of College Student Development 57(5), 485-502.
                    doi:10.1353/csd.2016.0064.
                  </li>
                  <li className='cs-li'>
                    Tran, M. and Chang, M. (2019), Asian American Interest Fraternities: Fulfilling
                    Unmet Needs of the Loneliest Americans. Student Services, 2019: 73-85.
                    https://doi.org/10.1002/ss.20295
                  </li>
                  <li className='cs-li'>
                    Samura, M. (2016). Remaking Selves, Repositioning Selves, or Remaking Space: An
                    Examination of Asian American College Students’ Processes of “Belonging”.
                    Journal of College Student Development 57(2), 135-150.
                    doi:10.1353/csd.2016.0016.
                  </li>
                  <li className='cs-li'>
                    Yeh, Theresa. (2002). Asian American College Students Who Are Educationally at
                    Risk. New Directions for Student Services. 2002. 61 - 72. 10.1002/ss.39.
                  </li>
                </ul>
              </section>
            </section>
            <span className='cs-article--end-divider' />
          </div>
        </article>

        <article id='ux-design' className='mt-8 mb-24 cs-grid-wrapper w-full'>
          <div className='cs-grid'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>UX Design</h2>
              <p className='mt-4 cs-paragraph--sans cs-paragraph-first'>
                Using the user research, I define the direction and architecture for the website. By
                first formulating the design principles, I create standards in which the
                appropriateness of the design is determined. Following the design principle of
                content based design, I define the information architecture and content strategy
                which informs the visual hierarchy and design. I end by exploring emotional design
                and brand identity to amplify the user experience.
              </p>
            </div>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Formulating Design Principles</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                Design principles root the design in fundamental truths. It helps guide the project
                and define what is subjectively right or wrong.
              </p>
              <ul className='cs-ul 2xl:mt-8'>
                <li className='cs-li'>
                  <strong>Analogous design</strong> — Create interfaces that visually and
                  functionally resemble familiar interfaces and objects. This idea was inspired by{" "}
                  <a
                    className='underline text-blue visited:text-ruby'
                    href='https://www.media.mit.edu/cogmac/lcc/hofstadter.html'
                  >
                    Douglas Hofstadter’s theory of Analogy as the Core of Cognition
                  </a>
                  .
                </li>
                <li className='cs-li'>
                  <strong>Appropriate</strong> — Design within the restrictions and resources
                  available, with an eye towards long term use and maintenance.
                </li>
                <li className='cs-li'>
                  <strong>Reusable Components</strong> — Design reusable, high quality components to
                  reduce single use components. This makes development easier and shortens the
                  developmental period.
                </li>
                <li className='cs-li'>
                  <strong>Content based</strong> — Focus on presenting the content first. Identify
                  the content users need and design around it.
                </li>
                <li className='cs-li'>
                  <strong>Goal based</strong> — Learn the users goals and design so that users can
                  efficiently accomplish them.
                </li>
                <li className='cs-li'>
                  <strong>Science based</strong> — Design intuition may lead you on the right path,
                  but use data to confirm it.
                </li>
                <li className='cs-li'>
                  <strong>Balance aesthetics with functionality</strong> — Aesthetically pleasing
                  designs are rated as more usable. Our primary users are young and good with
                  technology, so the trade off for more emotional design can be offset by our users
                  technological proficiency.
                </li>
              </ul>

              <figure className='cs-figure inline-block w-full mb-0'>
                <Image src='/images/cs-pxo/designprinciples.svg' alt='' width={1373} height={901} />
              </figure>
            </section>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Information Architecture</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                This section details how content was identified, structured, and used to fulfill
                user goals, inform navigation, and guide the overall design. The goal is to
                structure the website in a way that matches the users <strong>mental model</strong>{" "}
                to increase their understanding. By doing so, users are enabled to find what they’re
                looking for quickly and easily.
              </p>
              <p className='cs-paragraph--sans'>
                To start, I analyzed use cases to identify possible features and functionality to
                support user goals. For example, to allow users to compare and contrast
                organizations, I created a “Why Psi Chi Omega” web page.
              </p>
              <p className='cs-paragraph--sans'>
                Additionally, for each use case, I created <strong>user flows</strong> to predict
                pathes users might take to complete their goals. User flows provided information on
                the relationships between content and pages, which were used to display related
                topics and suggest the next web pages for the user to visit.
              </p>
              <p className='cs-paragraph--sans'>
                Next, I created a list of topics to display on the website by combining topics from
                business requirements and user research. This topic list was presorted to identify
                the best topics that would make sense as web pages. Using{" "}
                <strong>card sorting</strong>, I assess their relationships and organize them into
                groups to create the site map.
              </p>
            </section>

            <aside className='cs-section-offset-right-region'>
              <figure className='cs-figure inline-block w-full lg:w-1/2'>
                <Image src='/images/cs-pxo/cardsorted2.png' alt='' width={2664} height={1638} />
              </figure>
              <figure className='cs-figure inline-block w-full lg:w-1/2'>
                <Image
                  src='/images/cs-pxo/site-map-nolines.jpg'
                  alt=''
                  width={2194}
                  height={1348}
                />
              </figure>
            </aside>

            <section className='cs-section--default-region'>
              <p className='cs-paragraph--sans'>
                For each webpage, I listed the webpage’s goal and planned content. Here’s an example
                for the “Who We Are” navigation group.
              </p>
              <figure className='cs-figure inline-block w-full'>
                <Image src='/images/cs-pxo/contentstrategy.png' alt='' width={2706} height={1362} />
              </figure>
              <p className='cs-paragraph--sans'>
                These living documents represent the webpage content, structure, and hierarchy to
                inform the design and help stakeholders stay on the same page.
              </p>
            </section>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Emotional Design</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                Emotional design has always been fascinating to me. Design based on emotions can
                affect overall user experience deeply, since emotions influence decision making,
                affect attention, memory, and generate meaning. An effective emotional design is
                achieved when the user experiences pleasure, discovers meaning, and identifies with
                the product.
              </p>

              <p className='cs-paragraph--sans'>
                Referencing user emotional profiles, environment, and interactions, I identify
                opportunities to give meaning and emotion to the product&apos;s visual design,
                interface design, and content. To do so, I primarily use two approaches:{" "}
                <em>designer-based</em> in which meaning is communicated through design for users to
                discover, and <em>theory-based</em> in which scientific theory and literature guide
                the emotional design. My recommendations are surmised using an emotional design
                framework to create general guidelines and product specifications.
              </p>
              <p className='cs-paragraph--sans'>
                To begin, I researched emotional design. First, considering the mechanism in which
                emotion influences behavior — current research indicates emotion does not directly
                cause behavior; instead, <em>emotions induce reflection</em>. Reflection results in
                an awareness and evaluation of oneself in relation to their surroundings which
                motivates users to take action (Baumeister et al., 2007). In{" "}
                <strong>cognitive appraisal theory</strong>, automatic and subjective evaluations
                are based on specific properties of the stimulus such as relevance and congruence to
                personal goals or agency, coping potential and control (Moors et al., 2013). The
                results of such evaluations bring about specific discrete emotions. The more intense
                the emotional state, the more cognitive reflection is likely to occur (cf. Roese,
                1997). However, awareness of oneself in the context of existentialism & identity can
                result in self-reflexive anxiety (Tietjen, 2020). Therefore, it&apos;s important
                that emotional design, especially when dealing with challenging topics, induces
                reflexivity through net positive affect and emotion.{" "}
                <em>
                  These findings highlight the importance of user research to identify relevant,
                  meaningful topics, goals, and needs to emotionalize design.
                </em>
              </p>
              <p className='cs-paragraph--sans'>
                After researching emotional design, I began by referencing the user’s{" "}
                <em>emotional profile</em> to specify design recommendations. This is important
                because a user’s current emotional climate, including previous emotional states, or
                pre-existing individual traits, dispositions, and contextual factors, shapes how a
                user experiences and responds to stimuli (Verduyn & Brans, 2012). For example, UX
                research shows our users are experiencing an existential crisis. In psychological
                existentialism, people who experience this are drawn to beauty, powerful
                experiences, achievements, connection with people, and authenticity. These are{" "}
                <em>powerful</em> themes to integrate into the design.
              </p>
              <p className='cs-paragraph--sans'>
                Next, I identified emotions to elicit and determined strategies to do so. Emotions
                were selected from a list of core emotions because they have established{" "}
                <strong>core relational themes</strong> which can be used to determine how to elicit
                that emotion from the user.
              </p>
              <p className='cs-paragraph--sans'>
                For instance, the awe emotion describes the deep feeling of wonder, astonishment and
                fear people experience when facing stimuli perceived as incredible and
                incommensurable (Keltner & Haidt, 2003). Using core relational themes, emotional
                appraisal leading to the experience of awe includes two distinctive elements, namely
                the feeling of vastness and need for accommodation. Awe resulted in a “freezing”
                response in front of something perceived vast. Such emotional responses can be
                especially useful for the homepage to break the user out of the normal flow of their
                life and capture their attention into a new, <em>immersive</em> environment.
              </p>
              <p className='cs-paragraph--sans'>
                Understanding a user’s emotional profile and emotional design allows us to find
                opportunities to target and exploit needs to elicit powerful emotional responses.
                When users reflect, the experienced internalized emotions influence their appraisal
                and feedback loop to motivate action.
              </p>
              <p className='cs-paragraph--sans'>
                To structure my design insights, I used Don Norman’s{" "}
                <strong>theory of emotional design</strong> where he defines three levels: the{" "}
                <strong>visceral</strong>, <strong>behavioral</strong>, and{" "}
                <strong>reflective</strong>. According to this theory, the reflective level is
                influenced by the visceral and behavioral levels and not directly influenced by
                sensory input. In UI design this might certainly be the case, but if UX writing is
                considered a part of design, emotion driven through language and content certainly
                can be used to affect reflexivity. Because of this, I included UX writing within the
                reflective level.
              </p>

              <div className=''>
                <h5 className='cs-topic'>Visercal Recommendations</h5>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  Use a distinct design separate from our competitors. Thackara (1997) realized that
                  many products in the current market were similar in respect of their technical
                  characteristics, quality and price. In order to increase the attractiveness and
                  market competitiveness, new products would have to be innovative in design to
                  enrich the users’ experiences.
                </p>
                <p className='cs-paragraph--sans'>
                  Motion and color can make the website immersive. Spatial immersion captures the
                  user&apos;s attention and can focus important elements. The relationship between
                  color and emotion is well established.
                </p>
                <p className='cs-paragraph--sans'>
                  Use relatable, powerful imagery. For example, pictures of nature, fraternity
                  members, social events (such as festivals), UC Davis campus, or images related to
                  Asian-American identity. Imagery can be effective in communicating meaning,
                  emotions and ideas to the users.
                </p>
                <p className='cs-paragraph--sans'>
                  Use content based on real people to build trust and allow users to connect and
                  identify with real people.
                </p>
              </div>

              <div className=''>
                <h4 className='cs-topic'>Behavior Recommendations</h4>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  The behavioral level concerns itself with four components: usability,
                  functionality, understandability, and physical feel. I’ll come back to this in the
                  UI design section.
                </p>
              </div>

              <div className=''>
                <h5 className='cs-topic'>Reflective Recommendations</h5>
                <p className='cs-paragraph--sans cs-paragraph-first'>
                  Create a brand and UI that resonates with the user&apos;s emotional profile and
                  desired identity.
                </p>
                <p className='cs-paragraph--sans'>
                  Use a comforting tone. Speak as a mentor who empathizes, who was once in their
                  shoes and understands their situation.
                </p>
                <p className='cs-paragraph--sans'>
                  Reference thematically related concepts. Use ideas such as the hero’s journey,
                  growth, overcoming obstacles such as “climbing the mountain” or “crossing the
                  sea.”
                </p>
                <p className='cs-paragraph--sans'>
                  Use affective words and emotion concepts. Of course, the things people say can
                  affect emotions, but recent research shows that emotion concepts when read creates
                  instances of emotion. This means by including emotion concept words in
                  copywriting, we can elicit emotion from our users.
                </p>
                <p className='cs-paragraph--sans'>
                  Soothe, comfort, and reassure. Users may be stressed for a variety of factors.
                  Deciding to join a fraternity can be a big commitment. Increasing one&apos;s
                  emotional regulation and decreasing negative affective state can be therapeutic
                  and reduces cognitive load in decision making (Plass & Kalyuga, 2019).
                </p>
                <p className='cs-paragraph--sans'>
                  Don’t overdo it. High emotional intensity can be mentally exhausting and increases
                  cognitive load. (Plass & Kalyuga, 2019)
                </p>
              </div>
              <section className='overflow-hidden'>
                <h4 className='cs-topic article-accent-line max:mt-24'>References</h4>
                <ul className='list-inside list-none mt-3 max:mt-5 font-accent text-sm'>
                  <li className='cs-li'>
                    Amic G. Ho & Kin Wai Michael G. Siu (2012) Emotion Design, Emotional Design,
                    Emotionalize Design: A Review on Their Relationships from a New Perspective, The
                    Design Journal, 15:1, 9-32, DOI: 10.2752/175630612X13192035508462
                  </li>
                  <li className='cs-li'>
                    Baumeister, R. F., Vohs, K. D., Nathan DeWall, C., & Zhang, L. (2007). How
                    Emotion Shapes Behavior: Feedback, Anticipation, and Reflection, Rather Than
                    Direct Causation. Personality and Social Psychology Review, 11(2), 167–203.
                    https://doi.org/10.1177/1088868307301033
                  </li>
                  <li className='cs-li'>
                    Brans, Karen & Koval, Peter & Verduyn, Philippe & Lim, Yan & Kuppens, Peter.
                    (2013). The Regulation of Negative and Positive Affect in Daily Life. Emotion
                    (Washington, D.C.). 13. 10.1037/a0032400.
                  </li>
                  <li className='cs-li'>
                    Desmet, Pieter & Hekkert, Paul. (2009). Design & Emotion. International Journal
                    of Design. 3. 1-6.
                  </li>
                  <li className='cs-li'>
                    Keltner, D., and Haidt, J. (2003). Approaching awe, a moral, spiritual, and
                    aesthetic emotion. Cogn. Emot. 17, 297–314. doi: 10.1080/02699930302297
                  </li>
                  <li className='cs-li'>
                    Lindquist, K.A. Language and Emotion: Introduction to the Special Issue. Affec
                    Sci 2, 91–98 (2021). https://doi.org/10.1007/s42761-021-00049-7
                  </li>
                  <li className='cs-li'>
                    Moors, A., Ellsworth, P. C., Scherer, K. R., and Frijda, N. H. (2013). Appraisal
                    theories of emotion: state of the art and future development. Emot. Rev. 5,
                    119–124. doi: 10.1177/1754073912468165
                  </li>
                  <li className='cs-li'>
                    Norman, D. (2003). Emotional Design: Why We Love (or hate) Everyday Things.
                    Basic Books.
                  </li>
                  <li className='cs-li'>
                    Plass, J.L., Kalyuga, S. Four Ways of Considering Emotion in Cognitive Load
                    Theory. Educ Psychol Rev 31, 339–359 (2019).
                    https://doi.org/10.1007/s10648-019-09473-5
                  </li>
                  <li className='cs-li'>
                    Roese, N. J. (1997). Counterfactual thinking. Psychological Bulletin, 121(1),
                    133–148. https://doi.org/10.1037/0033-2909.121.1.133
                  </li>
                  <li className='cs-li'>
                    Thackara, J. (1997). Winners: How Successful Companies Innovate by Design.
                    Amsterdam: BIS
                  </li>
                  <li className='cs-li'>
                    TIETJEN, R. (2020). The Emotion of Self-Reflexive Anxiety. Journal of the
                    American Philosophical Association, 6(3), 297-315. doi:10.1017/apa.2020.10
                  </li>
                  <li className='cs-li'>
                    Triberti, S., Chirico, A., La Rocca, G., & Riva, G. (2017). Developing Emotional
                    Design: Emotions as Cognitive Processes and their Role in the Design of
                    Interactive Technologies. Frontiers in psychology, 8, 1773.
                    https://doi.org/10.3389/fpsyg.2017.01773
                  </li>
                  <li className='cs-li'>
                    Verduyn, Philippe & Brans, Karen. (2012). The relationship between extraversion,
                    neuroticism and aspects of trait affect. Personality and Individual Differences.
                    52. 664–669. 10.1016/j.paid.2011.12.017.
                  </li>
                </ul>
              </section>
            </section>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Branding</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                During rush events, Psi Chi Omega borrows other brand images by putting our greek
                letters onto their designs. It allows members to collectively decide on a theme and
                inject their own personality onto the fraternity; however, this strategy over the
                long-term weakens the brand because it relies on other brand images instead of
                developing its own.
              </p>

              <p className='cs-paragraph--sans'>
                Using <strong>product sliders</strong>, I defined the characteristics of the brand
                and website. Using an emotional branding model, we define our brand personality by
                measuring alignment with <em>brand-meaning characteristics</em>. Both of these
                exercises were crucial towards defining our visual design direction. Looking towards
                our fraternity history, I identified possible imagery and symbols such as poseidon
                and the trident to integrate into the design.
              </p>

              <figure className='cs-figure inline-block w-2/3'>
                <Image
                  src='/images/cs-pxo/designprinciples_cropped_bw_mobile_2x.png'
                  alt=''
                  width={2212}
                  height={1696}
                />
                <figcaption className='cs-figure-caption'>
                  Product sliders help define the brand identity.
                </figcaption>
              </figure>

              <p className='cs-paragraph--sans'>
                To refine our brand identity, I conducted a <strong>brand analysis</strong> and
                created guidelines for the existing brand assets to ensure brand congruence
                throughout all channels. Psi Chi Omega has an intricate family coat of arms that is
                often underutilized in favor of the more modern bold sans serif greek letter logo.
                The coat of arms, while outdated, could be used as a secondary logo to add a sense
                of authority, tradition and heritage to the Psi Chi Omega name. Unless the coat of
                arms is redesigned, I would not recommend using it as the primary logo.
              </p>
              <p className='cs-paragraph--sans'>
                For the primary logo, a bold sans serif typeface was kept to maintain a strong,
                modern appearance. To decide the typeface to use, I compared several typefaces that
                support Greek letters and decided on the typeface with the most appropriate
                characteristics. The result is three Greek letters that are able to stand on their
                own. As the primary typeface for the design, I used a neo-grotesque font as the
                primary sans serif typeface. As a supporting accent typeface, I selected a thin,
                sharp monospace typeface.
              </p>
            </section>
          </div>
          <section className='w-full mt-8 mb-6 xs:mb-3 lg:mt-10 lg:mb-6 2xl:mt-16 2xl:mb-16'>
            <div className='cs-grid'>
              <div className='cs-section-default-content-block col-span-full md:col-start-6 md:col-span-11 lg:col-span-9 lg:col-start-3 xl:col-span-8 xl:col-start-5 2xl:col-span-6 2xl:col-start-6 grid grid-cols-12 gap-x-4 gap-y-4 bg-[#E5E5E5] p-4 2xl:p-8'>
                <figure className='cs-figure inline-block m-0 col-span-4'>
                  <Image src='/images/cs-pxo/blackgreenlogo.png' alt='' width={1284} height={945} />
                </figure>
                <figure className='cs-figure inline-block m-0 col-span-4'>
                  <Image src='/images/cs-pxo/greenwhitelogo.png' alt='' width={1284} height={945} />
                </figure>
                <figure className='cs-figure inline-block m-0 col-span-4'>
                  <Image src='/images/cs-pxo/greenblacklogo.png' alt='' width={1284} height={945} />
                </figure>
                <figure className='cs-figure inline-block m-0 col-span-4'>
                  <Image src='/images/cs-pxo/whitegreenlogo.png' alt='' width={1284} height={945} />
                </figure>
                <figure className='cs-figure inline-block m-0 col-span-4'>
                  <Image src='/images/cs-pxo/blackwhitelogo.png' alt='' width={1284} height={945} />
                </figure>
                <figure className='cs-figure inline-block m-0 col-span-4'>
                  <Image src='/images/cs-pxo/whiteblacklogo.png' alt='' width={1284} height={945} />
                </figure>
              </div>
            </div>
          </section>
          <section className='cs-grid'>
            <div className='cs-section--default-region'>
              <p className='cs-paragraph--sans'>
                Finally, the color scheme was revitalized to be more modern. Forest green, the
                primary color, was switched from a bright green to a darker, rich shade of forest
                green. Midnight black was shifted to a lighter shade of black. Pure white remains
                the same. Neutral colors were picked as secondary colors to maintain the focus on
                the primary color scheme while adding depth and variation.
              </p>
              <p className='cs-paragraph--sans'>
                <strong>Moodboard</strong> images were selected to visually describe the atmosphere,
                tone, and feeling, and theme of the website. They represent important, meaningful
                imagery and themes that members might experience throughout their journey with Psi
                Chi Omega.
              </p>
              <figure className='cs-figure inline-block w-full'>
                <Image src='/images/cs-pxo/moodboard2.png' alt='' width={4743} height={2925} />
              </figure>
            </div>
          </section>
          <section className='w-full 2xl:py-32 bg-[#E5E5E5] mt-8 mb-6 xs:mb-3 lg:mt-10 lg:mb-6 2xl:mt-16 2xl:mb-16'>
            <div className='cs-grid'>
              <div className='cs-section-default-content-block col-span-full md:col-start-6 md:col-span-11 lg:col-span-9 lg:col-start-3 xl:col-span-8 xl:col-start-5 2xl:col-span-10 2xl:col-start-4 grid grid-cols-12 gap-x-4 gap-y-4'>
                <figure className='cs-figure inline-block m-0 col-span-4'>
                  <Image
                    src='/images/cs-pxo/brand-guidelines/bi2.png'
                    alt=''
                    width={1440}
                    height={1024}
                  />
                </figure>
                <figure className='cs-figure inline-block m-0 col-span-4'>
                  <Image
                    src='/images/cs-pxo/brand-guidelines/bi3.png'
                    alt=''
                    width={1440}
                    height={1024}
                  />
                </figure>
                <figure className='cs-figure inline-block m-0 col-span-4'>
                  <Image
                    src='/images/cs-pxo/brand-guidelines/color2.png'
                    alt=''
                    width={1440}
                    height={1024}
                  />
                </figure>
                <figure className='cs-figure inline-block m-0 col-span-4'>
                  <Image
                    src='/images/cs-pxo/brand-guidelines/color3.png'
                    alt=''
                    width={1440}
                    height={1024}
                  />
                </figure>
                <figure className='cs-figure inline-block m-0 col-span-4'>
                  <Image
                    src='/images/cs-pxo/brand-guidelines/type2.png'
                    alt=''
                    width={1440}
                    height={1024}
                  />
                </figure>
                <figure className='cs-figure inline-block m-0 col-span-4'>
                  <Image
                    src='/images/cs-pxo/brand-guidelines/type3.png'
                    alt=''
                    width={1440}
                    height={1024}
                  />
                </figure>
                <figure className='cs-figure inline-block m-0 col-span-4'>
                  <Image
                    src='/images/cs-pxo/brand-guidelines/type4.png'
                    alt=''
                    width={1440}
                    height={1024}
                  />
                </figure>
                <figure className='cs-figure inline-block m-0 col-span-4'>
                  <Image
                    src='/images/cs-pxo/brand-guidelines/type5.png'
                    alt=''
                    width={1440}
                    height={1024}
                  />
                </figure>
                <figure className='cs-figure inline-block m-0 col-span-4'>
                  <Image
                    src='/images/cs-pxo/brand-guidelines/type6.png'
                    alt=''
                    width={1440}
                    height={1024}
                  />
                </figure>
              </div>
            </div>
          </section>
          <div className='cs-grid'>
            <span className='cs-article--end-divider' />
          </div>
        </article>

        <article id='wireframes' className='mt-8 mb-24 cs-grid-wrapper w-full'>
          <div className='cs-grid'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>Wireframes</h2>
              <p className='mt-4 cs-paragraph--sans cs-paragraph-first'>
                Referencing the content strategy, I began by sketching out several designs on paper
                and pen. Wireframing was primarily focused on how the content should be presented
                and testing the information flow between web pages. A combination of design
                patterns, design recommendations from{" "}
                <a
                  className='underline text-blue visited:text-ruby'
                  href='https://www.nngroup.com/'
                >
                  NN group
                </a>
                , UX heuristics and gestalt principles helped here. When I was satisfied with the
                designs, I converted them into high-fidelity wireframes with Figma. Ultimately, the
                deciding factor for the design direction were constraints on possible challenges and
                limitations in sourcing content and images.
              </p>
            </div>
          </div>
          <div className='w-full bg-[#e5e5e5] mt-8 mb-6 xs:mb-3 lg:mt-10 lg:mb-6 2xl:mt-16 2xl:mb-16'>
            <div className='cs-grid'>
              <figure className='cs-figure col-span-full m-0'>
                <Image
                  className=''
                  src='/images/cs-pxo/allwireframes2.png'
                  alt=''
                  width={1871}
                  height={991}
                  layout='responsive'
                />
              </figure>
            </div>
          </div>
          <div className='cs-grid'>
            {/* <!-- <div className="cs-section--default-region">
            <p className="mt-4 cs-paragraph--sans">
              Because this design process took several iterations, it was very tedious. With every
              change, I had to update the corresponding changes in each breakpoint and webpage if
              they shared the same component. This problem eventually led me to learning how to
              structure my designs and components for reusability.
            </p>
          </div> --> */}
            <span className='cs-article--end-divider' />
          </div>
        </article>

        <article id='ui-design' className='mt-8 mb-24 cs-grid-wrapper w-full'>
          <div className='cs-grid'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>UI Design</h2>
              <p className='mt-4 cs-paragraph--sans cs-paragraph-first'>
                When I first started designing the website, I went through several wireframe
                iterations and medium fidelity prototypes but never was happy with the design. I
                tried to emulate some of the websites I saw, but my designs still didn’t feel
                cohesive and lacked the aesthetics I wanted. While I had taken some online UX
                courses and learned about individual concepts such as typefaces, grid, color theory,
                etc, I had trouble piecing it all together to create an effective design. All this
                changed when I discovered the idea of design systems.
              </p>
            </div>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Creating a design system</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                A design system is a collection of assets, guidelines and components as it relates
                to the user interface. Design systems promote consistency throughout all products by
                serving as the universal truth in which UI components and patterns are created.
                Learning from these design systems such as{" "}
                <a
                  className='underline text-blue visited:text-ruby'
                  href='https://carbondesignsystem.com/'
                >
                  Carbon Design System
                </a>{" "}
                from IBM,{" "}
                <a
                  className='underline text-blue visited:text-ruby'
                  href='https://spectrum.adobe.com/'
                >
                  Spectrum
                </a>{" "}
                from Adobe, and{" "}
                <a className='underline text-blue visited:text-ruby' href='https://material.io/'>
                  Material UI
                </a>{" "}
                by Google helped me grasp best practices, industry standards, and fundamental design
                concepts and patterns to use in my own design system.
              </p>
              <p className='cs-paragraph--sans'>
                The Psi Chi Omega design system was created as a library in Figma. It includes a
                hybrid grid system, typography system, color scheme, and component library.
              </p>
              <p className='cs-paragraph--sans'>
                The grid system is a hybrid grid with an 8pt base square. At each breakpoint, column
                and gutter widths are multiples of 8 that snap perfectly to the base grid. A hybrid
                grid was used to create an overall consistent layout while allowing flexibility for
                different use cases and components such as a header and hero that scale for large
                resolutions (1920pt+).
              </p>
              <figure className='cs-figure'>
                <Image
                  className=''
                  src='/images/cs-pxo/ds-grid.png'
                  alt=''
                  width={2305}
                  height={2593}
                  layout='responsive'
                />
                <figcaption className='cs-figure-caption'></figcaption>
              </figure>
              <p className='cs-paragraph--sans'>
                The typography system uses multiples of 4 in line height and text size so that the
                total height snaps to the 8pt grid.
              </p>
              <figure className='cs-figure'>
                <Image
                  className=''
                  src='/images/cs-pxo/ds-type.png'
                  alt=''
                  width={2305}
                  height={2760}
                  layout='responsive'
                />
                <figcaption className='cs-figure-caption'></figcaption>
              </figure>
            </section>

            <section className='cs-section--default-region'>
              <h3 className='cs-h3'>Component Design</h3>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                When working on a large project, it&apos;s easy to get lost in the process and feel
                overwhelmed. By focusing on creating individual components, I made steady progress
                that allowed me to get at least something to work with. To create components, I
                compiled a list of guidelines to follow and referenced components from various
                design systems and UI kits.
              </p>
            </section>

            <aside className='cs-section-offset-right-region'>
              <figure className='cs-figure inline-block w-full lg:w-1/2'>
                <Image
                  className=''
                  src='/images/cs-pxo/bh1.png'
                  alt=''
                  width={1861}
                  height={929}
                  layout='responsive'
                />
              </figure>
              <figure className='cs-figure inline-block w-full lg:w-1/2'>
                <Image
                  className=''
                  src='/images/cs-pxo/bh2.png'
                  alt=''
                  width={1861}
                  height={929}
                  layout='responsive'
                />
              </figure>
            </aside>

            <aside className='cs-section-offset-right-region'>
              <figure className='cs-figure inline-block w-full lg:w-1/2'>
                <Image
                  className=''
                  src='/images/cs-pxo/bh3.png'
                  alt=''
                  width={1861}
                  height={929}
                  layout='responsive'
                />
              </figure>
              <figure className='cs-figure inline-block w-full lg:w-1/2'>
                <Image
                  className=''
                  src='/images/cs-pxo/bh4.png'
                  alt=''
                  width={1861}
                  height={929}
                  layout='responsive'
                />
              </figure>
            </aside>

            <aside className='cs-section-offset-right-region'>
              <figure className='cs-figure inline-block w-full lg:w-1/2'>
                <Image
                  className=''
                  src='/images/cs-pxo/usabilityguidelines1.png'
                  alt=''
                  width={484}
                  height={364}
                  layout='responsive'
                />
              </figure>

              <figure className='cs-figure inline-block w-full lg:w-1/2'>
                <Image
                  className=''
                  src='/images/cs-pxo/usabilityguidelines2.png'
                  alt=''
                  width={484}
                  height={364}
                  layout='responsive'
                />
              </figure>

              {/* <!-- <figcaption className="cs-figure-caption">
                Shitkova, M., Holler, J., Heide, T., Clever, N., & Becker, J. (2015). Towards
                Usability Guidelines for Mobile Websites and Applications. Wirtschaftsinformatik.
              </figcaption> --> */}
            </aside>

            <span className='cs-article--end-divider'></span>
          </div>
        </article>

        <article id='final-prototype' className='mt-8 mb-24 cs-grid-wrapper w-full'>
          <div className='cs-grid'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>Final Prototype</h2>
              {/* <!-- <p className="mt-4 cs-paragraph--sans cs-paragraph-first">
              </p> --> */}
            </div>
          </div>
          <div className='w-full bg-[#e5e5e5] mt-8 mb-6 xs:mb-3 lg:mt-10 lg:mb-6 2xl:mt-16 2xl:mb-16'>
            <div className='cs-grid'>
              <figure className='cs-figure col-span-full m-0'>
                <Image
                  className=''
                  src='/images/cs-pxo/allprototypeswithinteractions.png'
                  alt=''
                  width={1916}
                  height={966}
                  layout='responsive'
                />
              </figure>
              <figure className='cs-figure col-span-full m-0'>
                <Image
                  className=''
                  src='/images/cs-pxo/prototype_mobile_plain.png'
                  alt=''
                  width={1909}
                  height={991}
                  layout='responsive'
                />
              </figure>
              <figure className='cs-figure col-span-full m-0'>
                <Image
                  className=''
                  src='/images/cs-pxo/prototype_tablet_plain.png'
                  alt=''
                  width={1915}
                  height={988}
                  layout='responsive'
                />
              </figure>
              <figure className='cs-figure col-span-full m-0'>
                <Image
                  className=''
                  src='/images/cs-pxo/prototype_desktop_plain.png'
                  alt=''
                  width={1911}
                  height={956}
                  layout='responsive'
                />
              </figure>
            </div>
          </div>

          <div className='cs-grid'>
            <div className='cs-section--default-region'>
              <p className='mt-4 cs-paragraph--sans'>
                You can view the interactive prototype{" "}
                <a
                  className='underline text-[#0000EE]'
                  href='https://www.figma.com/proto/psn3sijN7IPiiFg9dSEcNZ/Psi-Chi-Omega-Website?page-id=4191%3A31847&node-id=4191%3A46499&viewport=276%2C48%2C0.04&scaling=min-zoom&starting-point-node-id=4191%3A46499&show-proto-sidebar=1'
                >
                  here
                </a>
                .
              </p>
            </div>
          </div>

          {/* <!-- <div className="w-full bg-[#e5e5e5] mt-8 mb-6 xs:mb-3 lg:mt-10 lg:mb-6 2xl:mt-16 2xl:mb-16">
            <div className="cs-grid">
              <figure className="cs-figure col-span-full m-0">
                <img className="" src="assets/images/cs-pxo/prototype_mobile_plain.png" alt="" />
              </figure>
              <figure className="cs-figure col-span-full m-0">
                <img className="" src="assets/images/cs-pxo/prototype_tablet_plain.png" alt="" />
              </figure>
              <figure className="cs-figure col-span-full m-0">
                <img className="" src="assets/images/cs-pxo/prototype_desktop_plain.png" alt="" />
              </figure>
            </div>
          </div> --> */}

          <div className='cs-grid'>
            <div className='cs-section--default-region'></div>
            <span className='cs-article--end-divider' />
          </div>
        </article>

        <article id='development' className='mt-8 mb-24 cs-grid-wrapper w-full'>
          <div className='cs-grid'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>Development</h2>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                The main technology used is React, TailwindCSS, Next.js, and Strapi.
              </p>
              <p className='cs-paragraph--sans'>
                React builds the UI and handles the computational logic. TailwindCSS is a
                utility-first CSS framework used for rapid prototype styling; however, the
                utility-first pattern can be problematic for maintainability especially when styling
                complex components. For large projects with a mature design system I would
                definitely use Sass instead. Next.js is a static-site generator and is rendered
                server side for high performance to the end user.
              </p>
              <p className='cs-paragraph--sans'>
                Strapi is a headless CMS so content editors can easily create and publish content
                without knowing how to code. Strapi CMS was deployed on Heroku with Cloudinary for
                image hosting.
              </p>
              <p className='cs-paragraph--sans'>
                To create forms, I tried formik and react-hook-forms. In a previous iteration, I
                used the google sheets API to add and remove email subscriptions to and from google
                sheets. For contacting us, the form submits the data to the Gmail API which sends an
                email to a defined email address.
              </p>
              <p className='cs-paragraph--sans'>The website is currently in development.</p>
            </div>

            <span className='cs-article--end-divider' />
          </div>
        </article>

        <article id='challenges' className='mt-8 mb-24 cs-grid-wrapper w-full'>
          <div className='cs-grid'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>Challenges</h2>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                One of the most demanding aspects of this project was the amount of time and effort
                I put into this project. This was my first serious UX project and I really
                overestimated my initial UX design skills. Because of this, the foundation, design
                and development direction I started the project on created a lot of design and
                technical debt.
              </p>
              <p className='cs-paragraph--sans'>
                As I worked and learned new concepts about UX, I constantly went back to revise the
                project. The amount of iterations and backtracking in order to deliver a product
                within my standards made this process extremely time consuming.
              </p>
              <p className='cs-paragraph--sans'>
                When faced with tough decisions, I often found myself in analysis paralysis;
                however, trusting the process, creating plans, goals, milestones, envisioning the
                end product, and keeping up the momentum helped me stay on track.
              </p>
              <p className='cs-paragraph--sans'>
                Working on this project alone meant I had to be self-reliant. Feeling stuck in limbo
                with a half-baked design was really uncomfortable sometimes, but in the end it
                pushed me past my boundaries, forced me to learn new skills, and because of that
                I&apos;m a better designer and developer than before.
              </p>
            </div>
            <span className='cs-article--end-divider' />
          </div>
        </article>

        <article id='conclusion' className='mt-8 mb-24 cs-grid-wrapper w-full'>
          <div className='cs-grid'>
            <div className='cs-article-header'>
              <h2 className='cs-h2'>Looking Forward</h2>
              <p className='cs-paragraph--sans cs-paragraph-first'>
                This project became more than just creating a website. It became a way of preserving
                the history of our fraternity, defining what Psi Chi Omega is really about, and what
                I hope and envision what Psi Chi Omega would become.
              </p>
              <p className='cs-paragraph--sans'>
                My vision for this project was to create a design with a nostalgic, timeless feeling
                of fondness in homage to the journey, experiences, memories I’ve made being a part
                of Psi Chi Omega, and hope that this feeling is conveyed through the design and felt
                by my users. I want them to feel like they’ve discovered something special that
                makes them want to become a part of us. I hope this website reaches someone out
                there who really needs it.
              </p>
              {/* <!-- <p className="cs-paragraph--sans">
                However, business goals are always changing. At this time, this website could become
                the national board website for Psi Chi Omega, which focuses on representing the
                organization. instead of recruiting. This is an important milestone because as an
                official representation of the organization, we are held liable and accountable for
                actions of the individual chapters and their members. If the goal of the website
                changes, the information architecture needs to be modified to reflect this change.
              </p> --> */}
            </div>
            <span className='cs-article--end-divider' />
          </div>
        </article>
      </Layout>
    </div>
  );
}
