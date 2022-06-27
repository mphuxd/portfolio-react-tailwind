import React from "react";
import PropTypes from "prop-types";

function List({ children }) {
  return <ul className='list-outside p-4 list-disc space-y-2 font-base'>{children}</ul>;
}

List.propTypes = {};

export default List;
