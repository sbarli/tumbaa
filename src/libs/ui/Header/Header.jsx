import React from 'react';
import PropTypes from 'prop-types';

/**
 * ===========================
 *     STYLED COMPONENTS
 * ===========================
 */
import styled from 'styled-components/macro';
import mixins from '../styles/mixins';
import { MARGIN_AND_PADDING_OPTIONS } from '../styles/variables/variables';

const centeredHeader = `
  display: flex;
  justify-content: center;
`;

const HeaderWrapper = styled.header(({ center }) => `
  ${center ? centeredHeader : ''}
`);

const sharedHeaderStyles = ({
  includeWrapper,
  removeMargins,
  removePadding,
  addPaddingTop,
  borderImage,
  center,
  theme,
}) => (`
  font-family: var(--font-stack-headers);
  font-weight: var(--font-weight-default);
  color: var(--teal-primary);
  width: fit-content;
  ${removeMargins ? mixins.removeMargin(removeMargins) : ''}
  ${removePadding ? mixins.removePadding(removePadding) : ''}
  ${addPaddingTop ? 'padding-top: 5rem;' : ''}
  ${!includeWrapper && center ? 'text-align: center;' : ''}
  ${!includeWrapper ? 'width: 100%;' : ''}
  ${borderImage ? theme.borderImage(...borderImage) : ''}
`);

const headerStyles = {
  h1: styled.h1((props) => {
    const sharedProps = { ...props };
    return (`
      ${sharedHeaderStyles(sharedProps)}
      font-weight: var(--font-weight-bold);
      color: var(--teal-dark);
  `)
  }),
  h2: styled.h2((props) => sharedHeaderStyles(props)),
  h3: styled.h3((props) => sharedHeaderStyles(props)),
};

/**
 * ==================
 *     COMPONENT
 * ==================
 */
const Header = (props) => {
  const HeaderToRender = headerStyles[props.size];
  return (props.includeWrapper
    ? (
      <HeaderWrapper {...props}>
        <HeaderToRender {...props} theme={mixins}>{props.children}</HeaderToRender >
      </HeaderWrapper>
    )
    : <HeaderToRender {...props} theme={mixins}>{props.children}</HeaderToRender >
  );
};

/**
 * ==================
 *     PROP-TYPES
 * ==================
 */
Header.defaultProps = {
  includeWrapper: false,
};

Header.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.oneOf([
    'h1', 'h2', 'h3',
  ]).isRequired,
  includeWrapper: PropTypes.bool.isRequired,
  // styles
  center: PropTypes.bool,
  addPaddingTop: PropTypes.bool,
  removeMargins: PropTypes.arrayOf(
    PropTypes.oneOf([
      ...MARGIN_AND_PADDING_OPTIONS
    ])
  ),
  removePadding: PropTypes.arrayOf(
    PropTypes.oneOf([
      ...MARGIN_AND_PADDING_OPTIONS
    ])
  ),
};

export default Header;
