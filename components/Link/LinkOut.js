import React from "react";
import PropTypes from "prop-types";

function LinkOut({ text, href }) {
  return (
    <a className='underline text-blue visited:text-ruby' href={href}>
      {text}
    </a>
  );
}

LinkOut.propTypes = {};

export default LinkOut;
