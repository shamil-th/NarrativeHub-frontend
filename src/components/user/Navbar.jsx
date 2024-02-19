import React from "react";
import Style from "./Home.module.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Write from "./common/Write";
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const gotoProfile = () => {
    navigate('/profile')
  }
  return (
    <div className={Style.navbar}>
      <h2>NarrativeHub</h2>
        <SearchBox/>
      <div className={Style.icons}>
        <Write />
        <NotificationsNoneOutlinedIcon sx={{cursor:'pointer'}}/>
        <img
          className={Style.user_icon}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9ZG893q3iLCdsTTDl8KJ2QWYvEaBAzNryaKzgY75AzSvoG1IyDiPvDDp40X3HyFi9AA&usqp=CAU"
          alt="user"
          onClick={gotoProfile}
        />
      </div>
    </div>
  );
};

export default Navbar;
