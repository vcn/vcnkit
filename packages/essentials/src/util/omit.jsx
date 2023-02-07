/**
 * Returns a new object where the given props are omitted.
 *
 * @param {*} object
 * @param {*} props
 */
export default function omit(object, props) {
    return Object.keys(object).reduce((result, propName) => {
        if (props.indexOf(propName) !== -1) {
            return result;
        }

        return {
            ...result,
            [propName]: object[propName],
        };
    }, {});
}
