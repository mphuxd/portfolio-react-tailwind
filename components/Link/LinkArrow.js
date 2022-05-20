import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function LinkArrow({ linkAlt }) {
  return (
    <div className='p-2'>
      <Image src='/icons/arrow_thin.png' width={20} height={12} alt={linkAlt} />
    </div>
  );
}

LinkArrow.propTypes = {};

export default LinkArrow;
