import React from 'react'
import ScrollableTabsButtonAuto from './ScrollTabs';
import BlogCard from './BlogCard';
import Style from "./Home.module.css";

const HomeContetnt = () => {
  return (
    <div className={Style.home_content}>
        <div className={Style.scrolltab}>
        <ScrollableTabsButtonAuto/>
        </div>
        <BlogCard/>
    </div>
  )
}

export default HomeContetnt