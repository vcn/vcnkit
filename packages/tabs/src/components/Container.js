import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Indicator from './Indicator';
import { noop } from '@vcnkit/essentials';

const { Provider, Consumer } = React.createContext({
    onSelect: noop,
    onActive: noop,
});

const TabsContainer = styled.div`
    display:        inline-flex;
    flex-direction: row;
    position:       relative;
    overflow:       hidden;
    max-width: ${ props => props.width ? `${props.width * 8.625}rem` : '100%' };
    transition:     left 180ms;
`;

const Bar = styled.div`
    display:   inline-flex;
    width:     fit-content;
    max-width: 100%;
`;

const ChildContainer = styled.div`
    display: inline-flex;
    ${ props => props.scrollable && 'padding-left: 2rem;' }
`;

const Arrow = styled.svg`
    transition: 0.2s ease-in-out;
    transform: rotate(${props => (props.direction === 'left' ? 90 : -90)}deg);
    height: 1.5rem;
    width: 1.5rem;
    min-width: 1.5rem;
    fill: hsla(0, 0%, 0%, 0.54);
    margin: 0.5rem;
    cursor: pointer;
    align-self: center;

    display: block;
`;

const ScrollArrow = ({ ...props }) => (
    <Arrow xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" { ...props }>
        <path d="M33.17 17.17L24 26.34l-9.17-9.17L12 20l12 12 12-12z" />
    </Arrow>
);

const ScrollOffset = styled.div`
    height: 1.5rem;
    width: 2.5rem;
`;

class Container extends React.Component {
    static propTypes = {
        onSelect: PropTypes.func,
        selected: PropTypes.any,
        scrollDistance: PropTypes.number
    };

    static defaultProps = {
        onSelect: noop,
        selected: null,
        scrollDistance: 75
    };

    state = {
        indicatorOffset: 0,
        indicatorWidth:  0,
        selectedIndex:   null,
        disabled:        [],
    };

    barRef;
    containerRef;

    componentWillMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = event => {
        switch (event.keyCode) {
            case 37:
                this.onTabLeft();
                break;
            case 39:
                this.onTabRight();
                break;
        }
    };

    onSelect = tabIndex => {
        if (this.state.selectedIndex !== tabIndex) {

            const child = this.props.children[ tabIndex ];

            this.setState({
                selectedIndex: tabIndex,
            });

            this.props.onSelect(child.key);
        }
    };

    easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    scrollContainer = offset => {
        const { containerRef, easeInOutQuad } = this;

        let start = containerRef ? containerRef.scrollLeft : 0,
            change = offset - start - this.props.scrollDistance,
            currentTime = 0,
            increment = 20;

        let animateScroll = () => {
            if (this.containerRef) {
                currentTime += increment;
                this.containerRef.scrollLeft = easeInOutQuad(currentTime, start, change, 180);
            }

            if(currentTime < 180) {
                setTimeout(animateScroll, increment);
            } else {
                this.forceUpdate();
            }
        };

        animateScroll();
    };

    onActive = (tabOffset, tabWidth) => {
        this.scrollContainer(tabOffset);

        this.setState({
            indicatorOffset: tabOffset,
            indicatorWidth:  tabWidth,
        });
    };

    renderChild = (child, index) => {
        const isDisabled = ('disabled' in child.props) && child.props.disabled === true;

        if (isDisabled && this.state.disabled.indexOf(index) === -1) {
            this.setState({
                disabled: [
                    ...this.state.disabled,
                    index
                ],
            });
        }

        return React.cloneElement(child, {
            tabIndex: index,
            isSelected: index === this.state.selectedIndex,
            ...child.props
        });
    };

    componentDidUpdate(prevProps) {
        const { children, selected } = this.props;

        if (prevProps.selected !== selected) {

            const selectedIndex = children.findIndex(child => child.key === selected);

            if(selectedIndex !== -1 && selectedIndex !== this.state.selectedIndex) {
                this.setState({ selectedIndex });
            }
        }
    }

    onTabRight = () => {
        const { selectedIndex } = this.state;
        const { children } = this.props;

        const index = this.checkRightIndex(selectedIndex + 1, children.length);
        if (index !== null) {
            this.onSelect(index);
        }
    };

    checkRightIndex = (index, childCount) => {
        if (index < childCount) {
            if (this.state.disabled.indexOf(index) !== -1) {
                return this.checkRightIndex(index + 1, childCount);
            }

            return index;
        }

        return null;
    };

    onTabLeft = () => {
        const { selectedIndex } = this.state;

        const index = this.checkLeftIndex(selectedIndex - 1);
        if (index !== null) {
            this.onSelect(index);
        }
    };

    checkLeftIndex = (index) => {
        if (index >= 0) {
            if (this.state.disabled.indexOf(index) !== -1) {
                return this.checkLeftIndex(index - 1);
            }

            return index;
        }

        return null;
    };

    renderLeftScroll = () => {
        const { barRef, containerRef } = this;

        if (barRef && containerRef) {
            if (containerRef.scrollLeft > 0) {
                return (
                    <ScrollArrow direction="left" onClick={ () => { this.scrollContainer(containerRef.scrollLeft - this.props.scrollDistance); } } />
                );
            } else if (containerRef.scrollLeft === 0 && barRef.offsetWidth > containerRef.offsetWidth) {
                return (
                    <ScrollOffset />
                );
            }
        }

        return null;
    };

    renderRightScroll = () => {
        const { barRef, containerRef } = this;

        if (barRef && containerRef && barRef.offsetWidth > containerRef.offsetWidth) {
            if (containerRef.offsetWidth + containerRef.scrollLeft < barRef.offsetWidth) {
                return (
                    <ScrollArrow direction="right" onClick={ () => { this.scrollContainer(containerRef.scrollLeft + (this.props.scrollDistance * 2 )); } } />
                );
            } else {
                return (
                    <ScrollOffset />
                );
            }
        }

        return null;
    };

    determineSelectedIndex = () => {
        const { children, selected } = this.props;

        let { selectedIndex } = this.state;

        // Set initial selected index
        if (selectedIndex === null && selected !== null) {
            for (let i = 0; i < children.length; i++) {
                if (children[i].key === selected) {
                    selectedIndex = i;

                    this.setState({
                        selectedIndex,
                    });

                    break;
                }
            }
        }

        // Initial tab not found or set, select 1st tab
        if (selectedIndex === null) {
            for (let i = 0; i < children.length; i++) {
                let child = children[i];

                const isDisabled = ('disabled' in child.props) && child.props.disabled === true;

                if (isDisabled && this.state.disabled.indexOf(i) === -1) {
                    this.setState({
                        disabled: [
                            ...this.state.disabled,
                            i
                        ],
                    });
                } else if (selectedIndex === null) {
                    selectedIndex = i;
                }
            }

            this.setState({
                selectedIndex
            });
        }
    };

    render() {
        const {
            children,
            indicatorColor,
            width,
            ...props
        } = this.props;

        this.determineSelectedIndex();

        return (
            <Provider
                value={ {
                    onSelect: this.onSelect,
                    onActive: this.onActive,
                } }
                { ...props }
            >
                <Bar>
                    { this.renderLeftScroll() }

                    <TabsContainer
                        width={ width }
                        ref={ ref => this.containerRef = ref }
                    >
                        <ChildContainer
                            ref={ ref => this.barRef = ref }
                        >
                            { children.map((child, index) => this.renderChild(child, index)) }
                        </ChildContainer>
                        <Indicator
                            color={ indicatorColor }
                            offset={ this.state.indicatorOffset }
                            width={ this.state.indicatorWidth }
                        />
                    </TabsContainer>

                    { this.renderRightScroll() }
                </Bar>
            </Provider>
        );
    }
}

export default Container;
export {
    Consumer,
};
