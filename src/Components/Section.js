import React from "react";
import PropTypes from 'prop-types';

const Section = ({children, title}) => {
    return (
        <div>
            <h1>{title}</h1>
            {children}
        </div>
    );
};

Section.propTypes = {
    title: PropTypes.string
};

export default Section;