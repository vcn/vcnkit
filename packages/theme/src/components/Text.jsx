import styled from 'styled-components';

const Text = styled.div`
    ${props =>
        props.maxWidth &&
        `
        max-width: 72ch;
    `} blockquote, dd, dl, figure, form, h1, h2, h3, h4, h5, h6, menu, ol, p, pre, ul {
        margin-top: 0;
        margin-bottom: 0;
    }

    h1 {
        margin-top: 0.75em;
        margin-bottom: 0.75em;
    }

    h2,
    h3,
    h4 {
        margin-top: 1.5em;
        margin-bottom: 0.75em;
    }

    p,
    pre,
    ol,
    ul,
    menu,
    dd,
    dl,
    blockquote,
    figure,
    h5,
    h6 {
        margin-bottom: 1em;
    }
`;

export default Text;
