import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes["background-image"]}></div>
      <div className={classes.navbar}>
        <a href="#" className={classes["navbar-logo"]}>
          fundIT
        </a>
        <div className={classes["navbar-items"]}>
          <a href="#" className={classes["navbar-item"]}>
            About
          </a>
          <a href="#" className={classes["navbar-item"]}>
            Home
          </a>
          <a href="#" className={classes["navbar-item"]}>
            Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
