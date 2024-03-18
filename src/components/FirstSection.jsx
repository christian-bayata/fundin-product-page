import React, { useState } from "react";
import Card from "./UI/Card/Card";
import classes from "./FirstSection.module.css";
import Button from "./UI/Button/Button";
import { motion } from "framer-motion";

const FirstSection = (props) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  function toggleBookmark() {
    setIsBookmarked(!isBookmarked);
  }

  const animations = {
    logo: {
      initial: { left: 0, rotate: 90 },
      whileInView: { left: "auto", rotate: 360 },
      transition: { duration: 0.5 },
      viewport: { once: true },
    },
    header: {
      initial: { opacity: 0, scale: 0 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, delay: 0.5 },
      viewport: { once: true },
    },
    buttonLeft: {
      initial: { opacity: 0, scaleX: 0 },
      whileInView: { opacity: 1, scaleX: 1 },
      transition: { duration: 0.5, delay: 1 },
      viewport: { once: true },
    },
    buttonRight: {
      initial: { opacity: 0, scaleX: 0 },
      whileInView: { opacity: 1, scaleX: 1 },
      transition: { duration: 0.5, delay: 1 },
      viewport: { once: true },
    },
  };

  return (
    <Card className={classes["first-section"]}>
      <div {...animations.header} className={classes.section}>
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
      </div>
      <div className={classes.footer}>
        <Button className={classes["first-section-button"]}>Back this project</Button>
        <motion.button className={classes.bookmark} label={isBookmarked === true ? "Bookmarked" : "Bookmark"} {...animations.buttonRight} onClick={toggleBookmark}>
          <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill={`${isBookmarked === true ? "#4f005f" : "#2F2F2F"}`} cx="28" cy="28" r="28" />
              <path fill={`${isBookmarked === true ? "#FFFFFF" : "#B1B1B1"}`} d="M23 19v18l5-5.058L33 37V19z" />
            </g>
          </svg>
          <span className={`${isBookmarked === true ? "bookmarked" : "not-bookmarked"}`}>{isBookmarked === true ? "Bookmarked" : "Bookmark"}</span>
        </motion.button>
      </div>
    </Card>
  );
};

export default FirstSection;
