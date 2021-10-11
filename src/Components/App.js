import React, {useState} from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import Statistics from './statistics/Statistics';
import GlobalStyles from '../styles/globalStyles';

const initialState = { 
    good: 0,
    neutral: 0,
    bad: 0,
};

const App = () => {
    const [feedback, setFeedback] = useState(initialState);

    const countFeedback = (e) => {
        const name = e.target.name;
        setFeedback((prev) => {
            return {
                ...prev,
                [name]: prev[name] + 1,
            }
        });
    };

    const countTotalFeedback = () => {
        const {good, neutral, bad} = feedback;
        let total = good + neutral + bad;
        return total;
    };

    const countPositiveFeedbackPercentage = () => {
        let total = countTotalFeedback();
        if (total === 0) {
            return 0;
        };
        let positivePerc = feedback.good * 100 / total;
        return parseInt(positivePerc);
    };

    return (
        <main>
            <GlobalStyles></GlobalStyles>
            <Section title="Please leave feedback">
                <FeedbackOptions options={feedback} onLeaveFeedback={countFeedback}/>
            </Section>
            <Section title="Statistics">
                {countTotalFeedback() === 0  ? (<Notification message="No feedback given"/>) :
                (
                    <Statistics good={feedback.good} neutral={feedback.neutral} 
                    bad={feedback.bad} total={countTotalFeedback()} 
                    positivePercentage={countPositiveFeedbackPercentage()}/>)}

            </Section>
        </main>
    );
};

export default App;

