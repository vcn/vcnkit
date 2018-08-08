import styled from 'styled-components';

import { getTextStyle } from '../';

export default styled.span`
    ${getTextStyle('overline')};

    text-transform: uppercase;
`;
