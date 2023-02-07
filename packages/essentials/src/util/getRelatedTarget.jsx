/**
 * IE11 compatible relatedTarget
 *
 * @param {SyntheticFocusEvent} event
 */
export default function getRelatedTarget(event) {
    if (!('relatedTarget' in event) || !event.relatedTarget) {
        if (document.activeElement === null || document.activeElement.tagName === 'BODY') {
            return document.querySelector(':focus');
        }

        return document.activeElement;
    }

    return event.relatedTarget instanceof Node ? event.relatedTarget : undefined;
}
