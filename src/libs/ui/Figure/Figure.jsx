import React from 'react';
import PropTypes from 'prop-types';

import Link from '../Link/Link';

// styled components
import styled from 'styled-components/macro';

const Figure = styled.figure(() => `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`);

/**
 * ==================
 *     COMPONENT
 * ==================
 */
const StyledFigure = ({ imgSrc, altText, caption, linkTo }) => {
  const ImageAsset = require('../../../assets/images/' + imgSrc);
  const ImageComponent = (
    <Figure>
      <img src={ImageAsset} alt={altText} />
      {caption ? <caption>{caption}</caption> : null}
    </Figure>
  );
  return linkTo
    ? (
      <Link linkTo={linkTo}>
        {ImageComponent}
      </Link>
    )
    : ImageComponent
};

/**
 * ==================
 *     PROP-TYPES
 * ==================
 */

StyledFigure.defaultProps = {
  altText: '',
};

StyledFigure.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string,
  caption: PropTypes.string,
  linkTo: PropTypes.string,
};

export default StyledFigure;
