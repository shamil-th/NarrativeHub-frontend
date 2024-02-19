import React from "react";
import Style from "./Write.module.css";
import { useNavigate } from "react-router-dom";

const Write = () => {

    let navigate = useNavigate();
    const createNewBlog = () => {
        navigate('/create')
    }
  return (
    <div onClick={createNewBlog} className={Style.notification}>
      <span className="material-symbols-outlined">edit_square</span>
    </div>
  );
};

export default Write;
