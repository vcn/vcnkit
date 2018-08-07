import * as React from 'react';
import PropTypes from 'prop-types';

import { PanelContext } from './Panel';
import AnimateHeight from './AnimateHeight';

const Content = ({ children }) => (
    <PanelContext>{({ expanded }) => <AnimateHeight>{expanded && children}</AnimateHeight>}</PanelContext>
);

Content.propTypes = {
    children: PropTypes.node,
};

Content.defaultProps = {
    children: undefined,
};

export default Content;
