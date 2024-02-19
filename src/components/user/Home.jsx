import React from "react";
import { Container } from "@mui/material";
import HomeCover from "./HomeCover";
import Navbar from "./Navbar";
import HomeContetnt from "./HomeContetnt";
import Style from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={Style.navbar_background}>
        <Navbar />
      </div>
      <HomeCover />
      <Container>
        <HomeContetnt />
      </Container>
    </div>
  );
};

export default Home;
