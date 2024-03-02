import React from "react";
import css from "./Feedback.module.css";
import clsx from "clsx";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { ImNeutral2 } from "react-icons/im";
import { FcBarChart } from "react-icons/fc";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import { BsEmojiSmileUpsideDownFill } from "react-icons/bs";

const Feedback = ({ feedbackCounts, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <ul className={css.list}>
        <li>
          <p className={clsx(css.itemText, css.good)}>
            <AiFillLike /> Good: {feedbackCounts.good}
          </p>
        </li>
        <li>
          <p className={clsx(css.itemText, css.neutral)}>
            <ImNeutral2 /> Neutral: {feedbackCounts.neutral}
          </p>
        </li>
        <li>
          <p className={clsx(css.itemText, css.bad)}>
            <AiFillDislike /> Bad: {feedbackCounts.bad}
          </p>
        </li>
        <li>
          <p className={css.itemText}>
            <FcBarChart /> Total: {totalFeedback}
          </p>
        </li>
        <li>
          <p className={css.itemText}>
            <BsFillEmojiSmileFill /> <BsEmojiSmileUpsideDownFill /> Positive:{" "}
            {positiveFeedback}%
          </p>
        </li>
      </ul>
    </>
  );
};

export default Feedback;
