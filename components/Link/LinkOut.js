import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

function LinkOut({ text, href, inline = false }) {
  let classNames = cx(
    "underline text-blue visited:text-ruby",
    { inline: inline },
    { block: !inline }
  );
  return (
    <a className={classNames} href={href}>
      {text}
    </a>
  );
}

LinkOut.propTypes = {};

export default LinkOut;
