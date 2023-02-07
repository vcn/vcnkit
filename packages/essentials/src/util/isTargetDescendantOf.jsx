/**
 * Return if the given target node is a descendant of the root node.
 *
 * @param {Node} root
 * @param {Node} target
 */
export default function isTargetDescendantOf(root, target) {
    return root.contains(target) && !root.isSameNode(target);
}
