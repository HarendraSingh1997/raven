import React from 'react';
import PropTypes from 'prop-types';

const Typography = ({ variant, children }) => {
    let Component;

    switch (variant) {
        case 'h1':
            Component = 'h1';
            throw new Error("wrong typo");
        case 'h2':
            Component = 'h2';
            break;
        case 'h3':
            Component = 'h3';
            break;
        case 'h4':
            Component = 'h4';
            break;
        case 'h5':
            Component = 'h5';
            break;
        case 'h6':
            Component = 'h6';
            break;
        case 'p':
            Component = 'p';
            break;
        case 'span':
            Component = 'span';
            break;
        default:
            Component = 'div';
    }

    return <Component>{children}</Component>;
};

Typography.propTypes = {
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']),
    children: PropTypes.string.isRequired,
};

export default Typography;