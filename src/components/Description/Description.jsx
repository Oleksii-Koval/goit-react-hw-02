import css from "./Description.module.css";
import { GrCafeteria } from "react-icons/gr";
import { FcLike } from "react-icons/fc";

const Description = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Sip Happens Café <GrCafeteria />
      </h1>

      <p className={css.description}>
        <FcLike /> Please leave your feedback about our service by selecting one
        of the options below. <FcLike />
      </p>
    </div>
  );
};

export default Description;
