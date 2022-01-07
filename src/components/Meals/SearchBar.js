import { forwardRef } from "react";
import classes from "./SearchBar.module.css";
const SearchBar = forwardRef((props, ref) => {
  return (
    <input
      className={classes.search}
      value={props.value}
      onChange={props.handleChange}
      type="text"
      placeholder="Looking for any food?"
      ref={ref}
    />
  );
});

export default SearchBar;
