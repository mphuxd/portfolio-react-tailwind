import PropTypes from "prop-types";
import { useState } from "react";
import Image from "next/image";
import cx from "classnames";

function LinkUp(props) {
  let [isActive, setActive] = useState(false);
  let src = isActive ? "/icons/arrow--up.png" : "/icons/circle.png";
  let imgClassName = cx([
    "block absolute translate-x-1/2 top-1/2 right-1/2 scale-100 transition-all delay-75",
    { "opacity-100 -translate-y-1/2 xl:-translate-y-0 xl:opacity-0": !isActive },
    { "opacity-100 -translate-y-1/2 ": isActive },
  ]);

  function handleHover() {
    setActive(!isActive);
  }

  function useScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <a
      onClick={useScrollToTop}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className='block relative text-center mx-auto mt-40 mb-20 col-span-full scroll-smooth'
    >
      <button className='link--scroll-up relative hover:scale-150 transition-all ease-out duration-75'>
        <div className={imgClassName}>
          <Image src='/icons/arrow--up-nobg.png' alt='Scroll back to top' width={48} height={48} />
        </div>
      </button>
    </a>
  );
}

LinkUp.propTypes = {};

export default LinkUp;
