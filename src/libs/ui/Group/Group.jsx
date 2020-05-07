import React from 'react';
import PropTypes from 'prop-types';

// styled components
import styled from 'styled-components/macro';
import mixins from '../styles/mixins';
import { MARGIN_AND_PADDING_OPTIONS } from '../styles/variables/variables';

const themes = {
  vertical: `
    display: flex;
    flex-direction: column;

    > * {
      margin-top: 3rem;
    }

    > :last-child {
      margin-bottom: 3rem;
    }
  `,
  horizontal: `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `,
};

const GroupWrapper = styled.div(({ theme, center, removeMargins }) => `
  ${themes[theme]}

  ${center ? 'align-items: center;' : ''}
  ${removeMargins ? mixins.removeMargin(removeMargins) : ''}
`);

const Group = (props) => {
  return (
    <GroupWrapper {...props}>{props.children}</GroupWrapper>
  );
};

Group.defaultProps = {
  theme: 'vertical',
};

Group.propTypes = {
  children: PropTypes.any.isRequired,
  // styles
  theme: PropTypes.oneOf([
    'vertical', 'horizontal',
  ]).isRequired,
  center: PropTypes.bool,
  removeMargins: PropTypes.arrayOf(
    PropTypes.oneOf([
      ...MARGIN_AND_PADDING_OPTIONS
    ])
  ),
};

export default Group;
