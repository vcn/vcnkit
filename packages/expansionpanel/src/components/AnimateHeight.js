import * as React from 'react';
import Animated from 'animated/lib/targets/react-dom';
import Easing from 'animated/lib/Easing';

class AnimateHeight extends React.Component {
    state = {
        animation: new Animated.Value(0),
        finished: true,
    };

    innerNode;

    componentDidUpdate(prevProps) {
        if (prevProps.expanded !== this.props.expanded) {
            this.setState({
                finished: false,
            });

            this.animateHeight();
        }
    }

    handleComplete = ({ finished }) => {
        this.setState({
            finished,
        });
    };

    animateHeight = () => {
        if (this.innerNode) {
            Animated.timing(this.state.animation, {
                toValue: this.innerNode.scrollHeight,
                duration: 80,
                easing: Easing.inOut(Easing.quad),
                onEnd: this.handleComplete,
            }).start(this.handleComplete);
        }
    };

    render() {
        const { children, expanded } = this.props;
        const { animation, finished } = this.state;

        return (
            <Animated.div
                style={{
                    overflow: finished ? undefined : 'hidden',
                    height: finished ? undefined : animation,
                }}
            >
                <div
                    ref={node => {
                        this.innerNode = node;
                    }}
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    {expanded && children}
                </div>
            </Animated.div>
        );
    }
}

export default AnimateHeight;
