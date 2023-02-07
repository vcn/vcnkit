import * as React from 'react';
import PropTypes from 'prop-types';

class Set extends React.Component {
    static propTypes = {
        children: PropTypes.func,
        initialExpanded: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    static defaultProps = {
        initialExpanded: undefined,
    };

    state = {
        expanded: this.props.initialExpanded,
    };

    handleChange = panel => {
        this.setState({
            expanded: this.state.expanded === panel ? undefined : panel,
        });
    };

    render() {
        const { children } = this.props;
        const { expanded } = this.state;

        return children(expanded, this.handleChange);
    }
}

export default Set;
