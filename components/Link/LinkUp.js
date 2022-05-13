import PropTypes from "prop-types";
import { useState } from "react";
import Image from "next/image";

function LinkUp(props) {
  let [isActive, setActive] = useState(false);
  let src = isActive ? "/icons/arrow--up.png" : "/icons/circle.png";

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
      className='block text-center mx-auto mt-40 mb-20 col-span-full scroll-smooth'
    >
      <button>
        <Image src={src} width={96} height={96} alt='' />
      </button>
    </a>
  );
}

LinkUp.propTypes = {};

export default LinkUp;
