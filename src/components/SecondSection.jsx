import React from "react";
import Card from "./UI/Card/Card";
import classes from "./SecondSection.module.css";

const SecondSection = (props) => {
  return (
    <Card className={classes["second-section"]}>
      <div className={classes["section"]}>
        <div className={classes["stats-list"]}>
          <h2>$89914</h2>
          <p>of $100,000 backed</p>
        </div>
        <div className={classes["stats-list"]}>
          <h2>5007</h2>
          <p>total backers</p>
        </div>
        <div className={classes["stats-list"]}>
          <h2>56</h2>
          <p>days left</p>
        </div>
      </div>
      <div className={classes["progress-bar"]}>
        <div className={classes["progress-bar-inner"]}></div>
      </div>
    </Card>
  );
};
export default SecondSection;
