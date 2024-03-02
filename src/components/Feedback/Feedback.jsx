import React from "react";

const Feedback = ({ feedbackCounts, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <ul>
        <li>
          <p>Good:{feedbackCounts.good}</p>
        </li>
        <li>
          <p>Bad:{feedbackCounts.bad}</p>
        </li>
        <li>
          <p>Neutral:{feedbackCounts.neutral}</p>
        </li>
        <li>
          <p>Total:{totalFeedback}</p>
        </li>
        <li>
          <p>Positive:{positiveFeedback}%</p>
        </li>
      </ul>
    </>
  );
};

export default Feedback;
