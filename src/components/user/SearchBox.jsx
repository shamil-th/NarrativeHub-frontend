import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Style from "./Home.module.css";

const SearchBox = () => {
  return (
    <div className={Style.search_section}>
      <input type="text" placeholder="Search" />
      <div className={Style.search_icon}>
      <SearchIcon style={{ color: "white" }} />
      </div>
    </div>
  );
};

export default SearchBox;
