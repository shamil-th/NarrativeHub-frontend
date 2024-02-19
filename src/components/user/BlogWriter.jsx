import React from "react";
import Style from "./Writer.module.css";

const BlogWriter = ({ writer }) => {
  return (
    <div className={Style.writer}>
      <img className={Style.writer_icon} src={writer.writerImg} alt="blogger" />
      <div className={Style.writer_name}>
        <p>Written by</p>
        <h5>{writer.name}</h5>
      </div>
    </div>
  );
};

export default BlogWriter;
