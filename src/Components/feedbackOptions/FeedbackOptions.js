import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './FeedbackOptionsStyled';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ButtonContainer>
            {Object.keys(options).map((key) => 
                <button className="btn" name={key} type="button" onClick={onLeaveFeedback}>{key}</button>
            )}
        </ButtonContainer>
    );
};

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func
};

export default FeedbackOptions;