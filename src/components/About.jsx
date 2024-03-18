import React from "react";
import classes from "./About.module.css";
import Card from "./UI/Card/Card";
import Button from "./UI/Button/Button";

const About = (props) => {
  return (
    <Card className={classes.about}>
      <div className={classes["about-project"]}>
        <h3>About this page</h3>

        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you
          stay focused on the task at hand
        </p>

        <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
      </div>

      <div className={classes["bamboo-stand"]}>
        <div className={classes["bamboo-stand-header"]}>
          <h3>Bamboo Stand</h3>
          <h4>Pledge $25 or more</h4>
        </div>

        <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.</p>

        <div className={classes["bamboo-stand-footer"]}>
          <p className={classes.text}>
            <span className={classes.highlight}>101</span> left
          </p>
          <Button className={classes["bamboo-button"]}>Select Reward</Button>
        </div>
      </div>

      <div className={classes["bamboo-stand"]}>
        <div className={classes["bamboo-stand-header"]}>
          <h3>Black Edition Stand</h3>
          <h4>Pledge $75 or more</h4>
        </div>

        <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>

        <div className={classes["bamboo-stand-footer"]}>
          <p className={classes.text}>
            <span className={classes.highlight}>64</span> left
          </p>
          <Button className={classes["bamboo-button"]}>Select Reward</Button>
        </div>
      </div>

      <div className={classes["bamboo-out-stock"]}>
        <div className={classes["bamboo-stand-header"]}>
          <h3>Mahogany Special Edition</h3>
          <h4>Pledge $200 or more</h4>
        </div>

        <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.</p>

        <div className={classes["bamboo-stand-footer"]}>
          <p className={classes.text}>
            <span className={classes.highlight}>0</span> left
          </p>
          <Button className={classes["bamboo-button"]}>Out of Stock</Button>
        </div>
      </div>
    </Card>
  );
};
export default About;
