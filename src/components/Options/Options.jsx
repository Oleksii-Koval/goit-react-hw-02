import React from "react";

const Options = ({ updateFeedback, resetFeedbackCounts, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")} type="button">
        Good
      </button>
      <button onClick={() => updateFeedback("neutral")} type="button">
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} type="button">
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedbackCounts} type="button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
