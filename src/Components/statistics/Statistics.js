import React from 'react';
import PropTypes from 'prop-types'
import { StatisticsContainer } from './StatisticsStyled';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <StatisticsContainer>
            <p className='good'>Good: {good}</p>
            <p className='neutral'>Neutral: {neutral}</p>
            <p className='bad'>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </StatisticsContainer>
    );
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.func,
    positivePercentage: PropTypes.func,
};

export default Statistics;
