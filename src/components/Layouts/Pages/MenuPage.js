import Meals from "../../Meals/Meals";
import { useRef, useEffect, useState } from "react";
import SearchBar from "../../Meals/SearchBar";
import classes from "./MenuPage.module.css";
const MenuPage = () => {
  const searchBarFocusRef = useRef(null);
  const [searchContent, setSearchContent] = useState("");

  useEffect(() => {
    searchBarFocusRef.current.focus();
  }, []);
  return (
    <section className={classes.menu}>
      <SearchBar
        ref={searchBarFocusRef}
        value={searchContent}
        handleChange={(e) => setSearchContent(e.target.value)}
      />
      <Meals searchContent={searchContent}/>
    </section>
  );
};

export default MenuPage;
