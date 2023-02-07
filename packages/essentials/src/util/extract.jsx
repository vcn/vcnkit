/**
 * Returns a new object with only the given properties from the source object.
 *
 * @param {*} object
 * @param {*} props
 */
export default function extract(object, props) {
    return Object.keys(object).reduce((result, propName) => {
        if (props.indexOf(propName) === -1) {
            return result;
        }

        return {
            ...result,
            [propName]: object[propName],
        };
    }, {});
}
