import getColor from './getColor';

function getTextColor(props) {
    if (props) {
        if (props.disabled) {
            return getColor('disabledText', props);
        } else if (props.hint) {
            return getColor('hintText', props);
        } else if (props.secondary) {
            return getColor('secondaryText', props);
        }
    }

    return getColor('primaryText', props);
}

export default function(props) {
    if (props) {
        return getTextColor(props);
    }

    return props => getTextColor(props);
}
