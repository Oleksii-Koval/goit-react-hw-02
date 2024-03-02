import { useState, useEffect } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

const App = () => {
  const [feedbackCounts, setFeedbackCounts] = useState(() => {
    const stringifiedFeedBacks = localStorage.getItem("feedbackCounts");
    const parsedFeedBacks = JSON.parse(stringifiedFeedBacks);

    if (stringifiedFeedBacks !== null) {
      return parsedFeedBacks;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("feedbackCounts", JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

  const { good, neutral, bad } = feedbackCounts;
  const totalFeedback = good + neutral + bad;

  const updateFeedback = (feedbackType) => {
    setFeedbackCounts((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const resetFeedbackCounts = () => {
    setFeedbackCounts({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const positiveFeedback = Math.round(((good + neutral) / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedbackCounts={resetFeedbackCounts}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackCounts={feedbackCounts}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
