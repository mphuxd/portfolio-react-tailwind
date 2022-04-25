import { Header, FooterMiniLight } from "@/components";
import NextNProgress from "nextjs-progressbar";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <NextNProgress
        color='#ce5374'
        startPosition={0.3}
        stopDelayMs={200}
        height={6}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />
      <meta charSet='UTF-8' />
      <meta name='viewport' content='initial-scale=1.0' />
      <meta name='description' content='Matthew Pham Portfolio' />
      <meta
        name='keyword'
        content='Matthew, Pham, Front, End, Developer, UX, User, Experience, UI, Interface, Design, Portfolio, Web, San, Jose'
      />
      <link rel='icon' href='/favicon.ico' />
      <Header />
      <motion.main
        variants={variants}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 0.5 }}
        className='min-h-screen text-midnight'
      >
        {children}
      </motion.main>
      <FooterMiniLight />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
