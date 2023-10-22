import styled from 'styled-components';

const ResponsiveSize = styled.section `
    max-width: 1280px;
    margin: 0 auto;

    @media only screen and (max-width: 1280px) {
        max-width: 1024px;
    }

    @media only screen and (max-width: 1024px) {
        max-width: 768px;
    }

    @media only screen and (max-width: 768px) {
        max-width: 640px;
    }

    @media only screen and (max-width: 640px) {
        max-width: 480px;
    }
`

export default ResponsiveSize;