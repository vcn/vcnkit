import * as React from 'react';
import posed from 'react-pose';
import ResizeObserver from 'resize-observer-polyfill';

const Box = posed.div({
    expanded: {
        height:     props => props.height,
        transition: {
            ease:    'easeInOut',
            duration: 250,
        },
    },
});

class AnimateHeight extends React.Component {
    state = {
        height: 0,
    };

    innerNode;
    resizeObserver;

    componentDidMount() {
        this.resizeObserver = new ResizeObserver(() => {
            this.animateHeight();
        });

        if (this.innerNode) {
            this.resizeObserver.observe(this.innerNode);
        }
    }

    componentWillUnmount() {
        this.resizeObserver.disconnect();
    }

    animateHeight = () => {
        if (this.innerNode) {
            this.setState({
                height: this.innerNode.scrollHeight,
            });
        }
    };

    render() {
        const { children } = this.props;
        const { height } = this.state;

        return (
            <Box
                height={ height }
                pose="expanded"
                poseKey={ height }
            >
                <div
                    ref={node => {
                        this.innerNode = node;
                    }}
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    {children}
                </div>
            </Box>
        );
    }
}

export default AnimateHeight;
