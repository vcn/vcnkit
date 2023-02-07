/**
 * Every elevation consists of 3 shadows:
 *
 * - Umbra
 * - Penumbra
 * - Ambient
 */
const elevations = [
    {
        elevation: 1,
        shadows: [
            {
                x: 0,
                y: 0,
                blur: 2 / 16,
                spread: 0,
                opacity: 0.14,
            },
            {
                x: 0,
                y: 2 / 16,
                blur: 2 / 16,
                spread: 0,
                opacity: 0.12,
            },
            {
                x: 0,
                y: 1 / 16,
                blur: 3 / 16,
                spread: 0,
                opacity: 0.2,
            },
        ],
    },
    {
        elevation: 2,
        shadows: [
            {
                x: 0,
                y: 0,
                blur: 4 / 16,
                spread: 0,
                opacity: 0.14,
            },
            {
                x: 0,
                y: 3 / 16,
                blur: 4 / 16,
                spread: 0,
                opacity: 0.12,
            },
            {
                x: 0,
                y: 1 / 16,
                blur: 5 / 16,
                spread: 0,
                opacity: 0.2,
            },
        ],
    },
    {
        elevation: 3,
        shadows: [
            {
                x: 0,
                y: 3 / 16,
                blur: 3 / 16,
                spread: 0,
                opacity: 0.14,
            },
            {
                x: 0,
                y: 3 / 16,
                blur: 4 / 16,
                spread: 0,
                opacity: 0.12,
            },
            {
                x: 0,
                y: 1 / 16,
                blur: 8 / 16,
                spread: 0,
                opacity: 0.2,
            },
        ],
    },
    {
        elevation: 4,
        shadows: [
            {
                x: 0,
                y: 2 / 16,
                blur: 4 / 16,
                spread: 0,
                opacity: 0.14,
            },
            {
                x: 0,
                y: 4 / 16,
                blur: 5 / 16,
                spread: 0,
                opacity: 0.12,
            },
            {
                x: 0,
                y: 1 / 16,
                blur: 10 / 16,
                spread: 0,
                opacity: 0.2,
            },
        ],
    },
    {
        elevation: 6,
        shadows: [
            {
                x: 0,
                y: 6 / 16,
                blur: 10 / 16,
                spread: 0,
                opacity: 0.14,
            },
            {
                x: 0,
                y: 1 / 16,
                blur: 18 / 16,
                spread: 0,
                opacity: 0.12,
            },
            {
                x: 0,
                y: 3 / 16,
                blur: 5 / 16,
                spread: 0,
                opacity: 0.2,
            },
        ],
    },
    {
        elevation: 8,
        shadows: [
            {
                x: 0,
                y: 8 / 16,
                blur: 10 / 16,
                spread: 0,
                opacity: 0.14,
            },
            {
                x: 0,
                y: 3 / 16,
                blur: 14 / 16,
                spread: 0,
                opacity: 0.12,
            },
            {
                x: 0,
                y: 4 / 16,
                blur: 15 / 16,
                spread: 0,
                opacity: 0.2,
            },
        ],
    },
    {
        elevation: 9,
        shadows: [
            {
                x: 0,
                y: 9 / 16,
                blur: 12 / 16,
                spread: 0,
                opacity: 0.14,
            },
            {
                x: 0,
                y: 3 / 16,
                blur: 16 / 16,
                spread: 0,
                opacity: 0.12,
            },
            {
                x: 0,
                y: 5 / 16,
                blur: 6 / 16,
                spread: 0,
                opacity: 0.2,
            },
        ],
    },
    {
        elevation: 12,
        shadows: [
            {
                x: 0,
                y: 12 / 16,
                blur: 17 / 16,
                spread: 0,
                opacity: 0.14,
            },
            {
                x: 0,
                y: 5 / 16,
                blur: 22 / 16,
                spread: 0,
                opacity: 0.12,
            },
            {
                x: 0,
                y: 7 / 16,
                blur: 8 / 16,
                spread: 0,
                opacity: 0.2,
            },
        ],
    },
    {
        elevation: 16,
        shadows: [
            {
                x: 0,
                y: 16 / 16,
                blur: 24 / 16,
                spread: 0,
                opacity: 0.14,
            },
            {
                x: 0,
                y: 6 / 16,
                blur: 30 / 16,
                spread: 0,
                opacity: 0.12,
            },
            {
                x: 0,
                y: 8 / 16,
                blur: 10 / 16,
                spread: 0,
                opacity: 0.2,
            },
        ],
    },
    {
        elevation: 24,
        shadows: [
            {
                x: 0,
                y: 24 / 16,
                blur: 38 / 16,
                spread: 0,
                opacity: 0.14,
            },
            {
                x: 0,
                y: 9 / 16,
                blur: 46 / 16,
                spread: 0,
                opacity: 0.12,
            },
            {
                x: 0,
                y: 11 / 16,
                blur: 15 / 16,
                spread: 0,
                opacity: 0.2,
            },
        ],
    },
];

function getNearestShadow(elevation) {
    return elevations.reduce(
        (previous, current) =>
            Math.abs(current.elevation - elevation) < Math.abs(previous.elevation - elevation) ? current : previous,
        elevations[0],
    );
}

export default function createShadow(elevation) {
    if (elevation <= 0) {
        return undefined;
    }

    const shadows = getNearestShadow(elevation).shadows;

    return shadows
        .map(
            shadow =>
                `${shadow.x}rem ${shadow.y}rem ${shadow.blur}rem ${shadow.spread}rem hsla(0, 0%, 0%, ${
                    shadow.opacity
                })`,
        )
        .join(',');
}
