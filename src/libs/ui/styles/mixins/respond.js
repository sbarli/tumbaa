import { css } from 'styled-components';
import { BREAKPOINTS } from '../variables/variables';

const respond = Object.keys(BREAKPOINTS).reduce((accumulator, label) => {
	accumulator[label] = (...args) => css`
		@media only screen and (min-width: ${BREAKPOINTS[label]}) {
			${css(...args)};
		}
	`.join(' ');
	return accumulator;
}, {});

export default respond;