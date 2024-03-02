import React from "react";
import css from "./Options.module.css";
import clsx from "clsx";
import { FcUndo } from "react-icons/fc";

const Options = ({ updateFeedback, resetFeedbackCounts, totalFeedback }) => {
  return (
    <div className={css.container}>
      <button
        className={clsx(css.button, css.good)}
        onClick={() => updateFeedback("good")}
        type="button"
      >
        Good
      </button>
      <button
        className={clsx(css.button, css.neutral)}
        onClick={() => updateFeedback("neutral")}
        type="button"
      >
        Neutral
      </button>
      <button
        className={clsx(css.button, css.bad)}
        onClick={() => updateFeedback("bad")}
        type="button"
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={clsx(css.button, css.reset)}
          onClick={resetFeedbackCounts}
          type="button"
        >
          <FcUndo /> Reset
        </button>
      )}
    </div>
  );
};

export default Options;
