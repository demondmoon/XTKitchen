import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <NavLink to={`${process.env.PUBLIC_URL}/`}>
          <h1>Xintong's Kitchen</h1>
        </NavLink>
        <NavLink
          exact
          activeClassName={classes.active}
          to={`${process.env.PUBLIC_URL}/menu`}
        >
          Menu
        </NavLink>
        <NavLink
          exact
          activeClassName={classes.active}
          to={`${process.env.PUBLIC_URL}/location`}
        >
          Store
        </NavLink>
        <NavLink
          exact
          activeClassName={classes.active}
          to={`${process.env.PUBLIC_URL}/daniel`}
        >
          About ME!
        </NavLink>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;
