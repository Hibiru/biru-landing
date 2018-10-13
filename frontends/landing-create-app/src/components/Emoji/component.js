import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({ children, label }) => (
  <span role="img" aria-label={label}>{children}</span>
);

Emoji.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default Emoji;
