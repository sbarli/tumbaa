import React from 'react';
import PropTypes from 'prop-types';

// styled components
import styled from 'styled-components/macro';

const buttonSizes = {
  sm: `
    padding: 8px;
    font-size: 1.8rem;
  `,
  md: `
    padding: 10px;
    font-size: 2rem;
  `,
  lg: `
  padding: 15px;
  font-size: 2.2rem;
  `,
};

const themes = {
  gold: `
    color: var(--blurple-dark);
    background-color: var(--gold-light);
    border: 4px solid var(--gold-light);
    border-radius: var(--radius-default);

    &:hover {
      background-color: var(--gold-primary);
      border-color: var(--gold-primary);
    }
  `,
  blurple: `
    color: var(--blurple-light);
    border: 4px solid var(--blurple-light);
    border-radius: var(--radius-default);

    &:hover {
      color: var(--blurple-primary);
      border-color: var(--blurple-primary);
    }
  `,
  transparent: `
    background: transparent;
    border: none;
    border-radius: none;
  `,
};

const ButtonWrapper = styled.button(({ theme, size }) => `
  font-weight: var(--font-weight-bold);
  color: var(--charcoal-primary);
  cursor: pointer;

  ${buttonSizes[size]}
  ${themes[theme]}

  &:disabled {
    color: var(--charcoal-light);
    border-color: var(--charcoal-light);
    cursor: default;
  }
`);

const Button = (props) => {
  return (
    <ButtonWrapper {...props} />
  );
};

Button.defaultProps = {
  type: 'button',
  size: 'md',
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.oneOf([
    'sm', 'md', 'lg',
  ]).isRequired,
  theme: PropTypes.oneOf([
    'gold', 'transparent', 'blurple',
  ]).isRequired,
  type: PropTypes.oneOf([
    'button', 'submit'
  ]).isRequired,
};

export default Button;
